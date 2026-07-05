---
title: 如何符合 WCAG（快速参考指南）
slug: 如何符合-wcag-快速参考指南
summary: ""
type: article
status: published
tags: [体验设计, 交互设计, 可用性]
domain: ux
source_title: ""
source_author: ""
source_url: https://www.w3.org/WAI/WCAG22/quickref/
# published_at:
related: []
---

已选筛选条件：**WCAG 2.2：**所有成功准则和所有技术。

信息和用户界面组件必须以用户可以感知的方式呈现给他们。

所有呈现给用户的非文本内容都应有起到同等作用的替代文本，但下列情况除外。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G94：为非文本内容提供简短的替代文本，使其服务于相同目的并呈现与非文本内容相同的信息](https://www.w3.org/WAI/WCAG22/Techniques/general/G94)，使用下面列出的每个组中的一种技术

情境 A 的简短替代文本技术：

- [ARIA6：使用 aria-label 为对象提供标签](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6)
- [ARIA10：使用 aria-labelledby 为非文本内容提供替代文本](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA10)
- [G196：在一组图像中的某一项上使用替代文本，以描述该组中的所有项](https://www.w3.org/WAI/WCAG22/Techniques/general/G196)
- [H2：将指向同一资源的相邻图像和文本链接合并](https://www.w3.org/WAI/WCAG22/Techniques/html/H2)
- [H37：在 img 元素上使用 alt 属性](https://www.w3.org/WAI/WCAG22/Techniques/html/H37)
- [H53：使用 object 元素的 body 内容](https://www.w3.org/WAI/WCAG22/Techniques/html/H53)
- [H86：为表情符号、颜文字、ASCII 艺术和黑客语（leetspeak）提供替代文本](https://www.w3.org/WAI/WCAG22/Techniques/html/H86)
- [PDF1：在 PDF 文档中通过 Alt 项为图像应用替代文本](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF1)

- [G95：提供简短的替代文本以对非文本内容进行扼要说明](https://www.w3.org/WAI/WCAG22/Techniques/general/G95)，使用下面列出的每个组中的一种技术

情境 B 的简短替代文本技术：

- [ARIA6：使用 aria-label 为对象提供标签](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6)
- [ARIA10：使用 aria-labelledby 为非文本内容提供替代文本](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA10)
- [G196：在一组图像中的某一项上使用替代文本，以描述该组中的所有项](https://www.w3.org/WAI/WCAG22/Techniques/general/G196)
- [H2：将指向同一资源的相邻图像和文本链接合并](https://www.w3.org/WAI/WCAG22/Techniques/html/H2)
- [H37：在 img 元素上使用 alt 属性](https://www.w3.org/WAI/WCAG22/Techniques/html/H37)
- [H53：使用 object 元素的 body 内容](https://www.w3.org/WAI/WCAG22/Techniques/html/H53)
- [H86：为表情符号、颜文字、ASCII 艺术和黑客语（leetspeak）提供替代文本](https://www.w3.org/WAI/WCAG22/Techniques/html/H86)
- [PDF1：在 PDF 文档中通过 Alt 项为图像应用替代文本](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF1)

情境 B 的长替代文本技术：

- [ARIA15：使用 aria-describedby 提供图像说明](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA15)
- [G73：在紧邻非文本内容的位置提供指向其他位置的长说明链接](https://www.w3.org/WAI/WCAG22/Techniques/general/G73)
- [G74：在非文本内容附近的文本中提供长说明，并在简短说明中引用该长说明的位置](https://www.w3.org/WAI/WCAG22/Techniques/general/G74)
- [G92：为服务于相同目的并呈现相同信息的非文本内容提供长说明](https://www.w3.org/WAI/WCAG22/Techniques/general/G92)
- [H53：使用 object 元素的 body 内容](https://www.w3.org/WAI/WCAG22/Techniques/html/H53)

- [G82：提供能够识别非文本内容目的的替代文本](https://www.w3.org/WAI/WCAG22/Techniques/general/G82)，使用下面列出的每个组中的一种技术

情境 C 的控件和输入框替代文本技术：

- [ARIA6：使用 aria-label 为对象提供标签](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6)
- [ARIA9：使用 aria-labelledby 拼接多个文本节点的标签](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA9)
- [H24：为图像热区地图（image map）的 area 元素提供替代文本](https://www.w3.org/WAI/WCAG22/Techniques/html/H24)
- [H30：为 anchor（a）元素提供描述链接目的的链接文本](https://www.w3.org/WAI/WCAG22/Techniques/html/H30)
- [H36：在用作提交按钮的图像上使用 alt 属性](https://www.w3.org/WAI/WCAG22/Techniques/html/H36)
- [H44：使用 label 元素将文本标签与表单控件相关联](https://www.w3.org/WAI/WCAG22/Techniques/html/H44)
- [H65：当无法使用 label 元素时，使用 title 属性标识表单控件](https://www.w3.org/WAI/WCAG22/Techniques/html/H65)

- 提供描述性标签，使用下面列出的每个组中的一种技术
- [G68：提供简短的替代文本，描述仅限直播音频和仅限直播视频内容的目的](https://www.w3.org/WAI/WCAG22/Techniques/general/G68)，使用下面列出的每个组中的一种技术
- [G100：提供非文本内容所公认的名称或描述性名称作为简短替代文本](https://www.w3.org/WAI/WCAG22/Techniques/general/G100)，使用下面列出的每个组中的一种技术

情境 D 的简短替代文本技术：

- [ARIA6：使用 aria-label 为对象提供标签](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6)
- [ARIA10：使用 aria-labelledby 为非文本内容提供替代文本](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA10)
- [G196：在一组图像中的某一项上使用替代文本，以描述该组中的所有项](https://www.w3.org/WAI/WCAG22/Techniques/general/G196)
- [H2：将指向同一资源的相邻图像和文本链接合并](https://www.w3.org/WAI/WCAG22/Techniques/html/H2)
- [H37：在 img 元素上使用 alt 属性](https://www.w3.org/WAI/WCAG22/Techniques/html/H37)
- [H53：使用 object 元素的 body 内容](https://www.w3.org/WAI/WCAG22/Techniques/html/H53)
- [H86：为表情符号、颜文字、ASCII 艺术和黑客语（leetspeak）提供替代文本](https://www.w3.org/WAI/WCAG22/Techniques/html/H86)
- [PDF1：在 PDF 文档中通过 Alt 项为图像应用替代文本](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF1)

- [G143：提供描述 CAPTCHA（验证码）目的的替代文本](https://www.w3.org/WAI/WCAG22/Techniques/general/G143) **以及** [G144：确保网页包含另一个采用不同感官通道且服务于相同目的的 CAPTCHA](https://www.w3.org/WAI/WCAG22/Techniques/general/G144)

- 实现或标记非文本内容，以便辅助技术忽略它，使用下面列出的每个组中的一种技术

情境 F 中表示不需要替代文本的技术：

- [C9：使用 CSS 引入装饰性图像](https://www.w3.org/WAI/WCAG22/Techniques/css/C9)
- [H67：在 img 元素上使用空 alt 文本且不设置 title 属性，以便辅助技术忽略这些图像](https://www.w3.org/WAI/WCAG22/Techniques/html/H67)
- [PDF4：在 PDF 文档中通过 Artifact 标签隐藏装饰性图像](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF4)

- [F3：由于使用 CSS 引入传达重要信息的图像而导致成功准则 1.1.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F3)
- [F13：由于替代文本未包含图像中通过颜色差异传达的信息而导致成功准则 1.1.1 和 1.4.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F13)
- [F20：由于非文本内容发生变化时未更新替代文本而导致成功准则 1.1.1 和 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F20)
- [F30：由于使用非替代文本的文本（例如文件名或占位文本）作为替代文本而导致成功准则 1.1.1 和 1.2.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F30)
- [F38：由于未在 HTML 中对装饰性图像进行标记以便辅助技术忽略它们而导致成功准则 1.1.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F38)
- [F39：由于对辅助技术应当忽略的图像提供了非空替代文本（例如 alt="spacer" 或 alt="image"）而导致成功准则 1.1.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F39)
- [F65：由于在 img 元素、area 元素和 type="image" 的 input 元素上省略了 alt 属性或替代文本而导致成功准则 1.1.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F65)
- [F67：由于为非文本内容提供了未服务于相同目的或未呈现相同信息的长说明而导致成功准则 1.1.1 和 1.2.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F67)
- [F71：由于使用外观相似的文本字符来表示文本而未提供替代文本导致成功准则 1.1.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F71)
- [F72：由于使用 ASCII 艺术而未提供替代文本导致成功准则 1.1.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F72)

对于预录制的仅限音频和预录制的仅限视频媒体，以下情况属实，除非该音频或视频是文本的媒体替代且被清晰标记为替代：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G158：为仅音频内容的基于时间的媒体（时基媒体）提供替代方案](https://www.w3.org/WAI/WCAG22/Techniques/general/G158)

- [G159：为仅视频内容的基于时间的媒体提供替代方案](https://www.w3.org/WAI/WCAG22/Techniques/general/G159)
- [G166：提供描述重要视频内容的音频，并将其描述为音频说明](https://www.w3.org/WAI/WCAG22/Techniques/general/G166)

- [F30：由于使用非替代文本的文本（例如文件名或占位文本）作为替代文本而导致成功准则 1.1.1 和 1.2.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F30)
- [F67：由于为非文本内容提供了未服务于相同目的或未呈现相同信息的长说明而导致成功准则 1.1.1 和 1.2.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F67)

为多媒体（同步媒体）中的所有预录制音频内容提供字幕，除非该媒体是文本的媒体替代且被清晰标记为替代。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G93：提供开放字幕（始终可见）](https://www.w3.org/WAI/WCAG22/Techniques/general/G93)
- [G87：提供关闭式字幕](https://www.w3.org/WAI/WCAG22/Techniques/general/G87)，使用以下任意技术：
	- [SM11：在 SMIL 1.0 中通过同步文本流提供字幕](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM11)
	- [SM12：在 SMIL 2.0 中通过同步文本流提供字幕](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM12)
	- [H95：使用 track 元素提供字幕](https://www.w3.org/WAI/WCAG22/Techniques/html/H95)
	- 使用任何现成的、其视频播放器支持关闭式字幕的媒体格式

- [F8：由于字幕省略了部分对话或重要音效而导致成功准则 1.2.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F8)
- [F75：由于在同步媒体呈现的信息多于页面上呈现的信息时未提供字幕，导致成功准则 1.2.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F75)
- [F74：由于未将文本的同步媒体替代标记为替代，导致成功准则 1.2.2 和 1.2.8 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F74)

为多媒体提供基于时间的媒体替代方案或预录制视频内容的音频说明，除非该媒体是文本的媒体替代且被清晰标记为替代。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G69：提供基于时间的媒体替代方案](https://www.w3.org/WAI/WCAG22/Techniques/general/G69)，使用以下技术之一：
	- [G58：在紧邻非文本内容的位置放置指向基于时间的媒体替代方案的链接](https://www.w3.org/WAI/WCAG22/Techniques/general/G58)
- 链接到基于时间的媒体替代方案，使用以下技术之一：
	- [H53：使用 object 元素的 body 内容](https://www.w3.org/WAI/WCAG22/Techniques/html/H53)
- [G78：提供包含音频说明的、用户可选择的第二声道](https://www.w3.org/WAI/WCAG22/Techniques/general/G78)
- [G173：提供包含音频说明的电影版本](https://www.w3.org/WAI/WCAG22/Techniques/general/G173)，使用以下技术之一：
	- [SM6：在 SMIL 1.0 中提供音频说明](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM6)
	- [SM7：在 SMIL 2.0 中提供音频说明](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM7)
	- [G226：通过在声道中融入旁白来提供音频说明](https://www.w3.org/WAI/WCAG22/Techniques/general/G226)
	- 使用任何支持音频和视频的播放器
- [G8：提供具有扩展音频说明的电影](https://www.w3.org/WAI/WCAG22/Techniques/general/G8)，使用以下技术之一：
	- [SM1：在 SMIL 1.0 中添加扩展音频说明](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM1)
	- [SM2: 在 SMIL 2.0 中添加扩展音频说明](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM2)
	- 使用任何支持音频 and 视频的播放器
- [G203：使用静态替代文本描述“大头贴说话”（talking head）视频](https://www.w3.org/WAI/WCAG22/Techniques/general/G203)

为多媒体中的所有实时音频内容提供字幕。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G9：为实时多媒体创建字幕](https://www.w3.org/WAI/WCAG22/Techniques/general/G9) **以及** [G93：提供开放字幕（始终可见）](https://www.w3.org/WAI/WCAG22/Techniques/general/G93)
- [G9：为实时多媒体创建字幕](https://www.w3.org/WAI/WCAG22/Techniques/general/G9) **以及** [G87：提供关闭式字幕](https://www.w3.org/WAI/WCAG22/Techniques/general/G87)
	- [SM11：在 SMIL 1.0 中通过同步文本流提供字幕](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM11)
	- [SM12：在 SMIL 2.0 中通过同步文本流提供字幕](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM12)
	- 使用任何现成的、其视频播放器支持关闭式字幕的媒体格式

*注意：*字幕可能使用实时文本翻译服务生成。

为多媒体中的所有预录制视频内容提供音频说明。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G78：提供包含音频说明的、用户可选择的第二声道](https://www.w3.org/WAI/WCAG22/Techniques/general/G78)
- [G173：提供包含音频说明的电影版本](https://www.w3.org/WAI/WCAG22/Techniques/general/G173)，使用以下技术之一：
	- [SM6：在 SMIL 1.0 中提供音频说明](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM6)
	- [SM7：在 SMIL 2.0 中提供音频说明](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM7)
	- [G226：通过在声道中融入旁白来提供音频说明](https://www.w3.org/WAI/WCAG22/Techniques/general/G226)
	- 使用任何支持音频和视频的播放器
- [G8：提供具有扩展音频说明的电影](https://www.w3.org/WAI/WCAG22/Techniques/general/G8)，使用以下技术之一：
	- [SM1：在 SMIL 1.0 中添加扩展音频说明](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM1)
	- [SM2: 在 SMIL 2.0 中添加扩展音频说明](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM2)
	- 使用任何支持音频和视频的播放器
- [G203：使用静态替代文本描述“大头贴说话”视频](https://www.w3.org/WAI/WCAG22/Techniques/general/G203)

- [F113：由于未利用对话中的可用停顿来提供重要视觉内容的音频说明而导致成功准则 1.2.5 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F113)

为多媒体中的所有预录制音频内容提供手语翻译。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G54：在视频流中包含手语翻译人员](https://www.w3.org/WAI/WCAG22/Techniques/general/G54)
- [G81：提供手语翻译人员的同步视频，该视频可在不同的视口中显示或由播放器叠加在图像上](https://www.w3.org/WAI/WCAG22/Techniques/general/G81)，使用以下技术之一：
	- [SM13：在 SMIL 1.0 中通过同步视频流提供手语翻译](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM13)
	- [SM14：在 SMIL 2.0 中通过同步视频流提供手语翻译](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM14)

如果在前景音频中的停顿不足以允许音频说明传达视频的含义，则为多媒体中的所有预录制视频内容提供扩展音频说明。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G8：提供具有扩展音频说明的电影](https://www.w3.org/WAI/WCAG22/Techniques/general/G8)，使用以下技术之一：
	- [SM1：在 SMIL 1.0 中添加扩展音频说明](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM1)
	- [SM2: 在 SMIL 2.0 中添加扩展音频说明](https://www.w3.org/WAI/WCAG22/Techniques/smil/SM2)
	- 使用任何支持音频和视频的播放器

为所有预录制的多媒体和所有预录制的仅视频媒体提供基于时间的媒体替代方案。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G69：提供基于时间的媒体替代方案](https://www.w3.org/WAI/WCAG22/Techniques/general/G69)，使用以下技术之一：
	- [G58：在紧邻非文本内容的位置放置指向基于时间的媒体替代方案的链接](https://www.w3.org/WAI/WCAG22/Techniques/general/G58)
- 链接到基于时间的媒体替代方案，使用以下技术之一：
	- [H53：使用 object 元素的 body 内容](https://www.w3.org/WAI/WCAG22/Techniques/html/H53)

- [G159：为仅视频内容的基于时间的媒体提供替代方案](https://www.w3.org/WAI/WCAG22/Techniques/general/G159)

- [F74：由于未将文本的同步媒体替代标记为替代，导致成功准则 1.2.2 和 1.2.8 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F74)

为实时仅音频内容提供呈现等效信息的基于时间的媒体替代方案。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G151：如果遵循了脚本，提供指向准备好的声明或脚本的文本转录的链接](https://www.w3.org/WAI/WCAG22/Techniques/general/G151)
- [G150：为实时仅音频内容提供基于文本的替代方案](https://www.w3.org/WAI/WCAG22/Techniques/general/G150)
- [G157：在网页中集成实时音频字幕服务](https://www.w3.org/WAI/WCAG22/Techniques/general/G157)

通过视觉呈现所传达的信息、结构和关系，能够通过程序确定或在文本中可用。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [ARIA11：使用 ARIA 地标（landmarks）标识页面的各个区域](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [H101：使用语义 HTML 元素标识页面的各个区域](https://www.w3.org/WAI/WCAG22/Techniques/html/H101)
- [ARIA12：使用 role=heading 标识标题](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA12)
- [ARIA13：使用 aria-labelledby 为区域和地标命名](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA13)
- [ARIA16：使用 aria-labelledby 为用户界面控件命名](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16)
- [ARIA17：使用分组角色标识相关的表单控件](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA17)
- [ARIA20：使用 region 角色标识页面的某个区域](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA20)
- [G115：使用语义元素标记结构](https://www.w3.org/WAI/WCAG22/Techniques/general/G115) **以及** [H49：使用语义标记标记强调或特殊文本](https://www.w3.org/WAI/WCAG22/Techniques/html/H49)
- [G117：使用文本传达通过文本呈现形式的变化所传达的信息](https://www.w3.org/WAI/WCAG22/Techniques/general/G117)
- [G140：将信息和结构与呈现分离，以实现不同的呈现方式](https://www.w3.org/WAI/WCAG22/Techniques/general/G140)
- [ARIA24：使用 role="img" 语义化地标识字体图标（font icon）](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA24)
- 使用以下技术使通过呈现所传达的信息和关系能够通过程序确定：
	- [G138：每当使用颜色线索时，均使用语义标记](https://www.w3.org/WAI/WCAG22/Techniques/general/G138)
	- [H51：使用表格标记来呈现表格信息](https://www.w3.org/WAI/WCAG22/Techniques/html/H51)
	- [PDF6：在 PDF 文档中使用 table 元素进行表格标记](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF6)
	- [PDF20：使用 Adobe Acrobat Pro 的表格编辑器修复标记错误的表格](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF20)
	- [H39：使用 caption 元素将数据表标题与数据表相关联](https://www.w3.org/WAI/WCAG22/Techniques/html/H39)
	- [H63：使用 scope 属性将表头单元格与数据表中的数据单元格相关联](https://www.w3.org/WAI/WCAG22/Techniques/html/H63)
	- [H43：使用 id 和 headers 属性将数据单元格与数据表中的表头单元格相关联](https://www.w3.org/WAI/WCAG22/Techniques/html/H43)
	- [H44：使用 label 元素将文本标签与表单控件相关联](https://www.w3.org/WAI/WCAG22/Techniques/html/H44)
	- [H65：当无法使用 label 元素时，使用 title 属性标识表单控件](https://www.w3.org/WAI/WCAG22/Techniques/html/H65)
	- [PDF10：在 PDF 文档中为交互式表单控件提供标签](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF10)
	- [PDF12：在 PDF 文档中为表单字段提供名称、角色、值信息](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF12)
	- [H71：使用 fieldset 和 legend 元素为表单控件组提供说明](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
	- [H85：使用 optgroup 对 select 内部的 option 元素进行分组](https://www.w3.org/WAI/WCAG22/Techniques/html/H85)
	- [H48：对列表或链接组使用 ol、ul 和 dl](https://www.w3.org/WAI/WCAG22/Techniques/html/H48)
	- [H42：使用 h1-h6 标识标题](https://www.w3.org/WAI/WCAG22/Techniques/html/H42)
	- [PDF9：在 PDF 文档中通过使用标题标签标记内容来提供标题](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF9)
	- [PDF11：在 PDF 文档中通过使用 Link 注释和 /Link 结构元素来提供链接和链接文本](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF11)
	- [PDF17：为 PDF 文档指定一致的页码](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF17)
	- [PDF21：在 PDF 文档中对列表使用 List 标签](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF21)
	- [H97：使用 nav 元素对相关链接进行分组](https://www.w3.org/WAI/WCAG22/Techniques/html/H97)

- [G117：使用文本传达通过文本呈现形式的变化所传达的信息](https://www.w3.org/WAI/WCAG22/Techniques/general/G117)
- 使用以下技术，通过程序确定呈现所传达的信息和关系，或在文本中提供：
	- [T1：段落使用标准文本格式规范](https://www.w3.org/WAI/WCAG22/Techniques/text/T1)
	- [T2：列表使用标准文本格式规范](https://www.w3.org/WAI/WCAG22/Techniques/text/T2)
	- [T3：标题使用标准文本格式规范](https://www.w3.org/WAI/WCAG22/Techniques/text/T3)

- [F2：由于在未使用适当的标记或文本的情况下，通过文本呈现的变化来传达信息，导致成功准则 1.3.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F2)
- [F33：由于使用空格字符在纯文本内容中创建多列而导致成功准则 1.3.1 和 1.3.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F33)
- [F34：由于使用空格字符在纯文本内容中对齐表格而导致成功准则 1.3.1 和 1.3.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F34)
- [F42：模拟链接时导致成功准则 1.3.1、2.1.1、2.1.3 或 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F42)
- [F43：由于使用结构标记的方式无法表示内容中的关系，导致成功准则 1.3.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F43)
- [F46：由于在布局表格中使用 th 元素、caption 元素或非空 summary 属性，导致成功准则 1.3.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F46)
- [F48：由于使用 pre 元素对齐表格信息而导致成功准则 1.3.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F48)
- [F90：由于通过 headers 和 id 属性错误地关联表头和内容，导致成功准则 1.3.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F90)
- [F91：由于未正确标记表格表头导致成功准则 1.3.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F91)
- [F92：由于在传达语义信息的内容上使用 role="presentation"，导致成功准则 1.3.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F92)
- [F111：由于具有可见标签文本但没有可访问名称的控件，导致成功准则 1.3.1、2.5.3 和 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F111)

当内容的呈现顺序影响其含义时，能够通过程序确定正确的阅读顺序。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G57：以有意义的顺序排列网页中的所有内容](https://www.w3.org/WAI/WCAG22/Techniques/general/G57)
- 将内容中的序列标记为有意义的，使用以下技术之一，**并且**对这些序列使用 [G57：以有意义的顺序排列内容](https://www.w3.org/WAI/WCAG22/Techniques/general/G57)：
	- [H34：使用 Unicode 从右至左标记（RLM）或从左至右标记（LRM）来混合行内文本方向](https://www.w3.org/WAI/WCAG22/Techniques/html/H34)
	- [H56：在行内元素上使用 dir 属性来解决嵌套方向片段的问题](https://www.w3.org/WAI/WCAG22/Techniques/html/H56)
	- [C6：基于结构标记定位内容](https://www.w3.org/WAI/WCAG22/Techniques/css/C6)
	- [C8：使用 CSS letter-spacing 控制单词内的间距](https://www.w3.org/WAI/WCAG22/Techniques/css/C8)
- [C27：使 DOM 顺序与视觉顺序相匹配](https://www.w3.org/WAI/WCAG22/Techniques/css/C27)
- [PDF3：确保 PDF 文档中正确的 Tab 键和阅读顺序](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF3)
	- [C8：使用 CSS letter-spacing 控制单词内的间距](https://www.w3.org/WAI/WCAG22/Techniques/css/C8)
- [C27：使 DOM 顺序与视觉顺序相匹配](https://www.w3.org/WAI/WCAG22/Techniques/css/C27)
- [PDF3：确保 PDF 文档中正确的 Tab 键和阅读顺序](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF3)

为理解和操作内容而提供的指示，不应仅仅依赖于组件的感官特征，如形状、颜色、大小、视觉位置、方向或声音。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G96：为那些原本仅依赖感官信息来理解的项提供文本标识](https://www.w3.org/WAI/WCAG22/Techniques/general/G96)

- [F14：由于仅凭形状或位置标识内容而导致成功准则 1.3.3 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F14)
- [F26：由于仅使用图形符号传达信息而导致成功准则 1.3.3 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F26)

内容不应将视图和操作限制在单一的显示方向（如纵向或横向），除非特定的显示方向是必不可少的。

*注意：*特定显示方向必不可少的示例包括：银行支票、钢琴应用程序、投影仪或电视机的幻灯片，或虚拟现实内容（其中内容不一定受限于横向或纵向显示方向）。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G214：使用控件来允许访问原本受限的、不同方向的内容](https://www.w3.org/WAI/WCAG22/Techniques/general/G214)

- [F97：由于将屏幕方向锁定为横向或纵向视图而导致失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F97)
- [F100：由于显示要求重新调整设备方向的消息而导致成功准则 1.3.4 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F100)

在满足以下条件时，收集有关用户信息的每个输入框的目的可以通过程序确定：

注意：如果能满足成功准则，其他技术也可能是充分的. 参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [H98：使用 HTML 自动填充（autocomplete）属性](https://www.w3.org/WAI/WCAG22/Techniques/html/H98)

- [F107：由于自动填充属性值不正确而导致成功准则 1.3.5 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F107)

在使用标记语言实现的内容中，用户界面组件、图标和区域的目的可以被程序确定。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- 通过程序指示图标、区域和用户界面组件的目的
- [ARIA11：使用 ARIA 地标标识页面的各个区域](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- 使用微数据（microdata）标记用户界面组件（未来链接）

颜色不应用作传达信息、指示操作、促成响应或区分视觉元素的唯一视觉手段。

*注意：*此成功准则专门针对色彩感知。其他感知形式在指南 1.3 中涵盖，包括对颜色和其他视觉呈现编码的程序化访问。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G111：同时使用颜色和图案](https://www.w3.org/WAI/WCAG22/Techniques/general/G111)
- [G14：确保通过颜色差异传达的信息在文本中也可用](https://www.w3.org/WAI/WCAG22/Techniques/general/G14)

- [F13：由于替代文本未包含图像中通过颜色差异传达的信息而导致成功准则 1.1.1 和 1.4.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F13)
- [F73：由于创建了在没有色彩视觉时在视觉上不明显的链接而导致成功准则 1.4.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F73)
- [F81：由于仅使用颜色差异来标识必填或错误字段而导致成功准则 1.4.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F81)

如果网页上的任何音频自动播放超过 3 秒，则必须提供暂停或停止音频的机制，或提供能够独立于系统整体音量来控制音频音量的机制。

*注意：*由于任何不符合此成功准则的内容都会干扰用户使用整个页面的能力，因此网页上的所有内容（无论是否用于满足其他成功准则）都必须满足此成功准则。参见符合性要求 5：无干扰（Non-Interference）。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G60：播放自动在三秒内关闭的声音](https://www.w3.org/WAI/WCAG22/Techniques/general/G60)
- [G170：在网页开头附近提供一个关闭自动播放声音的控件](https://www.w3.org/WAI/WCAG22/Techniques/general/G170)
- [G171：仅在用户请求时播放声音](https://www.w3.org/WAI/WCAG22/Techniques/general/G171)

- [F23：由于在没有关闭机制的情况下播放声音超过 3 秒而导致成功准则 1.4.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F23)
- [F93：由于对于自动播放的 HTML5 媒体元素缺少暂停或停止的方法而导致成功准则 1.4.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F93)

文本和图像文本的视觉呈现对比度至少为 4.5:1，但以下情况除外：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G18：确保文本（及图像文本）与文本背后的背景之间存在至少 4.5:1 的对比度](https://www.w3.org/WAI/WCAG22/Techniques/general/G18)
- [G148：不指定背景颜色，不指定文本颜色，且不使用会改变这些默认设置的技术特性](https://www.w3.org/WAI/WCAG22/Techniques/general/G148)
- [G174：提供一个具有足够对比度的控件，允许用户切换到使用足够对比度的呈现方式](https://www.w3.org/WAI/WCAG22/Techniques/general/G174)

- [G145：确保文本（及图像文本）与文本背后的背景之间存在至少 3:1 的对比度](https://www.w3.org/WAI/WCAG22/Techniques/general/G145)
- [G148：不指定背景颜色，不指定文本颜色，且不使用会改变这些默认设置的技术特性](https://www.w3.org/WAI/WCAG22/Techniques/general/G148)
- [G174：提供一个具有足够对比度的控件，允许用户切换到使用足够对比度的呈现方式](https://www.w3.org/WAI/WCAG22/Techniques/general/G174)

- [F24：由于指定了前景色而未指定背景色（或反之）而导致成功准则 1.4.3、1.4.6 和 1.4.8 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F24)
- [F83：由于使用了与前景文本（或图像文本）对比度不足的背景图像而导致成功准则 1.4.3 和 1.4.6 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F83)

除字幕和图像文本外，文本可以在没有辅助技术的情况下调整大小，最大可调整至 200%，且不会丢失内容或功能。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G142：使用具有普遍支持缩放的常用用户代理的技术](https://www.w3.org/WAI/WCAG22/Techniques/general/G142)
- 确保文本容器在文本调整大小时调整大小，**并且**在内容中使用相对其他度量的测量单位：
	- [C28：使用 em 单位指定文本容器的大小](https://www.w3.org/WAI/WCAG22/Techniques/css/C28)
	- 相对测量技术：
		- [C12：使用百分比设置字体大小](https://www.w3.org/WAI/WCAG22/Techniques/css/C12)
		- [C13：使用命名的字体大小](https://www.w3.org/WAI/WCAG22/Techniques/css/C13)
		- [C14：使用 em 单位设置字体大小](https://www.w3.org/WAI/WCAG22/Techniques/css/C14)
	- 文本容器重调大小技术：
		- [SCR34：以可随文本大小缩放的方式计算大小和位置](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR34)
		- [G146：使用流动性布局（liquid layout）](https://www.w3.org/WAI/WCAG22/Techniques/general/G146)
- [G178：在网页上提供允许用户以增量方式将网页上所有文本的大小更改为最大 200% 的控件](https://www.w3.org/WAI/WCAG22/Techniques/general/G178)
- [G179：确保在文本调整大小且文本容器宽度不变时，不会丢失内容或功能](https://www.w3.org/WAI/WCAG22/Techniques/general/G179)

- [F69：当将视觉渲染文本重调大小至 200% 导致文本、图像或控件被裁剪、截断或遮挡时，成功准则 1.4.4 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F69)
- [F80：当视觉渲染文本重调大小至 200% 时，基于文本的表单控件未调整大小，成功准则 1.4.4 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F80)
- [F94：由于不正确地使用视口单位来重调文本大小而导致成功准则 1.4.4 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F94)

如果所使用的技术能够实现视觉呈现，则应使用文本来传达信息，而不是图像文本，但以下情况除外：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [C22：使用 CSS 控制文本的视觉呈现](https://www.w3.org/WAI/WCAG22/Techniques/css/C22)
- [C30：使用 CSS 将文本替换为图像文本并提供切换的用户界面控件](https://www.w3.org/WAI/WCAG22/Techniques/css/C30)
- [G140：将信息和结构与呈现分离，以实现不同的呈现方式](https://www.w3.org/WAI/WCAG22/Techniques/general/G140)
- [PDF7：对扫描的 PDF 文档执行 OCR 以提供实际文本](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF7)

文本和图像文本的视觉呈现对比度至少为 7:1，但以下情况除外：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G17：确保文本（及图像文本）与文本背后的背景之间存在至少 7:1 的对比度](https://www.w3.org/WAI/WCAG22/Techniques/general/G17)
- [G148：不指定背景颜色，不指定文本颜色，且不使用会改变这些默认设置的技术特性](https://www.w3.org/WAI/WCAG22/Techniques/general/G148)
- [G174：提供一个具有足够对比度的控件，允许用户切换到使用足够对比度的呈现方式](https://www.w3.org/WAI/WCAG22/Techniques/general/G174)

- [G18：确保文本（及图像文本）与文本背后的背景之间存在至少 4.5:1 的对比度](https://www.w3.org/WAI/WCAG22/Techniques/general/G18)
- [G148：不指定背景颜色，不指定文本颜色，且不使用会改变这些默认设置的技术特性](https://www.w3.org/WAI/WCAG22/Techniques/general/G148)
- [G174：提供一个具有足够对比度的控件，允许用户切换到使用足够对比度的呈现方式](https://www.w3.org/WAI/WCAG22/Techniques/general/G174)

- [F24：由于指定了前景色而未指定背景色（或反之）而导致成功准则 1.4.3、1.4.6 和 1.4.8 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F24)
- [F83：由于使用了与前景文本（或图像文本）对比度不足的背景图像而导致成功准则 1.4.3 和 1.4.6 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F83)

对于预录制的仅音频内容，若它（1）主要包含前景中的语音，（2）不是音频 CAPTCHA（语音验证码）或音频标识，且（3）不是以音乐表现为主要目的的人声（如唱歌或说唱），则以下至少一项为真：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G56：混音音频文件，使非语音声音比语音音频内容至少低 20 分贝](https://www.w3.org/WAI/WCAG22/Techniques/general/G56)

对于文本块的视觉呈现，可以使用某种机制来实现以下目的：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G204：当视口宽度变窄时，不干扰用户代理对文本的重新排版（reflow）](https://www.w3.org/WAI/WCAG22/Techniques/general/G204)
- [C20：使用相对度量来设置列宽，以便在浏览器调整大小时，每行平均字符数保持在 80 个或更少](https://www.w3.org/WAI/WCAG22/Techniques/css/C20)

- [C19：在 CSS 中指定向左对齐或向右对齐](https://www.w3.org/WAI/WCAG22/Techniques/css/C19)
- [G172：提供去除文本两端对齐的机制](https://www.w3.org/WAI/WCAG22/Techniques/general/G172)
- [G169：仅在一侧对齐文本](https://www.w3.org/WAI/WCAG22/Techniques/general/G169)

- [G188：在页面上提供按钮以增加行距和段落间距](https://www.w3.org/WAI/WCAG22/Techniques/general/G188)
- [C21：在 CSS 中指定行距](https://www.w3.org/WAI/WCAG22/Techniques/css/C21)

- [F24：由于指定了前景色而未指定背景色（或反之）而导致成功准则 1.4.3、1.4.6 和 1.4.8 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F24)
- [F88：由于使用两端对齐的文本（即同时对齐左右页边距）而导致成功准则 1.4.8 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F88)

图像文本仅用于纯装饰或在特定文本呈现对所传达的信息至关重要的情况下。

*注意：*徽标文本（属于徽标或品牌名称一部分的文本）被视为是至关重要的。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [C22：使用 CSS 控制文本的视觉呈现](https://www.w3.org/WAI/WCAG22/Techniques/css/C22)
- [C30：使用 CSS 将文本替换为图像文本并提供切换的用户界面控件](https://www.w3.org/WAI/WCAG22/Techniques/css/C30)
- [G140：将信息和结构与呈现分离，以实现不同的呈现方式](https://www.w3.org/WAI/WCAG22/Techniques/general/G140)
- [PDF7：对扫描的 PDF 文档执行 OCR 以提供实际文本](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF7)

内容能够呈现且不丢失信息或功能，并且不需要进行二维滚动以阅读：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [C32：使用媒体查询（media queries）和网格 CSS（grid CSS）来重排（reflow）列](https://www.w3.org/WAI/WCAG22/Techniques/css/C32)
- [C31：使用 CSS 弹性盒（Flexbox）重排内容](https://www.w3.org/WAI/WCAG22/Techniques/css/C31)
- [C33：允许长 URL 和文本字符串重新排版](https://www.w3.org/WAI/WCAG22/Techniques/css/C33)
- [C38：使用 CSS width, max-width 和 flexbox 来适应标签和输入框](https://www.w3.org/WAI/WCAG22/Techniques/css/C38)
- [SCR34：以可随文本大小缩放的方式计算大小和位置](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR34)
- [G206：在内容中提供选项以切换到不需要用户水平滚动即可阅读一行文本的布局](https://www.w3.org/WAI/WCAG22/Techniques/general/G206)
- [G224：处理有意义的文本缩进与重新排版（Reflow）](https://www.w3.org/WAI/WCAG22/Techniques/general/G224)
- [G225：在垂直滚动的页面上，将水平滚动的区块面板设计为适应 320 CSS 像素的宽度](https://www.w3.org/WAI/WCAG22/Techniques/general/G225)
- 创建 PDF 时使用 PDF/UA 标准（潜在未来技术）

- [F102：由于内容在重新排版后消失且不可用，导致成功准则 1.4.10 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F102)

以下项的视觉呈现，与相邻颜色的对比度至少为 3:1：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G195：使用作者提供的、可见的聚焦指示器](https://www.w3.org/WAI/WCAG22/Techniques/general/G195)
- [G174：提供一个具有足够对比度的控件，允许用户切换到使用足够对比度的呈现方式](https://www.w3.org/WAI/WCAG22/Techniques/general/G174)

- [G207：确保为图标提供 3:1 的对比度](https://www.w3.org/WAI/WCAG22/Techniques/general/G207)
- [G209：在相邻颜色的边界处提供足够的对比度](https://www.w3.org/WAI/WCAG22/Techniques/general/G209)

- [F78：由于设置元素外边框和边框的样式，导致移除或使视觉聚焦指示器不可见，进而使成功准则 1.4.11、2.4.7 和 2.4.13 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F78)

在使用支持以下文本样式属性的标记语言实现的内容中，通过设置以下所有属性且不更改其他样式属性，不会发生内容或功能的丢失：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [C36：允许覆盖文本间距（text spacing）](https://www.w3.org/WAI/WCAG22/Techniques/css/C36)
- [C35：允许文本间距在不换行的情况下调整](https://www.w3.org/WAI/WCAG22/Techniques/css/C35)

- [F104：由于在调整文本间距时内容被剪裁或重叠，导致成功准则 1.4.12 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F104)

若接收然后移除指针悬停或键盘聚焦，会触发额外内容的显示和隐藏，则以下情况属实：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [SCR39：使在聚焦或悬停时呈现的内容能够被悬停、驳回且保持持久呈现](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR39)
- ARIA：使用 role="tooltip"（潜在未来技术）
- CSS：使用 hover 和 focus 伪类（潜在未来技术）

- [F95：由于悬停时显示的内容无法被悬停，导致成功准则 1.4.13 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F95)
- 在未移动指针悬停或键盘聚焦的情况下，无法驳回内容（潜在未来技术）
- 悬停或聚焦时显示的内容未能保持可见，直到被驳回或失效（潜在未来技术）

内容的所有功能都可以通过键盘界面操作，而不需要对单个按键的敲击进行特定的时间限制，除非底层功能要求输入取决于用户的移动轨迹而不仅仅是终点。

*注意 1：*此例外关系到的是底层功能本身，而不是输入技术。例如，如果使用手写输入文本，输入技术（手写）需要取决于移动轨迹的输入，但底层功能（文本输入）不需要。

*注意 2：*这并不禁止也不应阻碍在键盘操作之外提供鼠标输入或其他输入方法。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G202：确保对所有功能都进行键盘控制](https://www.w3.org/WAI/WCAG22/Techniques/general/G202)
- 使用以下技术之一确保键盘控制：
	- [H91：使用 HTML 表单控件和链接](https://www.w3.org/WAI/WCAG22/Techniques/html/H91)
	- [PDF3：确保 PDF 文档中正确的 Tab 键和阅读顺序](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF3)
	- [PDF11：在 PDF 文档中通过使用 Link 注释和 /Link 结构元素来提供链接和链接文本](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF11)
	- [PDF23：在 PDF 文档中提供交互式表单控件](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF23)
- [G90：提供键盘触发的事件处理程序](https://www.w3.org/WAI/WCAG22/Techniques/general/G90)，使用以下技术之一：
	- [SCR20：同时使用键盘和其他设备特定的功能](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR20)
	- [SCR35：通过使用 anchor 和 button 的 onclick 事件，使操作可被键盘访问](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR35)
	- [SCR2：使用冗余的键盘和鼠标事件处理程序](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR2)

- [F54：由于仅对某个功能使用特定的指向设备事件处理程序（包括手势）而导致成功准则 2.1.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F54)
- [F55：由于在使用脚本在获得焦点时移除焦点，导致成功准则 2.1.1、2.4.7、2.4.13 和 3.2.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F55)
- [F42：模拟链接时导致成功准则 1.3.1、2.1.1、2.1.3 或 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F42)

如果能使用键盘界面将键盘焦点移动到页面的某个组件上，那么焦点也能仅使用键盘界面从该组件移开。此外，如果移开焦点所需要的按键不仅仅是普通的方向键或 Tab 键或其他标准的退出方法，则应该将移开焦点的方法告知用户。

*注意：*由于任何不符合此成功准则的内容都会干扰用户使用整个页面的能力，因此网页上的所有内容（无论是否用于满足其他成功准则）都必须满足此成功准则。参见符合性要求 5：无干扰（Non-Interference）。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G21：确保用户不会被困在内容中](https://www.w3.org/WAI/WCAG22/Techniques/general/G21)

- [F10：由于以将用户困在一种格式类型中的方式合并多种内容格式，导致成功准则 2.1.2 和符合性要求 5 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F10)

内容的所有功能都可以通过键盘界面操作，而不需要对单个按键的敲击进行特定的时间限制。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- 对于此成功准则没有其他额外技术。遵循 [成功准则 2.1.1 的技术](https://www.w3.org/WAI/WCAG22/Understanding/keyboard#techniques)。如果因为有轨迹依赖输入的硬性要求而无法做到，则无法满足此 Level AAA 成功准则。

如果字符快捷键在内容中实现，且仅使用字母（包括大写和小写字母）、标点、数字或符号字符，则至少满足以下条件之一：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G217：提供一种机制，允许用户重映射或关闭字符按键快捷键](https://www.w3.org/WAI/WCAG22/Techniques/general/G217)

- [F99：由于实现的字符键快捷键无法关闭或重映射，导致成功准则 2.1.4 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F99)

对于内容设定的每个时间限制，至少满足以下条件之一：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G133：在多步骤表单的第一页上提供复选框，允许用户请求更长的会话时间限制或无会话时间限制](https://www.w3.org/WAI/WCAG22/Techniques/general/G133)
- [G198：为用户提供一种关闭时间限制的方法](https://www.w3.org/WAI/WCAG22/Techniques/general/G198)

- [F40：由于使用带有时间限制的 meta 重定向而导致失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F40)
- [F41：由于使用 meta 刷新（refresh）重新加载页面导致成功准则 2.2.1、2.2.4 和 3.2.5 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F41)
- [F58：由于在超时后使用服务器端技术自动重定向页面，导致成功准则 2.2.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F58)

对于移动、闪烁、滚动或自动更新的信息，以下所有情况属实：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G4：允许内容暂停并从暂停处重新启动](https://www.w3.org/WAI/WCAG22/Techniques/general/G4)
- [SCR33：使用脚本滚动内容，并提供暂停机制](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR33)
- [G11：创建闪烁时间少于 5 秒的内容](https://www.w3.org/WAI/WCAG22/Techniques/general/G11)
- [G152：将动态 GIF 图像设置为在 n 个循环后停止闪烁（在 5 秒内）](https://www.w3.org/WAI/WCAG22/Techniques/general/G152)
- [SCR22：使用脚本控制闪烁并在五秒或更短时间内停止](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR22)
- [G186：在网页中使用能够停止移动、闪烁或自动更新内容的控件](https://www.w3.org/WAI/WCAG22/Techniques/general/G186)
- [G191：提供链接、按钮或其他在重新加载页面时没有闪烁内容的机制](https://www.w3.org/WAI/WCAG22/Techniques/general/G191)

- [F16：由于包含滚动内容（其中移动对活动并非必不可少）且未包含暂停和重新启动内容的机制，导致成功准则 2.2.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F16)
- [F112：由于使用闪烁持续时间超过 5 秒且没有停止机制的内容，导致成功准则 2.2.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F112)
- [F50：由于脚本导致闪烁效果且没有在 5 秒或更短时间内停止闪烁的机制，导致成功准则 2.2.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F50)
- [F7：由于对象或应用小程序（applet）具有闪烁内容，且在闪烁持续时间超过 5 秒时没有暂停内容的机制，导致成功准则 2.2.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F7)

时间限制不是内容所呈现的事件或活动必不可少的一部分，除非是非交互式同步媒体和实时事件。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G5：允许用户在没有任何时间限制的情况下完成活动](https://www.w3.org/WAI/WCAG22/Techniques/general/G5)

用户可以推迟或抑制中断，但涉及紧急情况的中断除外。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G75：提供推迟任何内容更新的机制](https://www.w3.org/WAI/WCAG22/Techniques/general/G75)
- [G76：提供请求更新内容而不是自动更新内容的机制](https://www.w3.org/WAI/WCAG22/Techniques/general/G76)
- [SCR14：使用脚本使非必要的警告成为可选](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR14)

- [F40：由于使用带有时间限制的 meta 重定向而导致失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F40)
- [F41：由于使用 meta 刷新重新加载页面导致成功准则 2.2.1、2.2.4 和 3.2.5 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F41)

当已验证的会话过期时，用户可以在重新身份验证后继续活动而不丢失数据。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- 使用以下技术之一提供在不丢失数据的情况下继续的选项：
	- [G105：保存数据，以便在用户重新身份验证后可以使用](https://www.w3.org/WAI/WCAG22/Techniques/general/G105)
	- [G181：在重新授权页面中将用户数据编码为隐藏或加密数据](https://www.w3.org/WAI/WCAG22/Techniques/general/G181)

*注意：*对于向用户提供关于时间限制的通知相关的技术，请参考成功准则 2.2.1 的技术。

- [F12：由于存在会话时间限制而没有保存用户输入并在重新身份验证时重建该信息的机制，导致成功准则 2.2.5 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F12)

警告用户任何可能导致数据丢失的无活动状态持续时间，除非在用户不执行任何操作时数据将保留 20 小时以上。

*注意：*在用户身份通过验证并保留用户数据之前，隐私法规可能要求获得用户的明确同意。如果在用户是未成年人的情况下，在大多数司法管辖区、国家或地区可能无法索取明确同意。在考虑将数据保留作为满足此成功准则的方法时，建议咨询隐私专业人员和法律顾问。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- 将会话超时设置在至少 20 小时无活动之后发生
- 存储用户数据 20 小时以上
- 在流程开始时提供关于用户无活动状态持续时间的警告

网页不应包含任何在任意 1 秒内闪烁超过三次的内容，或者闪烁低于通用闪烁和红色闪烁阈值。

*注意：*由于任何不符合此成功准则的内容都会干扰用户使用整个页面的能力，因此网页上的所有内容（无论是否用于满足其他成功准则）都必须满足此成功准则。参见符合性要求 5：无干扰。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G19：确保内容的任何组件在任意 1 秒钟内闪烁不超过三次](https://www.w3.org/WAI/WCAG22/Techniques/general/G19)
- [G176：保持闪烁区域足够小](https://www.w3.org/WAI/WCAG22/Techniques/general/G176)
- [G15：使用工具确保内容不违反通用闪烁阈值或红色闪烁阈值](https://www.w3.org/WAI/WCAG22/Techniques/general/G15)

网页中不应包含任何在任意 1 秒内闪烁超过三次的内容。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G19：确保内容的任何组件在任意 1 秒钟内闪烁不超过三次](https://www.w3.org/WAI/WCAG22/Techniques/general/G19)

提供一种机制以绕过在多个网页上重复出现的内容块。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- 使用以下技术之一创建跳过重复内容块的链接：
	- [G1：在每个页面顶部添加一个直接转到主要内容区域的链接](https://www.w3.org/WAI/WCAG22/Techniques/general/G1)
	- [G123：在重复内容块的开头添加链接以转到该块的末尾](https://www.w3.org/WAI/WCAG22/Techniques/general/G123)
	- [G124：在页面顶部添加链接以转到内容的每个区域](https://www.w3.org/WAI/WCAG22/Techniques/general/G124)
- 使用以下技术之一对重复内容块进行分组，以便可以跳过它们：
	- [ARIA11：使用 ARIA 地标标识页面的各个区域](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
	- [H69：在内容的每个小节的开头提供标题元素](https://www.w3.org/WAI/WCAG22/Techniques/html/H69)
	- [PDF9：在 PDF 文档中通过使用标题标签标记内容来提供标题](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF9)
	- [H64：使用 iframe 元素的 title 属性](https://www.w3.org/WAI/WCAG22/Techniques/html/H64)
	- [SCR28：使用可展开和收起折叠的菜单来绕过内容块](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR28)

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G59：以符合内容中顺序和关系的顺序放置交互式元素](https://www.w3.org/WAI/WCAG22/Techniques/general/G59)
- 使用以下技术之一，以符合内容中顺序和关系的顺序将焦点给予元素：
	- [C27：使 DOM 顺序与视觉顺序相匹配](https://www.w3.org/WAI/WCAG22/Techniques/css/C27)
	- [PDF3：确保 PDF 文档中正确的 Tab 键和阅读顺序](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF3)
- 使用以下技术之一动态更改网页：
	- [SCR26：在触发元素紧随其后将动态内容插入到文档对象模型（DOM）中](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR26)
	- [H102：使用 HTML dialog 元素创建模态对话框](https://www.w3.org/WAI/WCAG22/Techniques/html/H102)
	- [SCR27：使用文档对象模型对页面区域进行重排序](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR27)

每个链接的目的仅通过链接文本本身或通过链接文本及其程序化确定的链接上下文可以被确定，除非链接目的对广大用户而言本就是含糊的。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G91：提供描述链接目的的链接文本](https://www.w3.org/WAI/WCAG22/Techniques/general/G91)
- [H30：为 anchor（a）元素提供描述链接目的的链接文本](https://www.w3.org/WAI/WCAG22/Techniques/html/H30)
- [H24：为图像热区地图的 area 元素提供替代文本](https://www.w3.org/WAI/WCAG22/Techniques/html/H24)
- 允许用户使用以下技术之一选择简短或较长的链接文本：
	- [G189：在网页开头附近提供一个更改链接文本的控件](https://www.w3.org/WAI/WCAG22/Techniques/general/G189)
	- [SCR30：使用脚本来更改链接文本](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR30)
- [G53：使用链接文本结合其外层句子的文本来标识链接的目的](https://www.w3.org/WAI/WCAG22/Techniques/general/G53)
- 使用以下技术之一提供链接目的的补充描述：
	- [H33：使用 title 属性补充链接文本](https://www.w3.org/WAI/WCAG22/Techniques/html/H33)
	- [C7：使用 CSS 隐藏链接文本的一部分](https://www.w3.org/WAI/WCAG22/Techniques/css/C7)
- 使用以下技术之一，结合程序化确定的链接上下文，通过链接文本标识链接的目的：
	- [ARIA7：为链接目的使用 aria-labelledby](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA7)
	- [ARIA8：为链接目的使用 aria-label](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8)
	- [H77：结合其外层的列表项，通过链接文本标识链接目的](https://www.w3.org/WAI/WCAG22/Techniques/html/H77)
	- [H78：结合其外层的段落，通过链接文本标识链接目的](https://www.w3.org/WAI/WCAG22/Techniques/html/H78)
	- [H79：在数据表中结合其外层的单元格和关联的表头单元格，通过链接文本标识链接目的](https://www.w3.org/WAI/WCAG22/Techniques/html/H79)
	- [H81：在嵌套列表中结合列表所嵌套在的父列表项，通过链接文本标识链接目的](https://www.w3.org/WAI/WCAG22/Techniques/html/H81)
- [G91：提供描述链接目的的链接文本](https://www.w3.org/WAI/WCAG22/Techniques/general/G91) **并且** 语义化地指示链接：
	- [PDF11：在 PDF 文档中通过使用 Link 注释和 /Link 结构元素来提供链接和链接文本](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF11)
	- [PDF13：在 PDF 文档中通过使用 /Alt 项为链接提供替换文本](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF13)

在一组网页中，存在不止一种方式来定位某个网页，除非该网页是某个流程的结果或其中一个步骤。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- 使用以下两种或更多技术：
	- [G125：提供导航到相关网页的链接](https://www.w3.org/WAI/WCAG22/Techniques/general/G125)
	- [G64：提供目录（Table of Contents）](https://www.w3.org/WAI/WCAG22/Techniques/general/G64)
	- [G63：提供网站地图（site map）](https://www.w3.org/WAI/WCAG22/Techniques/general/G63)
	- [G161：提供搜索功能以帮助用户查找内容](https://www.w3.org/WAI/WCAG22/Techniques/general/G161)
	- [G126：提供指向所有其他网页的链接列表](https://www.w3.org/WAI/WCAG22/Techniques/general/G126)
	- [G185：从首页链接到网站上的所有页面](https://www.w3.org/WAI/WCAG22/Techniques/general/G185)

任何可通过键盘操作的用户界面都具有一种键盘焦点指示器可见的操作模式。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G149：使用在接收到焦点时由用户代理高亮显示的交互界面组件](https://www.w3.org/WAI/WCAG22/Techniques/general/G149)
- [C15：使用 CSS 在用户界面组件接收到焦点时更改其呈现形式](https://www.w3.org/WAI/WCAG22/Techniques/css/C15)
- [G165：为平台使用默认焦点指示器，以便高可见性的默认焦点指示器能够延续使用](https://www.w3.org/WAI/WCAG22/Techniques/general/G165)
- [G195：使用作者提供的、可见的聚焦指示器](https://www.w3.org/WAI/WCAG22/Techniques/general/G195)
- [C40：创建双色焦点指示器以确保与所有组件具有足够的对比度](https://www.w3.org/WAI/WCAG22/Techniques/css/C40)
- [C45：使用 CSS :focus-visible 提供键盘焦点指示](https://www.w3.org/WAI/WCAG22/Techniques/css/C45)
- [SCR31：使用脚本更改获得焦点的元素的背景颜色或边框](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR31)

- [F55：由于在使用脚本在获得焦点时移除焦点，导致成功准则 2.1.1、2.4.7、2.4.13 和 3.2.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F55)
- [F78：由于设置元素外边框和边框的样式，导致移除或使视觉聚焦指示器不可见，进而使成功准则 1.4.11、2.4.7 和 2.4.13 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F78)

提供有关用户在一组网页中当前所处位置的信息。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G65：提供面包屑导航屑（breadcrumb trail）](https://www.w3.org/WAI/WCAG22/Techniques/general/G65)
- [G63：提供网站地图](https://www.w3.org/WAI/WCAG22/Techniques/general/G63)
- [G128：在导航栏中指示当前位置](https://www.w3.org/WAI/WCAG22/Techniques/general/G128)
- [G127：标识网页与更大网页集合的关系](https://www.w3.org/WAI/WCAG22/Techniques/general/G127)

提供一种机制，允许仅从链接文本本身标识每个链接的目的，除非链接目的对广大用户而言本就是含糊的。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [ARIA8：为链接目的使用 aria-label](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8)
- [G91：提供描述链接目的的链接文本](https://www.w3.org/WAI/WCAG22/Techniques/general/G91)
- [H30：为 anchor（a）元素提供描述链接目的的链接文本](https://www.w3.org/WAI/WCAG22/Techniques/html/H30)
- [H24：为图像热区地图的 area 元素提供替代文本](https://www.w3.org/WAI/WCAG22/Techniques/html/H24)
- 允许用户使用以下技术之一选择简短或较长的链接文本：
	- [G189：在网页开头附近提供一个更改链接文本的控件](https://www.w3.org/WAI/WCAG22/Techniques/general/G189)
	- [SCR30：使用脚本来更改链接文本](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR30)
- 使用以下技术之一提供链接目的的补充描述：
	- [C7：使用 CSS 隐藏链接文本的一部分](https://www.w3.org/WAI/WCAG22/Techniques/css/C7)
- 使用以下技术之一语义化地指示链接：
	- [PDF11：在 PDF 文档中通过使用 Link 注释和 /Link 结构元素来提供链接和链接文本](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF11)
	- [PDF13：在 PDF 文档中通过使用 /Alt 项为链接提供替换文本](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF13)

- [F84：由于使用了“点击这里”或“更多”等非特指的链接，且没有提供更改链接文本为具体文本的机制，导致成功准则 2.4.9 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F84)
- [F89：由于未给作为链接中唯一内容的图像提供可访问名称，导致成功准则 2.4.4、2.4.9 和 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F89)

使用小节标题来组织内容。

*注意 1：*“标题”在普通意义上使用，包括标题以及在不同类型的内容中添加标题的其他方式。

*注意 2：*此成功准则涵盖了写作中的小节，而不是用户界面组件。用户界面组件在成功准则 4.1.2 下涵盖。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G141：使用标题来组织页面](https://www.w3.org/WAI/WCAG22/Techniques/general/G141)
- [H69：在内容的每个小节的开头提供标题元素](https://www.w3.org/WAI/WCAG22/Techniques/html/H69)

当用户界面组件接收到键盘焦点时，该组件不会因为作者创建的内容而被完全隐藏。

*注意 1：*在可配置界面中内容可由用户重新定位的情况下，只有用户可移动内容的初始位置才会被考虑用于测试和符合此成功准则。

*注意 2：*由 *用户* 打开的内容可能会遮挡接收到焦点的组件。如果用户可以透露被聚焦的组件而不需要推进键盘焦点，则该获得焦点的组件不被视为因为作者创建的内容而在视觉上被隐藏。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [C43：使用 CSS scroll-padding 来取消遮挡内容](https://www.w3.org/WAI/WCAG22/Techniques/css/C43)

当用户界面组件接收到键盘焦点时，该组件没有任何部分被作者创建的内容所隐藏。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [C43：使用 CSS scroll-padding 来取消遮挡内容](https://www.w3.org/WAI/WCAG22/Techniques/css/C43)

当键盘焦点指示器可见时，焦点指示器的一个区域满足以下所有条件：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G195：使用作者提供的、可见的聚焦指示器](https://www.w3.org/WAI/WCAG22/Techniques/general/G195)
- [C40：创建双色焦点指示器以确保与所有组件具有足够的对比度](https://www.w3.org/WAI/WCAG22/Techniques/css/C40)
- [C41：在组件内创建强焦点指示器](https://www.w3.org/WAI/WCAG22/Techniques/css/C41)

- [F55：由于在使用脚本在获得焦点时移除焦点，导致成功准则 2.1.1、2.4.7、2.4.13 和 3.2.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F55)
- [F78：由于设置元素外边框 and 边框的样式，导致移除或使视觉聚焦指示器不可见，进而使成功准则 1.4.11、2.4.7 和 2.4.13 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F78)

所有使用多点或基于轨迹的手势进行操作的功能，都可以使用单个指针而不需要基于轨迹的手势来操作，除非多点或基于轨迹的手势是必不可少的。

*注意：*此要求适用于解释指针操作的网页内容（即，这不适用于操作用户代理或辅助技术所需的动作）。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G215：提供控件以实现与基于轨迹或多点手势相同的结果](https://www.w3.org/WAI/WCAG22/Techniques/general/G215)
- [G216：为控制滑块提供单点激活](https://www.w3.org/WAI/WCAG22/Techniques/general/G216)

- [F105：由于通过基于轨迹的手势提供功能而没有简单的指针替代方案，导致成功准则 2.5.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F105)

对于可以使用单个指针操作的功能，以下至少有一项为真：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G210：确保可以取消拖放操作](https://www.w3.org/WAI/WCAG22/Techniques/general/G210)
- [G212：使用原生控件以确保功能在弹起事件（up-event）上触发](https://www.w3.org/WAI/WCAG22/Techniques/general/G212)
- 仅在从控件上移开触摸时才触发触摸事件（潜在未来技术）

- [F101：由于在按下事件（down-event）上激活控件而导致成功准则 2.5.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F101)

对于包含具有文本或图像文本的标签的用户界面组件，其名称包含视觉上呈现的文本。

*注意：*最佳实践是在名称开头包含标签的文本。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G208：将可见标签的文本包含在可访问名称（accessible name）的一部分中](https://www.w3.org/WAI/WCAG22/Techniques/general/G208)
- [G211：使可访问名称与可见标签相匹配](https://www.w3.org/WAI/WCAG22/Techniques/general/G211)

- [F96：由于可访问名称未包含可见标签文本而导致失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F96)
- [F111：由于具有可见标签文本但没有可访问名称的控件，导致成功准则 1.3.1、2.5.3 和 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F111)
- 可访问名称包含可见标签文本，但可见标签的单词与可见标签文本中的顺序不一致（潜在未来技术）
- 可访问名称包含可见标签文本，但夹杂了一个或多个其他单词（潜在未来技术）

可通过设备动作或用户动作操作的功能，也应能通过用户界面组件进行操作，且应能禁用对该动作的响应以防止意外触发，除非：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G213：为动作激活的输入提供常规控件和应用程序设置](https://www.w3.org/WAI/WCAG22/Techniques/general/G213)
- GXXX：支持允许用户禁用动作启用的系统级功能

- [F106：由于无法停用动作触发而导致失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F106)
- FXXX：由于破坏或禁用允许用户禁用动作启用的系统级功能，导致成功准则 2.5.4 失败

指针输入的触控目标大小至少为 44 x 44 CSS 像素，除非：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- 确保触控目标至少为 44 x 44 CSS 像素

- 由于目标小于 44 x 44 CSS 像素而导致成功准则 2.5.5 失败

Web 内容不应限制平台可用输入机制的使用，除非限制是必不可少的、为确保内容安全所必需的，或者是为了尊重用户设置。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- 在 Javascript 中仅使用高级的、与输入无关的事件处理程序，例如 `focus`、`blur`、`click`（潜在未来技术）
- 在 Javascript 中同时为键盘/类键盘和指针输入注册事件处理程序；参见 [Pointer Events Level 2 中的示例 1](https://www.w3.org/TR/pointerevents2/#example_1)（潜在未来技术）

- [F98：由于在触摸屏设备上交互被限制为仅限触摸而导致失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F98)

所有使用拖动运动进行操作的功能都可以通过单个指针实现而无需拖动，除非拖动是必不可少的，或者该功能由用户代理决定且未被作者修改。

*注意：*此要求适用于解释指针动作的网页内容（即，这不适用于操作用户代理或辅助技术所需的动作）。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G219：确保对操作内容的拖动运动存在替代方案](https://www.w3.org/WAI/WCAG22/Techniques/general/G219)

- [F108：由于没有提供不需要拖动运动的单指针方法，导致成功准则 2.5.7 拖动运动失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F108)

指针输入的触控目标大小至少为 24 x 24 CSS 像素，除非：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)
- [C42：使用 min-height 和 min-width 确保足够的触控目标间距](https://www.w3.org/WAI/WCAG22/Techniques/css/C42)

信息和用户界面的操作必须是可理解的。

每个网页的默认人类语言都可以通过程序确定。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [H57：在 HTML 元素上使用 language（lang）属性](https://www.w3.org/WAI/WCAG22/Techniques/html/H57)
- [PDF16：在 PDF 文档的文档目录中通过使用 /Lang 项来设置默认语言](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF16)
- [PDF19：在 PDF 文档中通过使用 Lang 项来指定段落或短语的语言](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF19)

内容中每个段落或短语的人类语言都可以通过程序确定，但专有名词、技术术语、语种不定的词汇以及已成为紧邻文本方言一部分的词汇或短语除外。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [H58：使用语言属性来标识人类语言的变化](https://www.w3.org/WAI/WCAG22/Techniques/html/H58)
- [PDF19：在 PDF 文档中通过使用 Lang 项来指定段落或短语的语言](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF19)

存在一种机制，用于识别以不寻常或受限方式使用的词汇或短语的特定定义，包括成语和行业术语（行业黑话）。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G101：网页中首次出现以不寻常或受限方式使用的词汇或短语时提供其定义](https://www.w3.org/WAI/WCAG22/Techniques/general/G101)，使用以下技术之一：
	- [G55：链接到定义](https://www.w3.org/WAI/WCAG22/Techniques/general/G55)
		- [H40：使用描述列表（dl）](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)
	- [G112：使用行内定义](https://www.w3.org/WAI/WCAG22/Techniques/general/G112)
		- [H54：使用 dfn 元素标识词汇的定义实例](https://www.w3.org/WAI/WCAG22/Techniques/html/H54)
- [G101：网页中每次出现以不寻常或受限方式使用的词汇或短语时提供其定义](https://www.w3.org/WAI/WCAG22/Techniques/general/G101)，使用以下技术之一：
	- [G55：链接到定义](https://www.w3.org/WAI/WCAG22/Techniques/general/G55)
		- [H40：使用描述列表](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)
	- [G62：提供词汇表](https://www.w3.org/WAI/WCAG22/Techniques/general/G62)
	- [G70：提供搜索在线词典的功能](https://www.w3.org/WAI/WCAG22/Techniques/general/G70)

- [G101：网页中每次出现以不寻常或受限方式使用的词汇或短语时提供其定义](https://www.w3.org/WAI/WCAG22/Techniques/general/G101)，使用以下技术之一：
	- [G55：链接到定义](https://www.w3.org/WAI/WCAG22/Techniques/general/G55)
		- [H40：使用描述列表](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)
	- [G112：使用行内定义](https://www.w3.org/WAI/WCAG22/Techniques/general/G112)
		- [H54：使用 dfn 元素标识词汇的定义实例](https://www.w3.org/WAI/WCAG22/Techniques/html/H54)

存在用于识别缩写形式的展开形式或含义的机制。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G102：网页中首次出现缩写时提供其展开形式或说明](https://www.w3.org/WAI/WCAG22/Techniques/general/G102)，使用以下技术之一：
	- [G97：在缩写的紧前或紧后提供该缩写的首次展开形式](https://www.w3.org/WAI/WCAG22/Techniques/general/G97)
	- [G55：链接到定义](https://www.w3.org/WAI/WCAG22/Techniques/general/G55)
	- [PDF8：在 PDF 中通过结构元素的 E 项提供缩写的定义](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF8)
- [G102：网页中每次出现缩写时都提供其展开形式或说明](https://www.w3.org/WAI/WCAG22/Techniques/general/G102)，使用以下技术之一：
	- [G55：链接到定义](https://www.w3.org/WAI/WCAG22/Techniques/general/G55)
	- [G62：提供词汇表](https://www.w3.org/WAI/WCAG22/Techniques/general/G62)
	- [G70：提供搜索在线词典的功能](https://www.w3.org/WAI/WCAG22/Techniques/general/G70)
	- [PDF8：在 PDF 中通过结构元素的 E 项提供缩写的定义](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF8)

- [G102：网页中每次出现缩写时都提供其展开形式或说明](https://www.w3.org/WAI/WCAG22/Techniques/general/G102)，使用以下技术之一：
	- [G55：链接到定义](https://www.w3.org/WAI/WCAG22/Techniques/general/G55)
	- [PDF8：在 PDF 中通过结构元素的 E 项提供缩写的定义](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF8)

在移除专有名词和称谓后，当文本所需的阅读能力高于初中教育水平时，应提供辅助内容或不需要高于初中教育水平阅读能力即可理解的版本。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G86：提供初中教育阅读水平的人能够理解的文本摘要](https://www.w3.org/WAI/WCAG22/Techniques/general/G86)
- [G103：提供视觉插图、图片和符号以帮助解释观点、事件和流程](https://www.w3.org/WAI/WCAG22/Techniques/general/G103)
- [G79：提供文本的口语朗读版本](https://www.w3.org/WAI/WCAG22/Techniques/general/G79)
- [G153：使文本更易于阅读](https://www.w3.org/WAI/WCAG22/Techniques/general/G153)
- [G160：提供必须理解才能使用该内容的信息、概念和流程的手语版本](https://www.w3.org/WAI/WCAG22/Techniques/general/G160)

*注意：*不同的网站可能以不同的方式解决这一成功准则。内容的音频版本可能对某些用户有所帮助。对于某些聋哑人，网页的手语版本可能比书面语言版本更容易理解，因为手语可能是他们的第一语言。有些网站可能会决定两者都提供或提供其他组合。没有任何一种技术可以帮助所有遇到困难的用户。因此，为试图使网站更具可访问性的作者提供了不同的充分技术。特定的网站可以使用上述任何编号技术或组合，工作组认为这是充分的。

存在一种机制，用于识别在上下文中如果不了解其发音就会产生歧义的词汇的特定发音。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G120：在单词紧后提供发音](https://www.w3.org/WAI/WCAG22/Techniques/general/G120)
- [G121：链接到发音](https://www.w3.org/WAI/WCAG22/Techniques/general/G121)
- [G62：提供包含词汇发音信息的词汇表](https://www.w3.org/WAI/WCAG22/Techniques/general/G62)，适用于内容中具有独特发音且其含义取决于发音的词汇
- [G163：使用可以关闭的标准变音符号](https://www.w3.org/WAI/WCAG22/Techniques/general/G163)
- [H62：使用 ruby 元素（注音）](https://www.w3.org/WAI/WCAG22/Techniques/html/H62)

当任何用户界面组件获得焦点时，它不会引发上下文的变化。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G107：使用“激活”（activate）而不是“聚焦”（focus）作为引发上下文变化的触发器](https://www.w3.org/WAI/WCAG22/Techniques/general/G107)

*注意：*内容的改变不一定就是上下文的变化。如果内容的改变不同时是上下文的变化，则自动满足此成功准则。

- [F55：由于在使用脚本在获得焦点时移除焦点，导致成功准则 2.1.1、2.4.7、2.4.13 和 3.2.1 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F55)

更改任何用户界面组件的设置不会自动导致上下文发生变化，除非用户在使用该组件之前已被告知了该行为。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G80：提供提交按钮来启动上下文的变化](https://www.w3.org/WAI/WCAG22/Techniques/general/G80)，使用以下技术之一：
	- [H32：提供提交按钮](https://www.w3.org/WAI/WCAG22/Techniques/html/H32)
	- [H84：在 select 元素中配合使用按钮来执行操作](https://www.w3.org/WAI/WCAG22/Techniques/html/H84)
	- [PDF15：在 PDF 表单中提供带有提交表单操作的提交按钮](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF15)
- [G13：在对会导致上下文变化的表单控件进行更改之前，描述将会发生什么](https://www.w3.org/WAI/WCAG22/Techniques/general/G13)
- [SCR19：在 select 元素上使用 onchange 事件而不引起上下文变化](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR19)

*注意：*内容的改变不一定就是上下文的变化。如果内容的改变不同时是上下文的变化，则自动满足此成功准则。

- [F36：由于在表单的最后一个字段被赋予值时自动提交表单并呈现新内容而没有事先警告，导致成功准则 3.2.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F36)
- [F37：由于在单选按钮、复选框或选择列表的选择发生更改时，在没有事先警告的情况下启动新窗口，导致成功准则 3.2.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F37)

在一组网页中重复出现的导航机制，每次重复时都会以相同的相对顺序出现，除非用户发起了更改。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G61：每次重复出现时以相同的相对顺序呈现重复组件](https://www.w3.org/WAI/WCAG22/Techniques/general/G61)

在一组网页中具有相同功能的组件应当被一致地标识。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G197：对于具有相同功能的内容，一致地使用标签、名称和替代文本](https://www.w3.org/WAI/WCAG22/Techniques/general/G197) **并且** 遵循[成功准则 1.1.1 的充分技术](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content#techniques)和[成功准则 4.1.2 的充分技术](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value#techniques)来提供标签、名称和替代文本

*注意：*

“一致”的替代文本并不总是“完全相同”。例如，网页底部可能有一个指向下一网页的图形箭头。替代文本可能会说“去往第 4 页”。自然，在下一网页上重复使用这个完全相同的替代文本是不妥当的。说“去往第 5 页”会更合适。尽管这些替代文本并非完全相同，但它们是一致的，因此满足这一成功准则。

单个非文本内容项可能会用于提供不同的功能。在这种情况下，不同的替代文本是必要的且应被使用。这在复选标记、交叉标记和交通标志等图标的使用中很常见。它们的功能可能根据网页的上下文而有所不同。复选标记图标可能用作“已批准”、“已完成”或“已包含”等，具体取决于情况。在所有网页上使用“复选标记”作为替代文本并不能帮助用户理解该图标的功能。当相同的非文本内容提供多种功能时，可以使用不同的替代文本。

- [F31：由于在一组网页中的不同网页上为相同功能使用两个不同的标签，导致成功准则 3.2.4 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F31)

上下文的变化仅在用户请求时启动，或提供关闭此类变化的机制。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G76：提供一种请求更新内容而不是自动更新的机制](https://www.w3.org/WAI/WCAG22/Techniques/general/G76)

- [SVR1：在服务器端而不是在客户端实现自动重定向](https://www.w3.org/WAI/WCAG22/Techniques/server-side-script/SVR1)
- [G110：使用即时的客户端重定向](https://www.w3.org/WAI/WCAG22/Techniques/general/G110)，使用以下技术之一：
	- [H76：使用 meta 刷新（refresh）创建即时客户端重定向](https://www.w3.org/WAI/WCAG22/Techniques/html/H76)

- 包含弹出窗口，使用以下技术之一：
	- [H83：使用 target 属性根据用户请求打开新窗口并在链接文本中进行指示](https://www.w3.org/WAI/WCAG22/Techniques/html/H83)
	- [SCR24：使用渐进式增强根据用户请求打开新窗口](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR24)

- [SCR19：在 select 元素上使用 onchange 事件而不引起上下文变化](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR19)

- [F60：由于用户在输入字段中输入文本时启动新窗口，导致成功准则 3.2.5 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F60)
- [F61：由于自动更新引起主要内容的完全改变且用户无法在内容中禁用它，导致成功准则 3.2.5 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F61)
- [F9：由于用户从表单元素中移开焦点时改变了上下文，导致成功准则 3.2.5 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F9)
- [F22：由于打开非用户请求的窗口，导致成功准则 3.2.5 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F22)
- [F52：由于在新页面加载后立即打开新窗口，导致成功准则 3.2.5 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F52)
- [F40：由于使用带有时间限制的 meta 重定向而导致失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F40)
- [F41：由于使用 meta 刷新重新加载页面导致成功准则 2.2.1、2.2.4 和 3.2.5 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F41)

如果网页包含以下任何帮助机制，并且这些机制在一组网页中的多个网页上重复出现，它们将相对于其他页面内容以相同的顺序出现，除非由用户发起更改：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G220：在一致的位置提供“联系我们”链接](https://www.w3.org/WAI/WCAG22/Techniques/general/G220)

- 不一致的帮助位置

当内容需要用户输入时，应提供标签或说明。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G131：提供描述性标签](https://www.w3.org/WAI/WCAG22/Techniques/general/G131) **以及** 以下技术之一：
	- [ARIA1：使用 aria-describedby 属性为用户界面控件提供描述性标签](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA1)
	- [ARIA9：使用 aria-labelledby 拼接多个文本节点的标签](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA9)
	- [ARIA17：使用分组角色标识相关的表单控件](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA17)
	- [G89：提供预期的数据格式和示例](https://www.w3.org/WAI/WCAG22/Techniques/general/G89)
	- [G184：在表单或一组字段的开头提供描述必要输入的文本指示](https://www.w3.org/WAI/WCAG22/Techniques/general/G184)
	- [G162：对齐定位标签以最大化关系的可预测性](https://www.w3.org/WAI/WCAG22/Techniques/general/G162)
	- [G83：提供文本描述以标识未完成的必填字段](https://www.w3.org/WAI/WCAG22/Techniques/general/G83)
	- [H90：使用 label 或 legend 标识必填的表单控件](https://www.w3.org/WAI/WCAG22/Techniques/html/H90)
	- [PDF5：在 PDF 表单中标识必填的表单控件](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF5)
- [H44：使用 label 元素将文本标签与表单控件相关联](https://www.w3.org/WAI/WCAG22/Techniques/html/H44)
- [PDF10：在 PDF 文档中为交互式表单控件提供标签](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF10)
- [H71：使用 fieldset 和 legend 元素为表单控件组提供说明说明](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
- [G167：使用相邻的按钮来标注字段的目的](https://www.w3.org/WAI/WCAG22/Techniques/general/G167)

*注意：*上述列表末尾的技术应被视为“万不得已”的选择，且仅在其他技术无法应用于页面时使用。较早的技术是首选，因为它们增加了对更广泛用户群体的可访问性。

- [F82：由于在视觉上格式化了一组电话号码字段但没有包含文本标签，导致成功准则 3.3.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F82)

提供上下文敏感的帮助。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G89：提供预期的数据格式和示例](https://www.w3.org/WAI/WCAG22/Techniques/general/G89)
- [G184：在表单或一组字段的开头提供描述必要输入的文本指示](https://www.w3.org/WAI/WCAG22/Techniques/general/G184)

对于之前由用户输入或提供给用户的、在同一流程中需要再次输入的信息，应为：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G221：提供流程中先前步骤中的数据](https://www.w3.org/WAI/WCAG22/Techniques/general/G221)
- 不重复请求相同的信息（潜在未来技术）

在身份验证流程的任何步骤中，不应要求进行认知功能测试（例如记住密码或解决谜题），除非该步骤提供了以下至少一项：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G218：电子邮件链接身份验证](https://www.w3.org/WAI/WCAG22/Techniques/general/G218)
- [H100：提供正确标记的电子邮件和密码输入框](https://www.w3.org/WAI/WCAG22/Techniques/html/H100)
- 提供 WebAuthn 作为用户名/密码的替代方案（潜在未来技术）
- 使用 OAuth 提供第三方登录（潜在未来技术）
- 使用两种技术提供双因子身份验证（潜在未来技术）

- [F109：由于阻止以相同格式重新输入密码或验证码，导致成功准则 3.3.8 和 3.3.9 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F109)

在身份验证流程的任何步骤中，不应要求进行认知功能测试（例如记住密码或解决谜题），除非该步骤提供了以下至少一项：

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [G218：电子邮件链接身份验证](https://www.w3.org/WAI/WCAG22/Techniques/general/G218)
- [H100：提供正确标记的电子邮件和密码输入框](https://www.w3.org/WAI/WCAG22/Techniques/html/H100)
- 提供 WebAuthn 作为用户名/密码的替代方案（潜在未来技术）
- 使用 OAuth 提供第三方登录（潜在未来技术）
- 使用两种技术提供双因子身份验证（潜在未来技术）

- [F109：由于阻止以相同格式重新输入密码或验证码，导致成功准则 3.3.8 和 3.3.9 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F109)

内容必须足够健壮，以便可以由各种用户代理（包括辅助技术）进行解释。

对于所有用户界面组件（包括但不限于：表单元素、链接和脚本生成的组件），名称和角色可以通过程序确定；可以由用户设置的状态、属性和值可以通过程序进行设置；并且辅助技术（包括用户代理）可以获取这些项的变化通知。

*注意：*此成功准则主要针对开发或编写自己用户界面组件脚本的 Web 作者。例如，标准 HTML 控件如果按照规范使用，就已经符合了此成功准则。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- 暴露名称和角色，允许直接设置用户可设置的属性，并使用以下技术之一提供更改通知：
	- [ARIA16：使用 aria-labelledby 为用户界面控件提供名称](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16)

- [G135：使用技术的辅助功能 API（Accessibility API）特性来暴露名称和角色，允许直接设置用户可设置的属性，并提供更改通知](https://www.w3.org/WAI/WCAG22/Techniques/general/G135)，使用以下一种或多种技术：
	- [PDF10：在 PDF 文档中为交互式表单控件提供标签](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF10)
	- [PDF12：在 PDF 文档中为表单字段提供名称、角色、值信息](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF12)

- [G10：使用支持运行用户代理的平台的辅助功能 API 特性的技术来创建组件，以暴露名称和角色，允许直接设置用户可设置的属性，并提供更改通知](https://www.w3.org/WAI/WCAG22/Techniques/general/G10)，使用以下一种或多种技术：
	- [ARIA4：使用 WAI-ARIA 角色暴露用户界面组件的角色](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4)
	- [ARIA5：使用 WAI-ARIA 状态和属性属性暴露用户界面组件的状态](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5)
	- [ARIA16：使用 aria-labelledby 为用户界面控件提供名称](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16)

- [F59：由于在 HTML 中使用脚本使 div 或 span 成为用户界面控件而未为控件提供角色，导致成功准则 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F59)
- [F15：由于实现未对该技术使用辅助功能 API 的自定义控件，或者做得不完整，导致成功准则 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F15)
- [F20：由于非文本内容发生变化时未更新替代文本而导致成功准则 1.1.1 和 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F20)
- [F42：模拟链接时导致成功准则 1.3.1、2.1.1、2.1.3 或 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F42)
- [F68：由于用户界面控件没有程序化确定的名称导致成功准则 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F68)
- [F79：由于用户界面组件的聚焦状态无法通过程序确定或无法获取焦点状态变化的通知，导致成功准则 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F79)
- [F86：由于没有为多部分表单字段的每个部分提供名称（例如美国电话号码），导致成功准则 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F86)
- [F89：由于未给作为链接中唯一内容的图像提供可访问名称，导致成功准则 2.4.4、2.4.9 和 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F89)
- [F111：由于具有可见标签文本但没有可访问名称的控件，导致成功准则 1.3.1、2.5.3 和 4.1.2 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F111)

在使用标记语言实现的内容中，可以通过角色或属性程序化地确定状态消息，以便辅助技术无需接收焦点即可将其呈现给用户。

注意：如果能满足成功准则，其他技术也可能是充分的。参见 [理解技术。](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)

- [ARIA22：使用 role=status 来呈现状态消息](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22)，结合以下任意技术：
	- [G199：数据成功提交时提供成功反馈](https://www.w3.org/WAI/WCAG22/Techniques/general/G199)

- [ARIA19：使用 ARIA role=alert 或 Live Regions 标识错误](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA19)，结合以下任意技术：
	- [G83：提供文本描述以标识未完成的必填字段](https://www.w3.org/WAI/WCAG22/Techniques/general/G83)
	- [G84：当用户提供不在允许值列表中的信息时，提供文本描述](https://www.w3.org/WAI/WCAG22/Techniques/general/G84)
	- [G85：当用户输入超出必填格式或数值范围时，提供文本描述](https://www.w3.org/WAI/WCAG22/Techniques/general/G85)
	- [G177：提供建议的更正文本](https://www.w3.org/WAI/WCAG22/Techniques/general/G177)
	- [G194：为文本输入提供拼写检查和建议](https://www.w3.org/WAI/WCAG22/Techniques/general/G194)

*注意：*前述常规技术中的示例并非都使用状态消息来向用户传达警告或错误。只有在*不*发生上下文变化的情况下，才需要 "alert" 角色。

- [ARIA23：使用 role=log 标识顺序信息更新](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA23)
- 使用 role="progressbar"（未来链接）
- [ARIA22：使用 role=status 来呈现状态消息](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22) **以及** [G193：网页中由助手提供帮助](https://www.w3.org/WAI/WCAG22/Techniques/general/G193)

- [F103：由于提供无法通过角色或属性程序化确定的状态消息，导致成功准则 4.1.3 失败](https://www.w3.org/WAI/WCAG22/Techniques/failures/F103)
- 在非重要且非紧急的内容上使用 role="alert" 或 aria-live="assertive"（未来链接）

---

贡献

我们欢迎反馈和建议：

- 本资源 — [报告错误（report bugs）](https://github.com/w3c/wai-wcag-quickref/issues/) 并直接向 [Github 仓库](https://github.com/w3c/wai-wcag-quickref) 贡献
- [在 WCAG 2 文档中发表评论的指示](https://www.w3.org/WAI/standards-guidelines/wcag/commenting/)
