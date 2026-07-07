---
title: Web Content Accessibility Guidelines (WCAG) 2.2
slug: web-content-accessibility-guidelines-wcag-2-2
summary: 《Web 内容无障碍指南 (WCAG) 2.2》涵盖了使 Web 内容更具可访问性的一系列广泛建议。遵循这些指南将使处于更广泛残疾范围的人士能够更方便地访问内容，包括为盲人和低视力、耳聋和听力丧失、行动受限、言语残疾、光敏性及其组合人群提供便利，并为学习障碍和认知局限提供一些便利；但无法解决这群残疾人士的所有用户需求。这些指南解决了任何类型的设备（包括台式机、笔记本电脑、信息亭和移动设备）上 Web 内容的可访问性问题。遵循这些指南通常也会使 Web 内容对普通用户更具可用性。
type: knowledge
status: published
tags: ["可访问性", "可用性", "设计指南", "Web端"]
domain: ux
source_author: ""
source_url: https://www.w3.org/TR/WCAG22/
published_at: 2024-12-12
related: []
---
[W3C 推荐标准](https://www.w3.org/standards/types#REC)

关于本文档的更多细节

此版本：

[https://www.w3.org/TR/2024/REC-WCAG22-20241212/](https://www.w3.org/TR/2024/REC-WCAG22-20241212/)

最新发布版本：

[https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)

最新编辑草案：

[https://w3c.github.io/wcag/guidelines/22/](https://w3c.github.io/wcag/guidelines/22/)

历史记录：

[https://www.w3.org/standards/history/WCAG22/](https://www.w3.org/standards/history/WCAG22/)

[提交历史](https://github.com/w3c/wcag/commits/)

实现报告：

[https://www.w3.org/WAI/WCAG22/implementation-report/](https://www.w3.org/WAI/WCAG22/implementation-report/)

前一版推荐标准：

[https://www.w3.org/TR/WCAG21/](https://www.w3.org/TR/WCAG21/)

编辑：

[Alastair Campbell](https://www.w3.org/TR/WCAG22/) (Nomensa)

[Chuck Adams](https://www.w3.org/TR/WCAG22/) (Oracle)

[Rachael Bradley Montgomery](https://www.w3.org/TR/WCAG22/) (Library of Congress)

[Michael Cooper](https://www.w3.org/People/cooper) (W3C)

Andrew Kirkpatrick (Adobe)

反馈：

[GitHub w3c/wcag](https://github.com/w3c/wcag/) ([拉取请求](https://github.com/w3c/wcag/pulls/), [新建 issue](https://github.com/w3c/wcag/issues/new/choose), [待解决 issues](https://github.com/w3c/wcag/issues/))

勘误：

[存在勘误](https://www.w3.org/WAI/WCAG22/errata/)。

另请参阅[**翻译版本**](https://www.w3.org/Translations/?technology=WCAG22)。

---

## 摘要

《Web 内容无障碍指南 (WCAG) 2.2》涵盖了使 Web 内容更具可访问性的一系列广泛建议。遵循这些指南将使处于更广泛残疾范围的人士能够更方便地访问内容，包括为盲人和低视力、耳聋和听力丧失、行动受限、言语残疾、光敏性及其组合人群提供便利，并为学习障碍和认知局限提供一些便利；但无法解决这群残疾人士的所有用户需求。这些指南解决了任何类型的设备（包括台式机、笔记本电脑、信息亭和移动设备）上 Web 内容的可访问性问题。遵循这些指南通常也会使 Web 内容对普通用户更具可用性。

WCAG 2.2 成功准则被写为可测试的陈述，这些陈述与具体技术无关。有关在特定技术中满足成功准则的指导，以及有关解释成功准则的一般信息，在单独的文档中提供。有关介绍以及指向 WCAG 技术和教育材料的链接，请参阅 [Web 内容无障碍指南 (WCAG) 概述](https://www.w3.org/WAI/standards-guidelines/wcag/)。

WCAG 2.2 扩展了于 2018 年 6 月作为 W3C 推荐标准发布的 [Web 内容无障碍指南 2.1](https://www.w3.org/TR/WCAG21/) \[\], 。符合 WCAG 2.2 的内容也符合 WCAG 2.0 和 WCAG 2.1。工作组（WG）的意图是，对于要求符合 WCAG 2.0 或 WCAG 2.1 的政策，WCAG 2.2 可以提供另一种符合性方式。WCAG 2.2 的发布并未废弃或取代 WCAG 2.0 或 WCAG 2.1。虽然 WCAG 2.0 和 WCAG 2.1 仍为 W3C 推荐标准，但 W3C 建议使用 WCAG 2.2，以最大程度地提高未来可访问性工作的适用性。W3C 还鼓励在制定或更新 Web 可访问性政策时使用最新版本的 WCAG。

## 本文档的状态

*本节描述了本文档在发布之时的状态。当前 W3C 出版物列表以及本技术报告的最新修订版可在 https://www.w3.org/TR/ 处的 [W3C 技术报告索引](https://www.w3.org/TR/)中找到。*

如需发表评论，请[在 W3C WCAG GitHub 仓库中提交 issue](https://github.com/w3c/wcag/issues/new)。尽管本文档中建议的成功准则引用了跟踪讨论的 issue，但工作组仍请求将公共意见作为新 issue 提交，每个分立的意见提交一个 issue。创建 GitHub 账户以提交 issue 是免费的。如果无法在 GitHub 中提交 issue，请发送电子邮件至 [public-agwg-comments@w3.org](https://www.w3.org/TR/WCAG22/)（[邮件存档](https://lists.w3.org/Archives/Public/public-agwg-comments/)）。

本文档由[可访问性指南工作组](https://www.w3.org/groups/wg/ag)通过[推荐标准轨道](https://www.w3.org/policies/process/20231103/#recs-and-notes)发布为推荐标准。

W3C 推荐广泛部署此规范作为 Web 标准。

W3C 推荐标准是一项规范，在经过广泛的共识达成后，由 W3C 及其成员认可，并得到了工作组团队成员对于实现提供[免版税许可](https://www.w3.org/policies/patent-policy/#sec-Requirements)的承诺。

本文档是由在 [W3C 专利政策](https://www.w3.org/policies/patent-policy/)下运行的团队制作的。W3C 维护着一份与该工作组交付物相关的[所有专利披露的公开列表](https://www.w3.org/groups/wg/ag/ipr)；该页面还包含了披露专利的说明。任何对专利有实际了解并认为其中包含[必要权利要求](https://www.w3.org/policies/patent-policy/#def-essential)的个人，必须根据 [W3C 专利政策第 6 节](https://www.w3.org/policies/patent-policy/#sec-Disclosure)披露该信息。

本文档受 [2023 年 11 月 3 日 W3C 流程文档](https://www.w3.org/policies/process/20231103/)的管理。

## 简介

*本节是非规范性的。*

《Web 内容无障碍指南 (WCAG) 2.2》定义了如何使 Web 内容对残疾人士更具可访问性。可访问性涉及广泛的残疾，包括视觉、听觉、肢体、言语、认知、语言、学习和神经系统障碍。尽管这些指南涵盖了广泛的问题，但它们无法解决所有类型、程度及残疾组合人群的需求。这些指南还使由于衰老而导致能力发生改变的老年人能够更方便地使用 Web 内容，并且通常也能为普通用户提高可用性。

WCAG 2.2 是通过 [W3C 流程](https://www.w3.org/WAI/standards-guidelines/w3c-process/)在与全球个人和组织合作下开发的，其目标是提供一个满足国际上个人、组织和政府需求的 Web 内容可访问性共享标准。WCAG 2.2 建立在 WCAG 2.0 \[\] 和 WCAG 2.1 \[\] 的基础之上（它们反过来又建立在 WCAG 1.0 \[\] 的基础之上），旨在广泛适用于当前和未来的不同 Web 技术，并通过自动测试和人工评估相结合的方式进行测试。有关 WCAG 的介绍，请参阅 [Web 内容无障碍指南 (WCAG) 概述](https://www.w3.org/WAI/standards-guidelines/wcag/)。

在定义额外的准则以解决认知、语言和学习障碍时遇到了重大挑战，包括开发时间紧迫，以及在提案的可测试性、可实现性和国际化考量上达成共识所面临的挑战。在未来版本的 WCAG 中，这一领域的工作将继续开展。我们鼓励作者参考我们的补充指南，以[改善对残疾人士的包容性，包括学习和认知残疾人士、低视力人群等](https://www.w3.org/WAI/standards-guidelines/wcag/#supplement)。

Web 可访问性不仅取决于可访问的内容，还取决于可访问的 Web 浏览器和其他用户代理。创作工具在 Web 可访问性中也起着重要作用。有关这些 Web 开发和交互组件如何协同工作的概述，请参阅：

- **[Web 可访问性的核心组件](https://www.w3.org/WAI/fundamentals/components/)**
- **[用户代理可访问性指南 (UAAG) 概述](https://www.w3.org/WAI/standards-guidelines/uaag/)**
- **[创作工具可访问性指南 (ATAG) 概述](https://www.w3.org/WAI/standards-guidelines/atag/)**

本文档中提及的 WCAG 2 均指以 2 开头的任何及所有版本的 WCAG。

使用 WCAG 的个人 and 组织非常广泛，包括 Web 设计师和开发人员、政策制定者、采购代理、教师和学生。为了满足这些受众的不同需求，指南提供了多个层次的指导，包括总体*原则*、通用*指南*、可测试的*成功准则*，以及丰富的*充足技术*、*建议技术*和*已记录的常见失败*，并附有示例、资源链接和代码。

- **原则** - 最顶层是为 Web 可访问性提供基础的四个原则：*可感知性、可操作性、可理解性和鲁棒性*。另请参阅[理解可访问性的四个原则](https://www.w3.org/WAI/WCAG22/Understanding/intro#understanding-the-four-principles-of-accessibility)。
- **指南** - 原则之下是指南。13 项指南提供了作者应该努力实现的基本目标，以便使内容更易于不同残疾用户访问。这些指南是不可测试的，但它们提供了框架和总体目标，以帮助作者理解成功准则并更好地应用技术。
- **成功准则** - 对于每项指南，都提供了可测试的成功准则，以便在需要符合性测试和要求时（如设计规范、采购、监管和合同协议中）使用 WCAG 2.2。为了满足不同群体和不同情况的需求，定义了三个符合性级别：A（最低）、AA 和 AAA（最高）。有关 WCAG 级别的更多信息，请参阅[理解符合性级别](https://www.w3.org/WAI/WCAG22/Understanding/conformance#levels)。
- **充足技术和建议技术** - 对于 WCAG 2.2 文档本身的每项*指南*和*成功准则*，工作组还记录了各种各样的*技术*。这些技术是资料性的，分为两类：对于满足成功准则而言是*充足*的技术，以及*建议*技术。建议技术超出了个别成功准则的要求，使作者能够更好地落实指南。一些建议技术解决了可测试的成功准则未涵盖的可访问性障碍。在已知存在常见失败的情况下，这些失败也会被记录下来。另请参阅[理解 WCAG 2.2 中的充足与建议技术](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)。

所有这些指导层（原则、指南、成功准则以及充足和建议技术）协同工作，共同指导如何使内容更易于访问。鼓励作者查看并应用他们能够应用的所有指导层，包括建议技术，以便最有效地满足最广泛用户的需求。

请注意，即使符合最高级别 (AAA) 的内容，也无法使所有类型、程度或残疾组合的人群（特别是在认知、语言和学习领域）都能无障碍访问。鼓励作者考虑全方位的技术，包括建议技术——[使内容易于认知和学习障碍者使用](https://www.w3.org/TR/coga-usable/)，并寻求有关当前最佳实践的相关建议，以确保 Web 内容尽可能地对该群体无障碍。[元数据](https://www.w3.org/WAI/WCAG22/Understanding/understanding-metadata)可能会帮助用户寻找最适合其需求的内容。

WCAG 2.2 文档旨在满足那些需要稳定、可引用的技术标准的人员的需求。其他文档（称为支持文档）基于 WCAG 2.2 文档，并解决其他重要目的，包括能够更新以描述 WCAG 如何应用于新网络技术。支持文档包括：

1. **[如何满足 WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/)** - WCAG 2.2 的可定制快速参考，其中包括供作者在开发和评估 Web 内容时使用的所有指南、成功准则和技术。这包括来自 WCAG 2.0、2.1 和 2.2 的内容，并可以通过多种方式进行过滤，以帮助作者专注于相关内容。
2. **[理解 WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/)** - 理解和实现 WCAG 2.2 的指南。对于 WCAG 2.2 中的每项指南 and 成功准则以及关键主题，都有一篇简短的“理解”文档。
3. **[WCAG 2.2 技术](https://www.w3.org/WAI/WCAG22/Techniques/)** - 技术和常见失败的合集，每项内容都在单独的文档中，包含描述、示例、代码和测试。
4. **[WCAG 2 文档](https://www.w3.org/WAI/standards-guidelines/wcag/docs/)** - 对 WCAG 2 支持文档和补充指南的简要介绍。
5. **[WCAG 2.2 中的新变化](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)** 介绍了新的成功准则，并附有说明可访问性问题的角色陈述。

有关 WCAG 2.2 支持材料（包括与 WCAG 2 相关的教育资源）的描述，请参阅 [Web 内容无障碍指南 (WCAG) 概述](https://www.w3.org/WAI/standards-guidelines/wcag/)。其他涵盖 Web 可访问性商业案例、规划实现以提高网站可访问性以及可访问性政策等主题的资源列在 [WAI 资源](https://www.w3.org/WAI/Resources/Overview)中。

WCAG 2.2 满足了一套 [WCAG 2.2 的要求](https://w3c.github.io/wcag/requirements/22/)，这些要求反过来又继承了之前 WCAG 2 版本的要求。要求构建了指南的整体框架，并确保向后兼容。工作组还对成功准则使用了一套不太正式的验收标准，以帮助确保成功准则在样式和质量上与 WCAG 2.0 中的标准类似。这些要求限制了 WCAG 2.2 中可以包含的内容。这种限制对于保持其作为 WCAG 2 次要版本的性质至关重要。

启动 WCAG 2.2 的目的是继续 WCAG 2.1 的工作：改善针对三大群体（认知或学习残疾用户、低视力用户以及移动设备上的残疾用户）的可访问性指南。提出并评估了许多满足这些需求的方法，工作组对其中一套进行了细化。继承自 WCAG 2.0 的结构要求、提案的清晰度和影响以及时间线，造就了本版本中包含的最终成功准则集。工作组认为 WCAG 2.2 逐步推进了所有这些领域的 Web 内容可访问性指导，但强调这些指南并未满足所有的用户需求。

WCAG 2.2 建立在 WCAG 2.1 的基础上并与其向后兼容，这意味着符合 WCAG 2.2 的 Web 页面至少与符合 WCAG 2.1 的页面具有同等的可访问性。在 2.1 和 2.0 的基础上增加了新的要求。WCAG 2.2 删除了一个成功准则：[4.1.1 解析](https://www.w3.org/TR/WCAG22/#parsing)。如果政策要求符合 WCAG 2.0 或 2.1，作者将能够把内容更新至 WCAG 2.2，但可能需要继续测试和报告 4.1.1。遵循多个版本指南的作者应注意以下新增内容。

WCAG 2.2 通过增加新的成功准则、支持它们的定义以及组织这些新增内容的指南来扩展 WCAG 2.1。这种累加式的方法有助于明确符合 WCAG 2.2 的网站也符合 WCAG 2.1。可访问性指南工作组建议网站将 WCAG 2.2 作为其新的符合性目标，即使正式义务中提及了以前的版本，以提供更好的可访问性并预测未来的政策变化。

以下是 WCAG 2.2 中新增的成功准则：

- 2.4.11 [焦点未被遮挡（最小）](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum) (AA)
- 2.4.12 [焦点未被遮挡（增强）](https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced) (AAA)
- 2.4.13 [焦点外观](https://www.w3.org/TR/WCAG22/#focus-appearance) (AAA)
- 2.5.7 [拖拽运动](https://www.w3.org/TR/WCAG22/#dragging-movements) (AA)
- 2.5.8 [目标大小（最小）](https://www.w3.org/TR/WCAG22/#target-size-minimum) (AA)
- 3.2.6 [一致的帮助](https://www.w3.org/TR/WCAG22/#consistent-help) (A)
- 3.3.7 [冗余输入](https://www.w3.org/TR/WCAG22/#redundant-entry) (A)
- 3.3.8 [无障碍身份验证（最小）](https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum) (AA)
- 3.3.9 [无障碍身份验证（增强）](https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced) (AAA)

新的成功准则可能会引用新词汇，这些词汇也已添加到词汇表中，并构成了成功准则规范性要求的一部分。

WCAG 2.2 还引入了新章节，详细说明了规范中可能影响[隐私](https://www.w3.org/TR/WCAG22/#privacy-summary)和[安全](https://www.w3.org/TR/WCAG22/#security-summary)的各个方面。
为了避免让向后兼容 WCAG 2 版本的实现者感到困惑，WCAG 2.2 中的新成功准则已附加到其指南内成功准则集的末尾。这避免了修改 WCAG 2 成功准则的章节编号，因为在指南中现有成功准则之间插入新准则会导致编号变化，但这意味每个指南中的成功准则不再按符合性级别进行分组。每个指南内成功准则的顺序并不隐含有关符合性级别的信息；只有成功准则本身的符合性级别指示符（A / AA / AAA）对此予以指示。 [WCAG 2.2 快速参考](https://www.w3.org/WAI/WCAG22/quickref/)将提供一种按符合性级别分组查看成功准则的方法，以及许多其他过滤和排序选项。

WCAG 2.2 使用与 WCAG 2.0 相同的符合性 model。符合 WCAG 2.2 的网站旨在同时也符合 WCAG 2.0 和 WCAG 2.1，这意味着它们能够满足任何引用 WCAG 2.0 或 WCAG 2.1 的政策要求，同时也能够更好地满足用户在当前 Web 上的需求。

与 WCAG 2.2 平行，可访问性指南工作组正在开发另一个主要版本的可访问性指南。该工作的结果预计将是对 Web 可访问性指导进行比 WCAG 2 次要版本更为实质性的重构。这项工作遵循以研究为中心、以用户为中心的设计方法，以产生最有效、最灵活的结果，包括内容创作、用户代理支持和创作工具支持的角色。这是一项为期多年的工作，因此需要将 WCAG 2.2 作为一项过渡性措施，以提供更新的 Web 可访问性指导，从而反映自 WCAG 2.0 发布以来 Web 所发生的变化。工作组可能还会在相似的短时间内开发出后续的过渡版本（延续 WCAG 2.2），以便在主要版本完成前提供额外的支持。

信息和用户界面组件必须以用户能够感知的方式呈现给他们。

[理解文本替代](https://www.w3.org/WAI/WCAG22/Understanding/text-alternatives.html) |  
[如何满足文本替代](https://www.w3.org/WAI/WCAG22/quickref/#text-alternatives)

为任何非文本内容提供文本替代，以便将其转换为人们需要的其他形式，例如大号字体、盲文、语音、符号或更简单的语言。

[理解非文本内容](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html) |  
[如何满足非文本内容](https://www.w3.org/WAI/WCAG22/quickref/#non-text-content)

(级别 A)

向用户呈现的所有[非文本内容](https://www.w3.org/TR/WCAG22/#dfn-non-text-content "任何不是可以通过程序确定的字符序列的内容，或者该序列不用人类语言表达某些事物的内容")都具有服务于等效目的的[文本替代](https://www.w3.org/TR/WCAG22/#dfn-text-alternative "与非文本内容进行程序化关联的文本，或者在与非文本内容程序化关联的文本中所引用的文本。程序化关联的文本是指其位置可以从非文本内容中程序化确定的文本。")，但以下列出的情况除外。

控件、输入

如果非文本内容是一个控件或接受用户输入，那么它具有一个描述其目的的[名称](https://www.w3.org/TR/WCAG22/#dfn-name "软件据此向用户识别 Web 内容中组件的文本")。 (有关控件和接受用户输入的内容的其他要求，请参阅[成功准则 4.1.2](https://www.w3.org/TR/WCAG22/#name-role-value)。)

基于时间的媒体

如果非文本内容是基于时间的媒体，那么文本替代至少应提供非文本内容的描述性标识。 (有关媒体的其他要求，请参阅[指南 1.2](https://www.w3.org/TR/WCAG22/#time-based-media)。)

测试

如果非文本内容是测试或练习，且若以[文本](https://www.w3.org/TR/WCAG22/#dfn-text "可以程序化确定的字符序列，该序列是用人类语言表达某些事物")呈现则会无效，那么文本替代至少应提供非文本内容的描述性标识。

感官

如果非文本内容主要旨在创造[特定的感官体验](https://www.w3.org/TR/WCAG22/#dfn-specific-sensory-experience "一种并非纯粹装饰性的，且主要不传递重要信息或执行功能的感官体验")，那么文本替代至少应提供非文本内容的描述性标识。

验证码

如果非文本内容的目的是确认访问内容的是人而不是计算机，那么应提供识别和描述非文本内容目的的文本替代，并提供针对不同类型感官知觉的替代形式验证码 (CAPTCHA)，以适应不同的残疾。

装饰、格式化、不可见

如果非文本内容是[纯粹的装饰](https://www.w3.org/TR/WCAG22/#dfn-pure-decoration "仅具有美学目的，不提供任何信息，且没有任何功能")、仅用于视觉格式化或未呈现给用户，那么它的实现方式应该能让[辅助技术](https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies "硬件和/或软件，作为用户代理，或与主流用户代理协同工作，提供满足超出主流用户代理所提供的残疾用户需求的功能")忽略它。

[理解基于时间的媒体](https://www.w3.org/WAI/WCAG22/Understanding/time-based-media.html) |  
[如何满足基于时间的媒体](https://www.w3.org/WAI/WCAG22/quickref/#time-based-media)

为基于时间的媒体提供替代方案。

[理解仅音频和仅视频 (预录制)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html) |  
[如何满足仅音频 and 仅视频 (预录制)](https://www.w3.org/WAI/WCAG22/quickref/#audio-only-and-video-only-prerecorded)

(级别 A)

对于[预录制的](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "非直播的信息")[仅音频](https://www.w3.org/TR/WCAG22/#dfn-audio-only "仅包含音频（无视频且无交互）的基于时间的演示")和预录制的[仅视频](https://www.w3.org/TR/WCAG22/#dfn-video-only "仅包含视频（无音频且无交互）的基于时间的演示")媒体，以下内容属实，除非音频或视频是[文本的媒体替代](https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text "所呈现的信息不超过文本中已呈现的信息（直接或通过文本替代）的媒体")且被清楚地标记为如此：

预录制仅音频

提供了一个[基于时间媒体的替代方案](https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media "包含按正确顺序排列的基于时间的视觉和听觉信息的文本描述，并提供实现任何基于时间交互结果的手段的文档")，为预录制仅音频内容呈现等效信息。

预录制仅视频

要么提供基于时间的媒体替代方案，要么提供音频轨道，为预录制仅视频内容呈现等效信息。

[理解字幕 (预录制)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html) |  
[如何满足字幕 (预录制)](https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded)

(级别 A)

为[同步媒体](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "与另一种呈现信息格式和/或与基于时间交互组件同步的音频或视频，除非该媒体是被清楚地标记为文本的媒体替代品")中的所有[预录制](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "非直播的信息")[音频](https://www.w3.org/TR/WCAG22/#dfn-audio "声音复制技术")内容提供[字幕](https://www.w3.org/TR/WCAG22/#dfn-captions "为理解媒体内容所需的语音 and 非语音音频信息提供的同步视觉和/或文本替代品")，除非该媒体是[文本的媒体替代](https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text "所呈现的信息不超过文本中已呈现的信息（直接或通过文本替代）的媒体")且被清楚地标记为如此。

[理解音频描述或媒体替代 (预录制)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html) |  
[如何满足音频描述或媒体替代 (预录制)](https://www.w3.org/WAI/WCAG22/quickref/#audio-description-or-media-alternative-prerecorded)

(级别 A)

为[同步媒体](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "与另一种呈现信息格式和/或与基于时间交互组件同步的音频或视频，除非该媒体是被清楚地标记为文本的媒体替代品")中的预录制[视频](https://www.w3.org/TR/WCAG22/#dfn-video "运动或排序画面或图像的技术")内容提供[基于时间的媒体替代方案](https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media "包含按正确顺序排列的基于时间的视觉和听觉信息的文本描述，并提供实现任何基于时间交互结果的手段的文档")或[音频描述](https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions "添加到音轨中的旁白，用于描述仅从主音轨无法理解的重要视觉细节")，除非该媒体是[文本的媒体替代](https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text "所呈现的信息不超过文本中已呈现的信息（直接或通过文本替代）的媒体")且被清楚地标记为如此。

[理解字幕 (直播)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html) |  
[如何满足字幕 (直播)](https://www.w3.org/WAI/WCAG22/quickref/#captions-live)

(级别 AA)

为[同步媒体](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "与另一种呈现信息格式和/或与基于时间交互组件同步的音频或视频，除非该媒体是被清楚地标记为文本的媒体替代品")中的所有[直播](https://www.w3.org/TR/WCAG22/#dfn-live "从现实世界事件捕获并传输到接收器，且延迟不超过广播延迟的信息")[音频](https://www.w3.org/TR/WCAG22/#dfn-audio "声音复制技术")内容提供[字幕](https://www.w3.org/TR/WCAG22/#dfn-captions "为理解媒体内容所需的语音和非语音音频信息提供的同步视觉和/或文本替代品")。

[理解音频描述 (预录制)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html) |  
[如何满足音频描述 (预录制)](https://www.w3.org/WAI/WCAG22/quickref/#audio-description-prerecorded)

(级别 AA)

为[同步媒体](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "与另一种呈现信息格式和/或与基于时间交互组件同步的音频或视频，除非该媒体是被清楚地标记为文本的媒体替代品")中的所有[预录制](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "非直播的信息")[视频](https://www.w3.org/TR/WCAG22/#dfn-video "运动或排序画面或图像的技术")内容提供[音频描述](https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions "添加到音轨中的旁白，用于描述仅从主音轨无法理解的重要视觉细节")。

[理解手语 (预录制)](https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html) |  
[如何满足手语 (预录制)](https://www.w3.org/WAI/WCAG22/quickref/#sign-language-prerecorded)

(级别 AAA)

为[同步媒体](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "与另一种呈现信息格式和/或与基于时间交互组件同步的音频或视频，除非该媒体是被清楚地标记为文本的媒体替代品")中的所有[预录制](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "非直播的信息")[音频](https://www.w3.org/TR/WCAG22/#dfn-audio "声音复制技术")内容提供[手语翻译](https://www.w3.org/TR/WCAG22/#dfn-sign-language-interpretation "将一种语言（通常是口头语言）翻译为手语")。

[理解延伸音频描述 (预录制)](https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html) |  
[如何满足延伸音频描述 (预录制)](https://www.w3.org/WAI/WCAG22/quickref/#extended-audio-description-prerecorded)

(级别 AAA)

当主音频中的暂停不足以让[音频描述](https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions "添加到音轨中的旁白，用于描述仅从主音轨无法理解的重要视觉细节")传达视频的含义时，为[同步媒体](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "与另一种呈现信息格式和/或与基于时间交互组件同步的音频或视频，除非该媒体是被清楚地标记为文本的媒体替代品")中的所有[预录制](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "非直播的信息")[视频](https://www.w3.org/TR/WCAG22/#dfn-video "运动或排序画面或图像的技术")内容提供[延伸音频描述](https://www.w3.org/TR/WCAG22/#dfn-extended-audio-description "通过暂停视频来添加到视听演示中的音频描述，以便有时间添加额外的描述")。

[理解媒体替代方案 (预录制)](https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html) |  
[如何满足媒体替代方案 (预录制)](https://www.w3.org/WAI/WCAG22/quickref/#media-alternative-prerecorded)

(级别 AAA)

为所有[预录制](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "非直播的信息")[同步媒体](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "与另一种呈现信息格式和/或与基于时间交互组件同步的音频或视频，除非该媒体是被清楚地标记为文本的媒体替代品")以及所有预录制[仅视频](https://www.w3.org/TR/WCAG22/#dfn-video-only "仅包含视频（无音频且无交互）的基于时间的演示")媒体提供[基于时间的媒体替代方案](https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media "包含按正确顺序排列的基于时间的视觉和听觉信息的文本描述，并提供实现任何基于时间交互结果的手段的文档")。

[理解仅音频 (直播)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html) |  
[如何满足仅音频 (直播)](https://www.w3.org/WAI/WCAG22/quickref/#audio-only-live)

(级别 AAA)

提供一个[基于时间媒体的替代方案](https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media "包含按正确顺序排列的基于时间的视觉和听觉信息的文本描述，并提供实现任何基于时间交互结果的手段的文档")，为[直播](https://www.w3.org/TR/WCAG22/#dfn-live "从现实世界事件捕获并传输到接收器，且延迟不超过广播延迟的信息")[仅音频](https://www.w3.org/TR/WCAG22/#dfn-audio-only "仅包含音频（无视频且无交互）的基于时间的演示")内容呈现等效信息。

[理解易于适应](https://www.w3.org/WAI/WCAG22/Understanding/adaptable.html) |  
[如何满足易于适应](https://www.w3.org/WAI/WCAG22/quickref/#adaptable)

创建可以以不同方式（例如更简单的布局）呈现而不会丢失信息或结构的内容。

[理解信息与关系](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) |  
[如何满足信息与关系](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships)

(级别 A)

通过[呈现](https://www.w3.org/TR/WCAG22/#dfn-presentation "将内容渲染为可由用户感知形式的过程")表达的信息、[结构](https://www.w3.org/TR/WCAG22/#dfn-structure "Web 页面的各部分相互关联的组织方式；以及一组 Web 页面的组织方式")和[关系](https://www.w3.org/TR/WCAG22/#dfn-relationships "不同内容块之间的有意义关联")可以被[程序化确定](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "由软件从作者提供的数据中确定，其提供方式使包括辅助技术在内的不同用户代理能以不同的感官通道提取并呈现这些信息")，或者在文本中是可用的。

[理解有意义的顺序](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html) |  
[如何满足有意义的顺序](https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence)

(级别 A)

当呈现内容的顺序影响其含义时，一个[正确的阅读顺序](https://www.w3.org/TR/WCAG22/#dfn-correct-reading-sequence "字词和段落以不改变内容含义的顺序呈现的任何顺序")可以被[程序化确定](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "由软件从作者提供的数据中确定，其提供方式使包括辅助技术在内的不同用户代理能以不同的感官通道提取并呈现这些信息")。

[理解感官特征](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html) |  
[如何满足感官特征](https://www.w3.org/WAI/WCAG22/quickref/#sensory-characteristics)

(级别 A)

为理解和操作内容所提供的说明，不应仅仅依赖于组件的感官特征，如形状、颜色、大小、视觉位置、方向或声音。

[理解方向](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html) |  
[如何满足方向](https://www.w3.org/WAI/WCAG22/quickref/#orientation)

(级别 AA)

内容不限制其视图和操作于单一的显示方向（如纵向或横向），除非特定的显示方向是[必不可少的](https://www.w3.org/TR/WCAG22/#dfn-essential "如果移除，将从根本上改变内容的信息或功能，且该信息和功能无法以符合指南的其他方式实现")。
注

特定显示方向可能是必不可少的例子有：银行支票、钢琴应用、投影仪或电视的幻灯片，或虚拟现实内容，其中内容不一定受限于横屏或竖屏显示方向。

[理解确定输入目的](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html) |  
[如何满足确定输入目的](https://www.w3.org/WAI/WCAG22/quickref/#identify-input-purpose)

(级别 AA)

当满足以下条件时，收集有关用户信息的每个输入字段的目的是可以被[程序化确定](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "由软件从作者提供的数据中确定，其提供方式使包括辅助技术在内的不同用户代理能以不同的感官通道提取并呈现这些信息")的：

- 输入字段服务于[用户界面组件的输入目的章节](https://www.w3.org/TR/WCAG22/#input-purposes)中所识别的目的；以及
- 内容是使用支持标识表单输入数据预期含义的技术实现的。

[理解确定目的](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html) |  
[如何满足确定目的](https://www.w3.org/WAI/WCAG22/quickref/#identify-purpose)

(级别 AAA)

在使用标记语言实现的内容中，[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "被用户感知为针对某一独立功能的单一控件的内容部分")、图标和[区域](https://www.w3.org/TR/WCAG22/#dfn-regions "可感知且通过程序确定的内容区块")的目的是可以被[程序化确定](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "由软件从作者提供的数据中确定，其提供方式使包括辅助技术在内的不同用户代理能以不同的感官通道提取并呈现这些信息")的。

[理解可辨别](https://www.w3.org/WAI/WCAG22/Understanding/distinguishable.html) |  
[如何满足可辨别](https://www.w3.org/WAI/WCAG22/quickref/#distinguishable)

使用户更容易看清和听到内容，包括将前台与后台区分开。

[理解色彩的使用](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) |  
[如何满足色彩的使用](https://www.w3.org/WAI/WCAG22/quickref/#use-of-color)

(级别 A)

色彩不作为传达信息、指示动作、提示响应或区分视觉元素的唯一视觉手段。

注

此成功准则具体针对色彩感知。其他感知形式在[指南 1.3](https://www.w3.org/TR/WCAG22/#adaptable)中有所涵盖，包括色彩和其他视觉呈现编码的程序化访问。

[理解音频控制](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html) |  
[如何满足音频控制](https://www.w3.org/WAI/WCAG22/quickref/#audio-control)

(级别 A)

如果 Web 页面上的任何音频自动播放超过 3 秒，要么提供了一个[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "达到某种结果的过程或技术")来[暂停](https://www.w3.org/TR/WCAG22/#dfn-pause "由用户请求停止，且除非用户请求否则不恢复")或停止该音频，要么提供了一个机制来独立于系统整体音量水平地控制音频音量。

注

由于任何不满足此成功准则的内容都会干扰用户使用整个页面的能力，因此 Web 页面上的所有内容（无论是否用于满足其他成功准则）都必须满足此成功准则。参见[符合性要求 5：无干扰](https://www.w3.org/TR/WCAG22/#cc5)。

[理解对比度 (最小)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) |  
[如何满足对比度 (最小)](https://www.w3.org/WAI/WCAG22/quickref/#contrast-minimum)

(级别 AA)

[文本](https://www.w3.org/TR/WCAG22/#dfn-text "可以程序化确定的字符序列，该序列是用人类语言表达某些事物")和[文本图像](https://www.w3.org/TR/WCAG22/#dfn-images-of-text "为了达到某种特定视觉效果而被渲染成非文本形式（例如图像）的文本")的视觉呈现具有至少为 4.5:1 的[对比度](https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05)，其中")，但以下情况除外：

大号文本

[大比例](https://www.w3.org/TR/WCAG22/#dfn-large-scale "至少为 18 磅或 14 磅加粗，或者在中文、日文和韩文 (CJK) 字体中能够产生同等大小的字号")文本和文本图像具有至少为 3:1 的对比度；

附带内容

作为非活动[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "被用户感知为针对某一独立功能的单一控件的内容部分")的一部分的文本或文本图像、[纯粹的装饰](https://www.w3.org/TR/WCAG22/#dfn-pure-decoration "仅具有美学目的，不提供任何信息，且没有任何功能")、对任何人皆不可见或作为包含其他显著视觉内容图片一部分的文本没有对比度要求。

徽标文字

作为徽标或品牌名称一部分的文本没有对比度要求。

[理解调整文本大小](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) |  
[如何满足调整文本大小](https://www.w3.org/WAI/WCAG22/quickref/#resize-text)

(级别 AA)

除[字幕](https://www.w3.org/TR/WCAG22/#dfn-captions "为理解媒体内容所需的语音和非语音音频信息提供的同步视觉和/或文本替代品")和[文本图像](https://www.w3.org/TR/WCAG22/#dfn-images-of-text "为了达到某种特定视觉效果而被渲染成非文本形式（例如图像）的文本")外，[文本](https://www.w3.org/TR/WCAG22/#dfn-text "可以程序化确定的字符序列，该序列是用人类语言表达某些事物")可以在不使用[辅助技术](https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies "硬件和/或软件，作为用户代理，或与主流用户代理协同工作，提供满足超出主流用户代理所提供的残疾用户需求的功能")的情况下调整大小达 200% 而不丢失内容或功能。

[理解文本图像](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html) |  
[如何满足文本图像](https://www.w3.org/WAI/WCAG22/quickref/#images-of-text)

(级别 AA)

如果所使用的技术可以实现视觉呈现，应使用[文本](https://www.w3.org/TR/WCAG22/#dfn-text "可以程序化确定的字符序列，该序列是用人类语言表达某些事物")来传达信息，而不是[文本图像](https://www.w3.org/TR/WCAG22/#dfn-images-of-text "为了达到某种特定视觉效果而被渲染成非文本形式（例如图像）的文本")，但以下情况除外：

可定制

文本图像可以根据用户的要求[在视觉上定制](https://www.w3.org/TR/WCAG22/#dfn-visually-customized "可以设置字体、大小、色彩和背景")；

必不可少

文本的特定呈现对于所传达的信息而言是[必不可少的](https://www.w3.org/TR/WCAG22/#dfn-essential "如果移除，将从根本上改变内容的信息或功能，且该信息 and 功能无法以符合指南的其他方式实现")。

注

徽标文字（作为徽标或品牌名称一部分的文本）被认为是必不可少的。

[理解对比度 (增强)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html) |  
[如何满足对比度 (增强)](https://www.w3.org/WAI/WCAG22/quickref/#contrast-enhanced)

(级别 AAA)

[文本](https://www.w3.org/TR/WCAG22/#dfn-text "可以程序化确定的字符序列，该序列是用人类语言表达某些事物")和[文本图像](https://www.w3.org/TR/WCAG22/#dfn-images-of-text "为了达到某种特定视觉效果而被渲染成非文本形式（例如图像）的文本")的视觉呈现具有至少为 7:1 的[对比度](https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05)，其中")，但以下情况除外：

大号文本

[大比例](https://www.w3.org/TR/WCAG22/#dfn-large-scale "至少为 18 磅或 14 磅加粗，或者在中文、日文和韩文 (CJK) 字体中能够产生同等大小的字号")文本和文本图像具有至少为 4.5:1 的对比度；

附带内容

作为非活动[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "被用户感知为针对某一独立功能的单一控件的内容部分")的一部分的文本或文本图像、[纯粹的装饰](https://www.w3.org/TR/WCAG22/#dfn-pure-decoration "仅具有美学目的，不提供任何信息，且没有任何功能")、对任何人皆不可见或作为包含其他显著视觉内容图片一部分的文本没有对比度要求。

徽标文字

作为徽标或品牌名称一部分的文本没有对比度要求。

[理解低背景音或无背景音](https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html) |  
[如何满足低背景音或无背景音](https://www.w3.org/WAI/WCAG22/quickref/#low-or-no-background-audio)

(级别 AAA)

对于满足 (1) 在前台主要包含语音、(2) 不是音频广告或音频徽标，并且 (3) 不是旨在主要作为音乐表达（如唱歌或说唱）的发声的[预录制](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "非直播的信息")[仅音频](https://www.w3.org/TR/WCAG22/#dfn-audio-only "仅包含音频（无视频且无交互）的基于时间的演示")内容，至少满足以下一项：

无背景音

音频不包含背景声音。

关闭

可以关闭背景声音。

20 dB

背景声音比前台语音内容至少低 20 分贝，但只持续一两秒的偶尔声音除外。

注

根据“分贝”的定义，满足此要求的背景声音将比前台语音内容大约静音四倍。

[理解视觉呈现](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html) |  
[如何满足视觉呈现](https://www.w3.org/WAI/WCAG22/quickref/#visual-presentation)

(级别 AAA)

对于[文本块](https://www.w3.org/TR/WCAG22/#dfn-blocks-of-text "多于一句话的文本")的视觉呈现，有一个[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "达到某种结果的过程或技术")可用于实现以下目的：

- 前景色和背景色可以由用户选择。
- 宽度不超过 80 个字符或字形（如果是 CJK 则为 40 个）。
- 文本不对齐（不与左右页边距同时对齐）。
- 段落内的行距（铅空）至少为单倍半行距，并且段落间距至少比行距大 1.5 倍。
- 文本可以在不使用[辅助技术](https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies "硬件 and/or 软件，作为用户代理，或与主流用户代理协同工作，提供满足超出主流用户代理所提供的残疾用户需求的功能")的情况下调整大小达 200%，且其调整方式不需要用户在[全屏窗口](https://www.w3.org/TR/WCAG22/#dfn-on-a-full-screen-window "在视口最大化的最常见大小的台式机/笔记本显示器上")中水平滚动来阅读一行文本。

注 1
内容不要求必须使用这些值。其要求是应有可用于用户更改这些呈现方面的机制。该机制可以由浏览器或其他用户代理提供。内容并不必须自己提供该机制。

注 2

某些语言的书写系统使用不同的呈现方式来提高可读性和易读性。如果某个书写系统不使用本成功准则中的呈现设置，则该书写系统中的内容不需要使用该呈现设置，并且可以符合准则。鼓励作者遵循其书写系统中提高文本可读性和易读性的指导。

[理解文本图像 (无例外)](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception.html) |  
[如何满足文本图像 (无例外)](https://www.w3.org/WAI/WCAG22/quickref/#images-of-text-no-exception)

(级别 AAA)

[文本图像](https://www.w3.org/TR/WCAG22/#dfn-images-of-text "为了达到某种特定视觉效果而被渲染成非文本形式（例如图像）的文本")仅用于[纯粹的装饰](https://www.w3.org/TR/WCAG22/#dfn-pure-decoration "仅具有美学目的，不提供任何信息，且没有任何功能")，或在[文本](https://www.w3.org/TR/WCAG22/#dfn-text "可以程序化确定的字符序列，该序列是用人类语言表达某些事物")的特定呈现对于所传达的信息而言是[必不可少的](https://www.w3.org/TR/WCAG22/#dfn-essential "如果移除，将从根本上改变内容的信息或功能，且该信息和功能无法以符合指南的其他方式实现")时使用。

注

徽标文字（作为徽标或品牌名称一部分的文本）被认为是必不可少的。

[理解重新排版](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) |  
[如何满足重新排版](https://www.w3.org/WAI/WCAG22/quickref/#reflow)

(级别 AA)

内容在呈现时不会丢失信息或功能，并且在以下情况下不需要在两个维度（即水平和垂直方向）上滚动：

- 垂直滚动的区域，宽度相当于 320 [CSS 像素](https://www.w3.org/TR/WCAG22/#dfn-css-pixels "大约 0.0213 度的视角")；
- 水平滚动的区域，高度相当于 256 [CSS 像素](https://www.w3.org/TR/WCAG22/#dfn-css-pixels "大约 0.0213 度的视角")。

但由于使用或含义需要二维布局的内容部分除外。

注 1

320 CSS 像素相当于在 400% 缩放比例下，初始[视口](https://www.w3.org/TR/WCAG22/#dfn-viewport "用户代理在其中呈现内容的窗口或对象")宽度为 1280 CSS 像素。对于设计为水平滚动（例如具有垂直文本）的 Web 内容，256 CSS 像素相当于在 400% 缩放比例下，初始视口高度为 1024 CSS 像素。

注 2

需要二维布局的内容示例有：理解所必需的图像（如地图和图表）、视频、游戏、演示文稿、数据表（非单个单元格），以及在操作内容时需要保持工具栏在视野中的界面。对于这些内容部分，允许提供二维滚动。

[理解非文本对比度](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) |  
[如何满足非文本对比度](https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast)

(级别 AA)

以下内容的视觉[呈现](https://www.w3.org/TR/WCAG22/#dfn-presentation "将内容渲染为可由用户感知形式的过程")与相邻色彩相比，具有至少为 3:1 的[对比度](https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05)，其中")：

用户界面组件

用于识别[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "被用户感知为针对某一独立功能的单一控件的内容部分")和[状态](https://www.w3.org/TR/WCAG22/#dfn-states "表达用户界面组件特征的动态属性，可能会响应用户动作或自动过程而发生变化")所必需的视觉信息，但非活动组件，或组件的外观由[用户代理](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents web content for users")确定且未被作者修改的除外；

图形对象

理解内容所必需的图形部分，除非图形的特定呈现对于所传达的信息而言是[必不可少的](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform")。

[理解文本间距](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html) |  
[如何满足文本间距](https://www.w3.org/WAI/WCAG22/quickref/#text-spacing)

(级别 AA)

在支持以下[文本](https://www.w3.org/TR/WCAG22/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language")[样式属性](https://www.w3.org/TR/WCAG22/#dfn-style-properties "property whose value determines the presentation (e.g. font, color, size, location, padding, volume, synthesized speech prosody) of content elements as they are rendered (e.g. onscreen, via loudspeaker, via braille display) by user agents")的标记语言实现的内容中，通过设置以下所有属性且不更改其他任何样式属性，不会发生内容或功能的损失：

- 行高（行距）至少为字号的 1.5 倍；
- 段落后的间距至少为字号的 2 倍；
- 字母间距（字距跟踪）至少为字号 of 0.12 倍；
- 单词间距至少为字号 of 0.16 倍。

例外：在书写文本中不使用这些文本样式属性中的一个或多个的[人类语言](https://www.w3.org/TR/WCAG22/#dfn-human-language-s "language that is spoken, written or signed (through visual or tactile means) to communicate with humans")和文字，可以仅使用该语言和文字组合中存在的属性来符合准则。

注 1

内容不要求必须使用这些文本间距值。其要求是确保当用户覆盖作者的文本间距时，内容或功能不会丢失。

注 2

某些语言的书写系统使用不同的文本间距设置，例如段首缩进。鼓励作者遵循当地可用的指导，以改善其书写系统中文本的可读性和易读性。

[理解悬停或聚焦时呈现的内容](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html) |  
[如何满足悬停或聚焦时呈现的内容](https://www.w3.org/WAI/WCAG22/quickref/#content-on-hover-or-focus)

(级别 AA)

在接收并移开指针悬停或键盘聚焦会触发额外内容显现然后隐藏的情况下，满足以下所有条件：

可关闭

提供了一个[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")，无需移动指针悬停或键盘聚焦即可关闭额外内容，除非该额外内容传达了某种信息，或者没有遮挡或替换其他内容；

可悬停

如果指针悬停可以触发额外内容，那么指针可以在额外内容上移动而该额外内容不会消失；

持久性

额外内容保持可见，直到移开悬停或聚焦触发器、用户将其关闭，或其信息不再有效。

例外：额外内容的视觉呈现由[用户代理](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents web content for users")控制，且未被作者修改。

注 1

由用户代理控制的额外内容的示例包括通过使用 HTML [`title` 属性](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute) \[\_\] 创建的浏览器工具提示。

注 3

此准则适用于除触发组件本身之外显现的内容。由于在键盘聚焦时显现的隐藏组件（例如用于跳转到页面另一部分的链接）不呈现额外内容，因此它们不受此准则的约束。

用户界面组件和导航必须是可操作的。

[理解键盘可访问](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-accessible.html) |  
[如何满足键盘可访问](https://www.w3.org/WAI/WCAG22/quickref/#keyboard-accessible)

使所有功能都可以通过键盘进行操作。

[理解键盘](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) |  
[如何满足键盘](https://www.w3.org/WAI/WCAG22/quickref/#keyboard)

(级别 A)

内容的所有[功能](https://www.w3.org/TR/WCAG22/#dfn-functionality "processes and outcomes achievable through user action")均可通过[键盘接口](https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface "interface used by software to obtain keystroke input")进行操作，而不需要对单个按键进行特定的计时，除非底层功能需要的输入取决于用户移动的路径而不仅仅是终点。

注 1

此例外针对底层功能，而非输入技术。例如，如果使用手写输入文本，输入技术（手写）需要与路径相关的输入，但底层功能（文本输入）则不需要。

注 2

这并不禁止且不应阻碍除键盘操作外还提供鼠标输入或其他输入方法。

[理解无键盘陷阱](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html) |  
[如何满足无键盘陷阱](https://www.w3.org/WAI/WCAG22/quickref/#no-keyboard-trap)

(级别 A)

如果能够使用[键盘接口](https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface "interface used by software to obtain keystroke input")将键盘焦点移动到页面的某个组件上，那么焦点可以仅使用键盘接口移出该组件。如果这需要除了未修改的方向键或 Tab 键或其他标准退出方法之外的操作，则用户会被告知移出焦点的操作方法。

注

由于任何不满足此成功准则的内容都会干扰用户使用整个页面的能力，因此 Web 页面上的所有内容（无论是否用于满足其他成功准则）都必须满足此成功准则。参见[符合性要求 5：无干扰](https://www.w3.org/TR/WCAG22/#cc5)。

[理解键盘 (无例外)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html) |  
[如何满足键盘 (无例外)](https://www.w3.org/WAI/WCAG22/quickref/#keyboard-no-exception)

(级别 AAA)

内容的所有[功能](https://www.w3.org/TR/WCAG22/#dfn-functionality "processes and outcomes achievable through user action")均可通过[键盘接口](https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface "interface used by software to obtain keystroke input")进行操作，而不需要对单个按键进行特定的计时。

[理解字符键快捷键](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html) |  
[如何满足字符键快捷键](https://www.w3.org/WAI/WCAG22/quickref/#character-key-shortcuts)

(级别 A)

如果在内容中实现了一个仅使用字母（包括大写和小写字母）、标点、数字或符号字符的[键盘快捷键](https://www.w3.org/TR/WCAG22/#dfn-keyboard-shortcuts "alternative means of triggering an action by the pressing of one or more keys")，则至少满足以下一项：
关闭

提供了一个[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")来关闭快捷键；

重新映射

提供了一个机制来重新映射快捷键，以包括一个或多个非打印键盘键（例如 Ctrl, Alt）；

仅在聚焦时激活

针对[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function")的键盘快捷键仅在该组件获得焦点时才激活。

[理解充足的时间](https://www.w3.org/WAI/WCAG22/Understanding/enough-time.html) |  
[如何满足充足的时间](https://www.w3.org/WAI/WCAG22/quickref/#enough-time)

为用户提供足够的时间来阅读和使用内容。

[理解调整定时](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html) |  
[如何满足调整定时](https://www.w3.org/WAI/WCAG22/quickref/#timing-adjustable)

(级别 A)

对于由内容设置的每个时间限制，至少满足以下一项：

关闭

允许用户在遇到时间限制之前关闭它；或

调整

允许用户在遇到时间限制之前，在至少是默认设置长度十倍的广泛范围内调整时间限制；或

延长

在时间到期前向用户发出警告，并给用户至少 20 秒的时间通过一个简单的操作（例如“按空格键”）来延长该时间限制，且允许用户至少延长该时间限制十倍；或

实时例外

时间限制是[实时事件](https://www.w3.org/TR/WCAG22/#dfn-real-time-events "event that a) occurs at the same time as the viewing and b) is not completely generated by the content")（例如拍卖）的必要部分，并且不存在该时间限制的替代方案；或

必不可少例外

时间限制是[必不可少的](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform")，延长它将使该活动失效；或

20 小时例外

时间限制长于 20 小时。

注

该成功准则有助于确保用户可以完成任务，而不会因为时间限制而导致内容或上下文发生意外改变。应将本成功准则与[成功准则 3.2.1](https://www.w3.org/TR/WCAG22/#on-focus)结合考虑，后者对因用户动作导致的内容或上下文改变作出了限制。

[理解暂停、停止、隐藏](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) |  
[如何满足暂停、停止、隐藏](https://www.w3.org/WAI/WCAG22/quickref/#pause-stop-hide)

(级别 A)

对于移动、[闪烁](https://www.w3.org/TR/WCAG22/#dfn-blinking "switch back and forth between two visual states in a way that is meant to draw attention")、滚动或自动更新的信息，满足以下所有条件：

移动、闪烁、滚动

对于移动、闪烁或滚动信息，满足以下条件：(1) 自动开始、(2) 持续五秒以上，以及 (3) 与其他内容并排呈现，提供了一个[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")供用户[暂停](https://www.w3.org/TR/WCAG22/#dfn-pause "stopped by user request and not resumed until requested by user")、停止或隐藏它，除非这种移动、闪烁或滚动是某个活动中[必不可少的](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform")一部分；以及

自动更新

对于任何自动更新信息，满足以下条件：(1) 自动开始，以及 (2) 与其他内容并排呈现，提供了一个机制供用户暂停、停止、隐藏它，或控制更新的频率，除非这种自动更新是某个活动中必不可少的一部分。

注 2

由于任何不满足此成功准则的内容都会干扰用户使用整个页面的能力，因此 Web 页面上的所有内容（无论是否用于满足其他成功准则）都必须满足此成功准则。参见[符合性要求 5：无干扰](https://www.w3.org/TR/WCAG22/#cc5)。

注 3

对于由软件定期更新或向用户代理流式传输的内容，不要求保留或呈现从开始暂停到恢复呈现之间生成或接收的信息，因为这在技术上可能无法实现，并且在许多情况下这样做可能会产生误导。

注 4

作为预加载阶段或类似情况的一部分而显现的动画，如果对所有用户而言交互都无法在该阶段进行，并且如果不指示进度可能会使用户困惑，或导致他们认为内容已被冻结或损坏，则该动画可被视为是必不可少的。

[理解无时间限制](https://www.w3.org/WAI/WCAG22/Understanding/no-timing.html) |  
[如何满足无时间限制](https://www.w3.org/WAI/WCAG22/quickref/#no-timing)

(级别 AAA)

时间不是由内容呈现的事件或活动中[必不可少的](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform")部分，非交互式[同步媒体](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such")和[实时事件](https://www.w3.org/TR/WCAG22/#dfn-real-time-events "event that a) occurs at the same time as the viewing and b) is not completely generated by the content")除外。

[理解减少干扰](https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html) |  
[如何满足减少干扰](https://www.w3.org/WAI/WCAG22/quickref/#interruptions)

(级别 AAA)

干扰可由用户推迟或压制，但涉及[紧急情况](https://www.w3.org/TR/WCAG22/#dfn-emergency "a sudden, unexpected situation or occurrence that requires immediate action to preserve health, safety, or property")的干扰除外。

[理解重新验证](https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating.html) |  
[如何满足重新验证](https://www.w3.org/WAI/WCAG22/quickref/#re-authenticating)

(级别 AAA)

当已验证的会话过期时，用户可以在重新验证后继续该活动而不丢失数据。

[理解超时](https://www.w3.org/WAI/WCAG22/Understanding/timeouts.html) |  
[如何满足超时](https://www.w3.org/WAI/WCAG22/quickref/#timeouts)

(级别 AAA)

用户会被警告任何可能导致数据丢失的[用户非活动](https://www.w3.org/TR/WCAG22/#dfn-user-inactivity "any continuous period of time where no user actions occur")的持续时间，除非当用户不采取任何操作时，该数据会被保留 20 小时以上。

注

隐私法规可能要求在对用户身份进行身份验证以及保留用户数据之前获得用户的明确同意。如果在用户是未成年人的情况下，在大多数司法管辖区、国家或地区可能无法征求其明确同意。当考虑将数据保留作为满足此成功准则的方法时，建议咨询隐私专业人员和法律顾问。

[理解癫痫发作与物理反应](https://www.w3.org/WAI/WCAG22/Understanding/seizures-and-physical-reactions.html) |  
[如何满足癫痫发作与物理反应](https://www.w3.org/WAI/WCAG22/quickref/#seizures-and-physical-reactions)

不要以已知会导致癫痫发作或物理反应的方式设计内容。

[理解三次闪烁或低于阈值](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) |  
[如何满足三次闪烁或低于阈值](https://www.w3.org/WAI/WCAG22/quickref/#three-flashes-or-below-threshold)

(级别 A)

[Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")不包含在任何一秒钟时间段内闪烁超过三次的内容，或者该[闪烁](https://www.w3.org/TR/WCAG22/#dfn-flashes "a pair of opposing changes in relative luminance that can cause seizures in some people if it is large enough and in the right frequency range")低于[一般闪烁和红光闪烁阈值](https://www.w3.org/TR/WCAG22/#dfn-general-flash-and-red-flash-thresholds "a flash or rapidly changing image sequence is below the threshold (i.e., content passes) if any of the following are true:")。

注

由于任何不满足此成功准则的内容都会干扰用户使用整个页面的能力，因此 Web 页面上的所有内容（无论是否用于满足其他成功准则）都必须满足此成功准则。参见[符合性要求 5：无干扰](https://www.w3.org/TR/WCAG22/#cc5)。

[理解三次闪烁](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes.html) |  
[如何满足三次闪烁](https://www.w3.org/WAI/WCAG22/quickref/#three-flashes)

(级别 AAA)

[Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")不包含在任何一秒钟时间段内[闪烁](https://www.w3.org/TR/WCAG22/#dfn-flashes "a pair of opposing changes in relative luminance that can cause seizures in some people if it is large enough and in the right frequency range")超过三次的内容。

提供帮助用户导航、寻找内容以及确定其所处位置的方法。

[理解绕过块](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html) |  
[如何满足绕过块](https://www.w3.org/WAI/WCAG22/quickref/#bypass-blocks)

(级别 A)

提供了一个[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")，以绕过在多个 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")上重复的内容块。

[理解焦点顺序](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html) |  
[如何满足焦点顺序](https://www.w3.org/WAI/WCAG22/quickref/#focus-order)

(级别 A)

如果一个 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")可以按顺序导航，并且这些导航序列会影响含义或操作，则可聚焦的组件以能够保留含义和可操作性的顺序接收焦点。
[理解链接目的 (在上下文中)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html) |  
[如何满足链接目的 (在上下文中)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-in-context)

(级别 A)

每个[链接的目的](https://www.w3.org/TR/WCAG22/#dfn-purpose-of-each-link "nature of the result obtained by activating a hyperlink")可以仅从链接文本本身确定，或者通过链接文本与其[程序化确定的链接上下文](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determined-link-context "additional information that can be programmatically determined from relationships with a link, combined with the link text, and presented to users in different modalities")结合起来确定，但链接的目的对于[普通用户而言具有歧义](https://www.w3.org/TR/WCAG22/#dfn-ambiguous-to-users-in-general "the purpose cannot be determined from the link and all information of the web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)")的情况除外。

[理解多种方式](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html) |  
[如何满足多种方式](https://www.w3.org/WAI/WCAG22/quickref/#multiple-ways)

(级别 AA)

提供了不止一种方法，在一套 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")中定位一个 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")，但该 Web 页面是某个[过程](https://www.w3.org/TR/WCAG22/#dfn-processes "series of user actions where each action is required in order to complete an activity")的结果或其中一个步骤的除外。

[理解焦点可见](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) |  
[如何满足焦点可见](https://www.w3.org/WAI/WCAG22/quickref/#focus-visible)

(级别 AA)

任何可通过键盘操作的用户界面都具有一种键盘[焦点指示器](https://www.w3.org/TR/WCAG22/#dfn-focus-indicator "New")可见的操作模式。

[理解位置](https://www.w3.org/WAI/WCAG22/Understanding/location.html) |  
[如何满足位置](https://www.w3.org/WAI/WCAG22/quickref/#location)

(级别 AAA)

提供了有关用户在一套 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")中位置的信息。

[理解链接目的 (仅链接)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html) |  
[如何满足链接目的 (仅链接)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-link-only)

(级别 AAA)

提供了一个[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")，允许仅从链接文本中识别每个[链接的目的](https://www.w3.org/TR/WCAG22/#dfn-purpose-of-each-link "nature of the result obtained by activating a hyperlink")，但链接的目的对于[普通用户而言具有歧义](https://www.w3.org/TR/WCAG22/#dfn-ambiguous-to-users-in-general "the purpose cannot be determined from the link and all information of the web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)")的情况除外。

[理解小节标题](https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html) |  
[如何满足小节标题](https://www.w3.org/WAI/WCAG22/quickref/#section-headings)

(级别 AAA)

使用[小节](https://www.w3.org/TR/WCAG22/#dfn-section "a self-contained portion of written content that deals with one or more related topics or thoughts")标题来组织内容。

注 1

“标题”是在其一般意义上使用的，包括标题（title）和在不同类型内容中添加标题（heading）的其他方法。

注 2

此成功准则涵盖文章内的段落小节，不涵盖[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function")。用户界面组件在[成功准则 4.1.2](https://www.w3.org/TR/WCAG22/#name-role-value)中有所涵盖。

[理解焦点未被遮挡 (最小)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) |  
[如何满足焦点未被遮挡 (最小)](https://www.w3.org/WAI/WCAG22/quickref/#focus-not-obscured-minimum)

(级别 AA)

新

当[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function")接收键盘焦点时，该组件不会因作者创建的内容而完全被遮挡隐藏。

注 1

在可配置界面中内容可由用户重新定位的情况下，此成功准则的测试和符合性仅考虑用户可移动内容的初始位置。

注 2

由*用户*打开的内容可能会遮挡接收焦点的组件。如果用户可以在不前进键盘焦点的情况下显露被聚焦的组件，则该聚焦组件不被认为是因为作者创建的内容而处于视觉上的隐藏状态。

[理解焦点未被遮挡 (增强)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html) |  
[如何满足焦点未被遮挡 (增强)](https://www.w3.org/WAI/WCAG22/quickref/#focus-not-obscured-enhanced)

(级别 AAA)

新

当[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function")接收键盘焦点时，该组件的任何部分都不会被作者创建的内容遮挡隐藏。

[理解焦点外观](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html) |  
[如何满足焦点外观](https://www.w3.org/WAI/WCAG22/quickref/#focus-appearance)

(级别 AAA)

新

当键盘[焦点指示器](https://www.w3.org/TR/WCAG22/#dfn-focus-indicator "New")可见时，焦点指示器的区域满足以下所有条件：

- 面积至少与未聚焦组件或子组件在 2 [CSS 像素](https://www.w3.org/TR/WCAG22/#dfn-css-pixels "visual angle of about 0.0213 degrees")厚度下的[周长](https://www.w3.org/TR/WCAG22/#dfn-perimeter "New")区域一样大；并且
- 聚焦状态和未聚焦状态下相同像素之间的对比度比率至少为 3:1。

例外：

- 焦点指示器由[用户代理](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents web content for users")确定，且无法由作者进行调整，或
- 焦点指示器和指示器的背景色彩未被作者修改。

注 1

什么被感知为用户界面组件或子组件（以确定周长）取决于其视觉[呈现](https://www.w3.org/TR/WCAG22/#dfn-presentation "rendering of the content in a form to be perceived by users")。视觉呈现包括组件的可见[内容](https://www.w3.org/TR/WCAG22/#dfn-content "information and sensory experience to be communicated to the user by means of a user agent, including code or markup that defines the content's structure, presentation, and interactions")、边框和组件特有的背景。它不包括组件内容、背景或边框外部的阴影和发光效果。

注 3

对比度计算可以基于[技术](https://www.w3.org/TR/WCAG22/#dfn-technologies "mechanism for encoding instructions to be rendered, played or executed by user agents")（如 HTML, CSS 和 SVG）中定义的色彩。由用户代理分辨率增强和抗锯齿修改的像素可以被忽略。

信息和用户界面的操作必须是可理解的。

[理解易读](https://www.w3.org/WAI/WCAG22/Understanding/readable.html) |  
[如何满足易读](https://www.w3.org/WAI/WCAG22/quickref/#readable)

使文本内容易读且易于理解。

[理解页面语言](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html) |  
[如何满足页面语言](https://www.w3.org/WAI/WCAG22/quickref/#language-of-page)

(级别 A)

每个 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")的默认[人类语言](https://www.w3.org/TR/WCAG22/#dfn-human-language-s "language that is spoken, written or signed (through visual or tactile means) to communicate with humans")可以被[程序化确定](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities")。

[理解部分语言](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html) |  
[如何满足部分语言](https://www.w3.org/WAI/WCAG22/quickref/#language-of-parts)

(级别 AA)

内容中每个段落或短语的[人类语言](https://www.w3.org/TR/WCAG22/#dfn-human-language-s "language that is spoken, written or signed (through visual or tactile means) to communicate with humans")可以被[程序化确定](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities")，但专有名词、技术术语、语言不确定的词以及已成为紧邻的周围[文本](https://www.w3.org/TR/WCAG22/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language")日常用语一部分的词或短语除外。

[理解非同寻常的词汇](https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html) |  
[如何满足非同寻常的词汇](https://www.w3.org/WAI/WCAG22/quickref/#unusual-words)

(级别 AAA)

提供了一个[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")，用于识别[以非同寻常或有限制方式使用](https://www.w3.org/TR/WCAG22/#dfn-used-in-an-unusual-or-restricted-way "words used in such a way that requires users to know exactly which definition to apply in order to understand the content correctly")的字词或短语的特定定义，包括[成语](https://www.w3.org/TR/WCAG22/#dfn-idioms "phrase whose meaning cannot be deduced from the meaning of the individual words and the specific words cannot be changed without losing the meaning")和[行话/行业术语](https://www.w3.org/TR/WCAG22/#dfn-jargon "words used in a particular way by people in a particular field")。

[理解缩写](https://www.w3.org/WAI/WCAG22/Understanding/abbreviations.html) |  
[如何满足缩写](https://www.w3.org/WAI/WCAG22/quickref/#abbreviations)

(级别 AAA)

提供了一个用于识别[缩写](https://www.w3.org/TR/WCAG22/#dfn-abbreviations "shortened form of a word, phrase, or name where the abbreviation has not become part of the language")的展开形式或含义的[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")。

[理解阅读水平](https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html) |  
[如何满足阅读水平](https://www.w3.org/WAI/WCAG22/quickref/#reading-level)

(级别 AAA)

当文本在去除专有名词和标题后，需要比[初中教育水平](https://www.w3.org/TR/WCAG22/#dfn-lower-secondary-education-level "the two or three year period of education that begins after completion of six years of school and ends nine years after the beginning of primary education")更高级的阅读能力时，提供[补充内容](https://www.w3.org/TR/WCAG22/#dfn-supplementary-content "additional content that illustrates or clarifies the primary content")，或者提供不需要比初中教育水平更高级阅读能力的版本。

[理解发音](https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html) |  
[如何满足发音](https://www.w3.org/WAI/WCAG22/quickref/#pronunciation)

(级别 AAA)

提供了一个[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")，用于识别特定字词的发音，若这些字词在上下文中如果不了解发音就会产生歧义。
[理解可预测](https://www.w3.org/WAI/WCAG22/Understanding/predictable.html) |  
[如何满足可预测](https://www.w3.org/WAI/WCAG22/quickref/#predictable)

使 Web 页面以可预测的方式显现和操作。

[理解获得焦点](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html) |  
[如何满足获得焦点](https://www.w3.org/WAI/WCAG22/quickref/#on-focus)

(级别 A)

当任何[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function")获得焦点时，它不会启动[上下文改变](https://www.w3.org/TR/WCAG22/#dfn-change-of-context "major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously")。

[理解输入](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html) |  
[如何满足输入](https://www.w3.org/WAI/WCAG22/quickref/#on-input)

(级别 A)

更改任何[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function")的设置不会自动引起[上下文改变](https://www.w3.org/TR/WCAG22/#dfn-change-of-context "major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously")，除非在用户使用该组件之前已获知该行为。

(级别 AA)

在一套 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")中多次重复出现的导航机制，每次重复时都以[相同的相对顺序](https://www.w3.org/TR/WCAG22/#dfn-same-relative-order "same position relative to other items")出现，除非由用户启动了改变。

[理解一致的标识](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html) |  
[如何满足一致的标识](https://www.w3.org/WAI/WCAG22/quickref/#consistent-identification)

(级别 AA)

在一套 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")中具有[相同功能](https://www.w3.org/TR/WCAG22/#dfn-same-functionality "same result when used")的组件，被一致地标识。

[理解请求改变](https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html) |  
[如何满足请求改变](https://www.w3.org/WAI/WCAG22/quickref/#change-on-request)

(级别 AAA)

[上下文改变](https://www.w3.org/TR/WCAG22/#dfn-change-of-context "major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously")仅由用户请求启动，或者提供了一个[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")来关闭此类改变。

[理解一致的帮助](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html) |  
[如何满足一致的帮助](https://www.w3.org/WAI/WCAG22/quickref/#consistent-help)

(级别 A)

新

如果一个 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")包含以下任何帮助[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")，且这些机制在一套 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-set-of-web-pages "collection of web pages that share a common purpose and that are created by the same author, group or organization")中的多个 Web 页面上重复出现，那么它们相对于其他页面内容以相同的相对顺序出现，除非由用户启动了改变：

- 人工联系方式详情；
- 人工联系机制；
- 自助帮助选项；
- 完全自动化的联系机制。

注 1

帮助机制可以直接在页面上提供，也可以通过直接链接到包含该信息的不同页面来提供。

注 2

在此成功准则中，“相对于其他页面内容相同的顺序”可以被理解为当页面被序列化时内容的排序方式。对于相同的页面变体（例如 CSS 媒体查询断点），帮助机制的视觉位置在页面之间很可能是一致的。用户可以启动改变，例如更改页面的缩放比例或显示方向，这可能会触发不同的页面变体。此成功准则关注的是在同一页面变体中（例如相同的缩放级别和显示方向）所显示的各个页面之间的相对顺序。

[理解输入辅助](https://www.w3.org/WAI/WCAG22/Understanding/input-assistance.html) |  
[如何满足输入辅助](https://www.w3.org/WAI/WCAG22/quickref/#input-assistance)

帮助用户避免和纠正错误。

[理解标签或说明](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html) |  
[如何满足标签或说明](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions)

(级别 A)

当内容需要用户输入时，提供了标签或说明。

[理解帮助](https://www.w3.org/WAI/WCAG22/Understanding/help.html) |  
[如何满足帮助](https://www.w3.org/WAI/WCAG22/quickref/#help)

(级别 AAA)

提供了[上下文敏感的帮助](https://www.w3.org/TR/WCAG22/#dfn-context-sensitive-help "help text that provides information related to the function currently being performed")。

[理解冗余输入](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html) |  
[如何满足冗余输入](https://www.w3.org/WAI/WCAG22/quickref/#redundant-entry)

(级别 A)

新

用户先前在同一个[过程](https://www.w3.org/TR/WCAG22/#dfn-processes "series of user actions where each action is required in order to complete an activity")中输入过或已被提供的信息，如果在后续步骤中需要再次输入，则应满足：

- 自动填充，或
- 可供用户选择。

但以下情况除外：

- 重新输入该信息是[必不可少的](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform")，
- 为了确保内容的安全需要该信息，或
- 先前输入的信息已不再有效。

[理解无障碍身份验证 (最小)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html) |  
[如何满足无障碍身份验证 (最小)](https://www.w3.org/WAI/WCAG22/quickref/#accessible-authentication-minimum)

(级别 AA)

新

在身份验证[过程](https://www.w3.org/TR/WCAG22/#dfn-processes "series of user actions where each action is required in order to complete an activity")的任何步骤中，都不要求进行[认知功能测试](https://www.w3.org/TR/WCAG22/#dfn-cognitive-function-test "New")（例如记住密码或解决谜题），除非该步骤至少提供了以下一项：

替代方案

不依赖于认知功能测试的另一种身份验证方法。

机制

提供了一个[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")来协助用户完成认知功能测试。

对象识别

认知功能测试是识别对象。

个人内容

认知功能测试是识别用户向网站提供的[非文本内容](https://www.w3.org/TR/WCAG22/#dfn-non-text-content "any content that is not a sequence of characters that can be programmatically determined or where the sequence is not expressing something in human language")。

注 1

“对象识别”和“个人内容”可以通过图像、视频或音频来表示。

注 2

满足此准则的机制示例包括：
- 密码管理器支持密码输入，以减少记忆需要；以及
- 复制和粘贴，以减轻重新输入的认知负担。

[理解无障碍身份验证 (增强)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced.html) |  
[如何满足无障碍身份验证 (增强)](https://www.w3.org/WAI/WCAG22/quickref/#accessible-authentication-enhanced)

(级别 AAA)

新

在身份验证[过程](https://www.w3.org/TR/WCAG22/#dfn-processes "series of user actions where each action is required in order to complete an activity")的任何步骤中，都不要求进行[认知功能测试](https://www.w3.org/TR/WCAG22/#dfn-cognitive-function-test "New")（例如记住密码或解决谜题），除非该步骤至少提供了以下一项：

替代方案

不依赖于认知功能测试的另一种身份验证方法。

机制

提供了一个[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")来协助用户完成认知功能测试。

内容必须具有足够的鲁棒性，以便能够由包括辅助技术在内的广泛用户代理进行解释。
[理解兼容性](https://www.w3.org/WAI/WCAG22/Understanding/compatible.html) |  
[如何满足兼容性](https://www.w3.org/WAI/WCAG22/quickref/#compatible)

最大程度地提高与当前和未来用户代理（包括辅助技术）的兼容性。

[理解解析 (已废弃并删除)](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html) |  
[如何满足解析 (已废弃并删除)](https://www.w3.org/WAI/WCAG22/quickref/#parsing)

注

最初采纳此准则是为了解决辅助技术在直接解析 HTML 时遇到的问题。辅助技术已不再需要直接解析 HTML。因此，这些问题要么不复存在，要么通过其他准则得以解决。此准则不再具有实用性，并已被删除。

[理解名称、角色、值](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) |  
[如何满足名称、角色、值](https://www.w3.org/WAI/WCAG22/quickref/#name-role-value)

(级别 A)

对于所有的[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function")（包括但不限于：表单元素、链接和由脚本生成的组件），其[名称](https://www.w3.org/TR/WCAG22/#dfn-name "text by which software can identify a component within web content to the user")和[角色](https://www.w3.org/TR/WCAG22/#dfn-role "text or number by which software can identify the function of a component within Web content")可以被[程序化确定](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities")；可由用户设置的[状态](https://www.w3.org/TR/WCAG22/#dfn-states "dynamic property expressing characteristics of a user interface component that may change in response to user action or automated processes")、属性和值可以被[程序化设置](https://www.w3.org/TR/WCAG22/#dfn-programmatically-set "set by software using methods that are supported by user agents, including assistive technologies")；并且这些项更改的通知可供[用户代理](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents web content for users")（包括[辅助技术](https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies "hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents")）使用。

注

此成功准则主要适用于自己开发或编写用户界面组件脚本的 Web 作者。例如，标准的 HTML 控件在按照规范使用时已经满足了此成功准则。

[理解状态消息](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) |  
[如何满足状态消息](https://www.w3.org/WAI/WCAG22/quickref/#status-messages)

(级别 AA)

在使用标记语言实现的内容中，[状态消息](https://www.w3.org/TR/WCAG22/#dfn-status-messages "change in content that is not a change of context, and that provides information to the user on the success or results of an action, on the waiting state of an application, on the progress of a process, or on the existence of errors")可以通过[角色](https://www.w3.org/TR/WCAG22/#dfn-role "text or number by which software can identify the function of a component within Web content")或属性被[程序化确定](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities")，以便它们可以由[辅助技术](https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies "hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents")在不获得焦点的情况下呈现给用户。

## 5. 符合性

本节列出了[符合](https://www.w3.org/TR/WCAG22/#dfn-conform "satisfying all the requirements of a given standard, guideline or specification") WCAG 2.2 的要求。它还提供了有关如何进行符合性声明（可选）的信息。最后，它描述了[可访问性支持](https://www.w3.org/TR/WCAG22/#dfn-accessibility-supported "supported by users' assistive technologies as well as the accessibility features in browsers and other user agents")的含义，因为在符合性方面只能[依赖](https://www.w3.org/TR/WCAG22/#dfn-relied-upon "the content would not conform if that technology is turned off or is not supported")具有可访问性支持的技术使用方式。 [理解符合性](https://www.w3.org/WAI/WCAG22/Understanding/conformance)包含了对可访问性支持概念的进一步解释。

WCAG 2.2 的主要内容是[规范性](https://www.w3.org/TR/WCAG22/#dfn-normative "required for conformance")的，并定义了影响符合性声明的要求。介绍性材料、附录、标记为“非规范性”的章节、图表、示例和注释是[资料性](https://www.w3.org/TR/WCAG22/#dfn-informative "for information purposes and not required for conformance")（非规范性）的。非规范性材料提供了用以帮助解释指南的建议信息，但并不创建影响符合性声明的要求。

关键的词汇 *可以 (MAY)*, *必须 (MUST)*, *绝不 (MUST NOT)*, *不推荐 (NOT RECOMMENDED)*, *推荐 (RECOMMENDED)*, *应该 (SHOULD)*, 和 *不应该 (SHOULD NOT)* 应按照 \[\_\] 中的描述进行解释。

为了使 Web 页面符合 WCAG 2.2，必须满足以下所有符合性要求：

完全满足以下符合性级别之一：

- 对于级别 A 符合性（最低符合性级别），[Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")[满足](https://www.w3.org/TR/WCAG22/#dfn-satisfies "the success criterion does not evaluate to 'false' when applied to the page")所有级别 A 成功准则，或者提供了一个[符合要求的替代版本](https://www.w3.org/TR/WCAG22/#dfn-conforming-alternate-versions "version that")。
- 对于级别 AA 符合性，Web 页面满足所有级别 A 和级别 AA 成功准则，或者提供了一个级别 AA 符合要求的替代版本。
- 对于级别 AAA 符合性，Web 页面满足所有级别 A、级别 AA 和级别 AAA 成功准则，或者提供了一个级别 AAA 符合要求的替代版本。

注 1

虽然符合性只能在声明的级别上实现，但鼓励作者（在其声明中）报告在满足超出已实现符合性级别的所有级别成功准则方面取得的任何进展。

注 2

不推荐将级别 AAA 符合性作为整个网站的通用政策要求，因为对于某些内容，无法满足所有级别 AAA 成功准则。

[符合性](https://www.w3.org/TR/WCAG22/#dfn-conform "satisfying all the requirements of a given standard, guideline or specification")（以及符合性级别）仅针对完整的 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")，如果排除了 Web 页面的某部分，则无法实现符合性。

注 1

为了确定符合性，当可以从页面上直接获得页面部分内容的替代方案（例如详细描述或视频的替代呈现）时，这些替代方案被视为页面的一部分。

注 2

对于因不受作者控制的内容而无法符合准则的 Web 页面作者，可以考虑进行[部分符合性声明](https://www.w3.org/TR/WCAG22/#conformance-partial)。

注 3

完整的页面包括页面针对各种屏幕尺寸自动呈现的每个页面变体（例如响应式 Web 页面中的变体）。这些变体中的每一个都需要符合（或需要有符合要求的替代版本），整个页面才能符合。

当一个 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")是呈现某个[过程](https://www.w3.org/TR/WCAG22/#dfn-processes "series of user actions where each action is required in order to complete an activity")（即为了完成某项活动需要完成的一系列步骤）的一系列 Web 页面之一时，该过程中的所有 Web 页面都必须符合指定的级别或更高。 (如果过程中的任何页面不符合该级别或更高，则无法在特定级别上实现符合性。)

仅[依赖](https://www.w3.org/TR/WCAG22/#dfn-relied-upon "the content would not conform if that technology is turned off or is not supported")具有可访问性支持的技术使用方式来满足成功准则。以不具有可访问性支持的方式提供的任何信息或功能，也必须以具有可访问性支持的方式提供。 (参见[理解可访问性支持](https://www.w3.org/WAI/WCAG22/Understanding/conformance#accessibility-support)。)

#### 5.2.5 无干扰

如果以不具有[可访问性支持](https://www.w3.org/TR/WCAG22/#dfn-accessibility-supported "supported by users' assistive technologies as well as the accessibility features in browsers and other user agents")的方式使用[技术](https://www.w3.org/TR/WCAG22/#dfn-technologies "mechanism for encoding instructions to be rendered, played or executed by user agents")，或者以不符合准则的方式使用技术，则它们不会阻碍用户访问页面的其余部分。此外，[Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")作为一个整体在以下每种情况下都继续满足符合性要求：

1. 当用户代理中开启了任何未被[依赖](https://www.w3.org/TR/WCAG22/#dfn-relied-upon "the content would not conform if that technology is turned off or is not supported")的技术时，
2. 当用户代理中关闭了任何未被依赖的技术时，以及
3. 当用户代理不支持任何未被依赖的技术时。

此外，以下成功准则适用于页面上的所有内容，包括未被依赖以满足符合性的内容，因为如果未能满足这些准则，可能会干扰对页面的任何使用：

- **1.4.2 - 音频控制**，
- **2.1.2 - 无键盘陷阱**，
- **2.3.1 - 三次闪烁或低于阈值**，以及
- **2.2.2 - 暂停、停止、隐藏**。

注

如果一个页面无法符合（例如符合性测试页面或示例页面），它不能被包括在符合性范围或符合性声明中。

有关更多信息（包括示例），请参阅[理解符合性要求](https://www.w3.org/WAI/WCAG22/Understanding/conformance#conformance-requirements)。

符合性仅针对 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")进行定义。然而，可以做出覆盖一个页面、一系列页面或多个相关 Web 页面的符合性声明。

符合性声明是**非必须的**。作者可以在不做出声明的情况下符合 WCAG 2.2。然而，如果做出符合性声明，则符合性声明**必须**包括以下信息：

1. 声明的**日期**
2. **指南标题、版本和 URI** "Web Content Accessibility Guidelines 2.2 位于 [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/) "
3. 满足的**符合性级别**：（级别 A, AA 或 AAA）
4. **Web 页面的简要说明**，例如做出了声明的 URI 列表，包括是否将子域名包括在声明中。
	注 1
	Web 页面可以通过列表或描述声明中包含的所有 URI 的表达式来描述。
	注 2
	在安装到客户网站之前没有 URI 的基于 Web 的产品，可以做出一条声明，说明该产品在安装后将符合准则。
5. 所**[依赖](https://www.w3.org/TR/WCAG22/#dfn-relied-upon "the content would not conform if that technology is turned off or is not supported")**的 **[Web 内容技术](https://www.w3.org/TR/WCAG22/#dfn-technologies "mechanism for encoding instructions to be rendered, played or executed by user agents")**列表。

注 3

如果使用了符合性徽标，它将构成声明，并且必须附带上面列出的符合性声明的必需组件。

除了上述符合性声明的必需组件之外，考虑提供额外的信息来协助用户。推荐的额外信息 includes：

- 已满足的超出所声明符合性级别的成功准则列表。此信息应以用户可以使用的形式提供，最好是机器可读的元数据。
- “*已使用但未[依赖](https://www.w3.org/TR/WCAG22/#dfn-relied-upon "the content would not conform if that technology is turned off or is not supported")*”的具体技术列表。
- 用于测试内容的用户代理（包括辅助技术）列表。
- 在机器可读元数据中提供的关于内容特定可访问性特征的列表。
- 关于为提高可访问性而采取的超出成功准则的任何额外步骤的信息。
- 所[依赖](https://www.w3.org/TR/WCAG22/#dfn-relied-upon "the content would not conform if that technology is turned off or is not supported")的具体技术列表的机器可读元数据版本。
- 符合性声明的机器可读元数据版本。

注 1

有关更多信息和符合性声明示例，请参阅[理解符合性声明](https://www.w3.org/WAI/WCAG22/Understanding/conformance#conformance-claims)。

注 2

有关在符合性声明中使用元数据的更多信息，请参阅[理解元数据](https://www.w3.org/WAI/WCAG22/Understanding/understanding-metadata)。

以后将添加额外内容的 Web 页面可以使用“部分符合性声明”。例如，电子邮件程序、博客、允许用户添加评论的文章，或支持用户贡献内容的应用程序。另一个例子是，由来自多个贡献者的数据聚合而成的页面（如门户网站或新闻网站），或随时间自动插入来自其他来源内容（例如动态插入广告）的网站。

在这些情况下，在最初发布时无法知道页面不受控制的内容会是什么。重要的是要指出，不受控制的内容也会影响受控制内容的可访问性。有两种选择：

1. 可以基于最佳知识做出符合性的确定。If a page of this type is monitored and repaired (non-conforming content is removed or brought into conformance) within two business days, then a determination or claim of conformance can be made since, except for errors in externally contributed content which are corrected or removed when encountered, the page conforms. No conformance claim can be made if it is not possible to monitor or correct non-conforming content;
	**或者**
2. 可以做出一条“部分符合性声明”，声明页面不符合准则，但如果删除某些部分则可以符合。该声明的形式为：“本页面不符合准则，但如果删除了来自不受控制来源的以下部分，则可以符合 WCAG 2.2，符合级别为 X。” 此外，部分符合性声明中描述的不受控制的内容还必须满足以下要求：
	1. 它不是作者控制下的内容。
	2. 它是以用户可以识别的方式进行描述的（例如，不能被描述为“我们不控制的所有部分”，除非它们被清楚地标记为如此）。

当页面不符合准则，但如果在页面上使用的（所有）语言都存在[可访问性支持](https://www.w3.org/TR/WCAG22/#dfn-accessibility-supported "supported by users' assistive technologies as well as the accessibility features in browsers and other user agents")就能符合时，可以做出“因语言引起的部分符合性声明”。该声明的形式为：“本页面不符合准则，但如果对以下语言存在可访问性支持，则可以符合 WCAG 2.2，符合级别为 X：”

*本节是非规范性的。*

本规范中由工作组识别出可能对隐私产生影响的成功准则列在下方，这些成功准则要么为最终用户提供保护，要么是网站提供商在实现旨在保护用户隐私的功能时需要重点考虑的。此列表反映了工作组当前的理解，但其他成功准则可能会有工作组在发布之时未意识到的隐私影响。

本规范中可能与隐私相关的成功准则是：

- [2.2.6 超时 (AAA)](https://www.w3.org/TR/WCAG22/#timeouts)
- [3.3.7 冗余输入 (A)](https://www.w3.org/TR/WCAG22/#redundant-entry)
*本节是非规范性的。*

本规范中由工作组识别出可能对安全产生影响的成功准则列在下方，这些成功准则要么为最终用户提供保护，要么是网站提供商在实现旨在保护用户安全的功能时需要重点考虑的。此列表反映了工作组当前的理解，但其他成功准则可能会有工作组在发布之时未意识到的安全影响。

本规范中可能与安全相关的成功准则是：

- [1.1.1 非文本内容 (A)](https://www.w3.org/TR/WCAG22/#non-text-content)
- [1.3.5 确定输入目的 (AA)](https://www.w3.org/TR/WCAG22/#identify-input-purpose)
- [1.4.7 低背景音或无背景音 (AAA)](https://www.w3.org/TR/WCAG22/#low-or-no-background-audio)
- [2.2.1 调整定时 (A)](https://www.w3.org/TR/WCAG22/#timing-adjustable)
- [2.2.5 重新验证 (AAA)](https://www.w3.org/TR/WCAG22/#re-authenticating)
- [2.2.6 超时 (AAA)](https://www.w3.org/TR/WCAG22/#timeouts)
- [2.5.6 并行输入机制 (AAA)](https://www.w3.org/TR/WCAG22/#concurrent-input-mechanisms)
- [3.3.3 错误建议 (AA)](https://www.w3.org/TR/WCAG22/#error-suggestion)
- [3.3.7 冗余输入 (A)](https://www.w3.org/TR/WCAG22/#redundant-entry)
- [3.3.8 无障碍身份验证 (最小) (AA)](https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum)
- [3.3.9 无障碍身份验证 (增强) (AAA)](https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced)

## 6. 词汇表

缩写 (abbreviation)

单词、短语或名称的缩短形式，且该缩写尚未成为该语言的常规词汇

注 1

这包括首字母缩略字（initialisms）和首字母拼读字（acronyms），其中：

1. **首字母缩略字 (initialisms)** 是由该名称或短语中包含的单词或音节的首字母组成的名称或短语的缩短形式
	注 2
	并非在所有语言中都有所定义。
2. **首字母拼读字 (acronyms)** 是由其他单词（在名称或短语中）的首字母或部分组成，且可以作为一个单词进行发音的缩写形式

注 3

一些公司已采用曾经是首字母缩略字的字母组合作为其公司名称。在这种情况下，公司的新名称是这些字母（例如 Ecma），而该词不再被视为缩写。

可访问性支持 (accessibility supported)

受用户[辅助技术](https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies "硬件和/或软件，作为用户代理，或与主流用户代理协同工作，提供满足超出主流用户代理所提供的残疾用户需求的功能")以及浏览器和其他[用户代理](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents web content for users")中可访问性功能的支持

要使 Web 内容技术（或该技术的某项功能）的使用符合“具有可访问性支持”的条件，该技术（或功能）必须同时满足 1 和 2：

1. **[Web 内容技术](https://www.w3.org/TR/WCAG22/#dfn-technologies "对用于由用户代理渲染、播放或执行的指令进行编码的机制")的使用方式必须受到用户辅助技术（AT）的支持。** 这意味着该技术的使用方式已针对与用户辅助技术在内容的[人类语言](https://www.w3.org/TR/WCAG22/#dfn-human-language-s "为了与人类交流而口头表达、书写或以手势表示（通过视觉或触觉手段）的语言")下的互操作性进行了测试，
	**并且**
2. **该 Web 内容技术必须有可供用户使用的具有可访问性支持的用户代理。** 这意味着以下四个陈述中至少有一个属实：
	1. 该技术在也被广泛分发的且具有可访问性支持的用户代理中得到原生支持（如 HTML and CSS）；
		**或者**
	2. 该技术在同样具有可访问性支持的广泛分发的插件中得到支持；
		**或者**
	3. 该内容在封闭环境（如大学或公司网络）中可用，在此环境中，技术所要求的且由组织所使用的用户代理同样具有可访问性支持；
		**或者**
	4. 支持该技术的一个或多个用户代理具有可访问性支持，并且可以通过以下方式供下载或购买：
		- 残疾人士的花费不超过无残疾人士，**并且**
		- 残疾人士寻找和获取该用户代理的简便程度与无残疾人士相同。

注 1

可访问性指南工作组和 W3C 并未指定对于 Web 技术的特定使用方式，辅助技术必须提供哪些或多少支持才能将其归类为具有可访问性支持。 (参见[“可访问性支持”所需的辅助技术支持级别](https://www.w3.org/WAI/WCAG21/Understanding/conformance#support-level)。)

注 2

Web 技术可以以不具有可访问性支持的方式使用，只要它们未被[依赖](https://www.w3.org/TR/WCAG22/#dfn-relied-upon "如果该技术被关闭或不受支持，内容将无法符合准则")，且页面整体符合符合性要求，包括[符合性要求 4](https://www.w3.org/TR/WCAG22/#cc4)和[符合性要求 5](https://www.w3.org/TR/WCAG22/#cc5)。

注 3

当以“具有可访问性支持”的方式使用某项 [Web 技术](https://www.w3.org/TR/WCAG22/#dfn-technologies "对用于由用户代理渲染、播放或执行的指令进行编码的机制")时，它并不意味着整项技术或该技术的所有使用方式都受到支持。大多数技术（包括 HTML）对于至少一个功能或使用方式缺乏支持。仅当所依赖以满足 WCAG 要求的技术使用方式具有可访问性支持时，页面才符合 WCAG。

注 4

当引用具有多个版本的 Web 内容技术时，应当指定所支持的版本。

注 5

作者寻找具有可访问性支持的技术使用方式的一种方法是，咨询记录为具有可访问性支持的使用方式的汇编。 (参见[理解可访问性支持的 Web 技术使用方式](https://www.w3.org/WAI/WCAG21/Understanding/conformance#documented-lists)。) 作者、公司、技术供应商或其他方可以记录使用 Web 内容技术具有可访问性支持的方式。然而，文档中所有的技术使用方式都需要符合上述具有可访问性支持的 Web 内容技术的定义。

基于时间媒体的替代方案 (alternative for time-based media)

包含按正确顺序排列的基于时间的视觉和听觉信息的文本描述，并提供实现任何基于时间交互结果的手段的文档

注

仅当用于创建同步媒体内容的剧本/分镜被纠正为能够准确反映编辑后的最终同步媒体时，该剧本才符合此定义。

普通用户而言具有歧义 (ambiguous to users in general)

无法从链接以及与链接同时呈现给用户的 Web 页面上的所有信息中确定其目的（即无残疾的读者在激活该链接之前，不会知道该链接会做什么）

ASCII 艺术 (ASCII art)

通过字符或字形的空间排列创建的图片（通常来自 ASCII 定义的 95 个可打印字符）

辅助技术（本文档中所使用者）(assistive technology)

硬件和/或软件，作为[用户代理](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents web content for users")，或与主流用户代理协同工作，提供满足超出主流用户代理所提供的残疾用户需求的功能

注 1

由辅助技术提供的功能包括替代呈现（例如合成语音或放大内容）、替代输入方法（例如语音输入）、额外的导航或定位机制，以及内容转换（例如使表格更具可访问性）。

注 2

辅助技术通常通过使用和监控 API 来与主流用户代理进行数据和消息通信。

注 3

主流用户代理与辅助技术之间的区别并不是绝对的。许多主流用户代理提供了一些辅助残疾人士的功能。基本区别在于主流用户代理针对的是通常包括残疾人和非残疾人在内的广泛而多样化的受众。辅助技术针对的是具有特定残疾的、明确定义的用户群体。由辅助技术提供的协助更具针对性且更适合其目标用户的需求。主流用户代理可能会向辅助技术提供重要功能，如从程序对象检索 Web 内容，或将标记解析为可识别的数据包。

音频 (audio)

声音复制技术

注

音频可以由人工合成（包括语音合成）、从现实世界的声音录制，或者两者结合。

音频描述 (audio description)

添加到音轨中的旁白，用于描述仅从主音轨无法理解的重要视觉细节

注 1

[视频](https://www.w3.org/TR/WCAG22/#dfn-video "the technology of moving or sequenced pictures or images")的音频描述提供了有关动作、角色、场景变化、屏幕文本和其他视觉内容的信息。

注 2

在标准的音频描述中，旁白是在对话现有的暂停期间添加的。 (另请参阅[延伸音频描述](https://www.w3.org/TR/WCAG22/#dfn-extended-audio-description "audio description that is added to an audiovisual presentation by pausing the video so that there is time to add additional description")。)

注 3

如果所有的[视频](https://www.w3.org/TR/WCAG22/#dfn-video "the technology of moving or sequenced pictures or images")信息在现有的[音频](https://www.w3.org/TR/WCAG22/#dfn-audio "the technology of sound reproduction")中已经全部提供，则不需要额外的音频描述。

注 4

也称为“视频描述” and “描述性旁白”。

仅音频 (audio-only)

仅包含[音频](https://www.w3.org/TR/WCAG22/#dfn-audio "the technology of sound reproduction")（无[视频](https://www.w3.org/TR/WCAG22/#dfn-video "the technology of moving or sequenced pictures or images")且无交互）的基于时间的演示

闪烁 (blinking)

以旨在吸引注意的方式在两个视觉状态之间来回切换

注

另请参阅[闪烁 (flash)](https://www.w3.org/TR/WCAG22/#dfn-flashes "a pair of opposing changes in relative luminance that can cause seizures in some people if it is large enough and in the right frequency range")。某个事物有可能足够大且以适当频率发出足够亮度的闪光，以至于它同时也被归类为闪烁 (flash)。

文本块 (blocks of text)
多于一句话的文本

首字母缩写词，代表“全自动区分计算机和人类的公开图灵测试” (Completely Automated Public Turing test to tell Computers and Humans Apart)

注 1

验证码 (CAPTCHA) 测试通常涉及要求用户输入在模糊图像或音频文件中显示的文本。

注 2

图灵测试是旨在区分人类和计算机的任何测试系统。它以著名的计算机科学家艾伦·图灵 (Alan Turing) 的名字命名。该术语由卡内基梅隆大学的研究人员创造。

字幕 (captions)

为理解媒体内容所需的语音和非语音音频信息提供的同步视觉和/或[文本替代品](https://www.w3.org/TR/WCAG22/#dfn-text-alternative "Text that is programmatically associated with non-text content or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content.")

注 1

字幕与仅对话的旁白相似，但字幕不仅传达口头对话的内容，还传达理解节目内容所需的非对话音频信息的等效项，包括音效、音乐、笑声、发言者身份和位置。

注 2

双语字幕 (Closed Captions) 是指可以在某些播放器中开启和关闭的字幕。

注 3

开放式字幕 (Open Captions) 是指任何无法关闭的字幕。例如，如果字幕是嵌入在[视频](https://www.w3.org/TR/WCAG22/#dfn-video "the technology of moving or sequenced pictures or images")中的视觉等效[文本图像](https://www.w3.org/TR/WCAG22/#dfn-images-of-text "text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect")。

注 4

字幕不应遮挡或阻碍视频中的相关信息。

注 5

在某些国家，字幕（captions）被称为旁白（subtitles）。

注 6

[音频描述](https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions "narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone")可以有字幕，但并不需要，因为它们是对已经以视觉方式呈现的信息的描述。

上下文改变 (changes of context)

如果用户在不知情的情况下发生重大改变，可能会使无法同时查看整个页面的用户感到迷失

上下文改变包括以下改变：

- [用户代理](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents web content for users")；
- [视口](https://www.w3.org/TR/WCAG22/#dfn-viewport "object in which the user agent presents content")；
- 焦点；
- 改变了 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")意义的[内容](https://www.w3.org/TR/WCAG22/#dfn-content "information and sensory experience to be communicated to the user by means of a user agent, including code or markup that defines the content's structure, presentation, and interactions")

注

内容改变并不总是上下文改变。内容改变（如展开大纲、动态菜单或标签页控件）不一定会改变上下文，除非他们也改变了上述内容之一（例如焦点）。

认知 function 测试 (cognitive function test)

新

要求用户记住、操作或转录信息的任务。示例包括但不限于：

- 记忆，例如记住用户名、密码、一组字符、图像或图案。常用的标识符如姓名、电子邮件和电话号码不被视为认知功能测试，因为它们是用户个人的，并且在各个网站上保持一致；
- 转录，例如输入字符；
- 使用正确的拼写；
- 进行计算；
- 解决谜题。

符合性 (conformance)

满足给定标准、指南或规范的所有要求

符合要求的替代版本 (conforming alternate version)

满足以下条件的版本：

1. 符合指定的级别，并且
2. 在相同的[人类语言](https://www.w3.org/TR/WCAG22/#dfn-human-language-s "language that is spoken, written or signed (through visual or tactile means) to communicate with humans")中提供所有相同的页面信息和[功能](https://www.w3.org/TR/WCAG22/#dfn-functionality "processes and outcomes achievable through user action")，并且
3. 与不符合的内容一样保持最新，并且
4. 满足以下至少一项：
	1. 符合要求的版本可以通过[具有可访问性支持](https://www.w3.org/TR/WCAG22/#dfn-accessibility-supported "supported by users' assistive technologies as well as the accessibility features in browsers and other user agents")的[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")从不符合要求的页面访问，或者
	2. 不符合要求的版本只能从符合要求的版本中访问，或者
	3. 不符合要求的版本只能从一个同时提供了访问符合要求版本机制的符合要求页面中访问

注 1

在此定义中，“只能被访问”意味着存在某种机制（例如条件重定向），阻止用户“访问”（加载）不符合要求的页面，除非用户刚刚来自符合要求的版本。

注 2

替代版本不需要与原版进行逐页对应（例如，符合要求的替代版本可以由多个页面组成）。

注 3

如果提供了多种语言版本，则需要为提供的每种语言提供符合要求的替代版本。

注 4

可以提供替代版本以适应不同的技术环境或用户群体。每个版本都应尽可能符合要求。其中一个版本需要完全符合要求，以满足[符合性要求 1](https://www.w3.org/TR/WCAG22/#cc1)。

注 5

符合要求的替代版本不需要位于符合性范围内，甚至不需要在同一个网站上，只要它与不符合要求的版本一样可以免费获取即可。

注 6

替代版本不应与[补充内容](https://www.w3.org/TR/WCAG22/#dfn-supplementary-content "additional content that illustrates or clarifies the primary content")混淆，后者是对原始页面的支持并增强理解。

注 7

在内容中设置用户偏好以生成符合要求的版本是访问另一个版本的一种可接受机制，只要用于设置偏好的方法具有可访问性支持。

参见[理解符合要求的替代版本](https://www.w3.org/WAI/WCAG21/Understanding/conformance#conforming-alt-versions)

内容 (Web 内容) (content)

通过[用户代理](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents web content for users")传达给用户的信息和感官体验，包括定义内容[结构](https://www.w3.org/TR/WCAG22/#dfn-structure "The way the parts of a web page are organized in relation to each other; and The way a collection of web pages is organized")、[呈现](https://www.w3.org/TR/WCAG22/#dfn-presentation "rendering of the content in a form to be perceived by users")和交互的代码或标记

上下文敏感的帮助 (context-sensitive help)

提供与当前正在执行的功能相关的信息的帮助文本

注

清晰的标签可以作为上下文敏感的帮助。

对比度 (contrast ratio)

(L1 + 0.05) / (L2 + 0.05)，其中

- L1 是较亮颜色的[相对亮度](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance "the relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white")，以及
- L2 是较暗颜色的[相对亮度](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance "the relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white")。

注 1

对比度比率范围可以从 1 到 21（通常写作 1:1 到 21:1）。

注 2

因为作者无法控制用户关于如何渲染文本的设置（例如字体平滑或抗锯齿），所以文本的对比度比率可以在关闭抗锯齿的情况下进行评估。

注 3

为了满足成功准则 1.4.3 和 1.4.6 的要求，对比度是相对于在正常使用中渲染该文本的指定背景进行测量的。如果没有指定背景颜色，则假定为白色。

注 4

背景颜色是指在正常使用中渲染文本的内容的指定颜色。如果指定了文本颜色而未指定背景颜色，则是失败的，因为用户的默认背景颜色未知，因而无法评估是否具有充足的对比度。出于同样的原因，如果指定了背景颜色而未指定文本颜色，也是失败的。

注 5
当字母周围有边框时，边框可以增加对比度，并将用于计算字母与其背景之间的对比度。字母周围的窄边框将被视作字母本身。字母周围填充字母内部细节的宽边框起到了光晕的作用，将被视为背景。

注 6

对于内容中指定的色彩对，应该针对作者预期在典型呈现中相邻出现的色彩对评估 WCAG 符合性。作者无需考虑不寻常的呈现（例如由用户代理做出的颜色更改），除非这些更改是由作者的代码引起的。

正确的阅读顺序 (correct reading sequence)

字词和段落以不改变内容含义的顺序呈现的任何顺序

CSS 像素 (CSS pixel)

大约 0.0213 度的视角

CSS 像素是 CSS 中所有长度和测量值的标准度量单位。该单位与密度无关，并与显示器中存在的实际硬件像素不同。用户代理和操作系统应该确保将 CSS 像素设置得尽可能接近 [CSS 值和单位模块级别 3 参考像素](https://www.w3.org/TR/css3-values/#reference-pixel) \[\_\], 该像素考虑了显示器的物理尺寸和假定的观看距离（这些因素是内容作者无法确定的）。

下压事件 (down-event)

当指针的触发刺激被按下时发生的平台事件

下压事件在不同的平台上可能会有不同的名称，例如“touchstart”或“mousedown”。

拖拽运动 (dragging movement)

新

在[下压事件](https://www.w3.org/TR/WCAG22/#dfn-down-event "platform event that occurs when the trigger stimulus of a pointer is depressed")中指针与某个元素接合，并且该元素（或其位置的表示）跟随指针直到[上弹事件](https://www.w3.org/TR/WCAG22/#dfn-up-event "platform event that occurs when the trigger stimulus of a pointer is released")的操作

注

可拖拽元素的示例包括列表项、文本元素和图像。

紧急情况 (emergency)

需要立即采取行动以保护生命、安全或财产的突然、意外情况或事件

必不可少的 (essential)

如果移除，将从根本上改变内容的信息或功能，**并且**该信息和功能无法以符合指南的其他方式实现

延伸音频描述 (extended audio description)

通过暂停[视频](https://www.w3.org/TR/WCAG22/#dfn-video "the technology of moving or sequenced pictures or images")来添加到视听演示中的音频描述，以便有时间添加额外的描述

注

仅当如果没有额外的[音频描述](https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions "narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone")视频的含义就会丢失，且对话/旁白之间的暂停太短时，才使用此技术。

闪烁 (flash)

如果幅度足够大且处于适当的频率范围内，可能会导致某些人癫痫发作的一对相反的[相对亮度](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance "the relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white")变化

注 1

有关不允许的闪烁类型的信息，请参阅[一般闪烁和红光闪烁阈值](https://www.w3.org/TR/WCAG22/#dfn-general-flash-and-red-flash-thresholds "a flash or rapidly changing image sequence is below the threshold (i.e., content passes) if any of the following are true:")。

注 2

另请参阅[闪烁 (blinking)](https://www.w3.org/TR/WCAG22/#dfn-blinking "switch back and forth between two visual states in a way that is meant to draw attention")。

焦点指示器 (focus indicator)

新

在聚焦[状态](https://www.w3.org/TR/WCAG22/#dfn-states "dynamic property expressing characteristics of a user interface component that may change in response to user action or automated processes")下通过改变像素从而以视觉方式指示[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function")是否获得焦点的指示

功能 (functionality)

通过用户动作可以实现的产品[过程](https://www.w3.org/TR/WCAG22/#dfn-processes "series of user actions where each action is required in order to complete an activity")和结果

一般闪烁和红光闪烁阈值 (general flash and red flash thresholds)

如果满足以下任何一项，则[闪烁](https://www.w3.org/TR/WCAG22/#dfn-flashes "a pair of opposing changes in relative luminance that can cause seizures in some people if it is large enough and in the right frequency range")或快速变化的图像序列低于阈值（即内容**通过**）：

- 在任何一秒钟的时间段内，不超过三次**一般闪烁**和/或不超过三次**红光闪烁**；或者
- 在典型观看距离下，并发发生的闪烁组合面积在屏幕显示的任何 10 度视野内所占比例不超过 0.006 球面度（屏幕上任何 10 度视野的 25%）

其中：

- **一般闪烁**定义为最大相对亮度 (1.0) 的 10% 或以上的一对相反的[相对亮度](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance "the relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white")变化，其中较暗图像的相对亮度低于 0.80；且其中“一对相反的变化”是指增加后跟着减少，或者减少后跟着增加，以及
- **红光闪烁**定义为涉及饱和红色的任何一对相反过渡

*例外：* 细密、平衡的图案闪烁（例如白噪声，或者边长小于屏幕 0.1 度（在典型观看距离下的视野）的“正方形”交替棋盘图案）不违反阈值。

注 1

对于通用软件或 Web 内容，当内容在 1024 x 768 像素下观看时，在显示屏幕区域的任何位置使用 341 x 256 像素矩形，都将为标准屏幕尺寸和观看距离（例如 22-26 英寸处的 15-17 英寸屏幕）提供对 10 度视野的良好估计。已知该 75 - 85 ppi 的分辨率低于 CSS 规范中 96 ppi 的标称 CSS 像素分辨率，因而更为保守。显示相同内容渲染的更高分辨率显示器会产生更小且更安全的图像，因此使用较低的分辨率来定义阈值。

注 2

过渡是指相对亮度测量值对时间的关系图中，相邻波峰和波谷之间相对亮度（或红光闪烁的相对亮度/颜色）的变化。一次闪烁由两次相反的过渡组成。

注 3

该领域中关于**“涉及饱和红色的相反过渡对”**（源自 WCAG 2.2）的新工作定义为：一对相反的过渡，其中一个过渡是到或来自 CIE 1976 UCS 色度图中值 R/(R + G + B) 大于或等于 0.8，且状态之间的差异大于 0.2（无单位）的状态。 \[\_\],

注 4

现有工具可以从视频屏幕捕获中进行分析。然而，如果任何一秒钟内的闪烁次数小于或等于 3 次，则无需任何工具来评估此条件。内容自动通过（参见上面第 1 点和第 2 点）。

人类语言 (human language)

为了与人类交流而口头表达、书写或以手势表示（通过视觉或触觉手段）的语言

注

另请参阅[手语](https://www.w3.org/TR/WCAG22/#dfn-sign-language "a language using combinations of movements of the hands and arms, facial expressions, or body positions to convey meaning")。

成语 (idiom)

其含义无法从单个词的含义中推断出来，且特定词语不能改变而不失去其含义的短语

注

成语无法逐字直接翻译，否则会丢失其（特定文化或语言相关的）含义。

文本图像 (image of text)

为了达到某种特定视觉效果而被渲染成非文本形式（例如图像）的文本

注

这不包括作为包含其他显著视觉内容图片一部分的文本。

资料性的 (informative)

供参考目的，且不要求符合准则

注

符合[符合性](https://www.w3.org/TR/WCAG22/#dfn-conform "satisfying all the requirements of a given standard, guideline or specification")所必需的内容被称为“ [规范性](https://www.w3.org/TR/WCAG22/#dfn-normative "required for conformance")的”。

不被接受的用户输入信息

注

这包括：

1. Web 页面所必需但被用户遗漏的信息
2. 由用户提供但超出要求的数据格式或值的信息

行话 (jargon)

特定领域人群以特定方式使用的词汇

键盘接口 (keyboard interface)

软件用来获取按键输入的接口

注 1
键盘接口允许用户向程序提供按键输入，即使原生技术中不包含键盘。

注 2

通过键盘操作的鼠标模拟器（如鼠标键 MouseKeys）来操作应用程序（或应用程序的部分），不符合通过键盘接口操作的条件，因为程序的操作是通过其定位设备接口而不是通过其键盘接口进行的。

键盘快捷键 (keyboard shortcut)

通过按下一个或多个键来触发动作的替代手段

标签 (label)

呈现给用户以在 Web [内容](https://www.w3.org/TR/WCAG22/#dfn-content "information and sensory experience to be communicated to the user by means of a user agent, including code or markup that defines the content's structure, presentation, and interactions")中识别某个组件的[文本](https://www.w3.org/TR/WCAG22/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language")或其他具有[文本替代](https://www.w3.org/TR/WCAG22/#dfn-text-alternative "Text that is programmatically associated with non-text content or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content.")的组件

注 1

标签是呈现给所有用户的，而[名称](https://www.w3.org/TR/WCAG22/#dfn-name "text by which software can identify a component within web content to the user")可以是隐藏的，仅由辅助技术公开。在许多（按并非所有）情况下，名称和标签是相同的。

注 2

标签（label）一词不限于 HTML 中的 label 元素。

大比例文本 (large scale text)

字号至少为 18 磅或 14 磅加粗，或者在中文、日文和韩文 (CJK) 字体中能够产生同等大小的字号

注 1

笔画极细或具有降低字母形状熟悉度等异常特征的字体较难阅读，特别是在对比度较低的情况下。

注 2

字号是交付内容时的尺寸。它不包括用户可能进行的调整大小。

注 3

用户看到的字符的实际尺寸取决于作者定义的尺寸以及用户的显示器或用户代理设置。对于许多主流正文字体，14 磅和 18 磅大致相当于正文默认大小的 1.2 em 和 1.5 em，或 120% 或 150%（假设正文字体为 100%），但作者需要针对所使用的特定字体对此进行检查。当以相对单位定义字体时，实际的磅值尺寸由用户代理计算以进行显示。在评估此成功准则时，应从用户代理获取磅值尺寸，或者像用户代理那样基于字体度量值进行计算。低视力用户将负责选择适当的设置。

注 4

在不指定字号的情况下使用文本时，主流浏览器上用于未指定文本的最小字号是一个合理的假设尺寸。如果在主流浏览器上，1 级标题呈现为 14pt 加粗或更大，那么假定它是大比例文本是合理的。相对缩放比例可以以类似方式从默认大小计算得出。

注 5

罗马文本的 18 磅和 14 磅尺寸取自大号打印的最小尺寸（14pt）和较大的标准字号（18pt）。对于其他字体（如 CJK 语言），“同等”尺寸将是这些语言所使用的大号打印最小尺寸以及下一个较大的标准大号打印尺寸。

法律承诺 (legal commitments)

人在此交易中承担法律上有约束力的义务或获得利益的交易

链接目的 (link purpose)

通过激活超链接获得的结果的本质

直播 (live)

从现实世界事件捕获并传输到接收器，且延迟不超过广播延迟的信息

注 1

广播延迟是简短的（通常是自动的）延迟，例如用于给广播公司时间来准备或审查音频（或视频）源，但不足以进行实质性编辑。

注 2

如果信息完全由计算机生成，则它不是直播。

初中教育水平 (lower secondary education level)

在完成六年学校教育后开始，并在小学教育开始九年后结束的两到三年教育阶段

注

此定义基于国际教育标准分类法 \[\_\],

机制 (mechanism)

达到某种结果的过程或技术

注 1

机制可以直接在内容中提供，或者可以[依赖](https://www.w3.org/TR/WCAG22/#dfn-relied-upon "the content would not conform if that technology is turned off or is not supported")由平台或由[用户代理](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents web content for users")（包括[辅助技术](https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies "hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents")）提供。

注 2

机制需要满足所声明符合性级别的所有成功准则。

文本的媒体替代 (media alternative for text)

所呈现的信息不超过文本中已呈现的信息（直接或通过文本替代）的媒体

注

为那些从文本的替代呈现中受益的人提供了文本的媒体替代。文本的媒体替代可以是仅音频、仅视频（包括手语视频）或音视频。

运动动画 (motion animation)

在状态之间添加过渡步骤，以创建运动的错觉或提供平滑过渡的感觉

最小包围盒 (minimum bounding box)

新

与水平轴对齐的最小包围矩形，形状的所有点都落在其中。对于在句子或[文本块](https://www.w3.org/TR/WCAG22/#dfn-blocks-of-text "more than one sentence of text")中换行到多行的组件（如超文本链接），包围盒基于该组件在单行上显示时的样式。

名称 (name)

软件据此向用户识别 Web 内容中组件的文本

注 1

名称可以是隐藏的，仅由辅助技术公开，而标签则是呈现给所有用户的。在许多（但并非所有）情况下，标签和名称是相同的。

在为前进焦点定义的顺序中导航（从一个元素到下一个元素）

使用[键盘接口](https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface "interface used by software to obtain keystroke input")在为前进焦点定义的顺序中进行导航

非文本内容 (non-text content)

any content that is not a sequence of characters that can be [programmatically determined](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities") or where the sequence is not expressing something in [human language](https://www.w3.org/TR/WCAG22/#dfn-human-language-s "language that is spoken, written or signed (through visual or tactile means) to communicate with humans")

注

这包括 [ASCII 艺术](https://www.w3.org/TR/WCAG22/#dfn-ascii-art "picture created by a spatial arrangement of characters or glyphs (typically from the 95 printable characters defined by ASCII)")（字符图案）、表情符号、黑客语（使用字符替换）以及代表文本的图像

规范性 (normative)

符合准则所必需的

注 1

人们可以以各种明确定义的方式来符合本文档。

注 2

标识为“ [资料性的](https://www.w3.org/TR/WCAG22/#dfn-informative "for information purposes and not required for conformance") ”或“非规范性”的内容，从来都不是[符合性](https://www.w3.org/TR/WCAG22/#dfn-conform "satisfying all the requirements of a given standard, guideline or specification")所要求的。

全屏窗口中 (on a full-screen window)

在视口最大化的最常见大小的台式机/笔记本显示器上

注

Since people generally keep their computers for several years, it is best not to rely on the latest desktop/laptop display resolutions but to consider the common desktop/laptop display resolutions over the course of several years when making this evaluation.

暂停 (paused)

由用户请求停止，且除非用户请求否则不恢复

周长 (perimeter)

新

构成形状边界的连续线（不包括共享像素），或[最小包围盒](https://www.w3.org/TR/WCAG22/#dfn-bounding-boxes "New")，以较短者为准。

文本块 (blocks of text)
指针输入 (pointer input)

来自能够针对屏幕上特定坐标（或一组坐标）的设备的输入，例如鼠标、笔或触摸接触点

注

请参阅 [指针事件定义中的“指针” (Pointer Events definition for 'pointer')](https://www.w3.org/TR/pointerevents/#dfn-pointer) \[\_\_\],

预录制的 (prerecorded)

并非[直播](https://www.w3.org/TR/WCAG22/#dfn-live "information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay")的信息

呈现 (presentation)

将[内容](https://www.w3.org/TR/WCAG22/#dfn-content "information and sensory experience to be communicated to the user by means of a user agent, including code or markup that defines the content's structure, presentation, and interactions")渲染为可由用户感知形式的过程

小学教育水平 (primary education level)

从五到七岁之间开始，持续六年的教育阶段，可能在开始前没有接受过任何教育

注

此定义基于国际教育标准分类法 \[\_\_\],

过程 (process)

一系列用户动作，其中为了完成某项活动，每个动作都是必需的

程序化确定 (也可作程序化确定的) (programmatically determined)

由软件从作者提供的数据中确定，其提供方式使包括[辅助技术](https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies "hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents")在内的不同[用户代理](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents web content for users")能以不同的感觉通道提取并呈现这些信息

程序化确定的链接上下文 (programmatically determined link context)

可以从与链接的[关系](https://www.w3.org/TR/WCAG22/#dfn-relationships "meaningful associations between distinct pieces of content")中[程序化确定](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities")的其他信息，与链接文本结合，并以不同的感觉通道呈现给用户

注

由于屏幕阅读器能够解释标点符号，因此当焦点位于句子中的某个链接时，它们也可以提供当前句子的上下文。

程序化设置 (programmatically set)

由软件使用[用户代理](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents web content for users")（包括[辅助技术](https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies "hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents")）支持的方法进行设置

pure decoration (纯粹的装饰)

仅具有美学目的，不提供任何信息，且没有任何功能

注

仅当在不改变其目的的情况下可以重新排列或替换词语时，文本才是纯粹装饰性的。

实时事件 (real-time event)

a) 与观看同时发生且 b) 不完全由内容生成的事件

区域 (region)

内容中可感知且[程序化确定](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities")的[小节](https://www.w3.org/TR/WCAG22/#dfn-section "a self-contained portion of written content that deals with one or more related topics or thoughts")

注

在 HTML 中，任何被指定为具有地标角色（landmark role）的区域都将是一个区域 (region)。

关系 (relationships)

不同内容块之间的有意义关联

相对亮度 (relative luminance)

色彩空间中任何一点的相对亮度，最暗的黑色归一化为 0，最亮的白色归一化为 1

注 1

对于 sRGB 色彩空间，色彩的相对亮度定义为 L = 0.2126 \* **R** + 0.7152 \* **G** + 0.0722 \* **B**，其中 **R**, **G** 和 **B** 定义为：

- 如果 RsRGB <= 0.04045，则 **R** = RsRGB/12.92，否则 **R** = ((RsRGB+0.055)/1.055) ^ 2.4
- 如果 GsRGB <= 0.04045，则 **G** = GsRGB/12.92，否则 **G** = ((GsRGB+0.055)/1.055) ^ 2.4
- 如果 BsRGB <= 0.04045，则 **B** = BsRGB/12.92，否则 **B** = ((BsRGB+0.055)/1.055) ^ 2.4

且 RsRGB, GsRGB, 和 BsRGB 定义为：

- RsRGB = R8bit/255
- GsRGB = G8bit/255
- BsRGB = B8bit/255

“^”字符是求幂运算符。 （公式取自 \[\_\],）

注 2

在 2021 年 5 月之前，定义中 0.04045 的值曾有所不同 (0.03928)。它取自较旧版本的规范并已更新。在本指南的背景下，它对计算没有实际影响。

注 3

今天几乎所有用于查看 Web 内容的系统都假定使用 sRGB 编码。除非已知将使用另一个色彩空间来处理和显示内容，否则作者应该使用 sRGB 色彩空间评估色彩。如果使用其他色彩空间，请参阅[理解成功准则 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)。

注 4

如果在交付内容后发生抖动（dithering），则使用源色彩值。对于在源头发生抖动的颜色，应使用抖动颜色的平均值（平均 R、平均 G 和平均 B）。

注 5

现有工具可以在测试对比度和闪烁时自动进行计算。

注 6

提供了一个[单独的页面，使用 MathML 给出相对亮度定义](https://www.w3.org/TR/WCAG22/relative-luminance.html)以显示公式。

所依赖的 (技术) (relied upon)

如果关闭或不支持该[技术](https://www.w3.org/TR/WCAG22/#dfn-technologies "mechanism for encoding instructions to be rendered, played or executed by user agents")，内容就无法[符合](https://www.w3.org/TR/WCAG22/#dfn-conform "satisfying all the requirements of a given standard, guideline or specification")准则

角色 (role)

text or number by which software can identify the function of a component within Web content

相同功能 (same functionality)

使用时产生相同的结果

相同的相对顺序 (same relative order)

相对于其他项的相同位置

注

即使从原始顺序中插入或删除了其他项，各项仍被视为处于相同的相对顺序。例如，展开导航菜单可能会插入额外级别的细节，或者可能会将二级导航部分插入到阅读顺序中。

满足成功准则 (satisfies a success criterion)

the success criterion does not evaluate to 'false' when applied to the page

小节 (section)

a self-contained portion of written content that deals with one or more related topics or thoughts

注

一个小节可以由一个或多个段落组成，并包括图形、表格、列表和子小节。

一套 Web 页面 (set of web pages)

共享共同目的且由同一作者、团队或组织创建的 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")合集

注

不同的语言版本将被视为不同的 Web 页面合集。

手语 (sign language)
使用手和手臂动作、面部表情或身体姿势的组合来传达意义的语言

手语翻译 (sign language interpretation)

将一种语言（通常是口头语言）翻译为[手语](https://www.w3.org/TR/WCAG22/#dfn-sign-language "a language using combinations of movements of the hands and arms, facial expressions, or body positions to convey meaning")

单指针 (single pointer)

一次仅针对页面/屏幕上单个点的输入模式——例如鼠标、触摸屏上的单指或触控笔。

注

单指针交互包括单击、双击、点按、拖拽运动和单指滑动操作。相比之下，多点交互涉及同时使用两个或多个指针，例如触摸屏上的双指交互，或同时使用鼠标和触控笔。

特定的感官体验 (specific sensory experience)

一种并非纯粹装饰性的，且主要不传递重要信息或执行功能的感官体验

状态 (state)

表达[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function")特征的动态属性，可能会响应用户动作或自动过程而发生变化

状态不影响组件的本质，但表示与该组件或用户交互可能性相关的数据。示例包括聚焦、悬停、选择、按下、勾选、已访问/未访问，以及展开/折叠。

状态消息 (status message)

并非[上下文改变](https://www.w3.org/TR/WCAG22/#dfn-change-of-context "major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously")的内容改变，它向用户提供有关操作成功或结果、应用程序的等待状态、过程的进度或错误存在的信息

结构 (structure)

- [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")的各部分相互关联的组织方式；以及
- 一组 [Web 页面](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent")的组织方式

样式属性 (style property)

其值决定了内容元素在被用户代理渲染时呈现方式（例如字体、色彩、大小、位置、填充、音量、合成语音语调）的属性

样式属性可以有几种来源：

- 用户代理默认样式：在没有任何作者或用户样式的情况下应用的默认样式属性值。一些 Web 内容技术指定了默认渲染，其他技术则没有；
- 作者样式：由作者作为内容一部分设置 of 样式属性值（例如行内样式、作者样式表）；
- 用户样式：由用户设置的样式属性值（例如通过用户代理界面设置、用户样式表）

补充内容 (supplemental content)

插图说明或澄清主要内容的附加[内容](https://www.w3.org/TR/WCAG22/#dfn-content "information and sensory experience to be communicated to the user by means of a user agent, including code or markup that defines the content's structure, presentation, and interactions")

同步媒体 (synchronized media)

与另一种呈现信息格式和/或与基于时间交互组件同步的[音频](https://www.w3.org/TR/WCAG22/#dfn-audio "the technology of sound reproduction") or [视频](https://www.w3.org/TR/WCAG22/#dfn-video "the technology of moving or sequenced pictures or images")，除非该媒体是清楚地标记为[文本的媒体替代](https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text "media that presents no more information than is already presented in text (directly or via text alternatives)")的媒体

目标 (target)

显示屏上将接受指针动作的区域，例如[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function")的交互区域

注

如果两个或多个目标重叠，则重叠区域不应包括在目标大小的测量中，但重叠目标执行相同动作或打开相同页面的情况除外。

技术 (Web 内容) (technology)

对用于由[用户代理](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents web content for users")渲染、播放或执行的指令进行编码的[机制](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result")

注 1

本指南中使用的“Web 技术”和“技术”（单独使用时）均指 Web 内容技术。

注 2

Web 内容技术可以包括标记语言、数据格式或编程语言，作者可以单独使用或结合使用它们来创建最终用户体验，从静态 Web 页面到同步媒体演示再到动态 Web 应用程序。

文本 (text)

可以程序化确定的字符序列，该序列是用[人类语言](https://www.w3.org/TR/WCAG22/#dfn-human-language-s "language that is spoken, written or signed (through visual or tactile means) to communicate with humans")表达某些事物

文本替代 (text alternative)

与[非文本内容](https://www.w3.org/TR/WCAG22/#dfn-non-text-content "any content that is not a sequence of characters that can be programmatically determined or where the sequence is not expressing something in human language")进行程序化关联的文本，或者在与非文本内容程序化关联的文本中所引用的文本。程序化关联的文本是指其位置可以从非文本内容中[程序化确定](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities")的文本。

注

有关更多信息，请参阅[理解文本替代](https://www.w3.org/WAI/WCAG21/Understanding/conformance#text-alternatives)。

上弹事件 (up-event)

当指针的触发刺激被释放时发生的平台事件

上弹事件在不同的平台上可能会有不同的名称，例如“touchend”或“mouseup”。

以非同寻常或有限制方式使用 (used in an unusual or restricted way)

以要求用户确切知道应该应用哪种定义才能正确理解内容的方式使用的词语

用户代理 (user agent)

任何为用户检索和呈现 Web 内容的软件

用户可控制的 (user-controllable)

旨在由用户访问的数据

注

这不涉及诸如互联网日志和搜索引擎监控数据之类的事物。

用户界面组件 (user interface component)

被用户感知为针对某一独立功能的单一控件的内容部分

注 1

多个用户界面组件可以被实现为单个程序化元素。这里的“组件”不与编程技术绑定，而是与用户感知为独立控件的内容绑定。

注 2

用户界面组件包括表单元素与链接以及由脚本生成的组件。

注 3

这里所说的“组件”或“用户界面组件”有时也被称为“用户界面元素”。

用户非活动 (user inactivity)

任何没有发生用户动作的连续时间段

跟踪方法将由网站或应用程序决定。

视频 (video)

运动或排序画面或图像的技术

注

视频可以由动画或摄影图像组成，或者两者结合。

仅视频 (video-only)

仅包含[视频](https://www.w3.org/TR/WCAG22/#dfn-video "the technology of moving or sequenced pictures or images")（无[音频](https://www.w3.org/TR/WCAG22/#dfn-audio "the technology of sound reproduction")且无交互）的基于时间的演示

视口 (viewport)

[用户代理](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents web content for users")在其中呈现内容的窗口或对象

注 1

用户代理通过一个或多个视口呈现内容。视口包括窗口、框架（frames）、扬声器和虚拟放大镜。视口可以包含另一个视口（例如嵌套框架）。由用户代理创建的界面组件（如提示、菜单和警告）不是视口。

注 2

此定义基于[用户代理可访问性指南 1.0 词汇表 (User Agent Accessibility Guidelines 1.0 Glossary)](https://www.w3.org/TR/WAI-USERAGENT/glossary.html) \[\_\_\],
在视觉上定制 (visually customized)

可以设置字体、大小、色彩和背景

Web 页面 (web page)

使用 HTTP 从单个 URI 获得的一个 non-embedded 资源，以及由用户代理在其渲染中使用的，或旨在与其一起渲染的任何其他资源

注 1

虽然任何“其他资源”都会与主要资源一起被渲染，但它们不一定会同时彼此被渲染。

注 2

为了符合本指南，在符合性范围内，一个资源必须是“非嵌套的”才能被视为 Web 页面。

本节包含常见的[用户界面组件](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function")输入目的列表。以下术语并不是必须使用的关键字，而是代表必须在网页采用的分类法中捕获的目的。在适用的情况下，作者使用所选的分类法来标记控件，以表明其语义目的。这为主流用户代理和辅助技术应用个性化呈现提供了可能性，从而使更多的人能够理解和使用这些内容。

注

输入类型目的列表是基于 [HTML 规范的自动填充 (Autofill) 部分](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill)中定义的控件目的，但必须理解的是，不同的技术在其规范中定义的概念可能会有部分或全部相同，且仅映射到以下含义的概念才是必须的。

以下输入控件目的是为了与内容的用户相关，且仅适用于与该个人相关的信息。

- `name` - 全名
- `honorific-prefix` - 尊称前缀或头衔 (例如 "Mr.", "Ms.", "Dr.", "M<sup>lle</sup>")
- `given-name` - 名字 (在一些西方文化中，也被称为 *first name*)
- `additional-name` - 附加名 (在一些西方文化中，也被称为 *middle names*，除了第一个名字之外的其他名字)
- `family-name` - 姓氏 (在一些西方文化中，也被称为 *last name* 或 *surname*)
- `honorific-suffix` - 尊称后缀 (例如 "Jr.", "B.Sc.", "MBASW", "II")
- `nickname` - 昵称、网名、账号：用于替代全名的通常较短的名字
- `organization-title` - 职位头衔 (例如 "Software Engineer", "Senior Vice President", "Deputy Managing Director")
- `username` - 用户名
- `new-password` - 新密码 (例如 在创建帐户或更改密码时)
- `current-password` - 由 `username` 字段标识的帐户的当前密码 (例如 在登录时)
- `organization` - 与此字段关联的其他字段中的人名、地址或联系信息相对应的公司名称
- `street-address` - 街道地址 (多行，保留换行符)
- `address-line1` - 街道地址 (每个字段一行，第 1 行)
- `address-line2` - 街道地址 (每个字段一行，第 2 行)
- `address-line3` - 街道地址 (每个字段一行，第 3 行)
- `address-level4` - 最细粒度的行政级别（在具有四个行政级别的地址中）
- `address-level3` - 第三行政级别（在具有三个或更多行政级别的地址中）
- `address-level2` - 第二行政级别（在具有两个或更多行政级别的地址中）；在具有两个行政级别的国家中，这通常是找到相关街道地址的城市、城镇、村庄或其他地点
- `address-level1` - 地址中范围最广的行政级别，即找到该地点的省/州/郡；例如，在美国，这将是州；在瑞士，它是州 (canton)；在英国，是邮政镇 (post town)
- `country` - 国家代码
- `country-name` - 国家名称
- `postal-code` - 邮政编码、邮区编号、ZIP 码、CEDEX 码（如果是 CEDEX，请将 "CEDEX" 以及相关的分区 *arrondissement* 附加到 `address-level2` 字段）
- `cc-name` - 支付凭证上给出的全名
- `cc-given-name` - 支付凭证上给出的名字 (在一些西方文化中，也被称为 *first name*)
- `cc-additional-name` - 支付凭证上给出的附加名 (在一些西方文化中，也被称为 *middle names*，除了第一个名字之外的其他名字)
- `cc-family-name` - 支付凭证上给出的姓氏 (在一些西方文化中，也被称为 *last name* 或 *surname*)
- `cc-number` - 信用卡号 (例如)
- `cc-exp` - 支付凭证的到期日期
- `cc-exp-month` - 支付凭证到期日期的月份组件
- `cc-exp-year` - 支付凭证到期日期的年份组件
- `cc-csc` - 支付凭证的安全码 (也被称为卡安全码 (CSC), 卡验证码 (CVC), 卡验证值 (CVV), 签名板代码 (SPC), 信用卡 ID (CCID) 等)
- `cc-type` - 支付凭证的类型
- `transaction-currency` - 用户希望交易使用的首选货币
- `transaction-amount` - 用户希望交易的金额 (例如 在输入出价或销售价格时)
- `language` - 首选语言
- `bday` - 生日
- `bday-day` - 生日的日期组件
- `bday-month` - 生日的月份组件
- `bday-year` - 生日的年份组件
- `sex` - 性别认同 (例如 Female, Fa’afafine)
- `url` - 与此字段关联的其他字段中的公司、个人、地址或联系信息相对应的个人主页或其他网页
- `photo` - 与此字段关联的其他字段中的公司、个人、地址或联系信息相对应的照片、图标或其他图像
- `tel` - 完整的电话号码，包括国家代码
- `tel-country-code` - 电话号码的国家代码组件
- `tel-national` - 不含国家代码的电话号码组件，如适用则添加了国内前缀
- `tel-area-code` - 电话号码的区号组件，如适用则添加了国内前缀
- `tel-local` - 不含国家代码和区号的电话号码组件
- `tel-local-prefix` - 电话号码紧跟在区号之后的组件的第一部分（当该组件被拆分为两个组件时）
- `tel-local-suffix` - 电话号码紧跟在区号之后的组件的第二部分（当该组件被拆分为两个组件时）
- `tel-extension` - 电话号码分机号
- `email` - 电子邮件地址
- `impp` - 表示即时消息协议终结点的 URL（例如 " `aim:goim?screenname=example` " or " `xmpp:fred@example.net` "）
