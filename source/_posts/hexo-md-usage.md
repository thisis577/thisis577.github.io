---
title: Hexo markdown 筆記
date: 2016-07-27 22:20:18
tags:
- hexo
---

<div class="tip">
    為個人規範跟一些使用方式的範例筆記
</div>

<!-- more -->

# tags 格式
- 全小寫: 一般名詞，如 `hexo`
- 全大寫: 特定縮寫，如 `SEO`
- 按照英文字母順序排列

----

# Markdown 基本語法

水平線

``` md
----
```

> 右尖括號

* 星號

*星號刮起來變斜體*

**兩個星號括起來**

~~刪除線~~

~~~ bash
code block
~~~

Ref: [Markdown 語法說明](http://markdown.tw/)

----

# 標題

# h1
## h2
### h3
#### h4

``` md
# h1
## h2
### h3
#### h4
```
----

# 特殊區塊

## 提示區塊

<div class="tip">
   提示區塊
</div>

``` html
<div class="tip">
    提示區塊
</div>
```

## 評論區塊

<small class="murmur">murmur區塊</small>

``` html
<small class="murmur">murmur區塊</small>
```

## murmur in tip

<div class="tip">
    提示區塊
    <small class="murmur">
        在提示區塊 murmur
    </small>
</div>

``` html
<div class="tip">
    提示區塊
    <small class="murmur">
        在提示區塊 murmur
    </small>
</div>
```

----

# Markdown 新大陸

## Code Block

``` md
{% codeblock [title] [lang:language] [url] [link text] %}
code snippet
{% endcodeblock %}
```

<small class="murmur">
    我一直把那個格式當成是 `ejs` 的格式 囧
</small>


## Backtick Code Block

``` md test.md https://hexo.io/docs/tag-plugins.html#Backtick-Code-Block #Backtick-Code-Block
    ~~~ [language] [title] [url] [link text] code snippet ~~~

```

<div class="tip">
    <ol>
        <li>Code block 與 Backtick Code Block 不能混用</li>
        <li>Block 與上下文必須有空行不能連在一起</li>
    </ol>
</div>

### Blockquote

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

``` md
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

> 引用
