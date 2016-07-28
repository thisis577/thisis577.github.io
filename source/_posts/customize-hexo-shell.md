---
title: 自己寫 Hexo shell
date: 2016-07-28 11:09:25
tags:
- hexo
- shell
---


# 可以自動 deploy hexo 並 push source code

``` bash
#!/usr/bin/env bash

# Usage
if [ "$1" == "" ];
then
	echo "Usage: `basename $0` [deploy] [COMMENT]"
	echo "[COMMENT] is for commit hexo source code, need to connet by '-'"
	echo "ex: this-is-a-commit-msg"
	exit 0
fi

ACTION=$1
COMMENT=$2

if [ ${ACTION} == "deploy" ];
then
	# Hexo modify themes and deploy all (themes + post)
	echo "deploy start:"
	hexo clean
	hexo generate
	hexo deploy
fi

# push hexo source
if [ ${ACTION} != "" ];
then
	if [ ${COMMENT} != "" ];
	then
		echo "push start:"
		git add .
		git commit -m ${COMMENT}
		git push
	fi
fi
```

## Usage

``` yml
# deploy + push
./hexo deploy "give-some-comment"
# only push
./hexo push "give-some-comment"
```

<div class="tip">
	comment 的部分必須用 - 連接，不然指令吃不到... 待解決
</div>