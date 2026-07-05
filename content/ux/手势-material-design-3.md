---
title: 手势 – Material Design 3
slug: 手势-material-design-3
summary: 手势可让用户通过触摸与屏幕元素进行交互
type: article
status: published
tags: [体验设计, 交互设计, 可用性]
domain: ux
source_title: Material Design
source_author: Material Design
source_url: https://m3.material.io/foundations/interaction/gestures
# published_at:
related: []
---

## 资源

| 类型 | 链接 | 状态 |
| --- | --- | --- |
| 设计 | [设计工具包 (Figma)](http://goo.gle/m3-design-kit) | 可用 |

## 手势类型

### 双击

快速点击两次允许用户放大和缩小内容。

<video aria-label="移动端 UI 展示了在花卉照片上双击。图像放大并填满屏幕。"><source src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1fboct-1P%20-%20Double%20tap_NewSize.mp4?alt=media&amp;token=a137fb64-5c39-4881-8052-805a529b402f"></video>

双击照片可将其全屏打开

### 长按

用户可以通过长时间按住元素来访问附加功能。

<video aria-label="长按一封电子邮件会显示一个选择复选框并更改容器颜色。"><source src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1fdbcl-1P-Long%20press_NewSize.mp4?alt=media&amp;token=c8624dcf-0020-412f-a18a-42d4cc975c23"></video>

长按列表项可将其选中

### 滚动与平移

用户可以垂直、水平或向任何方向滑动表面以浏览内容。

<video aria-label="滚动信息流。在照片流中向上和向下滚动。"><source src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1fely6-1P%20-%20Scroll_NewSize.mp4?alt=media&amp;token=84fade67-e1d5-4688-8bc0-b18a4dd72e32"></video>

垂直滚动可展示更多内容

### 预测性返回

在 Android 上，用户可以在某些组件上向左或向右滑动，以导航到上一个目的地。这种手势被称为[预测性返回 (predictive back)](https://github.com/material-components/material-components-android/blob/master/docs/foundations/PredictiveBack.md)。

在完成滑动之前，用户可以决定是继续返回到上一个视图还是留在当前视图。

兼容的组件包括：

- 底部工作表 (Bottom sheet) 底部工作表显示固定在屏幕底部的次要内容。[更多关于底部工作表](https://m3.material.io/m3/pages/bottom-sheets/overview)
- 导航栏 (Navigation bar) 导航栏让用户在较小设备上的 UI 视图之间进行切换。[更多关于导航栏](https://m3.material.io/m3/pages/navigation-bar/overview)
- 导航轨 (Navigation rail) 导航轨让用户在中等尺寸设备上的 UI 视图之间进行切换。[更多关于导航轨](https://m3.material.io/m3/pages/navigation-rail/overview)
- 搜索栏 (Search bar) 搜索栏是屏幕顶部一个常驻且突出的搜索字段。[更多关于搜索栏](https://m3.material.io/m3/pages/search/overview)
- 侧边工作表 (Side sheet) 侧边工作表显示固定在屏幕侧边的次要内容。[更多关于侧边工作表](https://m3.material.io/m3/pages/side-sheets/overview)

<video aria-label="在底部工作表上向后滑动，将用户带回到照片流的上一个屏幕。"><source src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1fhayy-BottomSheet_NewSize.mp4?alt=media&amp;token=6a829f0d-482f-4254-8af0-2ea53a3efe67"></video>

在底部工作表上进行预测性返回滑动可返回到上一个屏幕

### 拖拽

用户可以移动元素，并在视图中滑入和滑出表面。

<video aria-label="用户在移动端收件箱中将第二封电子邮件拖动到第三个位置，然后又拖回第二个位置。"><source src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1fj7qz-1P-Drag%202_NewSize.mp4?alt=media&amp;token=5e2f57a3-2536-4c54-8bb0-00fec5235ef3"></video>

可以通过拖动列表项来对列表进行重新排序

### 提起并移动

长按并拖拽允许用户对内容进行重新排序。

<video aria-label="提起日历事件并将其移动到新时间。"><source src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1fk8sj-1P-Pick%20up%20and%20move_NewSize.mp4?alt=media&amp;token=3062d6bc-f62a-4e25-a0e4-d7a91f042186"></video>

可以提起日历事件并将其移动到新时间