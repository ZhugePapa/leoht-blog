---
title: WCAG 合规性
slug: wcag-合规性
summary: WCAG 合规性可确保所有用户都能无障碍访问网站，在降低法律风险的同时促进包容性并提升用户体验。
type: knowledge
status: published
tags: ["可访问性", "可用性", "设计指南", "Web端"]
domain: ux
source_author: Mariana Ontañón
source_url: https://thedecisionlab.com/reference-guide/design/wcag-compliance
published_at: 2024-03-02
related: []
---
## 基本概念

吉姆（Jim）和他的团队花了几个月时间设计了一个新网站。他们倾注了所有的创意和技术力量，力求让网站视觉效果精美、导航顺畅且蓄势待发。团队相信他们已经考虑到了方方面面——从用户参与度到简单的导航设计。

然而，就在上线前夕，吉姆意识到他的妹妹珍妮（Jane）无法使用这个网站。珍妮有视觉障碍，需要依赖屏幕阅读器。吉姆的团队在设计中无意间忽略了一个关键维度：针对残障人士的可访问性（无障碍设计）。

在意识到错误后，团队为图片添加了替代文本（alt 属性）、为音频内容提供了完整文本转写，并为视频资料提供了实时字幕。他们还确保了对于因身体障碍而无法使用鼠标或触控板的用户，网站可以仅通过键盘进行导航；此外，他们还优化了 HTML 结构，以便屏幕阅读器等工具能够正确解析网站内容。  

为了防止像吉姆这样的设计师无意中遗漏这一环节，万维网联盟（W3C）制定了**《网页内容无障碍指南》（Web Content Accessibility Guidelines，简称 WCAG）**。这些举世公认的指南涵盖了视觉、听觉、感官、言语、身体、认知、语言、学习和神经系统等方面的障碍。<sup>1</sup> 它们也已被纳入地方和国家立法，例如美国的《美国残疾人法案》（*Americans with Disabilities Act*）和加拿大的《安大略省残障人士无障碍法案》（*Accessibility for Ontarians with Disabilities Act*）。<sup>2</sup>

WCAG 合规不仅仅是为了规避法律风险。它能确保包容性，让每个人都能获取、理解网页内容并与之交互。符合 WCAG 标准同样能够让你的产品和公司受益，因为它扩大了目标受众群体，并提升了网站的用户体验。  

### WCAG 原则

WCAG 标准通过四大核心原则来确保网页的无障碍性：<sup>3</sup>

- **可感知性（Perceivable）：** 信息的呈现不能要求必须使用所有感官才能理解。为了实现这一点，一些行之有效的方法包括为音频提供字幕、为视频提供描述、保证合适的颜色对比度，以及在不破坏内容或功能的前提下允许缩放文本。
- **可操作性（Operable）：** 网站必须是每个人都可以导航和使用的。例如，应该确保仅使用键盘即可导航、使用合理的页面标题，并使超链接仅通过文本本身就能清晰表达其意图。
- **易理解性（Understandable）：** 网站的用途应该易于理解。这意味着要确保网站标明其所使用的语言、为需要输入信息的地方提供标签，并保持网站在各个页面之间的导航方式一致。
- **兼容性（Robust）：** 网站内容应当能够在各种电子设备（包括屏幕阅读器）上正常访问。为了做到这一点，设计师可以规范地组织网站结构，以便辅助技术能够识别所有内容。

遵循这四大原则可以让各种残障人士都能无障碍地使用网站，确保他们在数字世界中享有充分且平等的参与权。

“

> 网页无障碍不仅是为残疾人服务的，也是为我们所有人服务的，我们应该庆幸在发挥自身能力时没有遇到任何障碍。
> 
>   
> 
> —— 伦贝托·埃斯波萨（Remberto Esposa Jr.），菲律宾网页无障碍组织（Philippine Web Accessibility Group）首任会长。<sup>4</sup>

## 核心术语

**万维网联盟 (W3C):** 一个多学科的国际组织，其目标是开发互联网的长期全球标准。

**网页无障碍倡议 (WAI):** 由 W3C 创建的倡议，旨在让残障人士能够更轻松地使用互联网。

**残障人士:** 身体、精神、智力或感官有长期受损的个体。这些障碍会使他们更难参与社会，特别是在遇到阻碍时。<sup>5<sup>

**WCAG 2.2:** 2023 年 10 月发布的最新版本指南。它旨在进一步提高网页可访问性，特别是针对患有认知和学习障碍、低视力的用户，以及在使用移动设备时面临特定挑战的用户。<sup>6</sup>

**WCAG 一致性级别:** 这些级别概述了网站的无障碍程度，分为三个逐级递进的级别：A、AA 和 AAA。每个级别都围绕可测试的成功标准设计，允许进行自动和人工评估以确保合规性。以下细分基于 2.2 版本。<sup>3,6</sup>

