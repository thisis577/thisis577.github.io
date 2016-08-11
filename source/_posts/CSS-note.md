---
title: CSS 筆記
date: 2016-08-08 16:30:30
tags:
- CSS
---

## Flex 真是個好東西

~~~ SCSS
display: flex; // 用flex方式顯示
flex-direction: column; // 排列方向, column垂直排, row為水平
flex-basis: auto; // 初始的 size
flex: 1;  // 設定佔滿空間的比例, 若同階層兩元件一為2一為3則分別佔2/5與3/5的空間
          // 若只有自己的話會把剩餘的空間佔滿, 用在垂直方向則可以把其後方元件推到最底部
          // flex-grow + flex-shrink + flex-basis 的濃縮寫法
order: 1; // flex元件的排列順序, 照數字大小排
~~~

實作參考：[How to Build a News Website Layout with Flexbox](http://webdesign.tutsplus.com/tutorials/how-to-build-a-news-website-layout-with-flexbox--cms-26611)


<!-- more -->

## 在 CSS 中使用 Material Icons

~~~ CSS basic.css http://google.github.io/material-design-icons/ Material Icons Guide
.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
}
~~~

<div class="tip">
    `font-variant: small-caps` 會導致 material-icons 不能使用 ligatures
</div>


## 去除瀏覽器對 focus 狀態的 style

~~~ CSS
.elm {
    outline: none;
}
~~~

## Select placeholder

**原理**
select 預設會顯示被選擇(`selected`)的 option 內容，只要將 `selected` option 設成不顯示的話，就可以讓他在下拉選單時不顯示。

**實作**
~~~ html
<select name="browsers" required>

    <option value="" disabled selected>Placeholder</option>
    <option value="op1">Option1</option>
    <option value="op2">Option2</option>
    <option value="op3">Option3</option>

</select>


~~~

~~~ css
option[value=""][disabled] {
    display: none;
}
~~~

**DEMO**
<select name="browsers" required>
    <option value="" disabled selected style="display: none">Placeholder</option>
    <option value="op1">Option1</option>
    <option value="op2">Option2</option>
    <option value="op3">Option3</option>
</select>


Ref: [ADDING A PLACEHOLDER TO THE SELECT TAG IN HTML5](https://shellzero.wordpress.com/2015/06/29/adding-a-placeholder-to-the-select-tag-in-html5/)

## 偽元素

`content` 只能用在 `:before` / `:after`
因為 `input[type="text"]` 沒有 `content`, 所以不能用偽元素
要寫在後面的 `label` ( `input + label:before { … }` )

## 讓元素不被overlay遮住

用 `:before` 做 overlay 時，此 overlay 會把內容整個蓋住
此時 **內容元素設定 `position: relative`** , 可讓他不被 overlay 蓋住

## Favicon refresh

在檔名後面加上 `?v=xxx` 可強制不去讀 cache ，一定要更新檔案

