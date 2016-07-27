---
title: 修改 Hexo 主題(懶人法)
tags:
- hexo
---

# 不是秘技的秘技
將 themes 資料夾複製一份出來，這樣就可以自由修改la~ O_<

<div class="tip">
<div>記得將 themes 資料夾底下的 .git 資料夾砍掉</div>
<div>`(Windows 檢視需開啟隱藏資料夾才看得到)`</div>
`這樣自己的 git 才 track 到 themes 底下的所有變更`
</div>

<!-- more -->

&nbsp;

# 很難懂的 Jade
Hexo-theme-apollo 模版是以 `Jade` 寫的，與官方使用的 `ejs` 不同
但只需要另外安裝 `Jade` 外掛 [hexo-render-jade](https://github.com/hexojs/hexo-renderer-jade)

## 其實只需要一行指令
``` yml
# 安裝 Jade 外掛
npm install hexo-renderer-jade --save
```
如此一來只要下 `hexo server` 就會自動幫你 compile
也可以另外插入 css 去修改了

<div class="tip">
	凡是有修改 `.jade` 建議關掉重開 hexo 比較好，以確保有吃到變更
</div>

jade theme 寫法參考: [hexo-theme-pure](https://github.com/saintwinkle/hexo-theme-pure)