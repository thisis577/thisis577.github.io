---
title: Hexo markdown note
date: 2016-07-27 22:20:18
tags:
- hexo
---

## tags 格式
- 全小寫: 一般名詞，如 `hexo`
- 全大寫: 特定縮寫，如 `SEO`

<div class="tip">
    統一格式是為了 tag 連結，但在顯示時皆會以字首大寫呈現。
    <div>`text-transform: captialize`</div>
</div>

<!-- more -->

## 標題

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


## 特殊區塊

### 提示區塊

<div class="tip">
   提示區塊
</div>
``` html
<div class="tip">
    提示區塊
</div>
```

### murmur 區塊

<small class="murmur">murmur區塊</small>
``` html
<small class="murmur">murmur區塊</small>
```

### murmur in tip

<div class="tip">
    提示區塊
    <small class="murmur">在提示區塊 murmur</small>
</div>
``` html
<div class="tip">
    提示區塊
    <small class="murmur">在提示區塊 murmur</small>
</div>
```

# 新大陸 泥馬

## Markdown 格式
Ref: [Hexo 官網教學](https://hexo.io/docs/tag-plugins.html) - 不是 `.ejs` 阿阿

``` md test.md https://hexo.io/docs/tag-plugins.html#Backtick-Code-Block #Backtick-Code-Block
    ''' [language] [title] [url] [link text] code snippet '''

```

``` html test.html
<div class="tip">

</div>
```

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
