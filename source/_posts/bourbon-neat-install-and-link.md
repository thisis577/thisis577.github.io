---
title: Bourbon & Neat install
tags:
- Bourbon
- Neat
---

編輯 `bower.json`
``` BASH
# 加入 depenencies (後面為版本號)
"dependencies": {
    "bourbon": "4.2.7",
    "neat": "1.8.0"
  }

# 進行安裝
bower install
```

<!-- more -->

再把它們 link 到 styles/import/ 底下
``` BASH
cd styles/import
ln -s ../../vender/bower/bourbon/app/assets/stylesheets bourbon # link過來並命名為bourbon
ln -s ../../vender/bower/neat/app/assets/stylesheets neat # link過來並命名為neat
```