---
title: 树测试 (Tree Testing)
slug: 树测试-tree-testing
summary: 树测试是一种用户体验（UX）研究方法，用于评估用户在网站或应用程序中找到关键资源和信息的难易程度。
type: article
status: published
tags: [体验设计, 交互设计, 可用性]
domain: ux
source_title: Kira Warje
source_author: Kira Warje
source_url: https://thedecisionlab.com/reference-guide/design/tree-testing
published_at: 2024-04-12
related: []
---

## 基本概念

想象一下，你正计划去一座新城市度过周末。你在搜索引擎的引导下进入了当地的一个旅游网站，寻找有趣的活动和住宿地点。通过该网站的导航系统，你正在寻找能帮助你规划行程的特定内容，例如餐厅推荐、即将举办的活动、酒店优惠以及街区指南。

你在预期的位置找到了这些信息，它们就位于标有“酒店”、“活动”和“项目”等相关的菜单类别下。由于网站的结构符合预期，且导航标签清晰、具有描述性，你可以轻松找到所需的所有信息。

网站设计师如何确保他们的网站达到这种易用性水平？答案是：他们在真实用户身上测试自己的导航系统。

**树测试 (Tree testing)** 是一种用户体验（UX）研究方法，用于评估用户在网站或应用中找到关键资源和信息的难易程度。这种测试方法专注于导航树（也称为网站地图），它代表了网站幕后的组织结构。<sup>1</sup>

网站的导航树结构非常类似于一棵真正的树。首页充当树干，主要页面或菜单类别（关于我们、商店、联系我们、博客等）是直接连接到树干的大树枝，而网站的各个具体页面（单个产品页面、博客文章等）则构成了树的细枝和树叶。

在与页面顶部的菜单栏进行交互时，你可以感受到网站的导航树。通常，顶层菜单项链接到网站的主要页面或“父”类别，而子类别或单个“子”页面则嵌套在这些类别之下。菜单标签起到了路标的作用，告诉你可以在网站层级结构中的什么地方找到特定内容。树测试可以帮助设计师确定这些导航标签对用户而言是否有意义，以及网站的组织是否逻辑清晰且符合预期。<sup>2</sup>

树测试在本质上是将导航树孤立出来，以便对其进行独立评估。在树测试期间，用户会看到一个文本格式的导航树——其中包含每个类别和页面的标签。用户会被给予一个特定的任务，然后被要求导航到树中他们预期能找到帮助他们完成该任务的内容的位置。

