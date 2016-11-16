---
title: HW3.0 開發筆記
date: 2016-11-16 18:24:15
tags:
---
** 記得從選單存檔 **

# TOPIC: 簡潔

想要有大大的空白感
~~像是 Evernote 的搜尋框~~

---

# TO Study
**SVG**
- https://docs.google.com/presentation/d/1POUiroOBbLmXYlQKf0pIR8zVkHWH9jRVN-w8A4aNsIk/edit#slide=id.g1e19b0d66_2155
- https://css-tricks.com/how-to-make-charts-with-svg/

**CSS no-blocking render**
- https://davidwalsh.name/font-loading
- https://github.com/chrisblakley/Nebula/issues/616
- http://keithclark.co.uk/articles/loading-css-without-blocking-render/


# TODO
- ARIA
	- https://www.sitepoint.com/how-to-use-aria-effectively-with-html5/
	- 與 HTML5 元素並用？
	- [W3C-ARIA](https://www.w3.org/TR/html-aria/)
- Font-family
	- ~~Noto Sans TC 粗體在手機上會粗細不均QQ~~: 是因為我把 monospace 擺在 Noto Sans 之前，移掉就好了
	- ~~是否能把多國語系的字體設定寫成一行就好 [設定參考](http://www.wfublog.com/2014/02/font-family-chinese-cross-platform.html)~~
		- 統一把 CJK 系統通用 Noto Sans, 英文語系就用英文語系
	- [設定unicode區段為不同字型](https://blog.yorkxin.org/2012/06/17/assign-fonts-for-specific-characters)
	- [網頁字型最佳化](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization?hl=zh-tw#section-8)
- 漢堡選單
	- 右上角留會員登入跟通知 icon
	- 語言選單放到底下
	- 漢堡選單只在 mobile 出現
- 繞地球飛行的小飛機
	- 是否改成自己畫圖
	- 在 iOS 上不會顯示
- 起迄點交換鈕
- 是否要放 From / to 字樣
- 送出按鈕的 Loading 效果：縮成一個圓轉圈圈？

---
## 參考元素

- 動畫
	- http://webdesign.tutsplus.com/zh-hans/tutorials/adding-appeal-to-your-animations-on-the-web--cms-23649
	- [cubic-bezier](http://cubic-bezier.com/#.28,-0.63,.76,1.58)
- Icons
	- [Flaticon](http://www.flaticon.com/)
		- http://www.flaticon.com/packs/business-and-office
	- [Icons8](https://icons8.com/web-app/new-icons/all)
	- [icono](http://saeedalipoor.github.io/icono/) **純 CSS Icon**，好酷！
- Loading 畫面
	- http://zurb.com/patterntap/pattern/load-screen-from-weblandia
- Banner
	- http://www.spaceapegames.com/blog/ 想做小行星跟小飛機R
- SVG Chart
	- Sublime Package Control https://packagecontrol.io/
	- Sublime package control content https://packagecontrol.io/packages/PHP%20Faker%20Completions
- 機票卡
	- http://www.josephaavoue.com/archives 日期改成票價
- 載入的假區塊
	- http://iquadart.com/ 中間的 slider 區域每一頁都好可愛
- 介面說明
	- http://zurb.com/patterntap/pattern/services-from-cloudnine
- 文字載入動畫
	- http://weaintplastic.com/ 不知道怎麼做的

---

[SVG教學](http://www.oxxostudio.tw/articles/201410/svg-tutorial.html)

:emtpy for 空狀態
- [:empty](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty)

## CSS coding style
https://engblog.nextdoor.com/nextdoor-css-guidelines-47eb0b0f7565#.yqx0zgrs3

https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06#.rzu77u6um

- `.js-` 開頭作為 JS 操作用，JS 檔案中不能出現非 `.js-` 開頭的 class name
- `.is-` 開頭作為 state，通常是 JS 用的，如 `.is-disabled`
- 需要單獨維護的(已變數取代的）
	- `z-index` 別再出現什麼 9999、10001 之類的數值了
	- `line-height`
	- `letter-spacing`
	- `font-weight`

** 避免巢狀回圈 ** - 越多層 render 時間越久
可以用 `.item--action` 兩個 dash 作為以 `.item` 為基礎做變化的命名方式

## Animation

[使用 FLIP 来提高 Web 动画的性能](http://www.w3cplus.com/animation/high-performance-animations.html)

- 應該盡量使用 transform & opacity 來做動畫 (因為大部分的瀏覽器都有對他們進行硬體加速)
- 動畫要保證在 **60FPS** 內運行才能帶給user最佳體驗


[Smooth as Butter: Achieving 60 FPS Animations with CSS3](https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108#.ao6wew1u0)
- 在動畫中盡量不使用 `top` `left` `right` `bottom` 等屬性，會重繪而導致不夠流暢
- 將要做動畫的元素獨立出來，避免連不做動畫的部分都影響到
- `transition: all` 會影響效能



### CSS [參考文章](https://www.facebook.com/groups/F2ETW.share.HQ/permalink/1264711333553591/)

1. Linting (stylelint/css-lint/scss-lint)
	命名慣例
	重複的 Properties
	巢狀層數限制
	單位使用，例如 0 不加單位
	色碼值的一致性，例如全小寫

	**SublimeLinter** [安裝教學](https://schibsted-engineers.gitbooks.io/frontend-pre-commit-rules/content/01-Installation/04-sass-linting-plugin.html)
	1. 先裝 SublimeLinter
	2. 再裝個別的 lint , ex. SublimeLinter-Contrib-sass-lint
	3. **本機上需要裝 sass-lint **  (需要 Node.js)
	    ```
			$ npm install -g sass-lint
		```

	4. 接著在 sublime 上按 `ctrl+alt+p` 輸入 `sublimelinter` 可以進行各項操作
	5. 編輯 rule，windows 環境下檔案在 `C:\Users\<username>\AppData\Roaming\npm\node_modules\sass-lint\docs\sass-lint.yml`
	```
		rules:
			indentation:
				- 1
				-
					size: tab
	```


2. 介接到團隊的持續整合流程
送 Pull Request 時自動顯示 Lint 是否通過
沒有衝突的 PR 可以自動合併進主幹

3. 度量單一 Rule 的垂直與水平長度
水平長度：Selector 命名是否過長？是否用了過多後代選擇器？ e.g. html body ul li a {...}
垂直長度：Declaration block 裡是否宣告太多 properties？

4. 魔法數字
能否整理成變數？
如果一定得用，寫下註解

5. 絕對定位
有沒有更適合或更簡單的解決方案？

6. 在多種環境下測試 UI
調整字體大小檢查會不會破版
不同類型的內容 (圖/文/表格/影音..等)
不同的裝置或螢幕大小
對頁面增加或移除某些元素

7. 老舊瀏覽器的前綴字
檢查 Autoprefixer 設定是否需要更新，例如 IE 只支援 10 以上

8. Code 是否易於維護
命名
元件的組織管理

9. 不依賴自動化 Lint 工具，仍須人工複審

---

## 謹記五個狀態!
**Loading 進來先有一個可愛的小動畫**

空狀態

載入狀態
- 假資料色塊模式

理想狀態

資料狀態
- 初次進來走完幾個步驟的紀錄

---
## 學到的新東西

### 設定元素維持動畫結束狀態
``` CSS
.elm {
	animation-fill-mode: forwards;
}
```

### 讓子元素不會影響父元素的 margin [(參考)](http://stackoverflow.com/questions/1762539/margin-on-child-element-moves-parent-element)
``` CSS
.parent {
    padding-top: 1px;
    margin-top: -1px;
}
```

### 讓 height 可以用百分比(%)指定

~~~ SCSS
html,
body {
    height: 100%;
}
.page-wrap {
    height: 100%;
    position: initial;  //千萬不可以給 relative, 不然在捲動時會發生悲劇
}
// Can use % to assign height
.elm-in-page-wrap {
	height: 20%;
	...
}
~~~

承上，** ios 的毛**：
為了讓 ios 捲動平順通常會加入 `-webkit-overflow-scrolling: touch` 屬性，但當 `.page-wrap` 在 `height: 100%` 時，對 `header` 做 ` fixed-top` 的話， ios 會因為 `position` 屬性改變而踩到 bug 導致 fixed-top 以外的元素消失....= =
解法：改為 `height: auto`  即可。

### ios 在非 `<a>` `<button>` 元素想要綁定 click 事件
``` CSS
.elm
	cursor: pointer
```
``` Javascript
	$('.elm').click(function() {
		// event content
	}) ;
```
在該元素加上 `cursor: pointer` 配合 js 端 click 事件，在 ios 就可順利無延遲的觸發事件。


### SVG
要使用 `%` 來制定寬高的話， `<svg>` 本身的 parent 必須訂好寬跟高，這樣才能使用 `<svg height="100%" width="100%">`


### `line-height` 要扣掉 border 寬度


### footer 置底參考 https://codepen.io/cbracco/pen/zekgx?editors=0100

### `<article>` 內可以包 `<section>`，但反過來是不行的
參考 [W3C](http://w3c.github.io/html/single-page.html#the-article-element)
