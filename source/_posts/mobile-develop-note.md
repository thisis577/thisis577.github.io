---
title: Mobile 開發時遇到的一些問題整理
date: 2016-08-08 16:53:41
tags:
- CSS
- mobile
---

## iOS 的毛

- 要送 `click` 的對象應該設定 `cursor: pointer` 才會動（不然會無法點擊）
	- **可解決手機上 click delay 300ms 的問題**

<!-- more -->

- iOS scrolling not smooth
    ~~~ CSS
        Html,body { height: 100vh; }
        * { -webkit-overflow-scrolling: touch }  /* set this to ensure scrolling smooth!! */
    ~~~

## Android 鍵盤出現時把高度壓縮造成版跑掉

用改寫viewport的方法: [screen styling when virtual keyboard is active](http://stackoverflow.com/questions/8556933/screen-styling-when-virtual-keyboard-is-active)

<div class="tip">
**2016/09 補充**：
因為鍵盤通常只會在 input foucs 的時候出現，所以改用判斷 focus 出現時去重設高度來解決這個問題

~~~ JS
// Avoding keyboard affect window height
if(isMobile()) {
	var windowHeight = $(window).height();
	$('input').focus(function() {
		$('html').height(windowHeight);
	});
	$('input').blur(function() {
		// wait 200ms for keyboard remove
		setTimeout(function() {
			$('html').height('100%');
		}, 200);
	});
}

~~~
</div>

## input 預設 style 移除

~~~ SCSS
input[type="text"]
    +appearance(none) /* Remove iOS default shadow */
~~~


## 手機觸碰的 delay - NEVER DO THIS!!

在 iOS 上會先吃 `touchstart` 再吃 `click`，一般只綁 click 的話會造成在 iOS 上有延遲感，點擊下去會 delay 一下才有反應。問估狗大師的話通常會出現以下解法：

~~~ JS script.js http://stackoverflow.com/questions/7018919/how-to-bind-touchstart-and-click-events-but-not-respond-to-both How to bind 'touchstart' and 'click' events but not respond to both?
// Mobile click & touch event
$('#buttonId').on('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    // your code here
});
~~~

但我忘記在哪裡看到評論說 **不要這樣做** 比較好，具體原因我忘記了...OTZ

目前找到的替代方案是 **用 [FastClick](https://github.com/ftlabs/fastclick) 這個套件** 來解決，他可以消除在手機上觸碰的 300ms delay。但這個套件在 bower 上好像很久沒有更新了...嘛，在有更好的辦法之前先這麼頂著吧ˊ_>ˋ

<div class="tip">
**2016/09補充：** 在需要點擊的元件套上 `cursor: pointer` 可解決此問題
</div>