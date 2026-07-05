# Figma Token 同步交接

> 给「重开会话」的 Claude：本文件是上一会话留下的交接。读完它后，
> 用 `mcp__figma__*` 工具把下面 token 写进指定的 Figma 文件。
> 本文件由上一会话生成于 2026-07-03，token 已与 `design-system.md` v0.2、
> `leoht-blog/src/styles/global.css` 对齐并通过 `astro build` 验证。

---

## 0. 你要做什么（一句话）

用 Figma MCP 工具，把下列设计 token 在这个 Figma 文件里创建成
**Variables（Color / Number / String 三类 collection）+ Text Styles**：

- 文件 URL：https://www.figma.com/design/x8EqtjlsWiOQYZaG8L82N5/Leoht-Blog?node-id=5-2
- 文件 key：`x8EqtjlsWiOQYZaG8L82N5`
- 目标节点：`node-id=5-2`（如该节点是 frame，把 variables 创建在文件级即可；text styles 同理）

如果 MCP 不支持直接创建 Variables（取决于工具版本），退而求其次：
在文件里创建一个名为「Leoht Tokens」的 Page，按下面分组画 frame，
把每个 token 用色块 + label 文本块呈现，色彩用精确 hex，字号用精确 px。
**先看清 `mcp__figma__` 工具能做什么再选路径，不要硬写一气。**

---

## 1. 色 token（9 个实色 + 5 个透明度衍生）

### 1.1 实色 — Color collection `leoht/color`

| name | hex | 角色 |
| --- | --- | --- |
| `bone` | `#F9F7F2` | 主背景 |
| `vellum` | `#EBE8E0` | 次级表面 |
| `charcoal` | `#1A1A1A` | 正文 / 结构 |
| `charcoal-soft` | `#3A3A38` | 次级正文 |
| `charcoal-faint` | `#7A7873` | 极弱信息 |
| `ink-blue` | `#0D1B2A` | 内文链接常驻 |
| `vintage-red` | `#8C1C13` | 高姿态 accent |
| `muted-gold` | `#B08D57` | 元数据 / 装饰 |

> 注意：design-system.md §1.1 把六色作为「不引入第七色」的硬约束。
> charcoal-soft / -faint 是 charcoal 的衍生不属「第七色」，已收录为
> 方便取用 token。**vintage-red 每屏总面积 ≤ 3%**、muted-gold ≤ 8%、
> ink-blue ≤ 4% —— 这些是规范配额，Figma 侧无法强制，但可在 token 描述里写明。

### 1.2 透明度衍生 — Color collection `leoht/rule`

| name | 表达 | rgba |
| --- | --- | --- |
| `rule` | charcoal / 22% | `rgba(26,26,26,0.22)` |
| `rule-strong` | charcoal / 48% | `rgba(26,26,26,0.48)` |
| `rule-gold` | muted-gold / 60% | `rgba(176,141,87,0.60)` |
| `ink-blue-soft` | ink-blue / 12% | `rgba(13,27,42,0.12)` |
| `vintage-red-soft` | vintage-red / 10% | `rgba(140,28,19,0.10)` |

---

## 2. 字体 — String collection `leoht/font` + Text Styles

三个字体角色。**正文与标题同族衬线**（Source Serif 4 + 思源宋体），**meta 不再等宽**（思源黑体，机构感来自小写 + 字间距 + 灰阶）。

| token name | family | weight | 用途 |
| --- | --- | --- | --- |
| `font-display` | `"Source Serif 4", "Noto Serif SC", "Songti SC", serif` | 400 / 500 | Hero、H1、H2、dropcap（与 body 同族，靠字重/字号区隔） |
| `font-body` | `"Source Serif 4", "Noto Serif SC", "Songti SC", serif` | 400 / 600 | 全文正文（**唯一允许的正文 face**） |
| `font-meta` | `"Noto Sans SC", "Songti SC", sans-serif` | 400 / 500 | 元数据、章节编号、状态印迹、标签（**不再等宽**） |

> 2026-07-03 变更（二次）：display 由 IBM Plex Sans 改回 Source Serif 4，与 body 同族——标题与正文靠字重（500 vs 400）与字号区隔，不再用"标题无衬线 vs 正文衬线"的类别对比。meta 仍 Noto Sans SC。
> 2026-07-03 变更（一次）：display 由 Cormorant Garamond 改为 IBM Plex Sans；原 `font-mono`（IBM Plex Mono）改名为 `font-meta` 并改为 Noto Sans SC，放弃等宽机构感路线。

