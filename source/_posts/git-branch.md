---
title: Git branch
date: 2016-07-26
tags:
- git
---

第一次推branch:

``` BASH @branch
# 在該branch下
$ git push -u origin <branch-name>
# 因遠端尚未有這支branch, 所以需要下此指令建立
# -u: 與遠端建立關連, 這樣下次才不需要又打長長的指令
# 之後就可以直接在 branch 下 git push 就好
```

<!-- more -->

到別人推的branch:
``` BASH @master
$ git fetch
$ git checkout <branch-name>
```

----

如果在 master 做完 commit 以後想要把這次的 commit 改成放在一個 branch 裡面

``` BASH
# 以目前的 commit 為基準建立一個新的 branch
$ git checkout -b <branch-name>
# 確認 local 端的 origin/master 跟遠端的一樣
$ git fetch
# 把 master 指回 origin/master 的位置
# -B 為強制更改，若用 -b 的話會因為重名而無法進行
$ git checkout -B master origin/master
# 如此一來新的 commit 就只存在於新建立的 branch 底下了
```
