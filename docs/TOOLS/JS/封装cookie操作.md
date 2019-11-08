---  
title: 封装cookie操作
---  

### 1. 写入cookie  

```js
function setCookie(name,value,days){
	if (days){
		var Days = days;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days*24*60*60*1000);
		document.cookie = `${name}=${escape (value)};expires=${exp.toGMTString()}`;
	}else{
		document.cookie = `${name}=${escape (value)}`;
	}
}
setCookie("user","张三",7);

```
<span style="background-color: yellow">注:</span> 第三个参数为cookie失效时间。
### 2. 读取cookie

```js
function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
}
getCookie('user')  
```
### 3. 删除cookie  

```js
function delCookie(name)
{
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null)
	document.cookie= `${name}=${cval};expires=${exp.toGMTString()}`;
}
delCookie('user')
```


