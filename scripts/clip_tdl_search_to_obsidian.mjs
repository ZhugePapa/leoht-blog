import fs from "node:fs/promises";
import path from "node:path";

const DEST_DIR =
  "/Users/leiwang/Library/Mobile Documents/iCloud~md~obsidian/Documents/个人知识库/Clippings/UX 知识库/L1 入门概念层/人与行为/行为经济学";
const CREATED_DATE = "2026-06-13";
const QUERY = "default effect product design";
const PAGES = 6;
const HITS_PER_PAGE = 20;

const ALGOLIA = {
  appId: "GZNAVN1517",
  apiKey: "e7df84a8bf0f695a988141bf14e781e1",
  indexName: "tdl_search",
};

function textFromRich(value) {
  if (!value) return "";
  if (typeof value === "string") return value.trim();
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === "string") return item;
        if (item && typeof item.text === "string") return item.text;
        return "";
      })
      .filter(Boolean)
      .join("\n")
      .trim();
  }
  if (typeof value === "object" && typeof value.text === "string") return value.text.trim();
  return "";
}

function yamlScalar(value) {
  if (!value) return '""';
  return JSON.stringify(String(value));
}

function dateOnly(value) {
  if (!value) return "";
  const text = String(value);
  const match = text.match(/\d{4}-\d{2}-\d{2}/);
  return match ? match[0] : "";
}