- **A 级：最低或最基本的一致性级别。** 这包括确保帮助信息（如联系方式和聊天服务）在页面之间保持一致的摆放位置，并避免要求用户重新输入他们已经提供过的信息。
- **AA 级：中等一致性级别。** 这包括确保交互式元素清晰可见且易于交互，以及提供拖拽操作的替代方案并简化身份验证过程。
- **AAA 级：最高一致性级别。** 这包括诸如进一步增强聚焦元素的可见性，以及提供尽可能简便的身份验证体验等标准。
- **超文本标记语言 (HTML):** 互联网的基本构建块。它最初由万维网的发明者蒂姆·伯纳斯-李爵士（Sir Tim Berners-Lee）编写。本质上，HTML 告诉计算机如何在网站上排列文本、图像和其他内容，以便用户能够以有序且直观的方式与所有元素进行交互。<sup>7</sup>
- **仅键盘导航:** 这种无障碍工具可以帮助那些发现使用鼠标或触控板很困难的人导航网站。例如，如果你按下键盘上的 Tab 键，就可以移动到下一个交互式元素。

## 历史沿革

W3C 于 1994 年由两位计算机科学家创立：蒂姆·伯纳斯-李爵士（Sir Tim Berners-Lee）和杰弗里·贾菲（Jeffrey Jaffe）。其宗旨是成为互联网的主要国际标准组织。三年后，在白宫的支持下，网页无障碍倡议（WAI）正式推出。它的首要目标是让所有人（包括残障人士）都能访问互联网，这也正是创建 WCAG 的灵感源泉。<sup>7</sup>

WCAG 1.0 于 1999 年 5 月发布。该指南被组织为 14 项原则，每项原则描述了网页内容无障碍性的特定部分。考虑到技术进步以及对无障碍设计更深入的理解需要进行更新，WCAG 2.0 于 2008 年 12 月发布。

在 2.0 版本中，W3C 进行了更广泛的延伸，因为 1.0 版本包含了相当具体的 HTML 技术。此外，2.0 版本基于四大原则组织其章节：可感知性、可操作性、易理解性和兼容性。这一更新使其作为网页无障碍国际标准的地位进一步提升。WCAG 的发展并未止步于此。目前的 2.2 版本于 2023 年 10 月发布，并且有计划在不久的将来发布 3.0 版本。<sup>7</sup>

WCAG 对互联网产生了重大影响，它引导开发者、设计师和内容创作者使他们的工作对每个人都无障碍，无论其能力如何。世界各地的政府和组织已将 WCAG 作为其无障碍标准的基础，使遵守这些指南在许多司法管辖区成为一项法律要求。这种广泛的采纳强调了网页无障碍的重要性以及 WCAG 在构建更具包容性的网络环境中所扮演的角色。

## 影响与收益

以下是您和您的企业通过遵守 WCAG 可以获得的一些积极成效。

- **提升可访问性：** 这可能是最显著的成果，也是最初创建 WCAG 的原因。网站和应用程序绝不应该为残障人士或任何其他人设置障碍。通过遵循 WCAG 指南，企业可以促进包容性，并为所有用户提供公平的内容获取途径。
- **改善用户体验：** 通常情况下，遵守 WCAG 可以改善所有人的网站导航和可读性，无论其能力如何。这些原则倡导清晰、组织良好的设计，这对所有人都有益，并能带来更令人满意和更具吸引力的用户体验。
- **法律保障：** 如前所述，若干国家已采纳了网页内容可访问性法律，而 WCAG 是衡量合规与否的标准。组织可以通过遵循这些指南来规避法律诉讼和处罚。
- **树立良好品牌形象：** 将无障碍性放在首位的企业展示了其包容性和社会责任感，这可以对他们的声誉和品牌形象产生积极影响。对无障碍设计的承诺能够带来更高的消费者忠诚度，进而吸引更广泛的受众，包括残障人士及其支持者。
- **SEO 益处：** 搜索引擎优化（SEO）目前是企业触达目标受众的最重要工具之一。SEO 是指让您的网站对谷歌等搜索引擎更加可见和更具吸引力的实践。遵守 WCAG 可以优化您的 SEO，因为替代文本（alt text）和文字转写（transcripts）等策略可以帮助搜索引擎全面理解您的网站，从而将其推荐给可能对您的产品或服务感兴趣的用户。

## 争议与挑战

尽管 WCAG 合规性的重要性显而易见，但其落地实施也面临着一些挑战。调整内容以符合 WCAG 标准需要耗费时间和资金——对于那些拥有复杂且大量内容的人来说尤其如此。这对于预算有限或缺乏专业技术知识的小型企业来说可能是一个障碍。甚至仅仅是阅读完所有的指南并完全理解它们，都会产生不小的阻碍。虽然道德和社会责任是明确的，但正是资源的缺乏使得合规变得极具挑战性。

此外，现代技术的发展和潮流可能比 WCAG 的更新速度更快。在新推出的创新网页功能发布与为其创建并实施相应的无障碍标准之间存在滞后，导致这些功能缺乏指南指导。同样，一个网站可能符合 WCAG 标准，但对某些消费者（包括残障人士）而言，其用户体验仍然很差。也有人可能会认为，这些指南过于死板，没有考虑到所有的障碍类型、组合形式以及严重程度。<sup>8</sup>

