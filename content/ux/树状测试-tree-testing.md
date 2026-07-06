---
title: 树状测试 (Tree Testing)
slug: 树状测试-tree-testing
summary: 树状测试（Tree Testing）是一种用户体验（UX）研究方法，用于评估用户在网站或应用程序中查找关键资源和信息的难易程度。
type: article
status: published
tags: [方法论, 研究, 验证, 评估, 可用性, 交互设计]
domain: ux
source_title: Kira Warje
source_author: Kira Warje
source_url: https://thedecisionlab.com/reference-guide/design/tree-testing
published_at: 2024-04-12
related: []
---

## 基本概念

想象一下，你正在计划去一个新城市度周末。你的搜索引导你进入了一个当地的旅游网站，你正在浏览有什么好玩的活动和住宿的地方。利用该网站的导航系统，你正在寻找能够帮助你规划行程的具体内容，例如餐厅推荐、即将举办的活动、酒店优惠和街区指南。

你会在符合预期的位置找到这些信息，它们位于标有“酒店”、“活动”和“项目”的相关菜单类别下。由于该网站的结构是可预测的，而且导航标签清晰且具有描述性，因此你可以轻松找到所需的所有信息。

网站设计师如何确保他们的网站达到这种可用性水平？他们在真实用户身上测试他们的导航系统。

**树状测试（Tree testing）** 是一种用户体验（UX）研究方法，用于评估用户在网站或应用程序中查找关键资源和信息的难易程度。这种测试方法侧重于导航树（也称为网站地图），它代表了网站幕后的组织结构。<sup>1</sup>

网站的导航树结构非常像一棵真实的树。首页充当树干，主要页面或菜单类别（关于我们、商店、联系我们、博客等）是直接连接到树干的大树枝，而网站的各个具体页面（单个产品页面、博客文章等）则构成了树的细枝和树叶。

在与页面顶部的菜单栏交互时，你可以感知到网站的导航树。通常，顶级菜单项链接到网站的主页面或“父”类别，而子类别或单个“子”页面则嵌套在这些类别下。菜单标签充当路标，指示你可以在网站的层级结构中哪里找到具体内容。树状测试可以帮助设计师确定这些导航标签对用户而言是否有意义，以及网站的组织结构是否逻辑清晰且符合预期。<sup>2</sup>

树状测试本质上是将导航树隔离开来，以便对其进行独立评估。在树状测试期间，用户会看到一个纯文本版本的树状结构——包含每个类别和页面的标签。用户被赋予一个特定的任务，然后被要求导航到树中他们期望找到能够帮助完成该任务的内容的位置。

