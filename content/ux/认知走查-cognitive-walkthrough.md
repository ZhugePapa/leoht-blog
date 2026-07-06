---
title: 认知走查（Cognitive Walkthrough）
slug: 认知走查-cognitive-walkthrough
summary: 认知走查是一种 UX 评估方法，旨在分析用户在与产品或系统交互期间的思维过程。
type: article
status: published
tags: [交互设计, 方法论, 评估, 认知, 可用性]
domain: ux
source_title: Mariana Ontañón
source_author: Mariana Ontañón
source_url: https://thedecisionlab.com/reference-guide/design/cognitive-walkthrough
published_at: 2024-04-19
related: []
---

## 基本概念

Taylor 刚刚注册了一个新的在线项目管理工具，以提高与团队协作时的生产力。急于开始的 Taylor 创建了账号，但立刻迎面而来的是各种不同的功能、按钮和菜单。几乎是同时，一个弹窗建议她在独自使用该工具前先阅读教程。Taylor 心想“这能有多难？”，于是关掉了弹窗。她认为与其把时间浪费在看教程和各种说明上，不如自己摸索着玩一会儿。

认知走查（Cognitive Walkthrough）是人机交互 and 用户体验（UX）设计中常用的一种可用性评估方法。它涉及在用户与产品或系统交互时，对其思维过程进行系统性分析。其目的是识别潜在的可用性问题，并了解用户完成任务的难易程度。这种方法的开展正是为了像 Taylor 这样的用户考虑——那些认为与其阅读手册，不如通过实际操作系统的导航来学习效果更好的初次使用者。

