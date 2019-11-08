## 横屏时字体放大

在 body 上加入：

```css
-webkit-text-size-adjust: 100%;
-webkit-text-size-adjust: none;
```

## overflow 无法滑动

在 overflow 的地方加入：

```css
-webkit-overflow-scrolling: touch;
```

## new Image()的 onload 事件失效

场景：在 ios 中无法正确的绘制图片，原因是 onload 事件失效，如果用 fetch 获取图片会有兼容性问题，所以使用 xhr 获取图片的 blob

```html
<img id="myImg" src="" />
```

```javascript
function loadImage(url, callback) {
	if (typeof callback !== 'function') {
		callback = function(url) {
			console.log(url);
		};
	}

	var xhr = new XMLHttpRequest();
	xhr.responseType = 'blob';
	xhr.onload = function(req) {
		console.log(xhr.response);
		const resToUrl = window.URL.createObjectURL(xhr.response);
		console.log(resToUrl);
		callback(resToUrl);
	};
	xhr.open('GET', url, true);
	xhr.send();
}

//使用
var imgUrl = 'http://qimg.hxnews.com/2019/0203/1549199908936.jpg';
loadImage(imgUrl, function(url) {
	document.getElementById('myImg').setAttribute('src', url);
});
```
