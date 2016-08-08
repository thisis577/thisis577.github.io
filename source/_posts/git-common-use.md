---
title: 個人常用 Git 指令
date: 2016-08-08 15:27:15
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

暫存變更則是使用 `git stash`


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