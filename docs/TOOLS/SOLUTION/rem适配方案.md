---
title: rem适配方案
---

原理：1rem = body 的 px 的倍数，在 css 中就以设计稿 px/100 的 rem 来写。
按照 iPhone 6 的 375 宽度来计算，根节点的 font-size 设置为 50px。

```javascript
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		//750 为设计稿宽度  适配rem
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			clientWidth = clientWidth <= 1080 ? clientWidth : 1080;
			docEl.style.fontSize = (clientWidth / 750) * 100 + 'px';
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
```

并且在 common.css 中设置 body，以保证在 PC 端显示稍显正常

```css
body {
	min-width: 320px;
	max-width: 640px;
}
```
