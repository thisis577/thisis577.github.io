---
title: Mail 模版限制
date: 2016-08-08 17:23:42
tags:
- CSS
- html
- mail
---


## 郵箱只吃寫在 html tag 裡面的 inline style

所以寫完以後需要先轉 inline 再寄出，使用 [CssToInlineStyles](https://github.com/tijsverkoyen/CssToInlineStyles/) 這套可以把 css 轉為 inline style。


<!-- more -->


## 各家 mail server 對 CSS 的限制可參考：[The Ultimate Guide to CSS](https://www.campaignmonitor.com/css/)

不吃：
- html5 有語意之 tag
- Box-shadow
- 任何有透明度之屬性

建議：
- 要有高度：使用 `line-height`
- 不要用 `<p>`
- 用 `border` 取代 `padding`

