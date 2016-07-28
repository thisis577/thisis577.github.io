---
title: 建立 Hexo 環境
date: 2016-07-28 10:20:39
tags:
- github
- hexo
---

# 1. 安裝 [Github Desktop](https://desktop.github.com/)

優點
- 在 Windows 環境下使用
- 可以自動建立 SSH Keys

<div class="tip">
	裝純粹 Git 的話需要自己手動建立 SSH Key
</div>

<!-- more -->

# 2. 安裝 [Node.js](https://nodejs.org/en/)

照著安裝步驟走就好，沒啥好說的。


# 3. 選擇 Git Shell 類型

1. 打開 Github Desktop
2. 設定 > options > Default Shell > 選擇 `Git Bash`
	<div class="tip">
		步驟2可不做，我挑 Git Bash 只是因為介面比較順眼而已XD
	</div>
3. 設定 > Open in Git shell
4. 然後 Github Desktop 就可以功成身退惹

<div class="tip">
	這個 Git shell 只是 GitHub Desktop 由指令建出來的捷徑，並沒有實體位置。
	真正的 git.exe 放在 `C:\Users\[username]\AppData\Local\GitHub\PortableGit_...\` 底下，
	需由此處才能右鍵以管理員身份開啟。
</div>



# 4. 建立 Hexo 環境

1. [照著 Hexo 官方安裝教學走吧XD](https://hexo.io/zh-tw/docs/)
	<div class="tip">
		需要在 Github 上開一個名為 `[your_account].github.io` 的 repo，
		這樣在推出去之後網頁(`http://[your_account].github.io`)才會動。
	</div>

2. 設定 root `_config.yml`
	``` yml
	# 選擇主題
	theme: theme-name

	# 設定 deploy
	deploy:
	    type: git
	    repo: git@github.com:[your_account]/[your_account].github.io.git
	    branch: master
	```
3. 基本操作指令
	``` yml
	hexo server 	# = hexo s, 進行 compile
	hexo generate 	# = hexo g, 建立 publish 檔案
	hexo deploy	# = hexo d, 將 publish 的檔案推到第二點設定的 repo 上
	```

4. [修改 Hexo 主題](../modify-hexo-themes)

	若遇到 deploy 完 style 卻不對的情況: [(deploy后style.css不对)](https://github.com/hexojs/hexo/issues/579)

	``` yml
	# Make theme changes & deploy
	hexo clean
	hexo generate
	hexo deploy
	```



5. [把 Hexo 原始碼也放到 github 遠端保存](../keep-hexo-source-in-github)

	延伸: 在別的地方 clone 既有的 hexo repo

	``` yml
		# clone repo 到指定目錄
		git clone http://github.com/[your_account]/[your_account].github.io target_dir
		# 切換到保存 hexo 原始碼的 branch
		git checkout hexo_branch
		# 將該裝的東西都裝一裝
		npm install
	```

<div class="tip">
若項目4.5連結失效可至 [#Hexo](/tags/hexo/) 搜尋該主題
</div>
