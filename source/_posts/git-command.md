---
title: Git 學習筆記
date: 2016-08-02 16:25:28
tags:
- git
---


編輯基本設定

``` bash
# 設定預設編輯器為 vim
# git config --system core.editor <editor>
git config --system core.editor vim
# 設定預設編輯器為 sublime
git config --global core.editor "subl -n -w"
# 或
# 直接編輯 global config
git config --global --edit
```

指令 alias

``` bash
# 加一些常用的 git-command alias
# git config --global alias.<alias-name> <git-command>
git config --global alias.st status
```

Ref: [Git tutorials](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config)

<!-- more -->