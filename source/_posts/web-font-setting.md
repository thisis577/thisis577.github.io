---
title: Font note
tags:
- UI
- Font
---

Ref: [Typography Handbook](http://typographyhandbook.com/)

# Fallback
- web font loader to fallbacks the webfont (if font loading is not compeleted

# 單位
- 1em = 16px
- font-size: rem.em
- padding / margin: 用相對單位(rem.em.%)
- media query: em
- 少用vw&vh (支援不足

<!-- more -->

# 設定字形大小
``` SCSS
html
	font-size: 100%
@media (min-width: 64em)
	html
		font-size: 112.5%
```

# containers 設定 border-box
``` SCSS
// 讓它在parent內,且padding是width往內推，而不是加寬
html
	box-sizing: border-box
*, *:before, *:after
	box-sizing: inherit
```

``` SCSS
// max-width is good for mobile
.container
	max-width: 67rem
```


# Responsive Modular Scale

- single direction margin - margin-bottom
- vertical margin 會被 font-size 影響, 使用 em
- horizontal margin 不會，所以用 rem