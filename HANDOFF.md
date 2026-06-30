# Leoht Blog — 交接文档

> 本文档供 Claude Code（或任何接手开发的人/agent）快速理解项目现状。
> 最后更新：2026-06-29

---

## 1. 项目定位

**体验设计师的个人知识系统博客**。"先个人用，后产品化"。

不是传统博客时间线，是面向 UX 设计师的知识手册——沉淀心理学、增长、产品、方法论与案例，支撑设计决策。视觉定位"巴黎文人杂志"（The Paris Review / Granta / n+1 气质），复古 + 高级感。

技术路线：Astro 静态站点 + Markdown 内容 + GitHub Pages 部署。理由是内容就是文件、Markdown 友好、部署免费、性能极好、后期可增量加交互。

---

## 2. 已完成的工作

### 2.1 规划文档（项目根目录）

- **product-spec.md** — 产品文档 v0.2 实施版。关键决策：对象模型精简到 3 表（Card / Tag / Link）、Domain/Topic 降级为可选、知识图谱移出 MVP、路线图重排 4 Phase、内容策略改"低频高质量"。
- **design-system.md** — 设计系统 v0.2，巴黎文人杂志型。含六色色板（bone/vellum/charcoal/ink-blue/vintage-red/muted-gold）、三字体（Cormorant Garamond display + Source Serif 4 body + IBM Plex Mono meta）、签名元素（印迹方块 + 罗马数字编号 + dropcap）、12 条"复古不廉价"陷阱清单。色彩源自 DESIGN.md（Atelier du Savoir），已做主动取舍（剔除鲜橙 secondary-container，为 ink-blue 找到链接常驻角色）。
- **knowledge-audit.md** — 原有知识库审计结果。
- **体验设计师知识系统产品文档.md** — 最早的产品文档 v0.1（已被 product-spec.md 替代，保留作思路记录）。
- **DESIGN.md** — 原始设计参考（Atelier du Savoir），design-system.md 基于它优化。

### 2.2 内容目录结构

```
content/
  README.md           目录使用说明
  behavior/           人与行为（现有素材最多）
  ux/                 体验设计（现有素材最多）
  growth/             产品增长
  product/            产品系统
  thinking/           方法论与思维
  ai-product/         AI 产品设计（含样板文章 ai-interaction-patterns.md）
  leadership/         设计管理（含样板文章 design-review-as-alignment.md）
  visual/             视觉设计（含样板文章 typographic-hierarchy-contrast.md）
  case-study/         案例研究（注意：考虑改为 type: case 标记，不再独立目录）
drafts/               未分类草稿（建议改为 _drafts/ + sparks/ 拆分，见 §4）
templates/
  card-template.md         最小 frontmatter（inbox 用）
  card-full-template.md    完整 frontmatter + 正文结构示例
assets/images/       进 Git 的小资源
_oss/                远程 OSS 本地挂载点，不进 Git
  images/ thumbnails/ og/ covers/
  README.md           同步规则
```

### 2.3 Astro 项目

- **leoht-blog/** — Astro 7.0.3 项目，minimal 模板已创建。
- 已配置：无（刚创建，需要配置 GitHub Pages 部署、Tailwind、内容集合 schema）。
- 已安装依赖：无（`--no-install` 创建，需要 `npm install`）。

### 2.4 原有素材

- **UX 知识库/** — 548 篇 Obsidian 剪藏（L1 英文原文 + L1_sc 中文翻译），约 8.9M。不动它，作为原料库。后续迁移会另写脚本。
- **ux-blog-glm/** — 旧 React+Vite 项目，148M，保留作参考。确认新版可用后可删。
- **ux-knowledge-blog/** — 已删除（原 1.4G，含 .next 构建产物）。

---

## 3. 关键决策记录

| 决策 | 选择 | 理由 |
| --- | --- | --- |
| 框架 | Astro（非 Next.js/Vite） | 内容是 Markdown、静态部署、性能好、后期可增量加交互 |
| 部署 | GitHub Pages | 免费、无供应商锁定、git push 即部署 |
| 内容管理 | Markdown 文件 + frontmatter（非 CMS） | 先个人用、Markdown 友好、git 版本管理 |
| 图片存储 | OSS（非 Git） | 二进制大文件不进 Git，避免仓库膨胀 |
| Domain 分组 | 9 个预建目录 | behavior/ux/growth/product/thinking/ai-product/leadership/visual/case-study |
| 对象模型 | 3 表：Card / Tag / Link | product-spec.md 精简结果，Source/Concept/Collection 用字段或标签模拟 |
| 知识图谱 | 移出 MVP | 需要内容密度，文章 50+ 后再做 |
| 设计方向 | 巴黎文人杂志（方向 C） | 复古+高级感，Source Serif 4 正文 + Cormorant 标题 |

---

## 4. 待办与下一步

### 立即要做（Astro 链路跑通）

1. **`cd leoht-blog && npm install`**
2. **配置 GitHub Pages 部署**：`astro.config.mjs` 设 `site: 'https://<user>.github.io'` + `base: '/Leoht_Blog'`（或自定义域名则不加 base）
3. **安装 Tailwind**：`npx astro add tailwind`（用 v4 Vite 插件方式）
4. **配置内容集合**：`src/content.config.ts` 定义 `cards` collection，schema 与 `templates/card-template.md` frontmatter 对齐（title/slug/summary/type/status/tags/domain/source_*/related/published_at）
5. **把 content/ 软链或配置到 Astro**：Astro 默认读 `src/content/`，要么把 content/ 移进去，要么在 content config 里指定 loader 路径
6. **实现文章页**：`src/pages/c/[slug].astro`，用 getStaticPaths + collection 查询
7. **实现列表页**：`src/pages/index.astro` 列出 published 文章
8. **本地验证**：`npm run dev` 看预览、`npm run build` 看构建产物
9. **部署验证**：push 到 GitHub、配 Pages、看线上