### Text Styles（按 design-system.md §2.2 + §2.3 精度）

| style name | family | size | line-height | letter-spacing | weight | style |
| --- | --- | --- | --- | --- | --- | --- |
| `Display XXL` | font-display | 67px | 1.02 | -0.015em | 400 | normal |
| `Display XL` | font-display | 51px | 1.05 | -0.01em | 400 | normal |
| `Display L` | font-display | 38px | 1.12 | -0.005em | 400 | normal |
| `Display M` | font-display | 28px | 1.2 | 0 | 500 | normal |
| `Display S` | font-display | 22px | 1.25 | 0 | 500 | normal |
| `Body L` | font-body | 18px | 1.65 | 0.005em | 400 | normal |
| `Body L italic` | font-body | 18px | 1.55 | 0.01em | 400 | italic |
| `Body` | font-body | 16px | 1.6 | 0 | 400 | normal |
| `Meta` | font-meta | 13px | 1.4 | 0.04em | 400 | normal | (text-transform: lowercase) |
| `Meta S` | font-meta | 12px | 1.2 | 0.06em | 400 | normal | (text-transform: lowercase) |

> Dropcap 单独一个 text style: font-display 500 (Source Serif 4 Medium), 73.6px (4.6rem), line-height 0.85, color vintage-red, margin-right 0.08em, margin-top 0.04em。

---

## 3. 字号阶梯 — Number collection `leoht/size`（px）

| name | px |
| --- | --- |
| `size-xxl` | 67 |
| `size-xl` | 51 |
| `size-l` | 38 |
| `size-m` | 28 |
| `size-s` | 22 |
| `size-body` | 18 |
| `size-body-sm` | 16 |
| `size-meta` | 13 |
| `size-meta-s` | 12 |

---

## 4. 间距阶 — Number collection `leoht/space`（px）

design-system.md §3.1：8 倍数 + 4 微调。

| name | px |
| --- | --- |
| `space-2` | 2 |
| `space-4` | 4 |
| `space-8` | 8 |
| `space-12` | 12 |
| `space-16` | 16 |
| `space-24` | 24 |
| `space-32` | 32 |
| `space-48` | 48 |
| `space-64` | 64 |
| `space-96` | 96 |
| `space-128` | 128 |

---

## 5. 容器宽度 — Number collection `leoht/container`（px）

design-system.md §4.1。

| name | px | 用途 |
| --- | --- | --- |
| `container-text` | 680 | 正文阅读 |
| `container` | 1440 | 默认页面内容宽度 |
| `container-wide` | 1600 | 图谱、大表格 |

---

## 6. 圆角 — Number collection `leoht/radius`（px）

design-system.md §3.2。圆角克制是文人杂志硬指标。

| name | px | 用途 |
| --- | --- | --- |
| `radius-0` | 0 | 分隔线、印章、目录行、卡片描边 |
| `radius-2` | 2 | 输入框、文件式角标 |
| `radius-4` | 4 | tag chip |

> 6px+ 禁用。

---

## 7. 约束（同步给 Figma 时一并写进 description）

- 不引入第七色：实色六色（bone/vellum/charcoal/ink-blue/vintage-red/muted-gold）为全套，
  soft/faint 与透明度衍生不算新色。
- 全站衬线一致：display 与 body 同族 Source Serif 4（思源宋体做 CJK 配对），标题与正文靠字重（500 vs 400）与字号区隔。meta 用 Noto Sans SC 无衬线——**无衬线只允许出现在 meta，不能进正文或标题**。
- display 与 body 同族：标题 100% 由 font-display（Source Serif 4）渲染，正文 100% 由 font-body（Source Serif 4）渲染，靠字重/字号区隔。
- 罗马数字只用在全站总序号、章节号、卷号；领域内序号用阿拉伯。
- 印迹旋转 ≤ -2°（-1.5° 是上限）。
- 不纸张噪点、不斑驳印刷、pullquote 不加大引号、不用外阴影。

---

## 8. 给新会话的执行步骤

1. 先读 `leoht-blog/src/styles/global.css` 与 `design-system.md` 对照本文件，
   确认 token 仍与代码一致（不要直接信本文件，以代码为最终事实）。
