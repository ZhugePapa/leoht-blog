---
title: 文本字段 – Material Design 3
slug: 文本字段-material-design-3
summary: 文本字段允许用户在界面中输入文本。它们通常出现在表单和对话框中。
type: article
status: published
tags: [AI对话, 表单设计, 可用性, 交互设计]
domain: ux
source_title: Material Design
source_author: Material Design
source_url: https://m3.material.io/components/text-fields/overview
# published_at:
related: []
---

- 确保文本字段看起来具有交互性
- 两种变体：实心型（filled）——实心文本字段比描边文本字段具有更强的视觉强调。它们通常用于对话框和简短表单中，其样式能够吸引更多注意力；以及描边型（outlined）——描边文本字段的视觉强调比实心文本字段弱。它们通常用于长表单中，其减弱的强调有助于简化布局。
- 文本字段的状态（状态展示了组件或 UI 元素的交互状态。[了解更多关于状态的信息](https://m3.material.io/m3/pages/interaction-states/overview)）（空白、已输入、错误等）应该一目了然
- 保持标签和错误信息简短且易于操作
- 文本字段通常出现在表单和对话框中。对话框在用户流中提供重要的提示。[了解更多关于对话框的信息](https://m3.material.io/m3/pages/dialogs/overview)

![2种文本字段变体：实心型与描边型。](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx2u2h3p-1.png?alt=media&token=71a990c4-03bd-4c34-afc6-130018ed186e)

实心文本字段 描边文本字段

## 可用性与资源

<table><thead><tr><th>类型</th><th>资源</th><th>状态</th></tr></thead><tbody><tr><th rowspan="2">设计</th></tr><tr><td><span><a href="https://www.figma.com/community/file/1035203688168086460"><span>设计工具包 (Figma)</span></a></span></td><td><crbn-badge><span>可用</span></crbn-badge></td></tr></tbody><tbody><tr><th rowspan="5">实现</th></tr><tr><td><span><a href="https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html"><span>Flutter</span></a></span></td><td><crbn-badge><span>可用</span></crbn-badge></td></tr><tr><td><span><a href="https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#textfield"><span>Jetpack Compose</span></a></span></td><td><crbn-badge><span>可用</span></crbn-badge></td></tr><tr><td><span><a href="https://github.com/material-components/material-components-android/blob/master/docs/components/TextField.md"><span>Android Views (MDC-Android)</span></a></span></td><td><crbn-badge><span>可用</span></crbn-badge></td></tr><tr><td><span><a href="https://github.com/material-components/material-web/blob/main/docs/components/text-field.md"><span>Web</span></a></span></td><td><crbn-badge><span>可用</span></crbn-badge></td></tr></tbody></table>

关闭

- 颜色：全新色彩映射以及与动态色彩的兼容性。动态色彩从用户的壁纸或应用内内容中提取单一颜色，并创建一个分配给 UI 元素的无障碍色彩方案。[了解更多关于动态色彩的信息](https://m3.material.io/m3/pages/dynamic/choosing-a-source)

![具有 M3 色彩映射的实心和描边文本字段。](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx2u3e4d-2.png?alt=media&token=896d9b04-c327-4904-9c1b-368bb684d53c)

文本字段拥有全新的色彩映射