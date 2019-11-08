---
title: 美化radio
---

点击切换 radio 选中的项目：

<ClientOnly>
<css-beautify-radio></css-beautify-radio>
</ClientOnly>

要点：新增元素模拟 radio，利用:checked 选择器修改模拟的 radio 的样式，再利用 label 元素的特性使得点击时选中 radio

```html
<div class="selection">
	<label class="choose-group-label">
		<input type="radio" class="choose-group-input" name="groupInput" id="selction-1" />
		<i class="choose-group-icon"></i>
	</label>
	<label for="selction-1">
		<span>选项一</span>
	</label>
</div>
```

```css
/* 默认的模拟的radio样式 */
.choose-group-icon {
	display: inline-block;
	width: 16px;
	height: 16px;
	border: 1px solid #3eaf7c;
	border-radius: 50%;
	vertical-align: middle;
}
/* radio包裹层的样式 */
.choose-group-label {
	display: inline-block;
	position: relative;
	top: -2px;
	left: 0;
	margin-right: 5px;
}
/* 隐藏之前的radio */
.choose-group-input {
	display: none;
}
/* 选中之后的radio样式 */
.choose-group-input:checked + .choose-group-icon {
	background: url(../public/selected-icon.png);
	background-size: 100% 100%;
}
```
