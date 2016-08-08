---
title: Bower - js 的 package 管理
date: 2016-08-08 15:46:15
tags:
- bower
---


## 透過 bower 安裝 package

在 [bower](http://bower.io) 上找相關的 package，找到以後在 `bower.json` 檔案裡面的 dependencies 設定 package name 與版本號(或用 `*` 代表任一版本, 會自動裝最新的)：

<!-- more -->

~~~ js bower.json
"dependencies" : {
    "<package-name>": "<version>"
}
~~~

設定完以後進行安裝：

~~~ bash
$ bower install
~~~

安裝完後可以在 `vendor/bower/` 底下看到剛裝好的 package。

## Yii asset 設定

接著到 `assets` 底下建立新的 class 檔案

~~~ php assets/NewPackage.php
// class name 需與檔名相符
class NewPackage extends AssetBundle {
    // 設定所需檔案的 src 資料夾
    // 一般是在新的 package folder 下的 dist (反正找到有.min.xxx的就對惹
    public $sourcePath = '@bower/<package-name>/dist/';
    // 路徑已經設定好，只需要把檔名填上去就好了
    public $css = [
        <package-name>.min.css
    ];
    public $js = [
        <package-name>.min.js
    ];
    // 看該隻檔案需要用到哪個 class 則去找該 class 的 namespace 寫路徑進去
    // Ex. Namespace app\assets, 則寫 'app\assets\<class-name>'
    public $depends = [
        'app\assets\<class-name>'
    ];
}
~~~


## 移除 package

將 `bower.json` 的 dependencies 拿掉然後重新 `bower install` 即可。
