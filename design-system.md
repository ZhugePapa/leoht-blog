# Leoht 设计系统 v0.2 — 巴黎文人杂志

> 本版替代 v0.1 的田野手册方向。"复古 + 高级感"被具化为 The Paris Review 早期版 / Granta / n+1 那种气质：文人、浪漫、有作者腔但不自恋。
>
> 这是份会被推翻的草案。它的目的是把方向落成可执行的色彩、字体、组件与签名，而不是停在 PPT 阶段。

---

## 0. 设计主张

**这个站点是一本文人气质的知识手册，气质参考是巴黎文学杂志的纸面。**

它不是博客时间线，也不是作品集橱窗，是体验设计师把自己读过的、想过的、用过的东西沉淀成的一本"杂志"。读者来这个站点，既是为了得到可复用的知识依据，也是为了体验"和有审美的人一起思考"的号调。

由此推出三个判断：

1. **气质由排版承担，不由装饰承担**。巴黎文人杂志的高级感 90% 来自字体、行高、字间距、留白的精度；装饰只是节制的点缀。这份文档在 §2 上的篇幅会明显比其他章节重。
2. **复古是结构性借鉴，不是做旧**。古典书籍的 dropcap、罗马数字章节号、薄装饰线、文件式角标、章节首页的中央对称——这些是"结构性复古语言"，是 OK 的。但纸张噪点、污渍、锤打、做旧字体、斑驳印刷这些"模仿真实旧物"的装饰一律不做。这是高级与廉价之间的分水岭。
3. **浪漫只能藏在一两处**。Cormorant 的可斜体、深酒红的极小面积出现、章节首页的中央对称 dropcap——浪漫只在关键时刻出现一两次，其它地方文人克制。整页浪漫 = 文艺青年博客，不是文人杂志。

---

## 1. 色彩系统

> 色彩源自 DESIGN.md (Atelier du Savoir)。本版在六色基础上做了一项主动取舍：剔除 `secondary-container #fd6e5c` 鲜橙（SaaS 高饱和色，气质反方向），并为 DESIGN.md 未规定用途的 `ink-blue #0D1B2A` 找到明确角色——内文链接常驻色，让 vintage-red 真正稀缺化。

### 1.1 色板

六色为全套系统，**不引入第七色**——克制比丰富重要。

| Token | Hex | 角色 | 用途 |
| --- | --- | --- | --- |
| `bone` | `#F9F7F2` | 主背景 | 全站底色。骨白，比奶油白少一档米黄饱和度——更"精装典藏"少"田野手册"。模拟高端书籍纸面。 |
| `vellum` | `#EBE8E0` | 次级表面 | 侧栏、目录卡、callout 底色、Knowledge Graph 浮层底色。靠"骨白→羊皮纸"色阶差形成层次，不靠阴影。 |
| `charcoal` | `#1A1A1A` | 正文 / 结构 | 全部正文、标题、发丝线、按钮边框。近乎黑但带一点暖灰底——避免纯黑高对比的廉价感。 |
| `ink-blue` | `#0D1B2A` | 内文链接常驻 | 正文中所有 `[[双链]]`、外链、内文引用链接的常驻色与 hover 色。**替代常见的"红色链接 hover"做法**——把红色留给真正稀缺的强调，蓝色承担高频链接。 |
| `vintage-red` | `#8C1C13` | 高姿态 accent | 仅 6 处：dropcap 首字、pullquote 左竖线、章节首页薄装饰线、当前选中态、"已发表"印迹角点 hover、Hero 主标中需强调的一个词。**每屏总面积 ≤ 3%**。 |
| `muted-gold` | `#B08D57` | 元数据 / 装饰 | 章节薄装饰线、罗马数字章节号下划线、"已发表"印迹常驻角点、Knowledge Graph 活跃节点描边、TagChip 的高频标识小印。 |

### 1.2 衍生色与透明度

为减少色板外的色值，衍生色全部基于上述六色的透明度变体：

| Token | 表达 | 用途 |
| --- | --- | --- |
| `charcoal-soft` | `#3A3A38` | 次级正文、引文正文、强调正文 |
| `charcoal-faint` | `#7A7873` | 极弱信息：日期、页码、章节副标、占位符 |
| `rule` | `charcoal / 22%` | 所有发丝线 |
| `rule-strong` | `charcoal / 48%` | 强分隔线：章节首尾、目录项分隔 |
| `rule-gold` | `muted-gold / 60%` | 章节薄装饰线、罗马数字章节号之下 |
| `ink-blue-soft` | `ink-blue / 12%` | 内文链接 hover 极淡背景块 |
| `vintage-red-soft` | `vintage-red / 10%` | pullquote 左竖线之外唯一允许的红色铺底，仅用于 cc 高优先级 callout |

