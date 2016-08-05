---
title: 為指令自訂別名(alias)
date: 2016-08-05 14:44:07
tags:
- bash
---


## 在當前 session 為指令自訂別名(alias)

``` bash
# alias <new-command>='<old-command> -<param>'
# 使用 ${HOME} 自動抓家目錄位置
$ alias hd="${HOME}/hexo deploy"
$ alias hp="${HOME}/hexo push"
# 使目前設置的 alias 即刻生效，不需要重開 terminal
$ source ~/.bashrc
```

``` bash
# 查看目前所有 alias
$ alias
alias hd='/c/Users/577/hexo deploy'
alias hp='/c/Users/577/hexo push'
```

```bash
# 刪除已存在的 alias
$ unalias <command>
```

### 讓 alias 永久生效

上述指令皆為一次性，只有下指令的這一個 session 有用
為了讓指令在 session 一打開時就執行，需編輯 `.bashrc`

``` bash ~/.bashrc
# 加入 alias
alias hd="${HOME}/hexo deploy"
alias hp="${HOME}/hexo push"
```

``` bash
# 使設定直接生效
$ source ~/.bashrc
```

