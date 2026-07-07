---
title: 组合框模式 (Combobox Pattern)
slug: 组合框模式-combobox-pattern
summary: 来自国际标准组织：W3C Web 可访问性倡议 (WAI) 的免费在线可访问性资源。
type: knowledge
status: published
tags: ["可访问性", "可用性", "设计模式", "设计指南", "AI应用"]
domain: ux
source_author: W3C Web Accessibility Initiative (WAI)
source_url: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
# published_at:
related: []
---
组合框模式 (Combobox Pattern)

## 关于此模式

[组合框 (combobox)](https://w3c.github.io/aria/#combobox) 是一种具有关联弹出窗口的输入组件。该弹出窗口允许用户从一个集合中为输入框选择一个值。该弹出窗口可以是一个 [列表框 (listbox)](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)、[网格 (grid)](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)、[树 (tree)](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/) 或 [对话框 (dialog)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)。

在某些实现中，弹出窗口会呈现允许的值，而在其他实现中，弹出窗口会呈现建议的值。许多实现还包括第三个可选元素——紧邻组合框的图形化“打开”按钮，用于指示弹出窗口的可用性。如果建议可用，激活该“打开”按钮会显示弹出窗口。

组合框模式支持几种可选行为。对交互影响最大的是文本输入。有些组合框允许用户在组合框中输入和编辑文本，而另一些则不允许。如果组合框不支持文本输入，它被称为“仅限选择（select-only）”组合框，这意味着用户设置其值的唯一方法是在弹出窗口中选择一个值。例如，在某些浏览器中，具有 `size="1"` 的 HTML `select` 元素在辅助技术中被呈现为组合框。相反，如果组合框支持文本输入，它被称为“可编辑（editable）”组合框。可编辑组合框既可以允许用户输入任何任意值，也可以将其值限制在一组离散的允许值中，在这种情况下，键入输入的作用是过滤弹出窗口中呈现的建议。

弹出窗口默认是隐藏的，即默认状态是折叠的（collapsed）。触发展开（即显示弹出窗口）的条件因具体实现而异。触发展开的一些可能条件包括：

- 按下下箭头键或激活“打开”按钮时显示。可选地，如果组合框是可编辑的且包含与允许值不匹配的字符串，则不展开。
- 当组合框获得焦点时显示，即使组合框是可编辑且为空的。
- 如果组合框是可编辑的，则只有在组合框中键入了一定数量 of 字符，且这些字符与其中一个建议值的一部分相匹配时，才会显示弹出窗口。

组合框组件在以下两种场景中对于获取用户输入非常有用：

1. 值必须是预定义的一组允许值之一，例如，位置字段必须包含有效的位置名称。请注意，列表框（listbox）和菜单按钮（menu button）模式在这一场景中也非常有用；下文将描述组合框与替代模式之间的差异。
2. 允许输入任意值，但向用户建议可能的值是有利的。例如，搜索字段可以建议相似的或之前的搜索以节省用户的时间。

弹出窗口呈现的可能值的性质以及它们的呈现方式被称为自动完成（autocomplete）行为。组合框可以具有以下四种自动完成形式之一：

1. **无自动完成（No autocomplete）：** 组合框是可编辑的，当触发弹出窗口时，无论在组合框中键入什么字符，它包含的建议值都是相同的。例如，弹出窗口建议一组最近输入的值，并且建议不会随着用户的键入而改变。
2. **带手动选择的列表自动完成（List autocomplete with manual selection）：** 当触发弹出窗口时，它会呈现建议值。如果组合框是可编辑的，则建议值会补全或在逻辑上对应于在组合框中键入的字符。除非用户在弹出窗口中选择一个值，否则用户键入的字符字符串将成为组合框的值。
3. **带自动选择的列表自动完成（List autocomplete with automatic selection）：** 组合框是可编辑的，当触发弹出窗口时，它会呈现补全或在逻辑上对应于组合框中键入字符的建议值，并且第一个建议会被自动高亮显示为已选择。当组合框失去焦点时，自动选择的建议将成为组合框的值，除非用户选择其他建议或更改组合框中的字符字符串。
4. **带行内自动完成的列表（List with inline autocomplete）：** 这与带自动选择的列表相同，但多了一个附加功能。已选择建议中未被用户键入的部分（即补全字符串）会以行内形式出现在组合框输入光标的后面。行内补全字符串会被视觉高亮并处于选中状态。

如果组合框是可编辑的并且具有任何形式的列表自动完成，弹出窗口可能会随着用户的键入而出现和消失。例如，如果用户键入一个包含两个字符的字符串，触发了五个建议的显示，但随后键入了第三个字符，形成了一个没有任何匹配建议的字符串，弹出窗口可能会关闭，并且（如果存在的话）行内补全字符串会消失。

另外两个在视觉上同样紧凑、并允许用户从一组离散选项中做出单项选择的组件是 [列表框 (listbox)](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) 和 [菜单按钮 (menu button)](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)。将组合框与列表框和菜单按钮区分开来的一个特征是，用户的选择可以作为可编辑字段中的值呈现，这使用户能够选择部分或全部值以复制到剪贴板。组合框和菜单按钮可以被实现为：用户可以浏览允许的选择集而不会丢失之前做出的选择。也就是说，用户可以在组合框弹出窗口或菜单中导航可用选择集，然后按下 Escape 键，这将关闭弹出窗口或菜单而不更改之前的输入。相比之下，在单选列表框中在各个选项之间导航会立即更改其值，并且 Escape 键不提供撤销机制。组合框和列表框可以使用 `aria-required="true"` 标记为必填，并且它们具有与其值不同的可访问名称（accessible name）。因此，当辅助技术用户在组合框或列表框处于默认状态下对其进行聚焦时，他们可以感知到该组件的名称和值。然而，菜单按钮不能被标记为必填，虽然它有可访问名称，但它没有值，因此不适合在其折叠状态下传达用户的选择。

![](https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-combobox.svg)

## 示例

- [仅限选择组合框 (Select-Only Combobox)](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/)：一种没有文本输入的单选组合框，在功能上类似于 HTML 的 `select` 元素。
- [具有列表和行内自动完成功能的可编辑组合框 (Editable Combobox with Both List and Inline Autocomplete)](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-both/)：一种可编辑组合框，演示了被称为“带行内自动完成的列表”的自动完成行为。
- [具有列表自动完成功能的可编辑组合框 (Editable Combobox with List Autocomplete)](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/)：一种可编辑组合框，演示了被称为“带手动选择的列表”的自动完成行为。
- [无自动完成功能的可编辑组合框 (Editable Combobox Without Autocomplete)](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-none/)：一种可编辑组合框，演示了与 `aria-autocomplete=none` 关联的行为。
- [具有网格弹出窗口的可编辑组合框 (Editable Combobox with Grid Popup)](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/grid-combo/)：一种可编辑组合框，在网格中呈现建议，使用户能够导航关于每个建议的描述性信息。
- [日期选择器组合框 (Date Picker Combobox)](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-datepicker/)：一种可编辑的日期输入组合框，它会打开一个包含日历网格以及用于按月和年导航的按钮的对话框。

## WAI-ARIA 角色、状态和属性

- 用作输入并显示组合框值的元素具有 [combobox (组合框)](https://w3c.github.io/aria/#combobox) 角色。
- 组合框元素具有 [aria-controls](https://w3c.github.io/aria/#aria-controls) 属性，其值设为引用充当弹出窗口的元素。请注意，`aria-controls` 仅在弹出窗口可见时才需要设置。然而，引用一个不可见的元素也是有效的。
- 弹出窗口是一个具有 [listbox (列表框)](https://w3c.github.io/aria/#listbox)、[tree (树)](https://w3c.github.io/aria/#tree)、[grid (网格)](https://w3c.github.io/aria/#grid) 或 [dialog (对话框)](https://w3c.github.io/aria/#dialog) 角色的元素。
- 如果弹出窗口具有 `listbox` 以外的角色，则具有 `combobox` 角色的元素需要将 [aria-haspopup](https://w3c.github.io/aria/#aria-haspopup) 设置为与弹出窗口类型相对应的值。也就是说，`aria-haspopup` 被设置为 `grid`、`tree` 或 `dialog`。请注意，具有 `combobox` 角色的元素隐式具有为 `listbox` 的 `aria-haspopup` 值。
- 当组合框弹出窗口不可见时，具有 `combobox` 角色的元素的 [aria-expanded](https://w3c.github.io/aria/#aria-expanded) 设为 `false`。当弹出元素可见时，`aria-expanded` 设为 `true`。请注意，具有 `combobox` 角色的元素的 `aria-expanded` 默认值为 `false`。
- 当组合框获得焦点时，DOM 焦点将被置于该组合框元素上。
- 当列表框、网格或树状弹出窗口的子代元素被聚焦时，DOM 焦点仍保持在组合框上，并且组合框的 [aria-activedescendant](https://w3c.github.io/aria/#aria-activedescendant) 设为引用弹出窗口内被聚焦元素的值。
- 对于控制列表框、网格或树状弹出窗口的组合框，当建议值在视觉上被指示为当前选定的值时，包含该值的 `option`、`gridcell`、`row` 或 `treeitem` 元素的 [aria-selected](https://w3c.github.io/aria/#aria-selected) 设为 `true`。
- 如果组合框具有可见的标签，且组合框元素是可以使用 HTML `label` 元素进行标记的 HTML 元素（例如 `input` 元素），则使用 `label` 元素进行标记。否则，如果它具有可见标签，则组合框元素具有设为引用标记元素的 [aria-labelledby](https://w3c.github.io/aria/#aria-labelledby) 值。否则，组合框元素具有由 [aria-label](https://w3c.github.io/aria/#aria-label) 提供的标签。
- 组合框元素具有 [aria-autocomplete](https://w3c.github.io/aria/#aria-autocomplete) 属性，其值设为与其自动完成行为相对应的值：
	- `none`：当显示弹出窗口时，无论在组合框中键入什么字符，它包含的建议值都是相同的。
	- `list`：当触发弹出窗口时，它会呈现建议值。如果组合框是可编辑的，则这些值会补全或在逻辑上对应于组合框中键入的字符。
	- `both`：当触发弹出窗口时，它会呈现补全或在逻辑上对应于组合框中键入字符的建议值。此外，已选择建议中未被用户键入的部分（即补全字符串）会以行内形式出现在组合框输入光标的后面。行内补全字符串会被视觉高亮并处于选中状态。

### 注意

1. 在 ARIA 1.0 中，组合框使用 [aria-owns](https://w3c.github.io/aria/#aria-owns) 而不是 [aria-controls](https://w3c.github.io/aria/#aria-controls) 来引用其弹出窗口。虽然用户代理为了向后兼容遗留内容可能会支持带有 [aria-owns](https://w3c.github.io/aria/#aria-owns) 的组合框，但强烈建议作者使用 [aria-controls](https://w3c.github.io/aria/#aria-controls)。
2. 在参考下面用于弹出窗口的模式列表的角色、状态和属性文档时，请记住，组合框是一个单选组件，其中选择跟随弹出窗口中的焦点。
3. 弹出窗口元素的角色、状态和属性在其各自的设计模式中定义：
	- [列表框的角色、状态和属性 (Listbox Roles, States, and Properties)](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/#roles_states_properties)
	- [网格的角色、状态和属性 (Grid Roles, States, and Properties)](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#roles_states_properties)
	- [树的角色、状态和属性 (Tree Roles, States, and Properties)](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/#roles_states_properties)
	- [对话框的角色、状态和属性 (Dialog Roles, States, and Properties)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#roles_states_properties)