### 1.3 状态印迹

文人杂志里没有"状态颜色"这种 SaaS 概念。原有 5 状态全部转为**章节印迹**——shape 区分（线框 vs 实心）+ 字母区分，颜色只给"已发表"加 1 个 muted-gold 角点。

| 状态 | 字母 | 描边 | 填充 | 角点 | 视觉 |
| --- | `in` | 1px charcoal | 透明 | — | 单色线框 |
| Draft | `dr` | 1px charcoal | 透明 | — | 单色线框（与 in 等同，靠字母区分） |
| Structured | `st` | 1px charcoal | charcoal | — | 实心反白 |
| Published | `pub` | 1px charcoal | charcoal | muted-gold 4×4px 实角点 | 实心反白 + 金角点，唯一的微彩色信号 |
| Archived | `arc` | 1px charcoal-faint | 透明 | — | 极淡线框 + 字母加删除线 |

**关键判断**：vintage-red 不进入状态印迹。改名"复古红"为"高姿态 accent"——它在状态印迹里太张扬，会逼得每张卡片上都有红色，违反"每屏 ≤ 3%"的硬约束。muted-gold 角点是唯一允许的状态彩色信号，金色比红色更"印章锈迹感"，气质对。”

**没有彩色徽章这一类东西。** 状态靠形状 + 字母区分，颜色只给"已发表"加一个金角点。

（DESIGN.md §Components 写"用 Vintage Red 文字标 Archived / Draft"——本版不采纳。vintage-red 在状态上滥用会迅速塌到营销页等级；只有 muted-gold 角点保留。）

### 1.4 色彩使用配额

这是复古色最容易塌的地方——**vintage-red 越克制越高级，越多越廉价**。配额必须写成具体数字：

| 角色 | 每屏配额 | 全文配额 | 出现位置 |
| --- | --- | --- | --- |
| vintage-red | 总面积 ≤ 3% | 总面积 ≤ 5% | 至多 2 处 |
| muted-gold | 总面积 ≤ 8% | 总面积 ≤ 10% | 多处 OK，但单项面积小 |
| ink-blue | 总面积 ≤ 4% | 总面积 ≤ 6% | 仅作为链接色，不铺底 |
| charcoal | 无上限 | — | 主要文字 |
| bone / vellum | 无上限 | — | 主背景与层次 |

**自查方法**：在任意页面对话框里截图后取色统计——vintage-red 像素占比 > 3% 即过载，必须削减。这是硬约束，不是建议。

### 1.5 反默认陷阱自检

- ✅ 主背景 `#F9F7F2`（bone）比 AI 默认奶油 `#F4F1EA` 更冷更克制——擦边但明显偏离陷阱中心。
- ✅ 强调色拆为"高姿态红 + 装饰金 + 链接蓝"三角色，避免 AI 默认"单一红色或单一橙色覆盖所有 accent"的陷阱。
- ✅ 正文 `charcoal #1A1A1A` 近黑但非纯黑，避开"奶油白 + 纯黑高对比"的 AI 默认陷阱另一面。
- ✅ 不用紫、不用薄荷绿、不用鲜橙、不用鲜红——尤其剔除 DESIGN.md 里 `secondary-container #fd6e5c` 鲜橙，气质反方向。
- ✅ 几乎无渐变、无彩色背景块、无深色 hero——避开 SaaS 默认。
- ✅ muted-gold 不与鲜橙混淆——`#B08D57` 比鲜橙饱和度低、亮度暗，是古典装饰金而非 SaaS 高亮金。

---

## 2. 字体系统（最关键章节）

> 巴黎文人杂志的高级感 90% 来自这里。这一节是最不能偷懒的。

### 2.1 字体角色

| 角色 | 字体 | 字重 / 处理 | 用法 |
| --- | --- | --- | --- |
| Display | **Cormorant Garamond** | 400 + 500，可用 italic 400 | Hero 主标、文章 H1、章节首页大标。这是"巴黎文人"的核心——高对比度衬线、字形细长、画意重。 |
| Body | **Source Serif 4** | 400 + 600 italic | 全文正文。比 Cormorant 更工整、更适合长读，但同属当代出版衬线，气质一致。 |
| Meta | **IBM Plex Mono** | 400，全小写 | 元数据、章节编号、状态印迹、日期、目录编号、标签。 |
| CJK 配对 | **思源宋体 Source Han Serif** | 400 / 500 | 中文 fallback，配 Cormorant 时用 500 略提重，配 Source Serif 4 时用 400。 |