function titleCaseFallback(url) {
  const slug = new URL(url).pathname.split("/").filter(Boolean).pop() || "tdl-note";
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function sanitizeFilename(name) {
  return name
    .replace(/[\\/:*?"<>|#^[\]]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);
}

function getMeta(html, propertyOrName) {
  const escaped = propertyOrName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(`<meta[^>]+property=["']${escaped}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i"),
    new RegExp(`<meta[^>]+name=["']${escaped}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i"),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return decodeHtml(match[1]);
  }
  return "";
}

function decodeHtml(text) {
  return String(text || "")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function parseNextData(html) {
  const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!match) return null;
  return JSON.parse(match[1]);
}

function pickPageData(nextData) {
  const pageProps = nextData?.props?.pageProps || {};
  const direct = ["page", "post", "article", "caseStudy", "bias", "guide", "intervention"]
    .map((key) => pageProps[key])
    .find((value) => value && typeof value === "object");
  if (direct) return { pageProps, page: direct };

  for (const value of Object.values(pageProps)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      if ("seo_title" in value || "title" in value || "published_date" in value) {
        return { pageProps, page: value };
      }
    }
  }
  return { pageProps, page: {} };
}

function authorNames(page) {
  const raw = page.authors || page.author || page.writers || [];
  const list = Array.isArray(raw) ? raw : [raw];
  const names = [];
  for (const item of list) {
    const candidate =
      item?.author?.data?.full_name ||
      item?.author?.data?.name ||
      item?.data?.full_name ||
      item?.data?.name ||
      item?.full_name ||
      item?.name ||
      item;
    const name = textFromRich(candidate);
    if (name) names.push(name);
  }
  return [...new Set(names)];
}

function outlineFromSlices(pageProps, page) {
  const slices = [
    ...(Array.isArray(pageProps.slices) ? pageProps.slices : []),
    ...(Array.isArray(page.body) ? page.body : []),
  ];
  const seen = new Set();
  const headings = [];
  for (const slice of slices) {
    const primary = slice?.primary || {};
    const candidates = [
      primary.navigation_label,
      primary.title,
      primary.section_title,
      primary.heading,
      primary.content_title,
      primary.question,
    ];
    for (const candidate of candidates) {
      const text = textFromRich(candidate).replace(/\s+/g, " ").trim();
      if (text && !seen.has(text)) {
        seen.add(text);
        headings.push(text);
      }
    }
  }
  return headings.slice(0, 40);
}

function richBlocksToText(blocks) {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      const text = textFromRich(block);
      if (!text) return "";
      if (/^heading[1-6]$/.test(block.type || "")) return `\n${text}\n`;
      return text;
    })
    .filter(Boolean)
    .join("\n")
    .replace(/\s+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function splitSentences(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+(?=[A-Z0-9])/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 30);
}

function sectionDigest(text, maxSentences = 3) {
  const sentences = splitSentences(text);
  if (!sentences.length) return "";
  const selected = [];
  for (const sentence of sentences) {
    if (selected.join(" ").length + sentence.length > 900) break;
    selected.push(sentence);
    if (selected.length >= maxSentences) break;
  }
  return selected.join(" ");
}

function keywordsFromText(text, limit = 8) {
  const stopwords = new Set(
    "about above after again against all also and any are because been before being between both but can could did does doing done down each even ever every for from further had has have having here how into its itself just many more most much not now off once only other our out over own same should some such than that the their them then there these they this those through too under until very was were what when where which while who whom why will with would your".split(
      " ",
    ),
  );
  const counts = new Map();
  for (const word of String(text || "").match(/[A-Za-z][A-Za-z-]{3,}/g) || []) {
    const normalized = word.toLowerCase();
    if (stopwords.has(normalized)) continue;
    counts.set(normalized, (counts.get(normalized) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([word]) => word);
}

function bodySections(pageProps, page) {
  const slices = [
    ...(Array.isArray(pageProps.slices) ? pageProps.slices : []),
    ...(Array.isArray(page.body) ? page.body : []),
  ];
  const sections = [];
  const seen = new Set();
  for (const slice of slices) {
    const primary = slice?.primary || {};
    const heading =
      textFromRich(primary.navigation_label) ||
      textFromRich(primary.title) ||
      textFromRich(primary.section_title) ||
      textFromRich(primary.heading) ||
      textFromRich(primary.content_title) ||
      textFromRich(primary.question);
    const text = richBlocksToText(primary.content_block || primary.content || primary.body || primary.answer);
    const digest = sectionDigest(text);
    if (!heading && !digest) continue;
    const key = `${heading}\n${digest}`;
    if (seen.has(key)) continue;
    seen.add(key);
    sections.push({
      heading: heading || "Article section",
      digest,
      keywords: keywordsFromText(text),
    });
  }
  return sections.slice(0, 18);
}

function excerptFromPage(page) {
  const candidates = [
    page.excerpt,
    page.after_h1,
    page.top_content,
    page.intro_section_body,
    page.seo_description,
  ];
  for (const candidate of candidates) {
    const text = textFromRich(candidate).replace(/\s+/g, " ").trim();
    if (text) return text;
  }
  return "";
}

async function algoliaSearch() {
  const all = [];
  for (let page = 0; page < PAGES; page++) {
    const res = await fetch(`https://${ALGOLIA.appId}-dsn.algolia.net/1/indexes/*/queries`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-algolia-api-key": ALGOLIA.apiKey,
        "x-algolia-application-id": ALGOLIA.appId,
      },
      body: JSON.stringify({
        requests: [
          {
            indexName: ALGOLIA.indexName,
            query: QUERY,
            page,
            hitsPerPage: HITS_PER_PAGE,
          },
        ],
      }),
    });
    if (!res.ok) throw new Error(`Algolia page ${page + 1} failed: ${res.status} ${await res.text()}`);
    const json = await res.json();
    const result = json.results?.[0];
    for (const hit of result?.hits || []) {
      all.push({
        searchPage: page + 1,
        title: hit.title,
        url: hit.url,
        pageType: hit.pageType,
        description: hit.seoDescription,
        publishedDate: hit.publishedDate,
      });
    }
  }

  const byUrl = new Map();
  for (const hit of all) {
    if (hit.url && !byUrl.has(hit.url)) byUrl.set(hit.url, hit);
  }
  return [...byUrl.values()];
}

async function fetchPage(hit) {
  const res = await fetch(hit.url, {
    headers: {
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 Codex clipping",
    },
  });
  if (!res.ok) throw new Error(`Fetch failed ${res.status}: ${hit.url}`);
  const html = await res.text();
  const nextData = parseNextData(html);
  const { pageProps, page } = nextData ? pickPageData(nextData) : { pageProps: {}, page: {} };

  const pageTitle =
    textFromRich(page.title) ||
    textFromRich(page.h1) ||
    hit.title ||
    getMeta(html, "og:title").replace(/\s+-\s+The Decision Lab$/, "") ||
    titleCaseFallback(hit.url);
  const description =
    page.seo_description ||
    excerptFromPage(page) ||
    hit.description ||
    getMeta(html, "description") ||
    getMeta(html, "og:description");
  const authors = authorNames(page);
  const published =
    dateOnly(page.published_date) ||
    dateOnly(page.date) ||
    dateOnly(page.first_publication_date) ||
    dateOnly(hit.publishedDate);
  const outline = outlineFromSlices(pageProps, page);
  const sections = bodySections(pageProps, page);
  const excerpt = excerptFromPage(page) || description;

  return {
    ...hit,
    pageTitle,
    description,
    authors,
    published,
    outline,
    sections,
    excerpt,
  };
}

async function uniquePath(dir, preferred, url) {
  let filePath = path.join(dir, preferred);
  try {
    const existing = await fs.readFile(filePath, "utf8");
    if (existing.includes(url) && existing.includes("source:")) return filePath;
  } catch (error) {
    if (error.code === "ENOENT") return filePath;
    throw error;
  }

  const ext = path.extname(preferred);
  const base = preferred.slice(0, -ext.length);
  for (let index = 2; index < 100; index++) {
    filePath = path.join(dir, `${base} ${index}${ext}`);
    try {
      await fs.access(filePath);
    } catch (error) {
      if (error.code === "ENOENT") return filePath;
      throw error;
    }
  }
  throw new Error(`Could not find unique filename for ${preferred}`);
}

function noteMarkdown(item, index) {
  const authorYaml =
    item.authors.length > 0
      ? `author:\n${item.authors.map((name) => `  - ${yamlScalar(name)}`).join("\n")}`
      : 'author: ""';
  const outline =
    item.outline.length > 0
      ? `\n## Outline\n\n${item.outline.map((heading) => `- ${heading}`).join("\n")}\n`
      : "";
  const sections =
    item.sections.length > 0
      ? `\n## 正文笔记\n\n${item.sections
          .map((section) => {
            const keywords = section.keywords.length ? `\n- Keywords: ${section.keywords.join(", ")}` : "";
            const digest = section.digest ? `\n${section.digest}\n` : "";
            return `### ${section.heading}${keywords}${digest}`;
          })
          .join("\n")}\n`
      : "";
  const excerpt = item.excerpt ? `\n## Excerpt\n\n${item.excerpt}\n` : "";

  return `---\ntitle: ${yamlScalar(item.pageTitle)}\nsource: ${yamlScalar(item.url)}\n${authorYaml}\npublished: ${item.published || '""'}\ncreated: ${CREATED_DATE}\ndescription: ${yamlScalar(item.description || "")}\n---\n\n# ${item.pageTitle}\n\n- Source: ${item.url}\n- Search query: ${QUERY}\n- Search result page: ${item.searchPage}\n- Result type: ${item.pageType || "Unknown"}\n${excerpt}${outline}\n## Original\n\nRead the full article at: ${item.url}\n`;
}

