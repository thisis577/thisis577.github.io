---
title: Bourbon & Neat install
date: 2016-07-26
tags:
- bourbon
- neat
---


## 使用 bower 安裝

``` js bower.json
// 加入 depenencies (後面為版本號)
"dependencies": {
    "bourbon": "4.2.7",
    "neat": "1.8.0"
  }
```

``` bash
# 進行安裝
$ bower install
```
<!-- more -->

## 再把它們 link 到 `styles/import/` 底下

``` bash
$ cd styles/import
# link過來並命名為bourbon
$ ln -s ../../vender/bower/bourbon/app/assets/stylesheets bourbon
# link過來並命名為neat
$ ln -s ../../vender/bower/neat/app/assets/stylesheets neat
```

## Usage

如此一來就可以直接從 SASS import 進來了
``` scss style.sass
@import 'import/bourbon'
@import 'import/neat'
```