**不做的事**：
- 不用 Inter、Geist、SF 作为任何角色字体——它们是 SaaS 默认，是气质反方向。
- 不用 EB Garamond / Adobe Garamond——太"古典书籍"，反而落进"复古到廉价"的陷阱。Cormorant 的当代细线更准确。
- 不用 Playfair Display——太营销页、太"婚礼请柬"。
- 不混入无衬线字体作为正文或标题——文人杂志是衬线一以贯之的。

### 2.2 字号阶梯

base 18px，modular scale（_minor third 1.2_）：

```
Display XXL  4.2rem  (67px)   仅用于 Home Hero 主标、章节首页
Display XL   3.2rem  (51px)   文章 H1
Display L    2.4rem  (38px)   章节 H2、区块标题、Article Hero 副标
Display M    1.75rem (28px)   H3、目录条主语
Display S    1.375rem (22px)  H4、卡片标题
Body L       1.125rem (18px)  正文（杂志型偏大）
Body         1rem     (16px)  次级正文、callout 正文
Meta         0.8125rem (13px) 等宽元数据
Meta S       0.75rem  (12px)  印迹、页码
```

### 2.3 行高、字间距、对齐（精度在这里）

这一节是巴黎文人杂志最容易塌的地方，必须用具体数字。

| 元素 | 行高 | letter-spacing | 字重 | 备注 |
| --- | --- | --- | --- | --- |
| Display XXL | 1.02 | `-0.015em` | 400 | 大字必须紧，否则松散显廉价 |
| Display XL | 1.05 | `-0.01em` | 400 | 文章 H1 |
| Display L | 1.12 | `-0.005em` | 400 | H2 |
| Display M | 1.2 | `0` | 500 | H3，500 提重量 |
| Body L (正文) | **1.65** | `0.005em` | 400 | 杂志型偏松，长读舒适 |
| Body L italic (引文) | 1.55 | `0.01em` | 400 italic | 引文用斜体，行高略紧 |
| Meta (mono) | 1.4 | `+0.04em` | 400 | 等宽加字间距 = 机构感 |
| Meta S (印迹) | 1.2 | `+0.06em` | 400 | 印迹字间距最宽 |

中文部分行高略增 0.05（思源宋体比 Cormorant 字身大）。

### 2.4 字符处理

- **所有 meta 字段统一小写**：`domain · topic / type / 2026.06.12`。绝不 ALL CAPS——大规模大写加等宽 = 营销页"科技感"，我们要"档案馆系统感"。
- **章节号用罗马数字**：`ⅰ / ⅱ / ⅲ` 而不是 `1 / 2 / 3`。这是文人气质的关键——阿拉伯数字立刻塌成工作手册。
- **Dropcap**：每篇文章首段首字做 dropcap，Cormorant 500、4 行高、`vintage-red` 色、左侧 0.5em 内缩。一篇文章只做一处。这也是 vintage-red 最高频的合法使用点。
- **斜体使用规则**：Cormorant italic 只用在三种地方：(a) 内文引文（"《思考，快与慢》卡尼曼说……"），(b) 章节副标题，(c) Hero 主标中需要强调的一个词。其它地方不用斜体。

### 2.5 字体加载

- Cormorant 与 Source Serif 4 必须预加载，避免 FOUT 破坏首屏气质。
- 用 `font-display: swap`，但 meta 字体 IBM Plex Mono 用 `font-display: fallback`，因为它出现位置多，swap 闪动会很明显。
- 中文思源宋体按需子集化，或用 Fontsource 多语言 fallback。

---

## 3. 间距 / 圆角 / 边框 / 阴影

### 3.1 间距阶

8 倍数 + 4 微调：`2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`。

文人杂志的间距特征是**正文上下大留白，行内紧凑**：

- 章节之间 `mt-32 / mb-24` 起步
- 标题与正文之间 `mb-16`（大留白）
- 段落之间 `mb-20`（行内紧凑度，不要 SaaS 的 mb-8）
- 印迹与正文 `gap-12`

### 3.2 圆角

```
0   分隔线、印章、目录行、KnowledgeCard 描边
2px 输入框、文件式角标（极克制）
4px 仅 tag 元数据 chip（远小于 SaaS 标配）
6+  禁用
```

**圆角克制是文人杂志的硬指标**。大圆角 = SaaS 卡片 = 气质塌。

### 3.3 边框

唯一允许：`1px solid var(--rule)`。
强分隔：`1px solid var(--rule-strong)`。
薄双线（仅章节首页中央）：`1px + 4px gap + 1px` 双线，文人杂志的章节装饰惯用。

### 3.4 阴影

