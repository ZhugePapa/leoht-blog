---
title: 启发式评估 (Heuristic Evaluation)
slug: 启发式评估-heuristic-evaluation
summary: 启发式评估是一种用于识别用户界面中问题的检查方法。在评估过程中，一小群系统专家使用一组被称为“启发式”（heuristics）的预定义原则或指南来评估界面的用户友好度。
type: knowledge
status: published
tags: ["可用性", "设计原则", "方法论", "设计指南"]
domain: ux
source_author: Dr. Lauren Braithwaite
source_url: https://thedecisionlab.com/reference-guide/design/heuristic-evaluation
published_at: 2024-01-27
related: []
---
## 核心思想

试想一下，一个设计精良的网站登录页面是多么简单。你可以毫不费力地输入凭证并访问自己的账户。现在回想一下，你曾与设计糟糕的网站登录页面“斗智斗勇”的经历。很有可能，你最后要么感到沮丧地完成了这个过程，要么干脆放弃了。数字界面的成功取决于在其设计和开发过程中对其易用性（usability）进行了多么彻底的测试。而这种测试的一个关键方面就是启发式评估。

启发式评估是一种用于识别用户界面中问题的检查方法。在评估过程中，一小群系统专家使用一组被称为“启发式”（heuristics）的预定义原则或指南，来评估界面的用户友好度。

在认知科学领域，启发式是心理捷径或问题解决策略，旨在为复杂问题（尤其是在决策过程中）提供高效且实用的解决方案。在易用性（usability）和用户体验（UX）设计的语境下，启发式通常被用作评估和改进界面或系统易用性的指南。可以把它们看作是设计师和开发人员为了确保用户友好性而制定的详细清单。

启发式评估通常在用户界面设计过程的早期进行，因为这使得设计师能够在对真实用户进行完整的易用性测试之前，获得反馈并采取行动。

“

> ***任何设计给人们使用的系统都应该易于学习和记忆、高效且使用起来令人愉悦。***
> 
>   
> 
> **—— Rolf Molich 与 Jakob Nielsen**

## 关键术语

**启发式（Heuristics）：** 个人用于快速做出决策或高效解决问题的心理捷径或*经验法则*。在易用性和用户体验的背景下，启发式是指用于指导界面评估的成熟原则，有助于识别潜在的易用性问题。

**易用性（Usability）：** 指用户与产品、系统或界面进行交互以有效且令人满意地实现其目标的难易程度。它包括整体用户体验中的可访问性、可学习性、效率、可记忆性和用户满意度等因素。

**用户体验（UX）：** 用户对产品、系统或服务的整体交互感受和满意度。它考虑了用户在整个旅程中（从最初的交互到任务的完成）的易用性、可访问性、美学、情感以及用户的整体感知等因素。

## 历史背景

启发式评估的起源可以追溯到 1990 年，当时网络易用性专家 Jakob Nielsen 和 Rolf Molich 发表了一篇名为《改进人机对话》（Improving a Human-Computer Dialogue）的开创性论文。<sup>1</sup> 在这篇文章中，作者调查了 77 位工业设计师 and 程序员，发现识别计算机与人对话设计中具体的、潜在的问题是十分困难的。作为回应，Nielsen 和 Molich 提出了一个包含九项易用性考量因素的简短清单（当时他们还没有使用“启发式”这个词），用于评估和改善界面的用户体验。Nielsen 后来将这些早期发现发展为著名的“10 项易用性启发式原则”。

虽然 Nielsen 的指南是目前最知名且被广泛接受的一套原则，但其他专家也制定了启发式评估的指南。例如，计算机科学家 Jill Gerhardt-Powals 对用户界面评估采取了更具整体性的方法。<sup>2</sup> 在为潜艇的射击系统构建用户界面时，Gerhardt-Powals 强调了在界面设计中考虑情境意识（situational awareness）的重要性。她主张将认知科学的实证研究结果应用到界面设计中，以创建基于人类如何处理信息的“认知友好型”界面。

