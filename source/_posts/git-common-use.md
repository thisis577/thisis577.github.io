---
title: 個人常用 Git 指令
date: 2016-08-08 15:27:15
sticky: true
tags:
- git
---

[Git 情境劇][1] 這篇文章應該已經涵蓋了大部分的使用情境，教學也寫得很清楚，以下只列出一些我自己比較常用或比較記不住的指令XD

<!-- more -->

## 暫存 commit

~~~ bash
# 暫時把目前的 commit 存起來
git commit -m tmp
# 還原暫存的commit
git reset HEAD^
~~~

暫存變更則是使用 `git stash`。但 stash 不會把 untracked 的檔案也一起 stash 起來，所以在 pull 的時候可能會出問題，較建議用 commit tmp。

<div class="tip">
	暫存 commit 只有在 branch 可以做！千萬不要在 master 做！
	若在 master 修改後想要暫存的話，先 `git checkout -b new-branch` 到新的 branch 再暫存。
</div>

## local 端所有東西都不要，reset 回目前遠端的 master
~~~ bash
git fetch origin
# 大寫B強制用遠端進度蓋掉本地 master
git checkout -B master origin/master
~~~

## 將 branch 的變更推到遠端

~~~ bash
# 先在 branch 做 commit
# 做完 commit 後切回 master
(branch)$ git checkout master
# 檢查 master 與遠端是否同步
(master)$ git pull
# 無任何衝突的話就 merge branch
(master)$ git merge <branch-name>
(master)$ git push
~~~

## 拉新的 commit 到目前 branch

~~~ bash
# 更新 master
(master)$ git pull
(master)$ git checkout <branch-name>
# 對 branch 做 rebase，把它接到更新過的 master 上
(branch)$ git rebase master
~~~

[1]: http://blog.gogojimmy.net/2012/02/29/git-scenario/