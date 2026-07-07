# Leoht Library

> 一本被反复翻阅的 UX 知识手册 · 沉淀心理学、增长、产品、方法论与案例

一个面向体验设计师的个人知识系统：用标签和领域组织 UX / 心理学 / 增长 / 产品 / 方法论 / 案例知识，对外是杂志型博客，对内是可检索的卡片库。

## 技术栈

- **框架**：Astro 7 + Tailwind CSS v4
- **语言**：TypeScript
- **内容**：Markdown 文件 + Astro Content Collections（Zod schema）
- **部署**：GitHub Pages（`zhugepapa.github.io/leoht-blog`）

## 项目结构

```
leoht-blog/
├── content/                Markdown 文章（按领域分子目录）
├── docs/                   项目文档（产品规格 / 数据字典 / 后端方案等）
├── assets/images/          设计素材原图
├── leoht-blog/             Astro 项目源码
│   ├── src/components/     组件（KnowledgeCard / DomainCard / FeaturedCard）
│   ├── src/layouts/        布局（Base.astro）
│   ├── src/lib/            数据层（cards.ts / domains.ts / base.ts）
│   ├── src/pages/          页面（首页 / 内容库 / 文章页 / 关于 / 探索）
│   ├── src/styles/         全局样式（global.css）
│   ├── public/images/      静态图片
│   └── content.config.ts   内容集合 Schema
├── scripts/                工具脚本
├── templates/              文章模板
└── .github/workflows/      GitHub Pages 部署
```

## 本地开发

```bash
# 安装依赖
cd leoht-blog && npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

Node 版本要求：26（见 `.nvmrc`）

## 内容编写

文章存放在 `content/` 目录下，按领域分子目录。每篇文章是一个 Markdown 文件，frontmatter 格式：

```yaml
---
title: 损失厌恶
slug: loss-aversion
summary: 人对同等损失的痛苦感受约是同等收益的两倍
type: effect           # article / note / effect / principle / case ...
status: published      # inbox / draft / published / archived
tags: [决策, 订阅转化, 增长, 心理学]
domain: behavior        # 可选，领域 slug
source_title: 思考，快与慢
source_author: 卡尼曼
source_url: https://...
published_at: 2026-06-12
related: [cognitive-load, price-anchoring]
---

正文内容（Markdown）...
```

**最低填写门槛**：`title` + `status: inbox`，其余可选，后补。

## 领域

| 领域 | slug | 核心问题 |
| --- | --- | --- |
| 人与行为 | behavior | 用户为什么这样做 |
| 体验设计 | ux | 产品应该如何设计 |
| 产品增长 | growth | 设计如何影响业务 |
| 产品系统 | product | 设计如何落地 |
| 方法论与思维 | thinking | 设计师如何思考 |
| AI 产品设计 | ai-product | AI 如何改变交互 |
| 设计管理 | leadership | 设计如何被组织采纳 |
| 视觉设计 | visual | 形式如何承载意义 |
| 案例研究 | case-study | 别人是怎么做的 |

## 文档

- [产品规格说明](docs/产品规格说明.md) — 产品定位、内容模型、标签体系
- [设计系统规范](docs/设计系统规范.md) — 颜色 / 字号 / 间距等设计 Token
- [数据字典](数据字典.md) — 8 个数据对象的字段定义
- [后端技术方案](docs/后端技术方案.md) — P0→P3 分阶段后端计划
- [知识库结构](docs/知识库结构.md) — 领域 / 标签 / 类型 / 状态总览

## License

MIT