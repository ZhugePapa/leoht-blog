# Leoht 知识系统目录

本目录是博客的内容源。所有文章以 Markdown + frontmatter 形式管理，Astro 构建时解析。

## 目录结构

```
content/
  behavior/      人与行为：行为经济学、决策理论、认知科学、注意力、动机、情绪
  ux/            体验设计：UX 基础、交互设计、信息架构、可用性、可访问性、内容设计
  growth/        产品增长：AARRR、激活、留存、转化、习惯养成、定价、北极星
  product/       产品系统：前端理解、产品架构、数据分析、A/B 测试、API 设计
  thinking/      方法论与思维：设计思维、系统思考、第一性原理、JTBD、双钻模型
  ai-product/    AI 产品设计：AI 交互模式、Agent 设计、LLM 能力边界、AI 信任与可解释性
  leadership/    设计管理：设计评审、跨职能协作、设计师成长、设计提案
  visual/        视觉设计：排版、色彩、层级、品牌系统、视觉表达
  case-study/    案例研究：产品拆解、行业趋势、设计复盘、失败案例、设计访谈
drafts/          未归入 domain 的草稿与 inbox 快速记录
templates/       frontmatter 模板
assets/images/   文章配图
```

> 注：case-study 是内容形式不是知识领域,后续考虑用 `type: case` 标记替代独立目录。
> AI / Leadership / Visual 是新增 Domain,目前各有一篇样板文章,后续补全。

## 用法

### 写新内容

1. 复制 `templates/card-template.md` 到 `content/<domain>/` 或 `drafts/`
2. 最少填 `title` + `status: inbox`，其它后补
3. 写完后 `status` 改 `draft`，补充 `summary` / `tags` / `related`
4. 定稿后 `status` 改 `published`，填 `published_at`

### frontmatter 字段

详见 `product-spec.md` §3.2。关键字段：

- `title` / `slug` / `summary` / `type` / `status` / `tags` / `domain` / `related` / `source_*`

### 标签分组

详见 `product-spec.md` §4.1。四个分组：

- `type`：心理学、案例、方法论、框架、原则、数据、复盘
- `stage`：研究、定义、设计、验证、评估、增长
- `behavior`：认知、决策、行为、情绪、注意力、动机
- `scene`：注册登录、Onboarding、订阅转化、信息架构、表单设计、空状态、AI 对话、数据看板

### 文件命名

- 文件名用 slug：`loss-aversion.md` 而非 `损失厌恶.md`
- slug 用 kebab-case 英文，避免中文和特殊字符
- 中文标题放 frontmatter `title` 字段

## 与原 UX 知识库的关系

原有 `UX 知识库/` 目录（548 篇剪藏）保持不动，作为原料库参考。新内容在本目录从头写，不自动迁移。后续如需迁移，会另写脚本处理，详见 `knowledge-audit.md`。