![](https://images.prismic.io/thedecisionlab/Zhmg4DjCgu4jzy4c_TreeTestingBSRGImage.png?auto=format,compress)

如果我们正在测试上图中的导航树，我们可能会要求参与者寻找能够帮助他们管理医疗保健费用的信息。接着，参与者将从顶层类别开始在树中依次点击，直到到达他们预期能找到该信息的位置。在这种情况下，我们是在测试“保险提供商”是否处于树中最合理的位置。这种树测试的结果将揭示有多少人找到了正确的信息、花了多长时间、他们到达该位置采取了多少种不同的路径，以及他们是否在途中迷失了方向。

> ***用户需要先找到内容才能使用它——可寻性先于易用性。***
> 
> — 路易斯·罗森菲尔德 (Louis Rosenfeld)，《*Web信息架构：设计大型网站及更多*》的作者

## 核心术语

[**用户体验研究 (UX Research)：**](https://thedecisionlab.com/reference-guide/design/ux-research) 研究终端用户如何与产品进行交互，以及他们完成各种任务的难易程度。用户体验研究的目标是了解人们对产品的需求和期望，并利用这些洞察来设计符合人类行为的产品。树测试就是一种专注于信息可寻性的用户体验研究方法。

**可寻性 (Findability)：** 用户在网站上找到特定内容的难易程度。具体来说，这指的是用户在假设该网站上存在该内容的前提下，进行主动寻找的过程。<sup>3</sup> 例如，他们可能在酒店网站上寻找房间价格，或者在餐厅网站上寻找菜单。

**可发现性 (Discoverability)：** 用户遇到他们没预料到会在网站上找到、但与他们的兴趣相关的全新内容或功能的难易程度。<sup>3</sup> 例如，用户在浏览国家公园网站预订露营地时，可能会偶然发现一个介绍公园提供护林员导览徒步信息的页面。

**信息架构 (Information Architecture, IA)：** 在网站或应用中构建内容和设计标签的科学。<sup>1</sup> 信息架构学科专注于以易于人们理解的方式组织内容，从而确保信息的可寻性。

**[心智模型 (Mental Model)](https://thedecisionlab.com/reference-guide/design/mental-models)：** 用户对系统应该如何工作所持有的既有观念。用户利用心智模型来预测网站或应用的运行方式，这会影响他们与界面的交互。就网站的导航树而言，用户期望网站以特定方式进行组织，而树测试可以评估网站的实际结构是否与这些心智模型相契合。

**[卡片分类 (Card Sorting)](https://thedecisionlab.com/reference-guide/design/card-sorting)：** 一种用于确定人们如何对信息进行分类的用户研究方法。参与者会拿到写有标签的卡片，并被要求将这些卡片归类——以任何对他们而言合理的方式。这通常与树测试配合使用来优化网站结构，确保导航菜单和其他架构元素能够反映真实用户理解和分类内容的方式。

## 历史背景

树测试是一种相对较新的用户体验研究方法，它是为了应对20世纪90年代和21世纪初数字内容的兴起而出现的。具体来说，它可以追溯到著名的信息架构师 [唐娜·斯宾塞 (Donna Spencer)](https://maadmob.com.au/about/bio-donna-spencer)，她在数字界面设计工作中开发了树测试方法。

在当时，还没有一种简单且有效的技术来测试网站结构。<sup>4</sup> 许多用户体验专业人员通过封闭式卡片分类来测试网站导航——让研究参与者将内容主题归入预先定义的类别中。然而，这种方法对于构建网站结构比测试网站结构更为有效。封闭式卡片分类并不一定能反映人们实际浏览网站的方式，也无法深入了解哪种结构最适合用户。

因此，斯宾塞对封闭式卡片分类感到不满，并设计了一种测试导航树的独特方法——一种她称为“基于卡片的分类法”的纸质方法。斯宾塞会在索引卡片上模拟网站结构，并要求参与者寻找特定的内容，让他们选择主题来在这个基于卡片的网站结构中进行“导航”。

正如你所能想到的，这种纸质测试过程非常耗时。显而易见的下一步就是利用数字工具来简化树测试。戴夫·奥布莱恩 (Dave O’Brien) 是广受欢迎的树测试工具 Treejack 背后的核心人物之一，他帮助将树测试推广给了大众。他亲身体验了斯宾塞的纸质测试方法，并受到启发，决定提高这一过程的效率。O’Brien 和他的同事们在 2008 年推出了 Treejack，建立了第一个在线树测试工具。

像 Treejack 这样的在线树测试工具的发展，使得树测试得到了广泛普及。这些工具允许用户体验设计师与远程参与者一起进行测试，最终促成树测试成为用户体验研究中的标准实践。

## 作用与影响

树测试最显而易见的优势在于能够改进网站导航。导航设计越好，网站访问者继续浏览、找到有价值的内容并与品牌互动的可能性就越大。这一切最终都归结为更好的客户体验——这对于消费者和企业来说是互利共赢的提升。

树测试在设计过程的早期阶段尤为有益。<sup>5</sup> 它允许设计师在投入大量时间处理设计细节之前，发现关键的导航问题并确定最合理、最有效的内容组织方式。在这一阶段修复问题仍然非常简单且成本低廉，而且重新测试新的网站结构也同样易于操作。

当然，树测试也可以在现有的网站和应用上进行。如果用户在浏览网站时遇到困难，可能很难准确判断是什么原因导致了困惑。树测试有效地将网站结构与设计的其他元素隔离开来，使测试人员能够独立评估该结构。树测试的结果可以帮助品牌确定是需要调整网站结构，还是需要针对其他设计元素排查易用性问题。

归根结底，树测试依赖于“观察用户行为”这一用户体验研究实践，这对于理解用户如何浏览网站以及他们在网上寻找信息时面临哪些挑战至关重要。

## 争议与局限性

### 范围有限

每种用户体验研究方法都有其局限性，树测试也不例外。其中一个问题是这种测试方法的范围有限。虽然单独隔离和测试网站结构可能很有价值，但这也导致了对网站易用性理解的狭隘。<sup>5</sup>

除了导航树之外，还有许多其他因素会影响人们浏览网站和寻找信息的方式，例如网站的搜索功能或引导人们获取某些内容的直观图表。树测试无法衡量这些其他设计元素如何影响网站的可寻性。这就是为什么树测试最好与其他用户体验研究方法配合使用的原因。

### 依赖定量数据

远程在线树测试通常是无主持人的，这意味着在测试期间没有人在场指导参与者或与他们互动。这使得树测试既方便又经济，但也意味着测试只能产生定量数据。测试结果将显示用户做了什么，但无法揭示*为什么*。例如，树测试可以衡量成功找到任务正确内容的用户百分比，但无法确定为什么特定用户在最终找到正确内容之前需要回退好几次。

如果不与用户交流，测试人员将永远无法得知用户为何以这种方式浏览网站树，从而错失了宝贵的洞察。同样，这就是将树测试与其他测试方法（尤其是产生定性数据的测试方法，如主持式[易用性测试 (usability testing)](https://thedecisionlab.com/reference-guide/design/usability-testing)）相结合的有用之处。

### 任务表述

从树测试中收集准确的结果取决于编写良好的任务。为什么？人们非常擅长模式匹配，并且会利用他们在任务中发现的任何线索并将其应用于测试。<sup>6</sup> 任务中的语言可能会引导参与者走向特定方向，这可能无法反映真实用户的行为。

至关重要的一点是，你要避免在任务中使用导航树中已有的词汇。例如，如果你的网站上有一个标有“当地活动”的菜单项，你不会想把任务表述成这样：“点击你认为会带你到当地活动的菜单项。”相反，更好的表述可能是：“你正在寻找该城市里好玩的事情。看看网站上是否有任何资源可以帮助你。”

编写好任务的关键在于像用户一样思考。理想情况下，这些任务应该反映典型用户访问你的网站时可能会产生的想法。

## 案例研究

拥有套件式易用性测试工具的用户体验公司 Optimal Workshop 为我们带来了一个关于使用树测试来改善客户体验的案例研究。让我们来看看这些工具如何帮助新西兰超市连锁品牌 Countdown Supermarkets 测试并改进其网站的导航。<sup>7</sup>

出于对品牌电商门店绩效的担忧，Countdown 的客户体验团队注意到，只有 7% 的客户在浏览网站。这在电子商务中是不寻常的，因为网站访问者通常更倾向于浏览而不是直接搜索特定商品。易用性问题阻碍了网站的可寻性，导致人们不得不去搜索商品，而不是使用导航系统进行浏览。

客户体验团队确信，该网站的主要问题之一是产品类别过多——10,000 个单品竟有超过 6,200 个类别。如此庞大的类别数量使得人们很难浏览网站并找到他们想要的商品（或发现他们可能需要的全新商品）。

Countdown 使用 Treejack 进行了树测试，并将结果与另一家当地食品杂货连锁店的网站进行了对比。他们发现 Countdown 网站的导航速度极慢——与另一家连锁店相比，人们要多花 50% 的时间才能找到自己想要的东西。依靠从这些测试中获得的洞察，该团队使用卡片分类压缩了他们的导航类别，并使用树测试来验证这些新类别是否提高了可寻性。

这一优化过程使 Countdown 将其产品类别减少了 90%，从而使客户更容易找到特定商品。这是一项极其成功的举措。该网站的浏览量增长了 100%，从浏览页面添加至购物车的行为增长了 91%。树测试帮助 Countdown 精准定位了问题，并设计了更好的导航系统来帮助人们找到他们想要的东西。

## 相关 TDL 内容

##### 用户界面 (User Interface)

网站的用户界面 (UI) 是允许用户与网站进行交互的前端设计。由于网站的导航系统是任何 UI 的主要元素，因此树测试对于优秀的 UI 设计至关重要。本文深入探讨了 UI 的概念，可以帮助您更好地理解设计以用户为中心的 UI 的重要性。

##### 易用性测试 (Usability Testing)

树测试只是易用性测试的一种方法。易用性测试是用户体验研究的一个大类，它通过在真实用户身上进行测试来评估产品的功能。易用性测试有很多种形式，但它们都有着共同的目标——发现并修复易用性问题，从而让用户的生活更加便利。

## 参考文献

1. Soegaard, M., & Gladwell, M. (2024, February 21). *What is a Sitemap in UX Design?* The Interaction Design Foundation. Retrieved March 15, 2024, from [https://www.interaction-design.org/literature/article/ux-sitemap](https://www.interaction-design.org/literature/article/ux-sitemap)
2. *Tree testing 101 - Tree testing overview.* (n.d.). Optimal Workshop. Retrieved March 15, 2024, from [https://www.optimalworkshop.com/learn/tree-testing-101-tree-testing-overview/](https://www.optimalworkshop.com/learn/tree-testing-101-tree-testing-overview/)
3. Cardello, J., & Harley, A. (2014, July 6). *Low Findability and Discoverability: Four Testing Methods to Identify the Causes*. Nielsen Norman Group. Retrieved March 15, 2024, from [https://www.nngroup.com/articles/navigation-ia-tests/](https://www.nngroup.com/articles/navigation-ia-tests/)
4. OBrien, D. (2009, December 5). *Tree Testing*. Boxes and Arrows. Retrieved March 15, 2024, from [https://boxesandarrows.com/tree-testing/](https://boxesandarrows.com/tree-testing/)
5. *Tree Testing: Evaluative UX Research Methods*. (n.d.). User Interviews. Retrieved March 15, 2024, from [https://www.userinterviews.com/ux-research-field-guide-chapter/tree-testing](https://www.userinterviews.com/ux-research-field-guide-chapter/tree-testing)
6. *Tree testing 101 - Write your tasks* (n.d.). Optimal Workshop. Retrieved March 15, 2024, from [https://www.optimalworkshop.com/learn/tree-testing-101-write-your-tasks/](https://www.optimalworkshop.com/learn/tree-testing-101-write-your-tasks/)
7. *Wine, bacon and periods: product categories and our journey to wrangle them* (n.d.). Optimal Workshop. Retrieved March 15, 2024, from [https://www.optimalworkshop.com/learn/customer-stories/countdown/](https://www.optimalworkshop.com/learn/customer-stories/countdown/)