### 待做的结构优化（product-spec.md 已规划）

- **drafts/ 拆分**：改为 `_drafts/`（要成文的草稿，下划线前缀不构建）+ `sparks/`（灵感碎片，type: spark）。目前 drafts/ 没加下划线前缀会被 Astro 当正式内容构建——这是技术问题必须改。
- **assets/images/ 按 slug 分子目录**：避免图片平铺找不到。
- **case-study/ 改用 type: case 标记**：case-study 是内容形式不是知识领域，不必独立 Domain 目录。

### 后续 Phase

- Phase 1：发布型博客（首页、文章、标签、搜索、RSS、订阅入口）
- Phase 2：知识化（双向链接、相关文章、标签聚合、内容状态流转）
- Phase 3：图谱化（局部知识图谱、收藏/稍后读、统计）
- Phase 4：开放化（评论、订阅系统、对外可装的模板）

详见 product-spec.md §路线图。

---

## 5. 重要约束

1. **不动 UX 知识库/**——548 篇原素材，只读参考，迁移会另写脚本。
2. **_oss/ 不进 Git**——已配 .gitignore，通过同步工具管理。
3. **设计系统严格遵守 design-system.md**——尤其"复古不廉价"陷阱清单（§9）：dropcap 一篇只做一次、印迹旋转 ≤ -2°、vintage-red 每屏 ≤ 3%、不纸张噪点、不模仿斑驳印刷、pullquote 不加大引号、罗马数字只用在全站总序号/章节号/卷号。
4. **色彩六色不引入第七色**——bone/vellum/charcoal/ink-blue/vintage-red/muted-gold，衍生色用透明度变体。
5. **字体三族不混入无衬线正文**——Cormorant Garamond (display) + Source Serif 4 (body) + IBM Plex Mono (meta)。Inter/Geist/SF 全部禁用。
6. **先记录再整理**——frontmatter 最少填 title + status: inbox 就能存档，不强求一次填全。

---

## 6. 项目根目录文件清单

```
Leoht_Blog/
  product-spec.md              产品文档 v0.2（开发依据）
  design-system.md             设计系统 v0.2（视觉依据）
  knowledge-audit.md           原有知识库审计
  体验设计师知识系统产品文档.md   v0.1 原始文档（保留作参考）
  体验设计师知识领域文章采集清单.md  采集清单
  文章数据结构设计.md            数据结构设计
  L1入门概念层知识收集.md        L1 知识收集
  DESIGN.md                    原始设计参考（Atelier du Savoir）
  架构.png / 首页设计参考.png     工作过程参考图
  .gitignore                   已配 _oss/ + node_modules + 构建产物
  content/                     知识内容源（9 domain + drafts + templates）
  _oss/                        OSS 本地挂载（不进 Git）
  assets/                      进 Git 的小资源
  drafts/                      草稿（待改 _drafts/ + sparks/）
  templates/                   frontmatter 模板
  scripts/                     工具脚本（含 clip_tdl_search_to_obsidian.mjs）
  leoht-blog/                  Astro 项目（刚初始化）
  ux-blog-glm/                 旧 React 项目（保留参考，可删）
  UX 知识库/                    548 篇 Obsidian 剪藏（不动）
```
