import { getCollection, type CollectionEntry } from "astro:content";

export type Card = CollectionEntry<"cards">;

const DOMAIN_ABBR: Record<string, string> = {
  behavior: "BEH",
  ux: "UX",
  growth: "GRO",
  product: "PRO",
  thinking: "THK",
  "ai-product": "AIP",
  leadership: "LDR",
  visual: "VIS",
  "case-study": "CAS",
};

export function domainAbbr(domain?: string): string {
  if (!domain) return "GEN";
  return DOMAIN_ABBR[domain] ?? domain.slice(0, 3).toUpperCase();
}

const ROMAN: [number, string][] = [
  [1000, "m"],
  [900, "cm"],
  [500, "d"],
  [400, "cd"],
  [100, "c"],
  [90, "xc"],
  [50, "l"],
  [40, "xl"],
  [10, "x"],
  [9, "ix"],
  [5, "v"],
  [4, "iv"],
  [1, "i"],
];

export function toRoman(n: number): string {
  if (n <= 0) return "i";
  let out = "";
  let v = n;
  for (const [value, sym] of ROMAN) {
    while (v >= value) {
      out += sym;
      v -= value;
    }
  }
  return out;
}

export function cardSlug(card: Card): string {
  return card.data.slug || card.id.replace(/\.md$/, "");
}

export async function getPublishedCards(): Promise<Card[]> {
  const all = await getCollection("cards");
  return all
    .filter((c) => c.data.status === "published")
    .sort(
      (a, b) =>
        (b.data.published_at?.getTime() ?? 0) -
        (a.data.published_at?.getTime() ?? 0),
    );
}

export interface NumberedCard extends Card {
  number: { global: string; domain: string; domainSeq: number };
}

export async function getPublishedNumbered(): Promise<NumberedCard[]> {
  const published = await getPublishedCards();
  const seqByDomain = new Map<string, number>();
  const reversed = [...published].reverse();
  const stamped = reversed.map((card) => {
    const d = card.data.domain ?? "general";
    const seq = (seqByDomain.get(d) ?? 0) + 1;
    seqByDomain.set(d, seq);
    return {
      ...card,
      number: { global: "", domain: domainAbbr(card.data.domain), domainSeq: seq },
    };
  });
  stamped.forEach((c, i) => {
    c.number.global = toRoman(stamped.length - i);
  });
  return stamped.reverse();
}

export function formatStamp(date?: Date): string {
  if (!date) return "";
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

export function volNo(date?: Date): string {
  if (!date) return "";
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `vol ${toRoman(month)} · ${year}`;
}