2. 列出 `mcp__figma__` 可用工具，确认能否创建 Variables / Text Styles。
   能 → 走 Variables 路径；不能 → 走「画 frame + 色块 + label」的退化路径。
3. 用 file key `x8EqtjlsWiOQYZaG8L82N5` 拿文件信息，确认可写。
4. 按 §1–§6 顺序写入。先建 collection，再逐 token 加 alias。
5. 若 MCP 不支持 alias 模式（charcoal-soft 该 alias 到 charcoal），用直接 hex 也行，
   但在 token description 里写明「derived from charcoal」。
6. 完成后回报：创建了多少 collection / 多少 token / 多少 text style，
   是否有失败项。

---

## 9. 备份方案：Tokens Studio JSON

如果 MCP 不可用或你想用 Tokens Studio 插件手动导入，把下面 JSON 存为
`leoht-tokens.json`，在 Figma 里用 Tokens Studio 插件 Import：

```json
{
  "leoht": {
    "color": {
      "bone": { "value": "#F9F7F2", "type": "color" },
      "vellum": { "value": "#EBE8E0", "type": "color" },
      "charcoal": { "value": "#1A1A1A", "type": "color" },
      "charcoal-soft": { "value": "#3A3A38", "type": "color" },
      "charcoal-faint": { "value": "#7A7873", "type": "color" },
      "ink-blue": { "value": "#0D1B2A", "type": "color" },
      "vintage-red": { "value": "#8C1C13", "type": "color" },
      "muted-gold": { "value": "#B08D57", "type": "color" },
      "rule": { "value": "rgba(26,26,26,0.22)", "type": "color" },
      "rule-strong": { "value": "rgba(26,26,26,0.48)", "type": "color" },
      "rule-gold": { "value": "rgba(176,141,87,0.60)", "type": "color" },
      "ink-blue-soft": { "value": "rgba(13,27,42,0.12)", "type": "color" },
      "vintage-red-soft": { "value": "rgba(140,28,19,0.10)", "type": "color" }
    },
    "font": {
      "display": { "value": { "fontFamily": "Source Serif 4", "fontWeight": "400" }, "type": "typography" },
      "body": { "value": { "fontFamily": "Source Serif 4", "fontWeight": "400" }, "type": "typography" },
      "meta": { "value": { "fontFamily": "Noto Sans SC", "fontWeight": "400" }, "type": "typography" }
    },
    "size": {
      "xxl": { "value": "67", "type": "sizing" },
      "xl": { "value": "51", "type": "sizing" },
      "l": { "value": "38", "type": "sizing" },
      "m": { "value": "28", "type": "sizing" },
      "s": { "value": "22", "type": "sizing" },
      "body": { "value": "18", "type": "sizing" },
      "body-sm": { "value": "16", "type": "sizing" },
      "meta": { "value": "13", "type": "sizing" },
      "meta-s": { "value": "12", "type": "sizing" }
    },
    "space": {
      "2": { "value": "2", "type": "spacing" },
      "4": { "value": "4", "type": "spacing" },
      "8": { "value": "8", "type": "spacing" },
      "12": { "value": "12", "type": "spacing" },
      "16": { "value": "16", "type": "spacing" },
      "24": { "value": "24", "type": "spacing" },
      "32": { "value": "32", "type": "spacing" },
      "48": { "value": "48", "type": "spacing" },
      "64": { "value": "64", "type": "spacing" },
      "96": { "value": "96", "type": "spacing" },
      "128": { "value": "128", "type": "spacing" }
    },
    "container": {
      "text": { "value": "680", "type": "sizing" },
      "default": { "value": "1440", "type": "sizing" },
      "wide": { "value": "1600", "type": "sizing" }
    },
    "radius": {
      "0": { "value": "0", "type": "borderRadius" },
      "2": { "value": "2", "type": "borderRadius" },
      "4": { "value": "4", "type": "borderRadius" }
    }
  }
}
```

---

## 10. 完成口径

新会话回报这三件事即视为完成：
- Figma 文件 `x8EqtjlsWiOQYZaG8L82N5` 里的 token 结构与本文 §1–§6 一致；
- 创建方式（Variables 路径 vs 退化 frame 路径 vs Tokens Studio 导入）已说明；
- 不一致或失败项已列出。
```