**几乎不用**。唯一例外：印迹方块的内嵌压痕用 `inset 1px 1px 0 var(--charcoal / 20%)`，模拟纸面压痕。绝不用外阴影。

---

## 4. 布局系统

### 4.1 容器

```
container-text   680px    正文阅读（杂志型窄，给 Cormorant 呼吸）
container        1100px   默认内容
container-wide   1380px   图谱、大表格
```

正文 680px 比 v0.1 的 720 还窄——文人杂志气质要 Cormorant 在一行里只跑大约 12-14 个西文词，超过就散气。

### 4.2 通用页眉页脚（"页码系统"）

每个页面顶部一条 `rule-strong` 横线，下方一行 mono 页眉：

```
leoht — revue                                    home / no ⅰ
─────────────────────────────────────────────────
```

- 左：站点名（小写 mono）+ emdash + `revue`（用"杂志"的法文词比 magazine高级）
- 右：当前章节罗马编号 + 罗马总编号，`no ⅲ / viii` 风格

页脚对称：

```
─────────────────────────────────────────────────
leoht v0.2 · printed 2026.06.28         fin / no ⅰ
```

`fin` 是法语"完"，比 end / EOF 高级。

这种页眉页脚让每个页面都呈现"翻开杂志的某一页"——但要克制，**不要在页眉加日期、不要加页码边距标尺、不要加手翻动效**。一条线、一行字，仅此而已。

### 4.3 内容栅格

- **Home / Library / Tag**：单栏、左对齐、固定 container
- **Article**：正文 1（680px）+ 右栏 1（260px）。右栏是"文件式目录卡" + 印迹签名 + 相关条目。
- **章节首页**（专题集子）：中央对称布局，Cormorant 大标居中、薄双线、dropcap——是文人杂志里少数允许中央对齐的页面。

---

## 5. 组件库 v0.2

### 5.1 知识卡片 `KnowledgeCard`

不是 SaaS card 是"杂志条目"。

```
┌────────────────────────────────────────────────┐
│ № ⅴ · psychological effect                    │ ← mono meta，罗马编号 + 内容类型
├────────────────────────────────────────────────┤
│                                                │
│ 损失厌恶                                       │ ← Cormorant 500 22px
│ 为什么"失去"比"得到"更刺激                       │ ← Cormorant italic 18px 副标
│                                                │
│ 人对同等损失的痛苦感受约是同等收益的两倍……       │ ← Source Serif 4 18px
│                                                │
├────────────────────────────────────────────────┤
│ domain · behavior    topic · 行为经济学          │ ← mono meta 13px
│ tags · 决策 / 订阅转化 / 增长                   │
└────────────────────────────────────────────────┘
```

- 1px 直角描边、内部 rule 横线分隔头/身/尾，**零圆角**。
- hover：背景 `vellum`（从 bone 切到羊皮纸色制造层次）、左侧 `vintage-red` 竖线短一截（24px 高、2px 粗）、不位移、不阴影。
- 卡片编号 `№ ⅴ` 用罗马数字——比 v0.1 的 `005` 更文人。卡片顶部细线（`1px top-border`）按类型分色，借鉴 DESIGN.md：**muted-gold** 顶线标记"Topic 卡"（心理学效应、增长模型等概念类），**charcoal** 顶线标记"Note 卡"（札记、摘录、复盘）。这是 muted-gold 的主要用途之一。

### 5.2 状态印迹 `StatusStamp`

见 1.3。单色印迹、字母、1px 内嵌压痕。印迹本身用 Cormorant 400 小写而不是 mono——更"印章"感。

### 5.3 标签 chip `TagChip`

**不再叫 pill**。文件式 chip：

```
[vellum] · 1px rule · 4px radius · mono 13px
hover → 1px rule-strong · 浅 ink-blue-soft 底 · 文字色由 charcoal 转 ink-blue
```

不是 full-rounded pill、不是彩色填充。出 5 次以上的热门标签可在 chip 前加一个 muted-gold `№` 罗马数字小印（讨论见 §1.1 muted-gold 用途）。

### 5.4 目录条 `TOCRow`

```
ⅲ · 心理学效应如何影响定价               · 042
     └─ 行为经济学 · 定价心理学
```

- 罗马编号 mono、标题 Cormorant 500 22px、上下细线 `rule`、页码 mono。
- hover：整行 `padding-left: +1ch`、编号变 `vintage-red`、底部薄双线变 `rule-gold`。

### 5.5 链接与"按钮"

文人杂志没有"按钮"概念，只有被强调的链接。

