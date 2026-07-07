---
title: 选项卡模式 (Tabs Pattern)
slug: 选项卡模式-tabs-pattern
summary: 来自国际标准组织 W3C Web 可访问性倡议 (WAI) 的免费在线可访问性资源。
type: knowledge
status: published
tags: ["可访问性", "可用性", "设计模式", "设计指南", "组件"]
domain: ux
source_author: W3C Web Accessibility Initiative (WAI)
source_url: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
# published_at:
related: []
---
选项卡模式 (Tabs Pattern)

## 关于此模式

选项卡（Tabs）是一组分层的页面内容区域，称为选项卡面板（tab panels），一次只显示一个面板的内容。每个选项卡面板都有一个关联的选项卡元素（tab element），激活该元素时就会显示相应的面板。选项卡元素列表排列在当前显示面板的一侧，最常见的是在顶部边缘。

描述此设计模式的术语包括：

选项卡或选项卡式界面 (Tabs or Tabbed Interface)

一组选项卡元素及其关联的选项卡面板。

选项卡列表 (Tab List)

包含在 [tablist](https://w3c.github.io/aria/#tablist) 元素中的一组选项卡元素。

[tab](https://w3c.github.io/aria/#tab)

选项卡列表中的一个元素，作为其中一个选项卡面板的标签，可以通过激活它来显示该面板。

[tabpanel](https://w3c.github.io/aria/#tabpanel)

包含与选项卡相关联内容的元素。

当选项卡式界面初始化时，会显示一个选项卡面板，并且其关联的选项卡会应用特定样式以指示其处于活动状态。当用户激活另一个选项卡元素时，之前显示的选项卡面板将被隐藏，与新激活的选项卡相关联的选项卡面板将变为可见，并且该选项卡将被视为“活动”状态。

![](https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-tabs.svg)

## 示例

- [自动激活的选项卡 (Tabs With Automatic Activation)](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/)：一种选项卡小部件，当选项卡获得焦点时，它们会自动激活并显示其面板。
- [手动激活的选项卡 (Tabs With Manual Activation)](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-manual/)：一种选项卡小部件，用户通过按空格键（Space）或回车键（Enter）来激活选项卡并显示其面板。

## WAI-ARIA 角色、状态和属性

- 用作这组选项卡容器的元素具有角色 [tablist](https://w3c.github.io/aria/#tablist)。
- 每个用作选项卡的元素都具有角色 [tab](https://w3c.github.io/aria/#tab)，并且包含在具有角色 `tablist` 的元素中。
- 每个包含 `tab` 内容面板的元素都具有角色 [tabpanel](https://w3c.github.io/aria/#tabpanel)。
- 如果选项卡列表具有可见标签，则具有角色 `tablist` 的元素其 [aria-labelledby](https://w3c.github.io/aria/#aria-labelledby) 属性被设置为指向该标签元素的值。否则，`tablist` 元素将具有由 [aria-label](https://w3c.github.io/aria/#aria-label) 提供的标签。
- 每个具有角色 `tab` 的元素都具有 [aria-controls](https://w3c.github.io/aria/#aria-controls) 属性，该属性引用其关联的 `tabpanel` 元素。
- 处于活动状态的 `tab` 元素其 [aria-selected](https://w3c.github.io/aria/#aria-selected) 状态被设置为 `true`，而所有其他 `tab` 元素该状态被设置为 `false`。
- 每个具有角色 `tabpanel` 的元素都具有 [aria-labelledby](https://w3c.github.io/aria/#aria-labelledby) 属性，该属性引用其关联的 `tab` 元素。
- 如果某个 `tab` 元素包含弹出菜单，则其 [aria-haspopup](https://w3c.github.io/aria/#aria-haspopup) 属性将设置为 `menu` 或 `true`。
- 如果 `tablist` 元素是垂直方向排列的，则其具有 [aria-orientation](https://w3c.github.io/aria/#aria-orientation) 属性，且值设置为 `vertical`。`tablist` 元素的 `aria-orientation` 默认值为 `horizontal`。