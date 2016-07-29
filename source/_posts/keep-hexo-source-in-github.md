---
title: 把 Hexo 原始碼也放到 Github 遠端保存
date: 2016-07-27 11:32:55
tags:
- git
- hexo
---

## 新 Project

在 hexo 資料夾下初始化 git，並做第一次 commit

``` yml
git init
git commit -a
```

<!-- more -->

將 branch 改名並推至遠端

``` yml
git branch -m hexo-article # 更名為 hexo-article
git remote add origin https://github.com/[your-account]/[your-account].github.io
git fetch origin # 檢查遠端是否有新東西
git push origin hexo-article -u
```

&nbsp;

## 既有 project

原本怎麼做就怎麼做...
``` yml
git commit -am "some comment"
git push
```
