---
title: 悬浮菜单 (Fly-out Menus)
slug: 悬浮菜单-fly-out-menus
summary: 来自国际标准组织 W3C Web Accessibility Initiative (WAI) 的免费在线可访问性资源。
type: article
status: published
tags: [可访问性, 导航设计, AI对话, 可用性, 交互设计]
domain: ux
source_title: W3C Web Accessibility Initiative (WAI)
source_author: W3C Web Accessibility Initiative (WAI)
source_url: https://www.w3.org/WAI/tutorials/menus/flyout/#keyboard-users
# published_at:
related: []
---

通过视觉效果和标记（Markup）来指示带有子菜单的导航菜单项。在以下示例中，子菜单通过图标进行视觉指示。WAI-ARIA 标记 `aria-expanded="false"` 声明该子菜单导航目前处于隐藏或“折叠”状态。

## 悬浮菜单功能 (Fly-out functionality)

悬浮功能是使用 CSS 和脚本创建的，对于鼠标用户和键盘用户有略微不同的考量。

### 鼠标用户

以下示例使用此 CSS 代码，在悬停父菜单项时显示和隐藏子菜单：

此外，还使用脚本在鼠标离开该区域时稍微延迟子菜单项的立即关闭。这种延迟使用户在鼠标导航不够精确时更容易使用菜单。

在以下示例中，使用定时器添加了一秒的延迟：

### 键盘用户

使用 Tab 键在菜单中进行导航时，子菜单不应自动打开，因为这样的话键盘用户必须逐个经过所有子菜单项才能到达下一个顶级菜单项。相反，请考虑以下方法之一。

#### 将父菜单项作为切换开关 (Use parent as toggle)

在父菜单项仅对子菜单进行概述且不需要执行特定功能（例如链接到网页）的情况下，使用此方法。在这种情况下，当用户激活顶级菜单项时，由脚本打开子菜单；当焦点离开子菜单时，关闭子菜单。

以下代码遍历了所有带有 `has-submenu` 类名的顶级菜单项，并添加了一个点击事件，该事件会根据子菜单的状态来打开或关闭它。此外，在子菜单打开时，`aria-expanded` 属性会被设置为 `true`，否则设置为 `false`。

#### 将按钮作为切换开关 (Use button as toggle)

当父菜单项需要执行某项功能（例如链接到网页）时，可以在父菜单项中添加一个独立的按钮来打开和关闭子菜单。该按钮还可以作为存在子菜单的视觉指示器。

以下代码为每个带有子菜单的顶级菜单项添加了一个按钮。当激活该按钮时，它会显示或隐藏子菜单。该按钮的隐藏标签（不可见标签）会被设置为“显示子菜单”或“隐藏子菜单”，以反映子菜单的当前状态。