像 Taylor 这样的用户期望能够通过遵循引导他们完成各项可用任务的线索，在系统或产品中进行导航。例如，如果 Taylor 遇到了一个“创建新项目”的按钮，他们会预期一个结构化的流程，通常包含一系列步骤或输入框。这种预期与 [雅各布互联网用户体验定律](https://thedecisionlab.com/reference-guide/design/system-and-real-world-alignment)（Jakob’s Law of Internet User Experience）相契合，该定律指出，用户会带着他们基于之前与其他界面交互所积累的预期来进行新的交互。

认知走查旨在了解用户的逻辑和思维方式，以便企业能够促进直观的导航。它们还旨在创建量身定制的体验，作为如何执行不同任务的提醒。

让我们以 Taylor 的场景为引导，逐步了解认知走查的步骤。<sup>1,2</sup>

1\. **明确测试目标：** 首先为界面的关键部分或功能定义一个清晰的目标。例如，目标可能是让 Taylor 成功启动一个新项目并添加团队成员。目标应当是可衡量的（目标是否达成？尝试了多少次？花了多长时间？）。

2\. **组建团队：** 你可以使用自己的 UX 专家、工程师或领域专家团队作为参与者。但理想情况下，你应该选择那些从未与该产品进行过交互的人（以模拟 Taylor 的体验），并避免 [偏差](https://thedecisionlab.com/biases-index)。加入真实用户或与目标受众高度相似的参与者是有益的，这有助于深入了解更广泛的用户交互和体验。

3\. **分配任务/操作**：列出不同难度的真实任务，有些是新用户可能会尝试的，有些则需要更多专业知识（以观察专家如何交互）。作为研究人员，你应该已经清楚完成这些任务所需的每一个步骤，以便评估参与者是否体验了所有步骤。

- [迭代测试](https://thedecisionlab.com/reference-guide/design/iterative-design)（即对产品进行评估、优化并再次测试）在 UX 设计中至关重要，因为它允许持续改进，并在做出更改时发现新问题。

4\. **进行走查**：对于每个任务，你应该提出以下四个问题：

- *用户会试图达到正确的预期结果吗？*：确定用户是否清楚该做什么。通常，我们给他们目标而不是直接的操作任务。例如，问：“你会如何与团队一起创建一个新项目？”，而不是：“找到 *Create New Project*（创建新项目）按钮。”
- *用户会注意到有正确的操作可用吗？*：分析系统是否提供了足够的线索。完成该任务是否只有一条路径？他们是否面临特定的挑战？
- *用户会将正确的操作与他们预期达到的结果关联起来吗？*：思考系统的反馈和标签是否直观。
- *如果执行了正确的操作，用户能看到他们正朝着预期的结果取得进展吗？*：评估系统是否提供了适当的反馈，以表明用户走在正确的轨道上。

5\. **记录发现：** 你应该记录参与者是通过还是失败，以及是什么原因导致了这一结果。他们在哪里遇到了困难？什么对他们来说比较容易？

- 在走查之后收集参与者的详细反馈可以提供结构化测试可能无法揭示的额外见解。这可能包括他们的主观满意度、感知易用性以及改进建议。

再一次强调，认知走查的核心要点在于评估易学性（learnability），特别是对于具有全新或陌生工作流程及功能的系统或产品。

“

> ***一旦你在一个网站上工作了哪怕只有几个星期，你就无法再用新鲜的眼光去看待它了。你了解得太多了。发现它是否真的有效的唯一方法就是去测试它。***
> 
>   
> 
> — Steve Krug，可用性与 UX 专家，著有：《别让我思考》（*Don’t Make Me Think*） <sup>3</sup>

## 核心术语

**用户体验（UX）：** UX 描述了用户在与产品、系统或服务交互时的整体体验。UX 设计的目标是为用户创造简单、有效、相关且整体令人愉悦的体验。UX 设计从用户的角度出发，考虑产品的“为什么”（why）、“是什么”（what）以及“怎么做”（how）。<sup>4</sup>

**可用性（Usability）：** 指特定用户在特定使用场景下，为了达到特定目标而使用产品或系统时的有效性（effectiveness）、效率（efficiency）和满意度（satisfaction）的程度。

**可用性测试（Usability Testing）：** 一种通过在用户身上进行测试来评估产品或系统的技术，以此观察并衡量其简单性和直观性。

**易学性（Learnability）：** 用户在初次与界面交互时能够多么轻松地完成一项任务，以及他们需要重复多少次才能熟练掌握该任务。

**[心智模型](https://thedecisionlab.com/reference-guide/design/mental-models)（Mental Models）：** 个人如何处理信息并根据其理解和经验形成预期。它们引导着我们的感知 and 行为。<sup>5</sup>

## 历史背景

在 20 世纪 90 年代初期，个人电脑开始成为日常生活（包括家庭和工作场所）的核心。对于设计师而言，对直观数字产品的需求变得迫切。正是在这一时期，认知走查方法得以开发。来自科罗拉多大学博尔德分校（University of Colorado Boulder）的研究团队（Cathleen Wharton、John Rieman、Clayton Lewis 和 Peter Polson）认识到了可用性和可用性测试的重要性。考虑到这一点，他们提出了一种能够系统评估数字产品可用性，且不需要大量资源和培训的方法。他们的目标是设计一种技术，使设计师和开发人员能够在产品发布前预测并发现潜在的可用性问题。

该流程实际上是针对 *即来即用界面*（walk-up-and-use interfaces，如自动取款机 ATM）开发的，在这类界面中，用户必须在没有任何事先培训或经验的情况下理解并使用界面。该方法背后的科学原理考虑了行为科学，以及人们如何通过尝试和解决问题来获取界面知识。<sup>6</sup>

与大多数设计方法一样，随着在现实世界中的应用，原作者对认知走查进行了修改和发展。在 Rieman、Lewis、Polson 和 Wharton 发表的论文中，在这些环节中提出的问题被调整了数次。这些发展使得该方法不再那么耗时和繁琐。原作者发表的最新更新是 2002 年的一篇名为《Web 的认知走查》（“Cognitive Walkthrough for the Web”）的论文，其中包含了本文第一部分中提到的问题。<sup>6</sup>

## 相关人物

**Cathleen Wharton：** 计算机科学博士，拥有认知科学认证，因开发和改进认知走查方法而闻名。她的研究重点是人机交互、改善可用性的方法以及为企业开发实用策略。<sup>7</sup>

**John Rieman**：计算机科学博士，开发认知走查的团队成员之一。

**Clayton Lewis：** 计算机科学家，以其对评估方法和界面设计的研究而闻名。作为认知走查的共同创造者，他任职于科罗拉多大学博尔德分校的认知科学研究所。<sup>8</sup>

**Peter Polson**：心理学教授，科罗拉多大学博尔德分校认知科学研究所的教职研究员。他的研究和学术生涯专注于使用基于计算机系统所需的学习和迁移技能。<sup>9</sup>

## 影响与效果

认知走查的优势之一是，与其他可用性测试方法相比，它们在某种程度上更具资源效率。通过使用你的内部团队，你可以降低与招募外部参与者相关的成本。只要内部团队没有接触过或参与开发该系统或产品，他们就可以保持客观。然而，认知走查仍需要仔细规划，有时使用外部参与者进行走查可能会带来更多收益。

这种方法在教学环境中尤其有效，例如软件设计课程，用于评估学生创建用户友好界面的能力，因为它直接衡量了他们的可用性知识和技能。同样重要的是要提到，尽管最初的认知走查通常使用内部团队，但也是允许招募外部参与者的。这样做可以为你的团队提供更准确、更好的发现。例如，你可以与内部团队一起运行一次走查，优化界面，然后与外部用户一起测试。他们的反馈不仅可以改善你的产品，还可以提炼并为后续的认知走查积累知识。不过，这种方法需要更多的规划和资源。

此外，在这些环节中进行的过程和提出的问题非常简单且直观。该方法所需的培训极少，因为在每种情况下问题都是相同的，进行访谈的人员只需要具备极少的研究技能。

该方法可以根据团队的需求整合定性和定量数据。每个任务所需的不同问题可以提供定性数据，包括询问想法和感受。此外，认知走查可以通过计算完成率、错误率和任务耗时等统计数据来整合定量数据。而且，认知走查不必在产品完成后才进行，你可以使用原型来开展它们。

该方法的另一个妙处在于，你可以轻松地将其与其他 UX 设计工具或方法结合使用。结合使用一些工具可以让你更全面地了解产品与用户之间的交互。例如，将认知走查与 [卡片分类](https://thedecisionlab.com/reference-guide/design/card-sorting)（card sorting）结合使用可以提供宝贵的见解。卡片分类能帮助你了解用户如何对信息进行分类，从而为你的界面提供直观的结构设计。总的来说，定期采用认知走查有助于培养持续改进的文化，并有可能降低开发成本。

## 争议与局限

使用你自己的团队听起来很棒且成本低，但你必须警惕可能存在的偏见。也许你公司里的每个人，无论他们是否在开发不同的产品，都会使用特定的行业术语或缩写，而这些术语在外部并不常见或不易理解。这种熟悉感可能会在无意中影响评估结果。不过，一个潜在的解决方案是创建 [用户画像](https://thedecisionlab.com/reference-guide/design/user-persona)（user personas）或使用其他工具有助于引起你对用户的共情，并设想他们将如何与界面进行交互。

此外，我们已经看到这种方法适用于新系统，并且有助于识别表层可用性问题。然而，它可能不适合复杂的界面，也无法充分捕获不同用户与你的产品交互时的情感反应。尽管会话中包含的四个问题可能会开启更深层次的交流，但该方法并不优先考虑定性研究。这可能会导致对用户体验的刻画不够准确。

最后，该方法需要考虑特定的任务以及完成这些任务所需的操作序列。而在现实中，一些用户可能会表现出更多探索性的操作或路线，或者以不可预测的方式与系统交互。许多用户通过试错来学习，这不一定是一件坏事。我们往往过于关注生产力，这可能会引入一种偏差。这种对效率的强调可能会导致我们忽视探索性学习的价值。

总之，虽然认知走查凭借其系统化的方法和高效性，是提高可用性的强大工具，但了解其局限性和潜在偏见至关重要。将此方法与其他形式的用户研究和测试相结合，有助于建立对用户体验更全面的理解，确保产品不仅可用，而且能够真正引起目标受众的共鸣。

## 案例研究

### 爱丁堡针对新手的交通 App <sup>10</sup>

爱丁堡市拥有庞大的公共交通系统，洛锡安巴士（Lothian Buses）通过一款以用户为中心的 App 为其提供便利。该 App 的核心目的是提供巴士和电车时刻表、站点和路线的实时信息。对于刚接触该城市公共交通网络的新来者来说，这是一个至关重要且极好的工具。因此，在 2018 年，研究人员进行了一次认知走查，以观察该 App 对初次使用者的易学性。核心任务是寻找最快的公共交通路线。走查确定了用户会遵循的关键步骤，从输入目的地到选择最快路线。直观性和效率是首要标准。

研究结果表明，该 App 确实非常直观，并使用了有效的视觉线索来帮助新用户理解界面。然而，在搜索结果和路线选项的呈现方式上发现了一些挑战。例如，当你在搜索区域查找一个地方时，巴士路线会首先出现在结果中。这让那些仅仅想寻找一个地点，而不一定是巴士路线的用户感到困惑。此外，它还缺乏对总出行时间与旅程各部分步行时间之间的区分。这种不清晰让用户很难弄清楚他们的旅程实际需要多长时间。

该研究为该 App 的可用性提出了几项改进建议，例如优化搜索结果的显示、提高路线选择反馈的清晰度，以及重新检查出行时间的呈现方式，以便更好地传达交通时间和步行时间的细分。

通过采用以用户为中心的设计视角，这项研究为迎合城市居民和游客多样化需求的、无障碍且直观的公共交通 App 的持续开发做出了贡献，强化了公共服务数字工具设计中同理心和清晰度的重要性。

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