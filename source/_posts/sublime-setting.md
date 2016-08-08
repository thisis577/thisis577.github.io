---
title: Sublime 設定
date: 2016-08-08 17:43:23
tags:
- sublime
---

## 初始設定

1. 安裝 [Package control](https://packagecontrol.io/installation)
2. 改色系(?
   Color scheme - Peacock
3. 設定 line ending
~~~ json Preference > Setting-Users
"default_line_ending": "unix"
~~~
4. 去除空白字元
5. Emmet (for html autocomplete)

## 環境設定
~~~ json Preferences.sublime-settings
{
    "color_scheme": "Packages/Colorsublime - Themes/Peacock.tmTheme",
    "default_line_ending": "unix",
    "font_size": 12,
    "ignored_packages":
    [
        "Vintage"
    ],
    "trim_trailing_white_space_on_save": true
}

~~~

## 空格轉tab

`Ctrl+alt+P` > 輸入 indent > 選擇 Covert to tab


## 檢視安裝清單

用 package control 搜 package list 可以看到安裝清單

## 移除套件

`Ctrl+shift+p` 搜尋 remove package
就可以找到一個類別
點進去以後會列出所有裝過的package
就可以選擇要砍的package了~
