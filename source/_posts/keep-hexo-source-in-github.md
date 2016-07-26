---
title: 把 hexo 原始碼也放到 github 遠端保存
categories:
- tech
tags:
- Hexo
- Git
---

在 hexo 資料夾下初始化 git，並做第一次 commit

``` yml
git init
git commit -a
```

<!-- more -->

將 branch 改名並推至遠端

``` yml
git branch -m hexo-article # 更名為 hexo-article
git remote add origin https://github.com/thisis577/thisis577.github.io
git fetch origin # 檢查遠端是否有新東西
git push origin hexo-article -u
```