- 正文链接：`ink-blue` 文字 + 下划线偏移 2px（偏移线用 `ink-blue / 60%`）。
- hover：文字颜色加深为 `vintage-red`，下划线变实线 1px、颜色变 `vintage-red`。这是 ink-blue → vintage-red 的唯一升级路径——平时是蓝，hover 才罕见地变红。
- 主操作（如"进入内容库"）：`No ⅴ · Enter the library →`，mono 小写 + Cormorant italic 主词 + `→` 前缀。
- 次操作：纯文字 + 薄下划线。

### 5.6 印迹签名 `SignatureStamp`（核心签名，见 §6.1）

### 5.7 Dropcap 首字 `Dropcap`

文章首段首字：

```
[letter: Cormorant 500, 4-line height, vintage-red 色, line-height 0.85, margin-right 0.08em, margin-top 0.04em]
```

一篇文章只做一处。这是文人杂志最具识别度的元素，但也是最危险——做两次就廉价。

### 5.8 引文 `Pullquote`

```
[vintage-red] ┃ 损失厌恶不是用来"骗"用户的——               ┃
              ┃ 它是用来对齐用户 Already 已有心理预期。    ┃
                              — 我的理解, vol ⅲ · no 2
```

> 注：拉引文不使用大引号符号 " "——靠 Cormorant italic 与左侧 vintage-red 竖线足以构成视觉引文。加引号符号立刻塌成博客。

- Cormorant italic 400 1.5rem、行高 1.55
- 左侧 vintage-red 2px 竖线、padding-left 1rem
- 署名右对齐、mono 13px 小写
- 不用彩色块、不用大引号符号——这是常见误区，立刻塌成博客。

### 5.9 知识图谱 `LocalGraph`

- 节点用 Cormorant 500 的单字母 + 1px 描边方块，**不是圆球**。
- 连线用 `rule` 直线，当前文章节点描边变 `muted-gold`、其他 hover 节点变 `ink-blue`。
- 节点 hover 显示 mono 工具提示，不是浮卡。
- 活跃节点（高连接度）可用 muted-gold 填充反白——是 muted-gold 的主要展示位之一。

---

## 6. 签名元素 (Signature)

### 6.1 签名 1：文章页右上"印迹签名"

每篇文章页右上 1/4 处有一个**印章压感方块**：

```
┌─────────────────────┐
│                     │
│   № ⅴ · BEH · 04     │ ← Cormorant 500 编号
│   loss-aversion      │ ← mono slug 作为印迹文
│   revue · 2026 · vi │ ← mono 月度卷号
│                     │
└─────────────────────┘
```

- 1px 内嵌压痕边线（`inset 1px 1px 0 var(--charcoal / 20%)`），内部 `vellum`
- 全部文字 charcoal，编号 Cormorant 500，slug 与卷号 mono
- "已发表"状态时，印迹右下角加 4×4px muted-gold 实角点（与 §1.3 状态印迹对齐）
- **可小程度旋转 -1.5deg** 模拟手戳——但绝不旋转多于此值，否则廉价
- 文章页唯一允许的装饰性元素

这是把"被引用""被指向""被复制走"这种知识系统真实使用隐喻直接视觉化。

### 6.2 签名 2：罗马数字编号系统 + 卷期号

每篇知识卡有一个稳定编号系统：

```
№ ⅴ.BEH.04
   │  │   └─ 领域内序号（阿拉伯，因为太长难读）
   │  └───── domain 三字母缩写
   └───────── 罗马数字全站总序号
```

- 全站总序号用罗马数字，传达"这是个体系"
- 领域内序号用阿拉伯，避免罗马数字大于 10 后越读越累
- 该编号统一出现在：卡片顶部、文章页右上印迹、RSS、可选 URL `/n/ⅴ.BEH.04`（注意 slug 双层）

同时引入**卷期号**：每个月的文章集合成一卷，每篇标记 `vol ⅲ · no 2`（卷 3 的第 2 篇）。这种"卷期号"语言是杂志气质的硬指标，比"2026.06.12 时间戳"高级一档。

### 6.3 签名 3：章节首页中央对称

专题集子（Collection）的页面是巴黎文人杂志最经典的版式——中央对称、大留白、罗马数字章节首、薄双线、dropcap。这是站点里唯一允许中央对齐的页面类型，作为对长期读者的视觉奖励。

```
                   vol ⅲ · no 2

              ═══════════════════
              心理学如何影响产品设计
                    ⅰ
              ═══════════════════

              [dropcap 起]
              本期收录 4 篇……
```

但这是 P2 阶段的事，MVP 不做。

---

## 7. 关键页面线框 (ASCII)

### 7.1 Home

