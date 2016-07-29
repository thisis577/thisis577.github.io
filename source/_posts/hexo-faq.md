---
title: Hexo 疑難雜症
date: 2016-07-28 14:31:28
tags:
- hexo
---

#### 純粹記錄我遇到的各種問題

<!-- more -->
&nbsp;

# EMFILE 錯誤

``` yaml
Error: EMFILE, too many open files
```
## 解法
<div class="tip">
	<div>自力救濟法：`打開工作管理員，把 Node.js 砍掉`，接下來重新跑 hexo 指令就好了</div>
	<small class="murmur">
	[官方解法](https://hexo.io/zh-tw/docs/troubleshooting.html#EMFILE-錯誤) 是下 `ulimit -n 10000`，但 10000 好像太大了，我只有設定在 2048 時有成功， BUT！ 只順暢了一下子就又噴相同錯誤了= =
	</small>
</div>

&nbsp;


# Error: Media query expression

``` yaml
Error: media query expression must begin with '('
ERROR Asset render failed: scss/customize.css
Error: media query expression must begin with '('
...
```

## 還找不到解法QQ
