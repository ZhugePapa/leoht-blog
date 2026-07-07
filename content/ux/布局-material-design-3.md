---
title: 布局 – Material Design 3
slug: 布局-material-design-3
summary: 布局是屏幕上元素的视觉排列。它能引导人们关注最重要的信息，并使用户能够轻松采取行动。
type: knowledge
status: published
tags: ["信息架构", "可用性", "新手引导", "布局"]
domain: ux
source_author: Material Design
source_url: https://m3.material.io/foundations/layout/layout-overview/overview
# published_at:
related: []
---
- 使用布局来组织屏幕中的所有元素、传递层级关系，并吸引用户对关键操作的关注
- 使布局适应紧凑（compact）、中等（medium）、扩展（expanded）、大型（large）和超大型（extra-large）屏幕尺寸（此前称为窗口大小类别 window size classes）
- 基于已建立的[典型布局示例](https://m3.material.io/m3/pages/canonical-examples)进行构建
- 针对[双向性](https://m3.material.io/m3/pages/bidirectionality-rtl)进行设计，以支持从左到右（LTR）和从右到左（RTL）的语言
- 应用一致的排列、尺寸和间距，以创建功能性的布局结构
- Material 布局指南已在 Android 上实现，且适用于 Web

![布局的 7 个元素。](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp3ukjvm-01.png?alt=media&token=6f4fdd25-559d-4ed3-964a-ffb0c5f7b5f7)

栏（Column） 折叠线（Fold） 页边距（Margin） 条（Bar） 拖拽手柄（Drag handle） 面板（Pane） 轨道（Rail）

## 可用性与资源

<table><thead><tr><th><p><strong>类型</strong></p></th><th><p><strong>资源</strong></p></th><th><p><strong>状态</strong></p></th></tr></thead><tbody><tr><td rowspan="2"><p>设计</p></td><td><p><a href="https://www.figma.com/community/file/1035203688168086460">M3 设计套件</a> (Figma)</p></td><td><p>可用</p></td></tr><tr><td><p><a href="https://m3.material.io/m3/pages/spacing/overview">间距系统与 Token</a></p></td><td><p>可用</p></td></tr><tr><td rowspan="3"><p>实现</p></td><td><p><a href="https://developer.android.com/develop/ui/compose/layouts/adaptive/canonical-layouts">Jetpack Compose：典型布局</a></p></td><td><p>可用</p></td></tr><tr><td><p><a href="https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/Ruler">Jetpack Compose：标尺</a></p></td><td><p>可用</p></td></tr><tr><td><p><a href="https://github.com/android/user-interface-samples/tree/main/CanonicalLayouts">Android 视图 (MDC-Android)：典型布局</a></p></td><td><p>可用</p></td></tr></tbody></table>

## 最新变化

在创建新布局时，使用布局，从开始，并确保布局可以在之间扩展。

##### 2026年5月

布局结构与设计：

- 引入了布局脚手架（layout scaffold），以高效创建自适应布局
- 针对移动设备、桌面端和空间设备的新自适应指南
- 更新了典型布局示例
- [间距系统](https://m3.material.io/m3/pages/spacing/overview)

命名：

- 窗口大小类别（Window size classes）重命名为断点（breakpoints）
- 响应式布局（Responsive layout）重命名为[自适应设计](https://m3.material.io/m3/pages/layout-overview/adaptive-design)

![适用于不同尺寸屏幕的紧凑和扩展布局。](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp3uxdvt-02.png?alt=media&token=a4cf0742-9a81-4697-8963-46b936eeb5f3)

Material 布局脚手架使布局能够适应不同的屏幕尺寸

- **自适应设计 (Adaptive design)**：允许界面动态响应用户偏好、设备类型、状态和断点等上下文的技术
- **栏 (Bars)**：可以框定页面以帮助人们在产品中进行导航，通常包含应用栏（app bar）和底部导航栏（bottom navigation bar）
- **双向性 (Bidirectionality)**：一种从右到左（RTL）显示文本和内容的书写系统
- **断点 (Breakpoints)**：特定的窗口尺寸，在此尺寸下布局会发生改变，以适应可用空间、设备规范和人体工程学（此前称为窗口大小类别 window size classes）
- **栏 (Column)**：面板（pane）内的一个或多个垂直内容块
- **拖拽手柄 (Drag handle)**：用于调整面板大小的组件
- **折叠线 (Fold)**：屏幕上的柔性区域或折叠设备上分隔两个显示屏的铰链
- **间隙 (Gap)**：容器内组件或元素之间的空间
- **边距 (Margin)**：屏幕边缘与其中任何元素之间的空间
- **多窗口模式 (Multi-window mode)**：允许多个应用同时共享同一个屏幕
- **面板 (Pane)**：在单个应用中承载其他组件和元素的布局容器。面板可以是固定的、弹性的、悬浮的或半永久的。
- **轨道 (Rails)**：面板周围的边缘空间，用于放置导航轨（navigation rails）、工具栏和面板控件等关键元素
- **从右到左 (RTL) 语言**：从右到左书写和阅读的语言，如阿拉伯语、希伯来语和波斯语，有[超过 20 亿人](https://www.w3.org/International/questions/qa-scripts.en.html)在使用
- **标尺 (Rulers)**：一组特定的全局对齐线，有助于组织布局中的构建块
- **安全区域 (Safety region)**：在应用空间之外为系统 UI 元素（如状态栏或手势栏）预留的区域
- **脚手架 (Scaffold)**：一种基础的 UI 设计结构，为组装关键屏幕组件提供标准平台
- **间距器 (Spacer)**：折叠设备上两个面板之间的空间