虽然由易用性工程早期先驱引入的启发式评估的基本原则仍然具有影响力，但人们越来越强调扩展和定制启发式，以应对特定的环境和新兴技术。使用同一套原则来评估手机应用和导弹界面系统的用户体验不仅毫无意义，而且可能非常危险（！）。根据所处的环境、预期用途和最终用户，每种类型的数字界面都有其自己的一套使用指南。例如，有用于评估虚拟现实、游戏和在线购物中用户体验的启发式。对于移动设备，所使用的特定启发式包括人体工程学以及对屏幕空间的合理利用。

## 关键人物

**Jakob Nielsen**：丹麦 UX 专家，他创建了一套名为“10 项易用性启发式原则”的设计原则，用于创建用户友好的数字界面。<sup>3</sup> 除了其开创性的研究外，Nielsen 还是 Nielsen Norman Group 的联合创始人，该集团是用户体验领域的领先咨询公司。

**Rolf Molich**：丹麦易用性工程专家，与 Jakob Nielsen 共同创立了启发式评估。

## 影响与作用

启发式评估是一种在设计过程早期发现易用性问题的、高性价比且高效的方法。如果没有这种早期干预，后期修复易用性问题的成本将会高得多。

由于启发式评估只需要一个相对较小的评估团队，根据既定原则对界面进行快速评估，因此成本通常可以保持在较低水平。这种高效与设计流程后期资源密集型的方法（如涉及 5 到 100 多人的大规模用户测试）形成了鲜明对比。

然而，需要注意的是，启发式评估不能替代真实用户的用户测试。评估的发现应该通过用户测试进行验证，以确保识别出的问题与实际的用户行为和偏好相一致。在易用性测试之前进行启发式评估，可以确保后续测试更加集中且高效。

启发式评估的另一个积极作用是，它可以在设计团队内部起到教育作用。这一过程有助于团队成员更深入地理解各种易用性原则和最佳实践，从而培养以用户为中心的心态，并将其应用到未来的项目中。

## 争议与局限

围绕启发式评估的争议主要在于其主观性和潜在的局限性。批评者认为，该方法严重依赖评估者的专业知识，从而引入了一定程度的主观性，这可能会因人而异。此外，为了使启发式评估行之有效并提供有价值的易用性见解，评估者需要确保选择与界面情境相符的正确启发式原则集。

随着时间的推移，围绕是否继续使用以及 Nielsen 原始的“10 项易用性启发式原则”的适用性展开了辩论。例如，一种批评是它们缺乏可扩展性，因为它们在设计时仅考虑了桌面应用程序，且当时界面的复杂性要低得多。<sup>4</sup> 此外，根据领先 of UX 设计师和顾问 Robert Bailey 的说法，Nielsen 的启发式原则实际上从未经过验证，并且没有证据表明在设计过程中应用它们能切实改善用户界面。<sup>5</sup>

启发式评估在应对文化差异时也面临挑战，因为该过程通常依赖于一套通用原则，这可能无法完全兼顾不同的文化背景。用户期望、沟通方式和审美偏好的文化差异，可能会影响启发式在不同用户群体中的适用性。例如，颜色象征意义或对某些设计元素的感知在不同文化之间可能会有很大差异。在中东地区，红色让人联想到危险和警示，但在中国，它象征着好运和幸福。因此，评估者需要对文化细微差别保持敏感，并在有效应用启发式时考虑特定语境的因素。

## 案例研究

**一声“咔哒”可以决定成败**

在评估医疗设备时，临床有效性通常优先于用户体验和易用性。然而，研究表明 <sup>6</sup> 大多数医疗设备事故与用户交互设计不当有关，而非机械故障。换句话说，如果目标用户无法正确使用医疗设备，那么该设备在临床上也就无法发挥其有效性。

在关于使用启发式评估和预测患者医疗设备使用情况的文章中，Zhang 等人讲述了一位医生遇到设计糟糕的用户界面的故事。这位医生当时正在用氧气机治疗一名婴儿，并将流量旋钮设定在每分钟 1 到 2 升之间。在意识到孩子没有吸入氧气后，医生发现该设备被设计为只有在旋钮设定在刻度盘上的整数时才输送氧气，设定在数字之间则不输送。作者指出，为了避免此类错误的发生，应该在每个数字刻度上增加一个微小的卡位（咔哒声），以向用户提供氧气流量率的声音反馈。