![](https://images.prismic.io/thedecisionlab/Zhmg4DjCgu4jzy4c_TreeTestingBSRGImage.png?auto=format,compress)

如果我们要测试上图中的树状结构，我们可能会要求参与者寻找能帮助他们管理医疗费用的信息。参与者将从顶级类别开始在树中进行点击，直到到达他们期望找到该信息的位置。在这种情况下，我们是在测试“保险提供商（Insurance Providers）”是否处于树中最合理的逻辑位置。该树状测试的结果将揭示有多少人找到了正确的信息、花了多长时间、他们到达那里采取了多少种不同的路径，以及他们是否在途中迷失了方向。

“

> ***用户必须能够找到内容才能使用它——易寻性（Findability）先于可用性（Usability）。***
> 
>   
> 
> — Louis Rosenfeld，《*信息架构：面向Web及其他（Information Architecture: For the Web and Beyond）*》作者

## 核心术语

[**用户体验研究（UX Research）：**](https://thedecisionlab.com/reference-guide/design/ux-research) 研究最终用户如何与产品交互以及他们完成各种任务的难易程度。UX 研究的目标是了解人们对产品的需求和期望，并利用这些洞察来设计符合人类行为的产品。树状测试是一种专注于信息易寻性的 UX 研究方法。

**易寻性（Findability）：** 用户在网站上定位特定内容的难易程度。具体来说，这指的是用户已经假设网站上存在并正在主动寻找的内容。<sup>3</sup> 例如，他们可能会在酒店网站上寻找房间价格，或者在餐厅网站上寻找菜单。

**可发现性（Discoverability）：** 用户遇到他们没料到会在网站上找到、但与他们的兴趣相关的全新内容或功能的难易程度。<sup>3</sup> 例如，用户在浏览国家公园网站预订露营地时，可能会偶然发现一个介绍公园内提供的护林员导览徒步活动信息的页面。

**信息架构（Information Architecture, IA）：** 在网站或应用程序中对内容进行结构化和标签化处理的科学。<sup>1</sup> 信息架构学科侧重于以人们易于理解的方式组织内容，从而确保信息的可寻找性（易寻性）。

**[心理模型（Mental Model）](https://thedecisionlab.com/reference-guide/design/mental-models)：** 用户对于系统应该如何运作的已有认知。用户利用心理模型来预测网站或应用程序的行为，这会影响他们与界面的交互方式。就网站的导航树而言，用户期望网站以某种特定方式组织，而树状测试可以评估网站的实际结构是否与这些心理模型相符。

**[卡片分类（Card Sorting）](https://thedecisionlab.com/reference-guide/design/card-sorting)：** 一种旨在确定人们如何对信息进行分类的用户研究方法。参与者会拿到写有标签的卡片，并被要求以他们认为合理的任何方式将这些卡片分门别类。这通常与树状测试配合使用以优化网站结构，从而确保导航菜单和其他架构元素能反映真实用户理解和分类内容的方式。

## 发展历史

树状测试是一种相对较新的 UX 研究方法，它是随着 20 世纪 90 年代和 21 世纪初数字内容的崛起而出现的。具体来说，它可以追溯到著名的信息架构师 [Donna Spencer](https://maadmob.com.au/about/bio-donna-spencer)，她在数字界面设计工作中开发了树状测试方法。

当时，还没有一种简单有效的技术来测试网站的结构。<sup>4</sup> 许多 UX 专业人员使用封闭式卡片分类来测试网站导航——让研究参与者将内容主题归入预定义类别中。然而，这种方法对于开发网站结构比测试网站结构更有效。封闭式卡片分类并不一定能反映人们如何浏览网站，也无法深入了解哪种结构最适合用户。

因此，Spencer 对封闭式卡片分类感到不满，并设计了一种测试导航树的独特方法——一种她称之为“基于卡片的分类”的纸质方法。Spencer 会在索引卡片上模拟网站结构，并要求参与者寻找特定的内容，让他们选择主题来“导航”通过基于卡片的网站结构。

正如你想的那样，这种纸质的测试过程极其耗时。显而易见的下一步是利用数字工具来简化树状测试。Dave O’Brien（流行的树状测试工具 Treejack 的幕后推手之一）帮助向大众推广了树状测试。他亲身体验了 Spencer 的纸质测试方法，并受到启发决定提高这一过程的效率。O'Brien 和他的同事于 2008 年推出了 Treejack，创建了第一个在线树状测试工具。

Treejack 等在线树状测试工具的发展使树状测试得到了广泛普及。这些工具使 UX 设计师能够与远程参与者进行测试，最终促使树状测试成为 UX 研究中的标准实践。

## 价值与成效

树状测试显而易见的优势在于能够改善网站导航。导航越好，网站访问者就越有可能继续浏览、找到有价值的内容并与品牌进行互动。这归根结底是为了带来更好的客户体验——对消费者和企业双方都有利的改进。

树状测试在设计过程的早期阶段尤其有益。<sup>5</sup> 它使设计师能够在将时间花在设计细节上之前，发现关键的导航问题，并确定最合理、最有效的内容组织方式。在这一阶段修复问题仍然既容易又便宜，而且重新测试新的网站结构也同样容易操作。

当然，树状测试也可以在现有的网站和应用程序上进行。如果用户在浏览网站时遇到困难，要准确确定是什么原因导致了困惑可能会非常具有挑战性。树状测试有效地将网站结构与设计的其他元素隔离开来，允许测试人员独立评估结构本身。树状测试的结果可以帮助品牌确定是需要调整其网站结构，还是需要探索其他设计元素以寻找可用性问题。

归根结底，树状测试依赖于观察用户行为的 UX 研究实践，这对于理解用户如何导航网站以及他们在网上搜索信息时面临哪些挑战至关重要。

## 局限与挑战

### 评估范围有限

每种 UX 研究方法都有其局限性，树状测试也不例外。其中一个问题就是这种测试方法的评估范围有限。虽然隔离并单独测试网站结构很有价值，但这只能对网站的可用性提供一个狭窄的理解。<sup>5</sup>

除了导航树之外，还有许多其他因素会影响人们导航网站和查找信息的方式，例如网站搜索功能或引导人们获取某些内容的信息图表。树状测试无法衡量这些其他设计元素如何影响网站的易寻性。这就是为什么树状测试最好与其他 UX 研究方法结合使用的原因。

### 依赖定量数据

远程在线树状测试通常是无主持人的（Unmoderated），这意味着在测试期间没有人当场引导或与参与者互动。这使得树状测试既方便又经济，但也意味着测试只能产生定量数据。测试结果将显示用户做了什么，但无法揭示*为什么*。例如，树状测试可以衡量成功找到某个任务正确内容的用户百分比，但无法确定为什么特定用户在最终找到正确内容之前必须回退几次。

在不与用户交流的情况下，测试人员将永远无法得知用户为何以这种方式在网站树状结构中进行导航，从而错失了宝贵的洞察。同样，这就是将树状测试与其他测试方法（特别是那些产生定量/定性数据的测试方法，如主持式[可用性测试（Usability Testing）](https://thedecisionlab.com/reference-guide/design/usability-testing)）相结合会大有帮助的原因。

### 任务措辞

从树状测试中收集准确的结果依赖于编写良好的任务。为什么？人们非常擅长模式匹配，会利用他们在任务中找到的任何线索并将其应用于测试。<sup>6</sup> 任务中的语言可能会引导参与者走向特定方向，这可能无法反映真实用户的行为。

至关重要的一点是，你要避免在任务中使用树状结构中已经存在的词汇。例如，如果你的网站上有一个标有“当地活动”的菜单项，你不会希望这样措辞你的任务：“点击你认为可以带你进入当地活动的菜单项。”相反，更好的措辞可能是：“你正在寻找该城市里可以做的事情。看看网站上是否有任何资源可以帮助你。”

编写好任务的关键在于像用户一样思考。理想情况下，这些任务应该反映出典型用户到达你的网站时可能会有的想法。

## 案例研究

拥有套件化可用性测试工具的 UX 公司 Optimal Workshop 为我们带来了一个关于利用树状测试改善客户体验的精彩案例研究。让我们来看看这些工具是如何帮助新西兰连锁超市 Countdown Supermarkets 测试并改进其网站导航的。<sup>7</sup>

Countdown 的客户体验团队对其品牌电商商店的性能表示担忧，他们注意到只有 7% 的客户在浏览网站。这在电子商务中是不寻常的，因为电商网站的访问者通常更倾向于浏览而不是直接搜索特定商品。可用性问题阻碍了网站的易寻性，迫使人们去搜索商品，而不是使用导航系统进行浏览。

客户体验团队确信，该网站的主要问题之一是产品类别过多——10,000 个单品竟有超过 6,200 个类别。如此庞大的类别数量使得人们难以浏览网站并找到他们想要的产品（或发现他们可能也想要的新产品）。

Countdown 使用 Treejack 进行了树状测试，并将结果与另一家当地连锁杂货店的网站进行了对比。他们发现 Countdown 网站的导航极其缓慢——与另一家连锁店相比，人们要多花 50% 的时间才能找到他们想要的东西。依靠从这些测试中获得的洞察，该团队使用卡片分类压缩了他们的导航类别，并使用树状测试验证了这些新类别是否确实提高了易寻性。

这一过程使 Countdown 将其产品类别减少了 90%，从而使客户更容易找到特定商品。这是一项正确的举措。该网站的浏览量增加了 100%，而来自浏览页面的“加入购物车”操作增加了 91%。树状测试帮助 Countdown 精准定位了问题，并设计了更好的导航系统来帮助人们找到他们想要的东西。

## 相关 TDL 内容

##### 用户界面 (User Interface)

网站的用户界面（UI）是允许用户与网站进行交互的前台设计。因为网站的导航系统是任何 UI 的主要元素，所以树状测试对于良好的 UI 设计至关重要。本文深入探讨了 UI 的概念，可以帮助你更好地理解设计以用户为中心的 UI 的重要性。

##### 可用性测试 (Usability Testing)

树状测试只是可用性测试方法之一。可用性测试是 UX 研究中的一个大类，它通过在真实用户身上进行测试来评估产品的功能。可用性测试有很多种形式，但它们都有着共同的目标——识别并修复可用性问题，从而让用户的生活更加轻松。

## 参考文献

1. Soegaard, M., & Gladwell, M. (2024, February 21). *What is a Sitemap in UX Design?* The Interaction Design Foundation. Retrieved March 15, 2024, from [https://www.interaction-design.org/literature/article/ux-sitemap](https://www.interaction-design.org/literature/article/ux-sitemap)
2. *Tree testing 101 - Tree testing overview.* (n.d.). Optimal Workshop. Retrieved March 15, 2024, from [https://www.optimalworkshop.com/learn/tree-testing-101-tree-testing-overview/](https://www.optimalworkshop.com/learn/tree-testing-101-tree-testing-overview/)
3. Cardello, J., & Harley, A. (2014, July 6). *Low Findability and Discoverability: Four Testing Methods to Identify the Causes*. Nielsen Norman Group. Retrieved March 15, 2024, from [https://www.nngroup.com/articles/navigation-ia-tests/](https://www.nngroup.com/articles/navigation-ia-tests/)
4. OBrien, D. (2009, December 5). *Tree Testing*. Boxes and Arrows. Retrieved March 15, 2024, from [https://boxesandarrows.com/tree-testing/](https://boxesandarrows.com/tree-testing/)
5. *Tree Testing: Evaluative UX Research Methods*. (n.d.). User Interviews. Retrieved March 15, 2024, from [https://www.userinterviews.com/ux-research-field-guide-chapter/tree-testing](https://www.userinterviews.com/ux-research-field-guide-chapter/tree-testing)
6. *Tree testing 101 - Write your tasks* (n.d.). Optimal Workshop. Retrieved March 15, 2024, from [https://www.optimalworkshop.com/learn/tree-testing-101-write-your-tasks/](https://www.optimalworkshop.com/learn/tree-testing-101-write-your-tasks/)
7. *Wine, bacon and periods: product categories and our journey to wrangle them* (n.d.). Optimal Workshop. Retrieved March 15, 2024, from [https://www.optimalworkshop.com/learn/customer-stories/countdown/](https://www.optimalworkshop.com/learn/customer-stories/countdown/)