```
leoht — revue                                        home / no ⅰ
═══════════════════════════════════════════════════════════════════

   revue for the                                                  ← Cormorant 400 67px
   experience designer                                            左对齐，分两行

   一本被反复翻阅的 UX 知识手册 · 沉淀心理学、增长、产品、
   方法论与案例 · vol ⅲ · 已收录 No ⅴ 条

   → enter the library        → browse index

───────────────────────────────────────────────────────────────────

  in this issue                                       ← Cormorant italic 38px H2

═══════════════════════════════════════════════════════════════════

  № ⅴ · PSYCH-EFFECT            № ⅳ · UX-PRINCIPLE
  损失厌恶                       希克定律

  人对同等损失的痛苦感受约是     决策时间随选项数对数增长
  同等收益的两倍……              ……

  behavior · 行为经济学          ux · 可用性原则
  〔pub〕〔结于 vol ⅲ · no 2〕  〔pub〕〔……〕

───────────────────────────────────────────────────────────────────

  index by domain

  behavior   ──── No ⅹⅹⅲ      growth     ──── No ⅹⅳ
  ux         ──── No ⅹⅹⅹ      product    ──── No ⅺ
  thinking   ──── No ⅹⅷ      case study ── No ⅸ

  → enter domain                              → see all tags
───────────────────────────────────────────────────────────────────

  tags most used
  〔决策 · ⅹ〕〔注意力 · ⅻ〕〔转化 · ⅸ〕……

───────────────────────────────────────────────────────────────────
leoht v0.2 · printed 2026.06.28                              fin / no ⅰ
```

### 7.2 Library

```
leoht — revue                                          lib / index
═══════════════════════════════════════════════════════════════════

  library — 全部条目                                              No ⅴ entries

  filter ·  all · behavior · ux · growth · product · thinking · case
  type  ·  all · 原则 · 效应 · 案例 · 复盘 · 札记 · 摘录

───────────────────────────────────────────────────────────────────

  № ⅴ.BEH.04    损失厌恶                               vol ⅲ · no 2
                行为经济学 · 决策 / 订阅转化 / 增长        〔pub〕
  ───────────────────────────────────────────────────────────────
  № ⅳ.UX.07     希克定律                               vol ⅲ · no 1
                可用性 · 决策 / 表单设计                    〔pub〕
  ───────────────────────────────────────────────────────────────
  № ⅲ.GRO.02    AARRR 模型                             vol ⅲ · no 1
                增长 · 激活 / 留存 / 北极星                〔pub〕
  ───────────────────────────────────────────────────────────────
  ...

───────────────────────────────────────────────────────────────────
leoht v0.2                                            fin / lib / index
```

Library 默认列表式，每行信息密度高、用罗马编号 + 卷期号铺。

### 7.3 Article

```
leoht — revue                                 lib / № ⅴ.BEH.04
═══════════════════════════════════════════════════════════════════

  index / behavior / 行为经济学                ┌─────────────────┐
                                                │                  │
  № ⅴ · PSYCHOLOGY EFFECT                      │   № ⅴ · BEH · 04  │ ← 印迹签名
                                                │   loss-aversion   │
  损失厌恶                                       │   revue · vi     │ ← 旋转 -1.5°
  [italic Cormorant] 为什么"失去"比"得到"更刺激    │                  │
                                                └─────────────────┘
───────────────────────────────────────────────────────────────────

  source ─ 《思考，快与慢》卡尼曼 · ch.26
  stamp ─ pub / ser：bk · 2011

───────────────────────────────────────────────────────────────────

   F     损失厌恶不是用来"骗"用户的——它是对                ← Dropcap Cormorant 500
   ┌──  着用户 Already 已有心理预期的一种设计                │ vintage-red 色，4 行高
         语言。卡尼曼在《思考，快与慢》中提出：……
                                                                          [内文链接 ink-blue → hover vintage-red]

  Ⅰ. 免费试用的"拥有感"陷阱                                       ← Cormorant 500 罗马数字章节号
  ──────────────                                                  ← rule-strong 章节下划线

  ……

  Pullquote callout：

  ┃ "损失厌恶不是用来骗用户的——它是对齐用户心理预期的一种
  ┃ 设计语言。" — 我的理解, vol ⅲ · no 2

  Ⅱ. 默认勾选与默认续费
  ──────────────

  ……

  applies to
  ▓ UX     ▓ GROWTH     〔stamp 形式〕

───────────────────────────────────────────────────────────────────

  related entries

  → № ⅳ.UX.07    认知负荷                  shares · 决策 / 表单
  → № ⅲ.GRO.02   价格锚定                  shares · 增长 / 订阅
  → № ⅵ.BEH.05   禀赋效应                  related · explicit

───────────────────────────────────────────────────────────────────

  tags · 决策 / 订阅转化 / 增长 / 心理学 / 原则

───────────────────────────────────────────────────────────────────
leoht v0.2 ──────────────────────────────────────────── fin / № ⅴ.BEH.04
```

