---
title: 折叠/展开模式 (Disclosure Pattern)
slug: 折叠展开模式-disclosure-pattern
summary: 来自国际标准组织 W3C Web 可访问性倡议 (WAI) 的免费在线可访问性资源。
type: article
status: published
tags: [可访问性, AI对话, 可用性, 交互设计]
domain: ux
source_title: W3C Web Accessibility Initiative (WAI)
source_author: W3C Web Accessibility Initiative (WAI)
source_url: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
# published_at:
related: []
---

折叠/展开 (Show/Hide) 模式

## 关于此模式

折叠/展开 (disclosure) 是一种允许内容被折叠（隐藏）或展开（显示）的部件。它包含两个元素：一个折叠/展开[按钮 (button)](https://www.w3.org/WAI/ARIA/apg/patterns/button/)，以及一段由该按钮控制可见性的内容区域。当受控内容被隐藏时，该按钮通常会被样式化为普通的下压按钮，带有一个向右的箭头或三角形，以暗示激活该按钮将显示额外的内容。当内容可见时，箭头或三角形通常会向下指。

## 键盘交互

当折叠/展开控件获得焦点时：

- Enter：激活折叠/展开控件，并切换折叠/展开内容的可见性。
- Space：激活折叠/展开控件，并切换折叠/展开内容的可见性。

## WAI-ARIA 角色、状态和属性

- 显示和隐藏内容的元素具有 [button](https://w3c.github.io/aria/#button) 角色。
- 当内容可见时，具有 `button` 角色的元素其 [aria-expanded](https://w3c.github.io/aria/#aria-expanded) 设置为 `true`。当内容区域隐藏时，该属性被设置为 `false`。
- 可选地，具有 `button` 角色的元素可以为 [aria-controls](https://w3c.github.io/aria/#aria-controls) 指定一个值，该值引用包含所有显示或隐藏内容的元素。