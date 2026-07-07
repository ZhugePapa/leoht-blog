# Markdown 渲染样式清单

> 文章正文由 Markdown 经 Astro `<Content />` 渲染，样式定义在 `leoht-blog/src/pages/c/[slug].astro` 的 `.prose` 作用域 + `leoht-blog/src/styles/global.css` 全局。
> 本清单基于 242 篇文章实际使用的 markdown 元素，逐元素列出样式表达式与明暗主题解析值。
> 生成于 2026-07-07。

## CSS 变量解析对照

| 变量 | Light | Dark |
|---|---|---|
| `--font-body` / `--font-display` | `"Chill Duan Hei Song", "Songti SC", serif` | 同 |
| `--font-meta` | `"Noto Sans SC", "Songti SC", sans-serif` | 同 |
| `--size-body-sm` | 1rem (16px) | 同 |
| `--size-m` | 1.75rem (28px) | 同 |
| `--size-s` | 1.375rem (22px) | 同 |
| `--color-charcoal` | `#1a1a19` | `#ece6d8` |
| `--color-charcoal-soft` | `#545450` | `#b8b1a1` |
| `--color-charcoal-faint` | `#7a7873` | `#807a6c` |
| `--color-vintage-red` | `#A82E2A` | `#A82E2A`（不变） |
| `--color-ink-blue` | `#1B5A9A` | `#6ba8d8` |
| `--color-vellum` | `#f7f1e6` | `#2c2820` |
| `--rule` | `rgb(26 26 26 / 22%)` | `rgb(236 230 216 / 18%)` |
| `--rule-strong` | `rgb(26 26 26 / 48%)` | `rgb(236 230 216 / 36%)` |

> 字体说明：`Chill Duan Hei Song` 仅 Regular(400) + Medium(500) 两个字面，`@font-face` 用权重区间映射（100-400→Regular, 401-900→Medium）+ `unicode-range` 限制 CJK。`font-synthesis: none` 禁止合成加粗/斜体。

---

## 段落

| 元素 | 样式表达式 | Light 解析值 | Dark 解析值 | 说明 |
|---|---|---|---|---|
| `p` | `font-family: var(--font-body); font-size: var(--size-body-sm); line-height: 1.6; letter-spacing: 0.005em; color: var(--color-charcoal-soft); margin: 0 0 21.25px` | Chill / 16px / 1.6 / 0.08px / `#545450` / 下外边距 21.25px | Chill / 16px / 1.6 / 0.08px / `#b8b1a1` / 21.25px | 正文段落。段间距 21.25px（约 1.33em） |

## 标题

| 元素 | 样式表达式 | Light 解析值 | Dark 解析值 | 说明 |
|---|---|---|---|---|
| `h2` | `font-family: var(--font-display); font-weight: 500; font-size: var(--size-m); line-height: 1.2; color: var(--color-charcoal); margin: 21.25px 0` | Chill Medium / 28px / 1.2 / `#1a1a19` / 上下 21.25px | 同 / `#ece6d8` | `.prose` 覆盖全局 h2（全局为 weight 600）。章节标题（核心观点/正文/原文摘录等） |
| `h3` | `font-family: var(--font-display); font-weight: 500; font-size: var(--size-s); line-height: 1.25; color: var(--color-charcoal); margin: 16px 0` | Chill Medium / 22px / 1.25 / `#1a1a19` / 上下 16px | 同 / `#ece6d8` | 三级标题 |
| `h1` | 未在 prose 使用 | — | — | 文章 H1 由页面模板渲染（`.title`），非 markdown 正文 |

## 列表

| 元素 | 样式表达式 | Light 解析值 | Dark 解析值 | 说明 |
|---|---|---|---|---|
| `ul` / `ol` | `margin: 0 0 21.25px; padding-left: 23.8px` | 左缩进 23.8px / 下外边距 21.25px | 同 | 项目符号/编号容器 |
| `li` | `font-family: var(--font-body); font-size: var(--size-body-sm); line-height: 1.6; color: var(--color-charcoal-soft)` | Chill / 16px / 1.6 / `#545450` | 同 / `#b8b1a1` | 列表项 |
| `li + li` | `margin-top: 5.1px` | 项间距 5.1px | 同 | 相邻列表项间距 |

## 引用

| 元素 | 样式表达式 | Light 解析值 | Dark 解析值 | 说明 |
|---|---|---|---|---|
| `blockquote` | `margin: 21.25px 0; padding-left: 1rem; border-left: 2px solid var(--color-vintage-red); font-family: var(--font-body); font-size: var(--size-body-sm); line-height: 1.6; color: var(--color-charcoal-soft)` | 左边框 2px `#A82E2A` / 左内边距 16px / Chill 16px 1.6 / `#545450` | 同（左边框不变）/ `#b8b1a1` | 引用块。左侧红色竖线区分 |

## 链接

| 元素 | 样式表达式 | Light 解析值 | Dark 解析值 | 说明 |
|---|---|---|---|---|
| `a`（prose） | `.prose :global(a) { color: var(--color-ink-blue) }` + 全局 `a { text-decoration: underline; text-underline-offset: 2px; text-decoration-color: color-mix(in srgb, var(--color-ink-blue) 60%, transparent); transition: ... } a:hover { color: var(--color-vintage-red); text-decoration-color: var(--color-vintage-red) }` | 文字 `#1B5A9A` / 下划线 `color-mix(#1B5A9A 60% 透明)` / hover 文字+下划线 `#A82E2A` | 文字 `#6ba8d8` / 下划线 `color-mix(#6ba8d8 60% 透明)` / hover `#A82E2A` | prose 仅覆盖颜色，下划线行为继承全局 `a` |