### 7.4 Tag Page

```
leoht — revue                                          tag / 决策
═══════════════════════════════════════════════════════════════════

  tag : 决策
  ─────────
  belongs to group · 行为层级
  No ⅻ entries · most used with 注意力(ⅴ) / 转化(ⅳ)

───────────────────────────────────────────────────────────────────

  filter by type · [ all · 原则 · 效应 · 案例 · 复盘 ]
  filter by domain · [ all · behavior · ux · growth ]

───────────────────────────────────────────────────────────────────

  № ⅴ.BEH.04   损失厌恶                       psy effect
  № ⅳ.UX.07    希克定律                        principle
  № ⅲ.BEH.01   选择过载                        psy effect
  ...

───────────────────────────────────────────────────────────────────

  related tags
  〔注意力 · ⅴ〕〔转化 · ⅳ〕〔动机 · ⅱ〕

───────────────────────────────────────────────────────────────────
leoht v0.2 ──────────────────────────────────────── fin / tag / 决策
```

---

## 8. 实施优先级

### Phase 1：tokens 与字体加载

在 Astro 项目初始化时定下来：CSS variables、Tailwind config、Cormorant + Source Serif 4 + IBM Plex Mono 三字体（Fontsource 预载）、状态印迹组件、TagChip、Dropcap、Pullquote 三个排版本地组件。

**字体加载是 Phase 1 的硬指标**——FOUT 破坏巴黎文人气质最严重，必须 `preload` + `font-display: swap` 调好。

### Phase 2：Home 与 Library

替换现有 React 组件为杂志型布局。Library 列表式，Home Hero 用 Cormorant 大标分两行。

### Phase 3：Article 与 Tag

Article 的右栏目录卡 + 印迹签名 + Dropcap + Pullquote 是签名落地的关键。Tag 页是横向探索入口。

### Phase 4：Collection、Graph、一次"减一件配饰"复盘

Collection 章节首页中央对称版式在此阶段做。LocalGraph 节点 Cormorant 单字母方块。最后做一次"减一件配饰"检查（见 SKILL.md 的 Chanel 原则）——尤其要复核印迹旋转角度、dropcap 出现次数、vintage-red 总面积比例（≤ 3%）。

---

## 9. 复古不廉价的陷阱清单

巴黎文人杂志方向最容易在这里塌成普通文学博客，每条都要明确避开：

1. **dropcap 用两次**：一篇文章只做一处。做第二处立刻塌成博客。
2. **印迹旋转角度超 -2°**：-1.5° 是上限。任何超过都廉价到了极点。
3. **vintage-red 大面积铺**：每屏总面积 ≤ 3%（不是估算——开发时用截图取色工具核对），每屏最多 1 处大面积（dropcap 或 pullquote 竖线选其一）。当一屏同时出现 dropcap + pullquote + 选中态 + 红链接 hover 时，必然超载。
4. **muted-gold 当装饰随便撒**：muted-gold 虽然配额较宽（≤ 8%），但它越稀缺越显贵。不要每个 chip / 每条线都给 gold——只在"印章 / 章节号下划线 / 高连接度图谱节点"这三处使用。
5. **ink-blue 当 accent 用**：ink-blue 是高频链接色，不是强调色。不要用来标重点、不要用来填按钮——它一旦越位，vintage-red 就被稀释。
6. **纸张噪点纹理**：完全不做。巴黎文人杂志是印刷品的高级感，不是旧物的陈旧感。
7. **斑驳印刷 / 不对齐印刷 / "复古滤镜"**：完全不做。
8. **大引号符号 " "**：pullquote 不用引号符号——用 Cormorant italic 与 vintage-red 竖线足以。加大引号立刻塌。
9. **模仿真实杂志纸边毛糙**：完全不做。
10. **混入无衬线正文**：文人杂志的衬线一致性是灵魂，任何无衬线正文立刻塌成 SaaS。
11. **Cormorant 用到正文**：Cormorant 高对比度衬线在长读时眼睛累，正文必须用 Source Serif 4。Cormorant 只用在 hero / H1 / H2 / dropcap。
12. **罗马数字过度使用**：罗马数字只用在全站总序号、章节号、卷号。领域内序号、卡片内子编号、列表序号用阿拉伯。超过 10 的罗马数字读起来累，要克制。
13. **装饰线过多**：薄的 `rule` 用在分隔，`rule-strong` 只用在章节首尾、目录项，金色 `rule-gold` 只用在章节号下划线。每屏装饰线不超过 3 条。
14. **"revue"、"vol ⅲ"、"fin"等法语元素堆叠**：要么法语要么法语缩影，不堆。已经用了 `revue / vol / no / fin`，不再加更多法语词。
15. **采纳 DESIGN.md 鲜橙 `secondary-container #fd6e5c`**：剔除。它是 SaaS 高饱和色，气质反方向——vintage-red 已经承担所有"高姿态强调"职责，不需要鲜橙。

