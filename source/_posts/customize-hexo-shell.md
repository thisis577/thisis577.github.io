---
title: 自己寫 Hexo shell
date: 2016-07-28 11:09:25
tags:
- bash
- hexo
---



#### 可以自動 deploy hexo 並 push source code


<!-- more -->

## 在 root 編寫檔案，此處檔名為 `hexo`
(shell 可不需副檔名)

``` bash hexo
#!/usr/bin/env bash

# Usage
if [ "$1" == "" ];
then
	echo "Usage: `basename $0` [deploy|push] [comment]"
	echo "[comment] should use double quotes"
	exit 0
fi

if [ $1 == "deploy" ];
then
	# Hexo modify themes and deploy all (themes + post)
	echo "deploy start:"
	hexo clean
	hexo generate
	hexo deploy
fi

# push hexo source
if [ $1 != "" ];
then
	# use double qoutes to quote all sentence in $2
	if [ "$2" != "" ];
	then
		echo "push start:"
		git add .
		git commit -m "$2"
		git push
	fi
fi
```

## Usage

``` yml
# deploy + push
$ ./hexo deploy "give some comment"
# only push
$ ./hexo push "give some comment"
```

<div class="tip">
	`"$2"` 只要用雙引號刮起來就可以吃含有空格的句子
</div>


#### 也可以自訂別名讓指令縮短

``` bash
# 使用 ${HOME} 自動抓家目錄位置
$ alias hd="${HOME}/hexo deploy"
```

延伸閱讀：[為指令自訂別名(alias)](http://thisis577.github.io/2016/08/05/bash-alias/)
