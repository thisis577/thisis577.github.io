---
title: Custom 404 page
date: 2016-07-27 21:13:39
tags:
- github
- hexo
---

創建要給 404 的新頁面
``` yml
hexo new page 404
```

編輯 `source/404/index.md`
``` yml
---
title: 404
permalink: /404 # 指定固定連結為 http://your_account.github.io/404.html
---
# Write inline style
<style>
...
</style>

```

<!-- more -->


<div class="tip">
	若要在 local 端測試的話，需將 permalink 拿掉
	<div>測試網址為 `http://localhost:4000/404`</div>
</div>


Ref:
- [在 Hexo 中创建匹配主题的404页面](http://moxfive.xyz/2015/10/16/hexo-404-page/)
- [Creating a custom 404 page for your GitHub Pages site](https://help.github.com/articles/creating-a-custom-404-page-for-your-github-pages-site/)