---

## 10. 我还没确定的几件事

- Cormorant vs EB Garamond vs Cormorant Infant：「Cormorant 行高紧字距高对比」与「EB Garamond 古典书目」之间，还需要看到真实渲染才能定。Cormorant Infant（Infant 是儿童字变体、字身稍宽）可能比标准 Cormorant 更适合大字号 hero——但风险是落到"婚礼请柬"。
- 中文配对：思源宋体 vs 思源宋体 Heavy vs 衡山毛筆フォント，三个都需要实际对比测字。
- 卷期号的实际使用方式：是按月份（vol ⅲ = 6 月）还是按季度？MVP 阶段每月一卷是否太密？MVP 阶段先不引入卷期号、Phase 2 再加，可能更稳。
- 印迹方块是否真的需要"压痕 inset shadow"，还是 1px 内嵌线足够——必须看到真实渲染才知道。过度模拟纸感会落入"做旧"陷阱。
- **DESIGN.md 隐含的 Bodoni Moda 选型 vs 本版 Cormorant 选型**：DESIGN.md typography 段写的是 Bodoni Moda（更"Paris Capitale 时尚杂志"高对比），本版选 Cormorant（更"Paris Review 文人"高对比）。两者都是高对比衬线但气质有别：Bodoni 更冷峻工业、Cormorant 更文气画意。建议在 Phase 1 渲染两版 hero 的小样对比，由你看真实效果决定。
- **ink-blue 的中文 fallback**：`#0D1B2A` 中文配对应选思源宋体 Heavy 还是别的？色相协调要在渲染后定。
- **muted-gold `#B08D57` 在 OLED 暗屏上的可读性**：金色在低亮度屏上可能塌成棕黄，需在真实设备上验证。若不达标可考虑提亮到 `#C09A66` 但不再增色。

---

## 附：与 v0.1（田野手册型）的主要差异

| 维度 | v0.1 田野手册 | v0.2 巴黎文人杂志（DESIGN.md 色彩融合） |
| --- | --- | --- |
| 主底色 | 黄褐 `#EFE9D8` | 骨白 `bone #F9F7F2`（DESIGN.md） |
| 次级表面 | 黄褐软 `#EFE7CC` | 羊皮纸 `vellum #EBE8E0`（DESIGN.md） |
| 正文色 | 深墨绿 `#1F2E26` | 炭墨 `charcoal #1A1A1A`（DESIGN.md，含暖灰底） |
| 高姿态 accent | 暗红 `#8E2B1F` | 复古红 `vintage-red #8C1C13`（DESIGN.md） |
| 装饰色 | — | **新增** muted-gold `#B08D57`（章节薄装饰线、金角点） |
| 链接色 | accent 复用 | **新增** ink-blue `#0D1B2A` 常驻链接色（替代红色链接） |
| accent 配额 | ≤ 5% | ≤ 3%（更克制，因 muted-gold 分流装饰职责） |
| 状态印迹彩色 | 复古红角点 | **改用** muted-gold 角点（红色太张扬） |
| 正文字体 | Source Serif 4（同主体） | Cormorant 主标 + Source Serif 4 正文 |
| Headline 语调 | 工具书 | 文学杂志 |
| 章节号 | 三段阿拉伯 `005.BEH.04` | 罗马 + 阿拉伯 `№ ⅴ.BEH.04` + 卷期号 |
| 页眉语 | `field manual` | `revue / vol / fin`（法语） |
| 装饰 | 编号、印迹 | 编号、印迹、dropcap、薄双线、pullquote 竖线、金角点 |
| 与 DESIGN.md 偏离 | — | 剔除鲜橙 `secondary-container #fd6e5c`；不采纳"Vintage Red 标 Archived/Draft"做法（红色合规风险） |

V0.2 在结构性骨架上继承 V0.1（编号、印迹、知识卡片直角描边、链接无按钮），色彩系统改用 DESIGN.md（Atelier du Savoir）六色色板；本版本对色板未规定的 ink-blue 赋予"内文链接常驻色"角色，对状态印迹的彩色信号从 vintage-red 改为 muted-gold 以守住"vintage-red ≤ 3%"配额。字体仍待 Phase 1 渲染小样决定 Cormorant vs Bodoni Moda。