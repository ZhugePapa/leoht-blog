---
title: 认知走查 (Cognitive Walkthrough)
slug: 认知走查-cognitive-walkthrough
summary: 认知走查是一种用户体验（UX）评估方法，用于分析用户在与产品或系统交互期间的思维过程。
type: article
status: published
tags: [行为经济学, 认知偏差, 决策]
domain: behavior
source_title: Mariana Ontañón
source_author: Mariana Ontañón
source_url: https://thedecisionlab.com/reference-guide/design/cognitive-walkthrough
published_at: 2024-04-19
related: []
---

## 基本概念

Taylor 刚刚注册了一款新的在线项目管理工具，以此来提高与团队协作时的效率。急于开始的 Taylor 创建了一个账户，随即眼前便呈现出各种各样的功能、按钮和菜单。几乎就在同时，一个弹窗跳了出来，建议她在独自探索该工具之前先跟着教程学习。Taylor 心想“这能有多难？”，于是随手关掉了弹窗。她觉得，与其把时间浪费在浏览教程 and 繁琐的说明上，不如自己先瞎鼓捣一会儿。

认知走查（Cognitive Walkthrough）是人机交互与用户体验（UX）设计中常用的一种可用性评估方法。它涉及对用户在与产品或系统交互时的思维过程进行系统性分析。其目标是发现潜在的可用性问题，并了解用户完成任务的难易程度。这种评估方法在设计时就考虑到了像 Taylor 这样的用户——即那些认为通过实际操作系统比阅读说明手册能更快学会的初次使用者。