尽管跟上技术步伐并完全达到 WCAG 标准可能具有挑战性，特别是对于小型和初创企业而言，但这些指南仍然能够激励我们去构建一个更具包容性的数字世界。WCAG 合规应当帮助我们走向一个所有人都能无障碍使用的互联网，表明包容性不仅仅是一项法律义务。

## 案例研究：每个人都应该能点比萨

2016 年，患有视觉障碍的美国人吉列尔莫·罗伯斯（Guillermo Robles）起诉达美乐比萨（Domino’s Pizza），指控其未使网站和移动应用程序对残障人士无障碍开放，从而违反了《美国残疾人法案》（ADA）——特别是基于 WCAG 的相关条款。这起诉讼明确指出了可访问性障碍，例如图形缺乏替代文本（alt text）、有些词语没有可识别的文本以判断其为超链接，以及指向相同 URL 地址的冗余链接。<sup>9</sup>

地方法院驳回了该诉讼，但罗伯斯继续上诉至第九巡回上诉法院，该法院确认达美乐比萨确实违反了 ADA 规定。2022 年 6 月，达美乐比萨最终与罗伯斯达成和解。<sup>9</sup>

这场诉讼带来的启示是，不遵守 ADA 或 WCAG 对企业发展非常不利。达美乐不仅花费了数百万美元打官司，还损害了其品牌形象，因为现在他们面临着被视为对残疾人需求漠不关心甚至抵制的公司的风险。如果达美乐当时立即修改其网站 and 应用程序，或许就能减少经济和声誉上的损失。<sup>9</sup> （注：刚才写了“修改其网站 and 应用程序”，应当更正为“修改其网站和应用程序”。）

除了法律上的惩处，该案例还为各个机构敲响了警钟，让他们意识到数字无障碍的重要性。它强调了无障碍设计和 WCAG 合规不应仅仅被视为一项硬性要求，而应被视为客户服务基本框架的一部分。

## 相关 TDL 内容

[多元、公平与包容 (DEI)](https://thedecisionlab.com/reference-guide/organizational-behavior/diversity-equity-and-inclusion-dei)

本文涵盖了旨在促进更具包容性和公平性环境的三个关键概念：多元（diversity）、公平（equity）和包容（inclusion）。它剖析了每个部分的细微差别，例如多元化侧重于不同身份和观点的丰富性，公平性侧重于机会获取的公平与正义，而包容性的目标是创造让每个人都感到被珍视和被倾听的空间。

## 参考文献

1. BrowserStack. (n.d.). What is WCAG Compliance? 于 2024 年 2 月 26 日检索自 [https://www.browserstack.com/accessibility-testing/compliance/what-is-wcag-compliance](https://www.browserstack.com/accessibility-testing/compliance/what-is-wcag-compliance)
2. WCAG. (n.d.). Legal. 于 2024 年 2 月 26 日检索自 [https://wcag.com/legal/](https://wcag.com/legal/)
3. WCAG. (n.d.). What is WCAG? 于 2024 年 2 月 26 日检索自 [https://wcag.com/resource/what-is-wcag/](https://wcag.com/resource/what-is-wcag/)
4. Medium. (2023, August 16). Checklist to make the Angular application accessible: Part 2. 于 2024 年 2 月 26 日检索自 [https://medium.com/globant/checklist-to-make-the-angular-application-accessible-part-2-d93094d27737](https://medium.com/globant/checklist-to-make-the-angular-application-accessible-part-2-d93094d27737)
5. United Nations. (n.d.). Convention on the Rights of Persons with Disabilities - Article 1: Purpose. 于 2024 年 2 月 26 日检索自 [https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities/article-1-purpose.html](https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities/article-1-purpose.html)
6. W3C. (2023, October 5). Web Content Accessibility Guidelines (WCAG) 2.2. 于 2024 年 2 月 26 日检索自 [https://www.w3.org/TR/2023/REC-WCAG22-20231005/#new-features-in-wcag-2-2](https://www.w3.org/TR/2023/REC-WCAG22-20231005/#new-features-in-wcag-2-2)
7. W3C. (n.d.). W3C History. 于 2024 年 2 月 26 日检索自 [https://www.w3.org/about/history/](https://www.w3.org/about/history/)
8. ADA Site Compliance. (n.d.). Top 10 Things to Know About WCAG 2.2. 于 2024 年 2 月 26 日检索自 [https://adasitecompliance.com/top-10-things-know-about-wcag-22/](https://adasitecompliance.com/top-10-things-know-about-wcag-22/)
9. Bureau of Internet Accessibility. (n.d.). The Robles v. Domino's Settlement and Why It Matters. 于 2024 年 2 月 26 日检索自 [https://www.boia.org/blog/the-robles-v.-dominos-settlement-and-why-it-matters](https://www.boia.org/blog/the-robles-v.-dominos-settlement-and-why-it-matters)