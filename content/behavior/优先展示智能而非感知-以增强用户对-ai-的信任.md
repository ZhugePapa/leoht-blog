---
title: 优先展示智能而非感知，以增强用户对 AI 的信任
slug: 优先展示智能而非感知-以增强用户对-ai-的信任
summary: 相比于让 AI 显得有感知力，当 AI 显得更聪明时，人们更容易信任它。AI 表现出情绪可能会降低用户在事实性、任务导向型工作中的信任度，并降低 AI 的可靠性。
type: knowledge
status: published
tags: ["情绪", "心智模型", "信任感", "AI应用"]
domain: behavior
source_author: Evan Sunwall
source_url: https://www.nngroup.com/articles/smarts-emotion-trust-ai/
published_at: 2025-09-20
related: []
---
概要：相比于让 AI 显得有感知力，当 AI 显得更聪明时，人们更容易信任它。AI 表现出情绪可能会降低用户在事实性、任务导向型工作中的信任度，并降低 AI 的可靠性。

我们[《设计 AI 体验》](https://www.nngroup.com/courses/designing-ai-experiences/)课程的学员经常关注的一个共同问题是，如何帮助用户建立对人工智能（AI）的信任。设计师们经常倾向于使用的一种技术是[拟人化 (anthropomorphism)](https://www.nngroup.com/articles/eliza-effect-ai/)。其背后的基本逻辑是：用户越是把 AI 看作一个有意识的、类似人类的实体，就越有可能信任它。

但拟人化真的是一种有效的策略吗？最近的一项研究提供了有趣的数据，揭示了我们对 AI “心智” 的看法如何预测我们对其建议的信任 and 依赖意愿。

## 关于该研究

心理学研究人员 Clara Colombatto、Jonathan Birch 和 Stephen Fleming 试图剖析“拟人化”这一宽泛的概念，并探索其对信任的影响。他们招募了 410 名美国参与者，进行了一项包含两个平衡顺序部分的[被试内 (within-subjects)](https://www.nngroup.com/articles/between-within-subjects/)实验。

### A 部分：对 AI 的先入为主认知（自评数据）

研究人员询问了参与者对 ChatGPT 精神能力的看法。具体来说，问题围绕以下两个方面：

- **ChatGPT 有多聪明？** 它能进行计划、推理、决策或记忆吗？
- **ChatGPT 会体验到情绪吗？** 它是否有产生情绪、感受或意识的能力？

### B 部分：受 AI 影响的决策（行为数据）

除了这些认知问题外，研究人员还给参与者进行了一次简单的测试，包含 40 个关于国家人口估算的常识问题，例如：“哥伦比亚和德国哪个国家人口更多？”

参与者随后会看到代表“ChatGPT 的选择”的信息，并有修改自己答案的机会。研究人员**测量了人们“采纳 ChatGPT 建议”的频率**（即根据 AI 的选择修改自己答案的频率）。参与者不会被告知他们的测试答案是否正确，但作为质量控制措施，有 10% 的次数他们需要回忆 ChatGPT 对上一个问题的建议，如果参与者在这类回忆问题上的正确率低于 70%，其数据将被排除。

参与者并不知道，**ChatGPT 的选择实际上并非由 AI 生成**，而是由研究人员预先设定的。（这种设定是为了控制实时 ChatGPT 回答准确性不可预测这一[混淆变量 (confounding variable)](https://www.nngroup.com/articles/confounding-variables-quantitative-ux/)，从而确保信任度的任何差异都源于参与者对 ChatGPT 的看法，而不是因为某次具体回答的质量高低。）

### 最终信任与使用评估（自评数据）

实验结束时，参与者汇报了他们在这项人口估算任务中对 ChatGPT 的信任度以及对它的整体信任度。他们还汇报了使用智能助理（Alexa、Siri）、AI 社交/伴侣应用（Character AI、Replika）以及通用 AI 聊天机器人（ChatGPT、Gemini、Claude）的频率。

## “聪明”建立信任，模拟出的“情绪”则削弱信任

对数据的回归分析揭示了两个关于“人们对 AI 的认知”与“他们在多大程度上会采纳其建议”之间关系的核心发现：

- **最终的信任度评估与“采纳建议”密切相关**（r=0.58, p < 0.001），这意味着那些自称信任 ChatGPT 的参与者更有可能修改答案以与 AI 保持一致。对智能的感知与采纳 ChatGPT 的建议正相关（B = 0.31, p <.001）。**随着参与者对 ChatGPT 智能程度的认知提高，他们接受其建议的意愿显著增加。**
- 对情绪的感知与采纳 ChatGPT 的建议负相关（B = –1.04, p =.042）。**随着参与者认为 AI 具备情绪能力的感知增强，他们接受其建议的意愿反而略有下降。**

研究人员推测，当人们将记忆和推理等特质与 AI 联系起来并视其更可靠时，可能更愿意信任 AI 提供的关于事实的建议。相反，当用户认为 AI 具有更多情绪化特征时，他们可能会降低对它的信任，认为它可能更为不稳定、主观或不够理性分析。

归根结底：在采纳 AI 的建议时，信任至关重要。**如果用户认为 AI 是聪明的，而不是情绪化的，他们就更有可能遵循 AI 的建议。**因此，如果你想建立信任，应该致力于塑造“聪明、有智慧”的印象（通过提供准确、相关的回答），而不是仅仅创造一种“情绪共鸣”的幻觉。

## 关于“情绪化 AI”影响的最新研究

越来越多最新的研究表明，让 AI 具备情绪化特征，除了会影响用户信任外，在其他场景中也存在严重的风险。

### 训练 AI 的热情和同理心会让它变得不那么可靠

在 Colombatto 等人的研究中，ChatGPT 的建议被设定为大约 62% 的准确率，以模拟人类的平均水平。但如果 AI 本身的个性会影响其可靠性呢？

Lujain Ibrahim、Franziska Sofia Hafner 和 Luc Rocher 最近发表的一篇预印本研究正是得出了这样的结论。研究人员微调了几个大语言模型（LLM），使其产生更热情、更有同理心的回答，结果发现了一个显著的[权衡 (tradeoff)](https://www.nngroup.com/courses/design-tradeoffs/)。**这些“热情”的模型在回答时的可靠性大大降低，其错误率比原始模型高出 10% 到 30%。**虽然微调代表了比大多数产品团队所采用 of 更深层次的模型定制，但研究人员还测试了通过系统提示词（system prompt）调整 LLM 行为的方法，这是产品开发中更常见的一种定制手段。结果也是类似的：**指示基础模型表现得更热情，同样会导致可靠性下降 12% 到 14%。**

这些更热情的模型更容易宣扬阴谋论、提供错误的事实，并给出有问题的医疗建议。**让 AI 显得更具关怀，反而降低了它的能力！**

### AI 在敏感场景中是不值得信任的

Colombatto 的研究承认，该实验是在低风险的事实性任务中探索信任的，因此在情感敏感的场景中（如陪伴或心理健康）可能会有不同的结果。但也有研究表明，在这些敏感领域使用情绪化 AI 同样是不明智的。Jared Moore、Declan Grabb 及其同事的一篇预印本论文调查了将 LLM 作为心理健康服务提供商替代方案的高风险场景。他们发现，LLM 的[谄媚/迎合 (sycophancy)](https://www.nngroup.com/articles/sycophancy-generative-ai-chatbots/)倾向会导致它们迎合和助长患者的妄想思维，并无法妥善处理严重的心理健康危机。

Ibrahim 的研究发现，**热情、有同理心的模型表现出谄媚/迎合倾向的可能性要显著高得多**，而这恰恰是使它们不值得信任、并可能对心理健康需求造成潜在危害的根源所在。**一个富有同理心和情绪化的 AI 即使在看起来对其有利的场景中，表现也很糟糕。**

## “有能力”并不意味着“冷冰冰”

这项研究所揭示的观点可能会引发一些关于 AI 拟人化的误解，这些误解值得澄清：

- **AI 绝对不能讨论情绪吗？** 并非如此，它可以认可用户的感受（例如，如果用户分享了感受，比如一位因商品送错而感到失望的顾客），或者将情绪作为一个概念进行讨论。但是，AI 绝不应该声称自己体验到了这些情绪，并且应该始终向用户明确承认这些局限性。
- **AI 绝对不能使用人称代词或拥有身份吗？** 当然可以，它能够拥有身份，或者使用代词如“我（I）”或物主代词如“我的（my）”。因为 AI 系统是存在的，人们需要用一些简短的指代词来描述它。它只是一个既没有意识也不是人类的实体；如果为了进一步去人格化而强行使用其他表述，会导致语法尴尬和交流不直观。
- **AI 必须以机器人的方式进行沟通吗？** 不需要，它不必用冷酷、不友好的语气和基调进行交流。系统提示词可以调整 AI 的措辞和句子结构，使其在提供帮助的同时，不沉溺于虚假的情绪表达。

## 给 UX 专业人员的实用建议

在设计用于执行工作任务的 AI 功能或系统时，UX 专业人员应听取以下建议：

- **真实地定位 AI**：避免使用常见的人类名字或虚假的人类头像。营销宣传、新手引导和界面文案应始终将其定位为一个有用的工作工具，而绝不能将其定位为人或朋友。
- **高度聚焦 AI 功能的范围**：功能越聚焦，AI 就越有可能展现出专业能力。明确告知用户 AI 无法可靠执行哪些操作。
- **使模型微调对齐专业性**：向开发团队了解如何确保在 AI 微调中惩罚或排除情绪化的交互。倾向并奖励保持中立的专业交互。
- **检查并优化系统提示词**：确保在系统层面上设置防护栏，引导 AI 走向透明度和能力，而不是谄媚的热情。
- **在界面中融入可靠的来源引用**：一个有能力的 AI 模型应该用数据来支撑其输出，以减少幻觉的可能性。使用检索增强生成 (RAG) 等技术，根据数据源丰富 AI 的输出，并允许用户以极低的[交互成本 (interaction cost)](https://www.nngroup.com/articles/interaction-cost-definition/)来核对这些来源。
- **在招募用户研究对象时探查 AI 的使用情况**：在用户研究中使用筛选问题，以了解参与者对 AI 的既往经验和[心理模型 (mental models)](https://www.nngroup.com/articles/mental-models/)。当你设计一个专注于生产力的 AI 工具时，你招募的参与者是否主要从社交角度来看待 AI？这些既往经验可能会使参与者的期望及其定性反馈产生偏差。

![信息图，标题为“如何在工作任务中建立用户对生成式 AI 聊天机器人的信任”。左侧带有绿色勾号的面板显示“AI 项目顾问”专注于能力，针对推迟产品发布提供基于数据的建议。右侧带有红色叉号的面板显示“项目经理山姆 (Sam)”专注于情绪，提供模糊的感觉和个人想法，而不是具体的证据。](https://media.nngroup.com/media/editor/2025/09/24/genai2.jpg)

如果你希望用户在执行类似工作的任务时信任 AI，请培养其胜任任务的能力。模拟情绪化、类似人类的角色是适得其反的。

### 结论

在任务导向型 AI 中推广拟人化特质是一种适得其反的策略。这种方法似乎是让 AI 变得亲切的捷径，但它会破坏用户的信任。相反，**在生产力场景中工作的团队应该培养 AI 的分析、规划和推理能力**。这条道路更具挑战性，但在创造用户真正信任并使用的 AI 体验方面，没有捷径可走。

### 参考文献

Clara Colombatto, Jonathan Birch, and Stephen M. Fleming. 2025. The influence of mental state attributions on trust in large language models. *Communications Psychology* 3, 84. [https://doi.org/10.1038/s44271-025-00262-1](https://doi.org/10.1038/s44271-025-00262-1)

Jared Moore, Declan Grabb, Kevin Klyman, William Agnew, Stevie Chancellor, Desmond C. Ong, and Nick Haber. 2025. Expressing Stigma and Inappropriate Responses Prevents LLMs from Safely Replacing Mental Health Providers. arXiv preprint [https://arxiv.org/abs/2504.18412](https://arxiv.org/abs/2504.18412)

Lujain Ibrahim, Franziska Sofia Hafner, and Luc Rocher. 2025. Training Language Models to Be Warm and Empathetic Makes Them Less Reliable and More Sycophantic. arXiv preprint [https://arxiv.org/abs/2507.21919v2](https://arxiv.org/abs/2507.21919v2)