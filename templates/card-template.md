---
# Card frontmatter 模板 — 最小填写版
# 只填 title + status: inbox 就能存档，其它后补
# 详见 ../product-spec.md §3.2

title: 
slug:                    # kebab-case 英文，如 loss-aversion；留空则构建时从文件名生成
summary:                 # 你的一句话核心观点（不是原文摘要）
type: effect             # article / note / highlight / principle / effect / case / retro / reading / spark
status: inbox            # inbox / draft / published / archived
tags: []                 # 3-7 个语义标签，见 ../product-spec.md §4.1 四个分组
domain: behavior         # 可选：behavior / ux / growth / product / thinking / case-study
source_title:            # 来源标题
source_author:           # 来源作者
source_url:              # 来源 URL
published_at:            # 发布日期（status 改 published 时填）
related: []              # 关联文章 slug 列表，如 [cognitive-load, price-anchoring]
---
