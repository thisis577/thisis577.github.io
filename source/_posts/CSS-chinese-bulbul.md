---
title: 用 CSS 刻一隻白頭翁
date: 2016-09-04 22:33:58
tags:
- CSS
- practice
- UI
---

身為一個前端工程師，一定要用網頁來刻一下愛鳥啦～

<p data-height="710" data-theme-id="0" data-slug-hash="BzZYJN" data-default-tab="result" data-user="thisis577" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/thisis577/pen/BzZYJN/">Playing with Chinese bulbul</a> by 577 (<a href="http://codepen.io/thisis577">@thisis577</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<!-- more -->

其實用到的新技巧不多，大概就是

1. 稍微摸熟 `border-radius`
 - `border-radius: 左上 右上 右下 左下` 原本我也搞不清楚順序，但～熟能生巧，寫多了就記住了！（一隻鳥到底用了多少）其實就是順時針繞一圈XD

 - 不規則形狀(嘴喙/頭毛/腮紅/翅膀羽毛/身體形狀/腳爪)：每個屬性設置不同數值即可。 也可利用 `%` 來設置，很方便。
  ~~~ SCSS
  // 尾羽範例
  .feathers
  	border-radius: 0 60% 120% 20%
  ~~~

 - 橢圓(影子)： 使用 `/` 的寫法，參考自 [CSS Secrets](http://www.books.com.tw/products/0010702536)
  ~~~ SCSS
  // 影子
  .shadow
  	border-radius: 15em /3em
  ~~~

2. `animation` 應用
	因為大多是使用 `transform` 來達到動畫效果，因此	要套用 `animation` 的元素最好本身不要有用到 `transform`，這樣子在進行動畫時比較不會出現 bug（遇到在 Edge 上會怪異扭動+飄移的靈異現象XD），也不需要重新複製好長一段 `transform` QQ (為什麼多種不同類型的 `transform` 不會一起套用而是蓋掉呢...好不方便喔QQ)

	<div class="tip">
	2016/09/06 補充:
	學到新屬性--`animation-play-state`，可以讓設定讓動畫暫停！
	直接把動畫寫在元素本身並設定暫停(`pause`)，觸發時再設定為 `running` 即可。
	~~~ SCSS
		.head
			animation: nod .2s infinite alternate pause
			&.is-active
				animation-play-state: running
	~~~

	</div>

3. 基本漸層 `linear-gradient` 應用
	只有菜菜的一個方向+兩個顏色，感覺尾巴那邊緣亮色的部分應該可以用漸層去做出來而不是無止境的加 `::before` `::after`

因為是刻爽的，所以只測了 Chrome / Edge 可以正常顯示（Edge 沒有跑版讓我好訝異啊），數值也都抓得很隨意沒有統整，`position: absolute` 還被我濫用的很徹底XDD 用了大量重複的元素，寫完以後完全不敢回頭整理 code...而且有點後悔沒用 SVG ，可以直接輸出成圖檔的說~~（不過圖檔用畫得好像更快，還是不要浪費那個美國時間好了...）

希望有機會生出正面XD


