---
title: 多重层级结构（Polyhierarchies）能提高模糊 IA 分类的可寻性
slug: 多重层级结构-polyhierarchies-能提高模糊-ia-分类的可寻性
summary: 当一个项目适合多个分类时，你的信息架构（IA）结构可以为该项目包含多个父级分类，以避免流失用户。
type: article
status: published
tags: [体验设计, 交互设计, 可用性, 信息架构]
domain: ux
source_title: Page Laubheimer
source_author: Page Laubheimer
source_url: https://www.nngroup.com/articles/polyhierarchy/
published_at: 2018-05-14
related: []
---

摘要：当一个项目适合多个分类时，你的信息架构（IA）结构可以为该项目包含多个父级分类，以避免流失用户。

## 介绍

为网站创建完美的信息架构（IA）并非易事，尤其是在平衡精准度与清晰度时。理想情况下，你希望创建能够准确描述内容和产品的分类，这些分类在添加新主题或产品时具有可扩展性，并且符合用户的[心智模型](https://www.nngroup.com/articles/card-sorting-definition/)（而这些模型因人而异）。

最常见的信息架构层级呈树状结构，其中每个节点（主页对应的节点除外）都只有一个父节点。（注意，虽然我们谈论的是[网站底层不可见的信息架构结构](https://www.nngroup.com/articles/ia-vs-navigation/)，但它们通常也会反映在导航界面中）。然而，这种类型的层级结构常常带来一个问题：有些东西不能整齐地归入单一分类，而是根据观察角度的不同，自然而然地拥有多个父级分类。这就是多重层级结构（Polyhierarchies）发挥作用的地方。

![包含多重层级结构的网站地图](https://media.nngroup.com/media/editor/2018/04/27/site-map.png)

该图展示了网站的底层信息架构（IA）。此信息架构呈树状结构：每个节点（主页除外）都有一个父级，某些节点拥有子节点。最上方的绿色项目是树的根节点；其子节点为第一级分类（蓝色）。每个蓝色节点又拥有多个（灰色）的第二级子节点。注意，第三级分类中的两个项目（橙色）是多重层级的，因为它们拥有不止一个父节点。

## 定义

**定义**：多重层级（Polyhierarchy）是指一种图（Graph）结构，其中至少有一些*子*节点拥有不止一个*父*节点。

多重层级信息架构是一种项目存在于多个位置 of a structure——也就是说，可以通过多条分类路径访问到它。多重层级中一个经典的对象例子是乐器分类层级中的钢琴：钢琴可以被视为键盘乐器、打击乐器或弦乐器（按钢琴键会促使小槌击打琴弦）。因此，如果你正在为所有乐器创建一个层级分类，钢琴该放在哪里？既然它在几个分类中都能完美契合，解决方案就是将它放入所有这些*父*分类中（即*键盘*、*打击*和*弦乐*）。

多重层级对实体对象来说是一个巨大的难题：如果你只有一本书的单本拷贝（或者只有一台钢琴），它只能放在一个地方。为了避免多重层级，出现了许多复杂的物品分类方式；它们涉及精心构建的分类法（Taxonomy）和对交叉引用的明智使用（例如美国国会图书馆的分类系统）。

然而，如果我们在决定钢琴的归属时试图避免多重层级，就必须创建互斥的分类来妥善处理此类乐器。这些人为的分类很容易增加分类法的复杂度，使普通人难以理解。这种复杂分类法的一个例子是 [霍恩博斯特尔-萨克斯（Hornbostel-Sachs）](https://en.wikipedia.org/wiki/Hornbostel%E2%80%93Sachs) 乐器分类法，其中乐器是根据它们如何产生空气振动来发声进行分类的。（在此系统中，钢琴被归为弦鸣乐器。）虽然这从技术角度来看可能可行，但对于普通人来说毫无帮助，因为他们的心智模型中并不包含弦鸣乐器、体鸣乐器、膜鸣乐器等概念。这些分类非常晦涩，大多数用户宁可直接忽略，也不会花精力去弄清楚它们的含义。

显然，多重层级结构确实有其用武之地。幸运的是，只要我们深思熟虑地使用它们，数字世界便能轻松[提供](http://www.jnd.org/dn.mss/affordances_and.html)对多重层级结构的支持（affords）。

## 克制地使用多重层级结构以支持多元心智模型

多重层级结构在[电商网站](https://www.nngroup.com/reports/ecommerce-ux-homepages-and-category-pages/)中非常有用，将同一个商品分类放置在多个位置可以支持不同的心智模型。例如，在 Target.com 上，商品被组织在一个广泛的多重层级中。商品子分类 *Nintendo Switch*（任天堂 Switch）既可以在 *Video Games*（电子游戏）顶级分类中找到，也可以在 *Electronics*（电子产品）顶级分类中找到。这一决策反映了一个事实：不同的用户会认为 *Video Games* 或 *Electronics* 才是 Nintendo Switch 及其游戏和配件的自然“归属”；如果网站没有为 *Nintendo Switch* 保留这两个父分类，可能会失去那些选了“错误”分类且找不到所需商品的用户。（用户通常会认为，如果某个商品没有出现在它“应该”在的地方，那么该网站就没有售卖该商品。）

![Target.com 上 Nintendo Switch 多重层级摆放的线框流程图](https://media.nngroup.com/media/editor/2018/04/27/target-navigation.png)

Target 使用商品分类的多重层级结构来提高商品的可寻性；例如，Nintendo Switch 同时被列在“电子游戏”和“电子产品”这两个顶级分类下。

不过，值得注意的是，Target 并没有把 *Switch* 放入每一个可能包含它的父分类中（例如 *Toys*，即玩具）。设计多重层级结构的这一个方面至关重要，因为如果穷尽并交叉引用某项目可能存在的所有位置，会导致每个菜单都膨胀出海量项目，从而给用户带来显著的[认知负担](https://www.nngroup.com/articles/navigation-cognitive-strain/)。导航菜单旨在帮助人们找到他们寻求的内容并发现意料之外但相关的项目；它们不应该沦为折磨人的长列表。对于分类重叠巨大且复杂的超大型网站，更好的解决方案是使用[分面（Facets）](https://www.nngroup.com/articles/filters-vs-facets/)来提供强大的辅助搜索。

那么，如何确定一个项目是否应该拥有多个父分类呢？答案在于理解用户对你信息空间的心智模型。收集这些数据有多种方法。一种解决方案是进行**封闭式**[卡片分类](https://www.nngroup.com/videos/card-sorting-organize-product-offerings/?lm=bias-card-sorting&pt=youtubevideo)（用户需要将卡片归入已有的分类中）或[树状测试](https://www.nngroup.com/articles/tree-testing/)。如果在此类研究中你发现不同的用户倾向于将该项目放入两个不同的分类中，那么你就可以将它添加到这两个分类下。另一种解决方案是在主持的[可用性测试](https://www.nngroup.com/courses/usability-testing/)中测试项目的可寻性；如果你发现有些用户合理地预期该项目还有另外的父级分类，你可以将此数据作为决策的依据。

## 寻路与多重层级结构可能会冲突

多重层级结构的一个主要缺点是它们与导航的[寻路（Wayfinding）](https://www.nngroup.com/articles/navigation-you-are-here/)元素（尤其是[面包屑](https://www.nngroup.com/articles/breadcrumb-navigation-useful/)）相冲突。面包屑的作用是向用户显示其当前所处的位置，以及当前页面在网站层级结构中的位置。

多年来我们一直知道，面包屑应该显示当前页面在网站 IA 中的位置，而不是用户的浏览历史。这对于拥有多个父级的节点意味着什么？因为网站无法简明地表示多重层级（同时也出于 SEO 和内容管理的原因），面包屑中会显示页面的“规范（Canonical）”路径。然而，这一规范路径可能与用户访问该特定页面时实际走的路径发生冲突。

不幸的是，这是必须做出的权衡。替代方案是完全放弃面包屑。这种解决方案适用于级别少于 3 级的浅层层级，但对于更深的层级，则会导致方向迷失和导航困难。

![Target.com 运用面包屑显示页面的主要位置](https://media.nngroup.com/media/editor/2018/04/27/target-breadcrumbs.png)

Target 展示的面包屑描述了 Nintendo Switch 在多重层级结构中的主要位置，尽管该页面同时位于“主页 > 电子游戏 > Nintendo Switch”和“主页 > 电子产品 > 电子游戏 > Nintendo Switch”下。

## 结论

多重层级（Polyhierarchies）是指单个项目能够归入多个父分类的 IA 结构。它们的存在主要是为了契合不同用户对一个页面的自然“归属地”所持有的多元心智模型。虽然数字化工具使多重层级结构变得容易实现，但在使用时应保持克制：任何给定节点的父级过多都会增加认知负荷并导致导航困难。

在我们的全天[信息架构（Information Architecture）](https://www.nngroup.com/courses/information-architecture/)研讨会中了解更多信息。

**参考文献**

Morville, P., Rosenfeld, L., and Arango, J. (2015). *Information Architecture, 4th Edition*. Sebastopol, CA: O’Reilly Media

Kalbach, J. (2007). *Designing Web Navigation: Optimizing the User Experience*. Sebastopol, CA: O’Reilly Media