## 代码

| 元素 | 样式表达式 | Light 解析值 | Dark 解析值 | 说明 |
|---|---|---|---|---|
| `code`（行内） | `font-family: var(--font-meta); font-size: 0.9em; background: var(--color-vellum); padding: 1px 5px; border-radius: 2px` | Noto Sans SC / 14.4px / 背景 `#f7f1e6` / 圆角 2px | 同 / 背景 `#2c2820` | 行内代码。无文字色覆盖（继承 charcoal-soft） |
| `pre` / `pre code` | 未定义 | 浏览器默认 | 同 | ⚠️ 代码块未专门样式化 |

## 强调

| 元素 | 样式表达式 | Light 解析值 | Dark 解析值 | 说明 |
|---|---|---|---|---|
| `strong` / `b` | 未在 prose 显式定义；浏览器默认 `font-weight: bold (700)` | 字重 700 → 落到 Chill Medium 字面（401-900 区间），无合成加粗 / color 继承 p `#545450` | 同 / `#b8b1a1` | `font-synthesis: none` 禁止合成。strong 渲染为 Medium 字重，与 h2 同字面，无"更粗"视觉。**按用户决定保留现状** |
| `em` / `i` | `font-family: "Songti SC", serif; font-style: italic` | Songti SC 斜体 / color 继承 `#545450` | 同 / `#b8b1a1` | Chill 字体无斜体字面，em 改用 Songti SC（macOS 系统衬线，有斜体）渲染斜体 |

## 脚注

| 元素 | 样式表达式 | Light 解析值 | Dark 解析值 | 说明 |
|---|---|---|---|---|
| `sup` | 未定义；浏览器默认 `vertical-align: super; font-size: smaller (~0.83em)` | 上标 / ~13.3px / color 继承 `#545450` | 同 / `#b8b1a1` | 文中 `<sup>1</sup>` 形式脚注标记。99 篇文章使用 |

## 分隔线

| 元素 | 样式表达式 | Light 解析值 | Dark 解析值 | 说明 |
|---|---|---|---|---|
| `hr` | prose 覆盖：`.prose :global(hr) { margin: 16px 0 }` + 继承全局 `hr, .rule { border: 0; border-top: 1px solid var(--rule) }` | 1px 上边框 `rgb(26 26 26 / 22%)` / 上下 16px | 1px 上边框 `rgb(236 230 216 / 18%)` / 上下 16px | markdown `---` 渲染为 `<hr>` |

## 图片

| 元素 | 样式表达式 | Light 解析值 | Dark 解析值 | 说明 |
|---|---|---|---|---|
| `img` | `.prose :global(img) { max-width: 100%; height: auto; display: block; margin: 0 0 21.25px }` | 块级 / 最大宽 100% / 下外边距 21.25px | 同 | 限制宽度防止溢出 960px 容器。143 篇文章含图 |

## 表格

| 元素 | 样式表达式 | Light 解析值 | Dark 解析值 | 说明 |
|---|---|---|---|---|
| `table` | `.prose :global(table) { width: 100%; border-collapse: collapse; margin: 0 0 21.25px; font-family: var(--font-body); font-size: var(--size-body-sm); line-height: 1.6; color: var(--color-charcoal-soft) }` | 宽 100% / Chill 16px 1.6 / `#545450` / 下外边距 21.25px | 同 / `#b8b1a1` | 表格容器 |
| `th` / `td` | `.prose :global(th), .prose :global(td) { border: 1px solid var(--rule); padding: 8px 12px; text-align: left; vertical-align: top }` | 1px 边框 `rgb(26 26 26 / 22%)` / 内边距 8px 12px / 左对齐顶部对齐 | 1px 边框 `rgb(236 230 216 / 18%)` | 单元格 |
| `th` | `.prose :global(th) { font-family: var(--font-display); font-weight: 500; color: var(--color-charcoal); background: var(--color-vellum) }` | Chill Medium / `#1a1a19` / 背景 `#f7f1e6` | 同 / `#ece6d8` / 背景 `#2c2820` | 表头：display 字体 + 浅色背景区分 |

---

## 待补样式建议

| 元素 | 问题 | 建议补充样式 |
|---|---|---|
| `strong` | 与 h2 同字面，无"更粗"对比 | 用户决定保留现状（接受 Medium 字重渲染） |
| `pre` | 代码块无样式 | `.prose :global(pre) { background: var(--color-vellum); padding: 16px; overflow-x: auto; margin: 0 0 21.25px } .prose :global(pre code) { background: none; padding: 0; font-size: var(--size-body-sm) }` |

## 已补样式（本轮）

| 元素 | 补充样式 | 说明 |
|---|---|---|
| `img` | `max-width: 100%; height: auto; display: block; margin: 0 0 21.25px` | 防溢出 |
| `em` | `font-family: "Songti SC", serif; font-style: italic` | Chill 无斜体字面，改用 Songti SC |
| `hr` | `margin: 16px 0` | 上下间距 |
| `table` / `th` / `td` | 边框 + 内边距 + 表头 display 字体 + vellum 背景 | 完整表格样式 |

---

## 样式定义位置索引

- `leoht-blog/src/pages/c/[slug].astro` — `.prose` 作用域样式（p/h2/h3/ul/ol/li/blockquote/a/code）
- `leoht-blog/src/styles/global.css` — 全局 `h1-h6` / `a` / `hr` / `code` / 字体/字号/颜色变量
- `leoht-blog/src/layouts/Base.astro` — `@font-face` 字体注册 + `font-synthesis: none`（经 global.css body）