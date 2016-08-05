---
title: Hexo 建立新文章後自動打開編輯器跟瀏覽器
date: 2016-08-05 20:41:54
tags:
- hexo
- sublime
---

基本原理是去監聽 `hexo new` 這個指令，但網路上找到的文章大部分是在 OS X 或根本就是 Linux 環境，指令怎麼跑都不會動～（哭哭）
後來翻到的[一篇文章][2]裡面提到 windows 的指令不一樣：

- 要用 `start` 取代 `open -a`
- sublime 的執行路徑也需要另外[設置](#adding-sublime-to-PATH)

總之終於可以自動打開瀏覽器跟編輯器，愉快的進行編輯啦～

<!-- more -->

----

## 在建立新文章後自動打開編輯器(in Windows)

``` js /hexo-root/scripts/new-post.js
var exec = require('child_process').exec;
hexo.on('new', function(data) {
    exec('hexo server'); // start preview server
    console.log('running hexo server....');
    setTimeout(function() {
        // open preview url
        exec('start "Google Chrome" "http://localhost:4000"');
        // open with editor
        exec('start "subl.exe" '+data.path);
    }, 3000);
});
```

~~~ bash
$ hexo new "open editor and browser"
~~~


----
<a name="adding-sublime-to-PATH"></a>
## 在 Windows 下從命令列開啟 sublime 的設置

1.`Ctrl + X` 打開選單 > 開啟 **系統**
2.進階系統設定 > 進階頁籤 > 點擊下方的 **環境變數**
3.新增 **系統變數(S)**
 - 變數名稱 | `SUBLIME`
 - 變數值  | `C:\Program Files\Sublime Text 3`
 (即為 Sublime 的安裝資料夾)

4.編輯 **使用者變數(U)** 當中的 **PATH**
 - 在末端加入 `;%SUBLIME%`

5.重開 command line ，就可以使用 `subl.exe` 來呼叫 sublime

~~~ bash
$ subl.exe test.txt
~~~

<div class="tip">
    如果是 Win10，第一次執行時可能會需要先設定 .md 的預設開啟程式為 sublime。（在 Win10 跳出的選擇框選擇即可）
</div>

----

## 參考資料
- [New hexo post auto open with editor][1]
- [在 hexo new 之后立即打开新建的 Markdown 文稿][2]
- [Open Sublime Text From the Command Line Using subl.exe (Windows)][3]

[1]: https://lessmind.github.io/2015/10/13/New-hexo-post-auto-open-with-editor/
[2]: http://liam0205.me/2015/05/01/open-editor-after-hexo-new-immediately/
[3]: https://scotch.io/tutorials/open-sublime-text-from-the-command-line-using-subl-exe-windows#adding-sublime-to-your-path