如果对该医疗设备进行了彻底的启发式评估，这个微小但重要的设计缺陷很可能就会被发现并予以改进。

**认知走查**

对于复杂的、全新的或不熟悉的界面，新用户需要能够快速学会如何使用该系统，且有时不需要太多指导。认知走查（Cognitive Walkthrough）是一种易用性检查形式，它专注于界面的“可学习性”（learnability），并识别可能使新用户受挫的设计问题。这一概念最早由科罗拉多大学博尔德分校的计算机科学家 Clayton Lewis <sup>7</sup> 及其同事提出，他们观察到许多用户更喜欢通过探索来学习软件的使用。

想象一下，某家诊所要求患者使用平板电脑签到就诊。为了通过认知走查评估平板电脑的用户体验，评审人员会评估患者完成签到所经历的确切步骤。在流程的每个阶段，评估者都会针对与患者体验相关的特定问题进行评估，并确定患者在签到流程的该步骤中是可能“通过”还是“失败”。

认知走查与启发式评估略有不同，因为它是基于一组特定的问题；而启发式评估在本质上要通用得多。然而，在设计开发过程中，这两种方法经常结合使用，以便从两个不同的角度对系统进行全面的了解。

## 相关 TDL 内容

[**利用行为产品设计改善千禧一代的金融普惠**](https://thedecisionlab.com/case-study/improving-millennials-financial-inclusion)

了解大脑如何运转以及人们的决策如何受到外部因素的影响，对于理解人们如何与数字产品和系统进行交互至关重要。TDL 与加拿大领先的金融科技公司 Moka 合作，以了解可能影响用户对其开创性储蓄和投资应用参与度的潜在认知偏差和启发式。

[**如何为 Z 世代设计心理健康工具**](https://thedecisionlab.com/insights/health/how-to-design-mental-health-tools-for-gen-z)

每一代人都有不同的需求、行为、期望和做事方式。因此，在设计针对 Z 世代的数字服务时，用户体验需要与他们的思考、感受和学习方式保持一致。本文探讨了如何将行为洞察应用于为 Z 世代设计一款心理健康应用，使其能与他们所寻求的用户体验产生共鸣。

## 参考文献

1. Molich R., Nielsen J. (1990). Improving a human-computer dialogue, *Communications of the ACM*, 33(3), 338-348.
2. Gerhardt-Powals, J. (1996). Cognitive engineering principles for enhancing human-computer performance. *International Journal of Human-Computer Interaction*, 8(2), 189-211.
3. Nielsen, J. (1994, April 24). 10 Usability Heuristics for User Interface Design. *Nielsen Norman Group*. [https://www.nngroup.com/articles/ten-usability-heuristics/](https://www.nngroup.com/articles/ten-usability-heuristics/)
4. Ballav, A. (September, 2017) Nielsen’s Heuristic evaluation: Limitations in Principles and Practice. *User Experience Magazine*, 17(4). [https://uxpamagazine.org/nielsens-heuristic-evaluation/](https://uxpamagazine.org/nielsens-heuristic-evaluation/)
5. Bailey, R. (May, 1999). Heuristic Evaluations. *Human Factors International*. https://www.humanfactors.com/newsletters/heuristic\_evaluations.asp
6. Zhang, J., Johnson, T. R., Patel, V. L., Paige, D. L., & Kubose, T. (2003). Using usability heuristics to evaluate patient safety of medical devices. *Journal of Biomedical Informatics*, 36(1), 23-30. [http://dx.doi.org/10.1016/S1532-0464(03)00060-1](http://dx.doi.org/10.1016/S1532-0464\(03\)00060-1)
7. Lewis, C., Polson, P., Wharton, C., & Rieman, J. (1990). Testing a walkthrough methodology for theory-based design of walk-up-and-use interfaces. *Proceedings of CHI, 1990* (Seattle, WA, April 1-5, 1990), ACM, New York. 235-242.