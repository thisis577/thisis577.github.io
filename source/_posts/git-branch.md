---
title: Git branch
tags:
- Git
---

第一次推branch:

``` yml
# 在該branch下
git push -u origin BRANCH_NAME
# 因遠端尚未有這支branch, 所以需要下此指令建立
# -u: 與遠端建立關連, 這樣下次才不需要又打長長的指令
# 之後就可以直接在 branch 下 git push 就好
```

<!-- more -->

到別人推的branch:
``` yml
# 在master:
git fetch
git checkout BRANCH_NAME
```