像 Taylor 这样的用户希望能够通过遵循引导他们完成各项可用任务的线索，在系统或产品中进行导航。例如，如果 Taylor 遇到了一个“创建新项目”按钮，她会预期一个结构化的流程，通常包括一系列步骤或输入框。这种预期与[雅各布互联网用户体验定律（Jakob's Law of Internet User Experience）](https://thedecisionlab.com/reference-guide/design/system-and-real-world-alignment)相吻合，该定律指出，用户会根据以往与其他界面的交互经验来产生期望。

认知走查旨在了解用户的逻辑和思维方式，以便企业能够促进直观的导航。它们还旨在创建量身定制的体验，作为如何执行不同任务的提醒。

让我们以 Taylor 的场景为引导，一步步了解认知走查的具体步骤。<sup>1,2</sup>

1\. **确定测试目标：** 首先为你的界面关键部分或功能定义一个明确的目标。例如，目标可能是让 Taylor 成功启动一个新项目并添加团队成员。目标应当是可衡量的（目标是否达成？尝试了多少次？花了多长时间？）。

2\. **组建团队：** 你可以使用自己的 UX 专家、工程师或领域专家团队作为参与者。但理想情况下，你应该选择那些从未与该产品进行过交互的人——以模拟 Taylor 的体验——并避免[偏差（biases）](https://thedecisionlab.com/biases-index)。引入与目标受众非常相似的真实用户或参与者是有益的，这有助于深入了解更广泛的用户交互与体验。

3\. **分配任务/操作**：规划出难度各异的真实任务，其中一些是新用户可能会尝试的，另一些则需要稍多一些的知识（以观察专家是如何交互的）。作为研究人员，你应该已经清楚完成任务所需的每一个步骤，以便评估参与者是否经历了所有步骤。

- [迭代测试（Iterative testing）](https://thedecisionlab.com/reference-guide/design/iterative-design)（即对产品进行评估、改进并再次测试）在 UX 设计中至关重要，因为它允许持续改进，并能在做出更改时捕获新出现的问题。

4\. **执行走查**：对于每个任务，你应该提出以下四个问题：

- *用户是否会尝试并达成正确的结果？*：确定用户是否清楚该做什么。通常，我们给他们的是目标而不是直接的任务。例如，应该问：“你将如何与你的团队一起创建一个新项目？”，而不是问：“找到 *创建新项目* 按钮。”
- *用户是否会注意到可以执行正确的操作？*：分析系统是否提供了足够的线索。是否存在完成任务的唯一路径？他们是否面临特定的挑战？
- *用户是否会将正确的操作与他们预期要达到的结果联系起来？*：考虑系统的反馈和标签是否直观。
- *如果执行了正确的操作，用户是否能看到正在朝着他们预期的结果取得进展？*：评估系统是否提供了适当的反馈，以表明用户正走在正确的轨道上。

5\. **记录发现：** 你应当记录参与者是通过还是失败，以及是什么原因导致了这一结果。他们在哪里遇到了困难？哪些部分对他们来说比较容易？

- 在走查结束后，从参与者那里收集详细的反思和反馈，可以提供结构化测试可能无法揭示的额外见解。这可能包括他们的主观满意度、感知的易用性以及改进建议。

总之，认知走查的核心要点是评估“易学性”（learnability），尤其是针对那些具有全新或不熟悉的工作流和功能的系统或产品。

“

> ***即使你只在一个网站上工作了几个星期，你也无法再用新鲜的眼光去看待它了。你懂的太多了。查明它是否真的有效的唯一方法就是去测试它***
> 
>   
> 
> — Steve Krug，可用性与 UX 专家，*《不要让我思考》* 的作者 <sup>3</sup>

## 核心术语

**用户体验（UX，User Experience）：** UX 描述了用户在与产品、系统或服务交互时的整体体验。UX 设计的目标是为用户创造简单、有效、相关且整体上令人愉悦的体验。UX 设计从用户的角度出发，考虑产品的“为什么”（why）、“是什么”（what）和“怎么做”（how）。<sup>4</sup>

**可用性（Usability）：** 指特定的用户在特定的使用场景下，为了达到特定的目标，使用一个产品或系统时的有效性（effectiveness）、效率（efficiency）和满意度（satisfaction）的程度。

**可用性测试（Usability Testing）：** 一种通过在用户身上进行测试来评估产品或系统的技术，以观察和衡量该产品或系统的简单直观程度。

**易学性（Learnability）：** 用户在初次与界面交互时能够多么轻松地完成任务，以及他们需要重复多少次才能熟练掌握该任务。

**[心理模型（Mental Models）](https://thedecisionlab.com/reference-guide/design/mental-models)：** 个人如何根据其理解和经验来处理信息并形成期望。它们引导着我们的感知和行为。<sup>5</sup>

## 历史背景

在 20 世纪 90 年代初期，个人电脑开始成为日常生活（包括家庭和工作场所）的核心。对于设计师而言，设计直观的数字产品变成了一件迫在眉睫的事情。正是这一时期，认知走查方法应运而生。来自科罗拉多大学博尔德分校（University of Colorado Boulder）的研究团队（Cathleen Wharton、John Rieman、Clayton Lewis 和 Peter Polson）认识到了可用性和可用性测试的重要性。基于这一想法，他们提出了一种方法，可以在不需要大量资源 and 培训的情况下系统地评估数字产品的可用性。他们的目标是设计一种技术，使设计师和开发人员能够在产品发布之前预测并发现潜在的可用性问题。

该流程最初是针对“即用型界面”（walk-up-and-use interfaces，如自动取款机 ATM）开发的，在这类界面中，用户必须在没有任何事先培训或经验的情况下理解并使用界面。该方法背后的科学原理考虑了行为科学，以及人们如何通过尝试和解决问题来获取界面使用知识。<sup>6</sup>

与大多数设计方法一样，随着在现实世界中的应用，认知走查被原作者们不断修改和发展。在这些走查过程中提出的问题在 Rieman、Lewis、Polson 和 Wharton 发表的几篇论文中被调整了多次。这些改进使得该方法不再那么耗时和繁琐。原作者发表的最新更新是 2002 年的一篇名为《Web 的认知走查》（Cognitive Walkthrough for the Web）的论文，其中包含了本文第一部分中提到的那些问题。<sup>6</sup>

## 关键人物

**Cathleen Wharton：** 计算机科学博士，拥有认知科学证书，以开发和完善认知走查方法而闻名。她的研究重点是人机交互以及提高可用性和为企业开发实用策略的方法。<sup>7</sup>

**John Rieman：** 计算机科学博士，开发认知走查团队的成员之一。

**Clayton Lewis：** 计算机科学家，以对评估方法和界面设计的研究而闻名。认知走查的另一位共同创造者，任职于科罗拉多大学博尔德分校认知科学研究所。<sup>8</sup>

**Peter Polson：** 心理学教授，科罗拉多大学博尔德分校认知科学研究所教职研究员。他的研究和学术生涯专注于使用基于计算机的系统所需的学习和迁移技能。<sup>9</sup>

## 影响与应用效果

认知走查的优势之一在于，与其他可用性测试方法相比，它在某种程度上更节省资源。通过使用内部团队，你可以降低招募外部参与者的相关成本。只要内部团队成员之前没有接触过或者没有参与开发该系统或产品，他们就可以保持客观。然而，认知走查仍然需要仔细的规划，并且与外部参与者一起进行走查可能会带来更多益处。

这种方法在教育环境中尤为有效（例如软件设计课程），可用于评估学生创建用户友好界面的能力，因为它直接衡量了他们的可用性知识和技能。同样重要的是，虽然最初的认知走查通常使用内部团队，但也是允许招募外部参与者的。这样做可以为你的团队提供更准确、更具价值的发现。例如，你可以与内部团队一起进行一次走查，改进界面，然后再与外部用户一起进行测试。他们的反馈不仅可以改进你的产品，还可以提炼并丰富后续认知走查的知识库。然而，这种方法需要更多的规划和资源。

此外，在这些评估过程中提出的问题和流程都非常简单和直观。该方法只需要极少的培训，因为在各种情况下问题都是相同的，进行访谈的人员也只需具备最低限度的研究技能。

该方法可以根据团队的需求，融合尽可能多的定性和定量数据。每个任务所需的不同问题可以提供定性数据，包括询问用户的想法和感受。此外，认知走查还可以通过计算完成率、错误率以及在任务上花费的时间等统计数据来集成定量数据。而且，认知走查不需要等到产品最终完成后才进行，你完全可以使用原型来开展。

这种方法的另一个妙处在于，你可以轻松地将其与其他的 UX 设计工具或方法结合使用。将一些工具结合起来，可以对产品与用户之间的交互产生更全面的理解。例如，使用认知走查配合[卡片分类（card sorting）](https://thedecisionlab.com/reference-guide/design/card-sorting)可以提供有价值的见解。卡片分类能帮助你了解用户如何对信息进行分类，从而为界面直观结构的搭建提供依据。总的来说，定期使用认知走查有助于建立持续改进的文化，并有可能降低开发成本。

## 争议与局限性

使用自己的团队听起来很棒且成本低廉，但你必须提防潜在的偏差。也许你公司里的每个人（无论他们是否在不同的产品线上工作）都会使用某些特定的行话或缩写，而对于不在公司工作的人来说，这些词汇并不常见或不易理解。这种熟悉感可能会在无意中影响评估结果。然而，一个潜在的解决方案是创建[用户画像（user personas）](https://thedecisionlab.com/reference-guide/design/user-persona)或使用其他可以帮助你与用户产生共情并想象他们如何与界面交互的工具。

此外，我们已经看到这种方法适用于新系统，并且有助于发现表面层次的可用性问题。然而，它可能不适用于复杂的界面，或者无法完全捕获不同用户与你的产品交互时的情感反应。虽然过程中的四个问题可能会引导出更深层次的交流，但该方法并不以定性研究为首要重点。这可能会导致无法准确描绘用户的真实体验。

最后，该方法需要考虑特定的任务以及完成这些任务所需的操作序列。但在现实中，一些用户可能会表现出更多的探索性行为或路径，或者以不可预测的方式与系统进行交互。许多用户是通过试错来学习的，这并不一定是一件坏事。我们往往过度关注生产力，这可能会引入一种偏差。这种对效率的强调可能会导致我们忽视探索性学习的价值。

总之，虽然认知走查凭借其系统化的方法和高效性，成为了提升可用性的强大工具，但清醒地认识其局限性和潜在偏差同样至关重要。将此方法与其它形式的用户研究和测试相结合，有助于建立对用户体验更全面的理解，从而确保产品不仅可用，而且能够真正引起目标受众的共鸣。

## 案例研究

### 针对新手的爱丁堡公交应用<sup>10</sup>

爱丁堡市拥有由 Lothian Buses 运营的庞大公共交通系统，并提供了一款以用户为中心的应用程序。该应用的核心价值在于提供公交车和有轨电车时刻表、站点以及路线的实时信息。对于刚接触该市公共交通网络的新来者来说，这是一个至关重要且极好的工具。因此，在 2018 年，研究人员进行了一次认知走查，以观察该应用对首次使用者的易学性。核心焦点是“寻找最快公共交通路线”这一任务。走查确定了用户将遵循的关键步骤——从输入目的地到选择最快路线。直观性和效率是最高的评估标准。

研究结果表明，该应用确实很真观，并使用了有效的视觉线索来帮助新用户理解界面。然而，在搜索结果和路线选项的呈现方式上发现了一些挑战。例如，当你在搜索栏中查找某个地点时，公交路线会首先出现在结果中。这给那些只想寻找具体地点、而不一定是公交路线的用户带来了困惑。此外，它还缺乏对总行程时间与各行程段之间步行时间的区分。这种不够清晰的呈现让用户很难算出他们的行程实际需要多长时间。

该研究针对应用的可用性提出了几项改进建议，例如优化搜索结果的显示、提高路线选择反馈的清晰度，以及重新审视旅行时间的呈现方式，以便更好地传达公共交通与步行时间的具体分布。

通过采用以用户为中心的设计视角，这项研究有助于持续开发无障碍、直观的公共交通应用，以满足城市居民和游客的多元化需求，并强化了在公共服务数字工具设计中同理心和清晰度的重要性。

## 参考文献

1. Interaction Design Foundation - IxDF. (2021). *How to Conduct a Cognitive Walkthrough*. Interaction Design Foundation. Retrieved March 29, 2024 from.https://www.interaction-design.org/literature/article/how-to-conduct-a-cognitive-walkthrough
2. Dovetail Editorial Team. (2023). Conduct a cognitive walkthrough in 9 steps. Retrieved March 29, 2024 from [https://dovetail.com/ux/cognitive-walkthrough/](https://dovetail.com/ux/cognitive-walkthrough/)
3. Arhipova, A. (n.d.). Don't Make Me Think: 20 Thoughts on Usability by Steve Krug. Retrieved March 29, 2024 from https://blog.tubikstudio.com/dont-make-me-think-20-thoughts-on-usability-by-steve-krug/
4. Interaction Design Foundation. (n.d.). UX Design. Retrieved March 12, 2024, from Molich, R. (n.d.). About Me – Rolf Molich. *DialogDesign*. Retrieved March 27, 2024, from [https://www.dialogdesign.dk/about-rolf-molich/](https://www.dialogdesign.dk/about-rolf-molich/)
5. Clear, J. (n.d.). Feynman Technique. Retrieved March 1, 2024, from [https://jamesclear.com/feynman-mental-models](https://jamesclear.com/feynman-mental-models)
6. Salazar, K. (2022). Evaluate Interfase Learnability with Cognitive Walkthroughs. Retrieved March 12, 2024, from [https://www.nngroup.com/articles/cognitive-walkthroughs/#:~:text=Cognitive%20walkthroughs%20are%20a%20proven,usability%20testing%20may%20be%20limited](https://www.nngroup.com/articles/cognitive-walkthroughs/#:~:text=Cognitive%20walkthroughs%20are%20a%20proven,usability%20testing%20may%20be%20limited)
7. Cathleen Wharton. (n.d) About \[LinkedIn page\]. LinkedIn. Retrieved March 12, 2024, from [https://www.linkedin.com/in/wharton/](https://www.linkedin.com/in/wharton/)
8. University of Colorado Boulder. (n.d.). Clayton Lewis. Retrieved March 12, 2024, from [https://www.colorado.edu/cmci/people/information-science/clayton-lewis](https://www.colorado.edu/cmci/people/information-science/clayton-lewis)
9. University of Colorado Boulder. (n.d.). Peter G. Polson. Retrieved March 12, 2024, from [https://www.colorado.edu/psych-neuro/peter-g-polson](https://www.colorado.edu/psych-neuro/peter-g-polson)
10. Velásquez, S. (2018). Evaluation of a user interfase using cognitive walkthrough (real case). Retrieved March 29, 2024 from [https://medium.com/@sosegon/evaluation-of-a-user-interface-using-cognitive-walkthrough-real-case-ac94014003d8](https://medium.com/@sosegon/evaluation-of-a-user-interface-using-cognitive-walkthrough-real-case-ac94014003d8)