async function main() {
  await fs.mkdir(DEST_DIR, { recursive: true });
  const hits = await algoliaSearch();
  const written = [];
  const failed = [];

  for (let i = 0; i < hits.length; i++) {
    const hit = hits[i];
    try {
      const item = await fetchPage(hit);
      const safeTitle = sanitizeFilename(item.pageTitle || hit.title || titleCaseFallback(hit.url));
      const filename = `TDL - ${String(i + 1).padStart(3, "0")} - ${safeTitle}.md`;
      const filePath = await uniquePath(DEST_DIR, filename, item.url);
      await fs.writeFile(filePath, noteMarkdown(item, i + 1), "utf8");
      written.push({ filePath, title: item.pageTitle, url: item.url });
      console.log(`[${i + 1}/${hits.length}] wrote ${path.basename(filePath)}`);
    } catch (error) {
      failed.push({ url: hit.url, title: hit.title, error: error.message });
      console.error(`[${i + 1}/${hits.length}] failed ${hit.url}: ${error.message}`);
    }
  }

  const manifest = {
    query: QUERY,
    created: CREATED_DATE,
    destination: DEST_DIR,
    totalResults: hits.length,
    written: written.length,
    failed,
    files: written,
  };
  const manifestPath = path.join(DEST_DIR, "TDL - default effect product design - clipping manifest.json");
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8");

  console.log(`DONE written=${written.length} failed=${failed.length}`);
  if (failed.length) {
    console.log(JSON.stringify(failed, null, 2));
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
