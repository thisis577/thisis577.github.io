---
title: tmux 常用指令 + 自己寫 shell
date: 2016-08-08 16:06:22
tags:
- shell
- tmux
---

## 常用指令

`tmux ls` 列出目前所有 session
`tmux a -t <session-name>` 跳至該 session
`tmux a -dt <session-name>` 將其他 client 踢掉

tmux 的操作都是 `^B` 開頭：
- `^B+<number>` 切換 tmux window (現在所在的窗會以*標記
- `^B+C` 建新的窗(window)
- `^B+D` 維持 tmux 背景執行並離開
- `^B+,` 重新命名視窗
- `^B+$` 命名目前 session


## 個人用 shell

知道了幾種常用的指令，為了不要每一次開 tmux 都需要重複開窗+命名，所以寫了一支 shell來幫我做這些事：（會自動開 git / sass / tpl 三個窗並各自執行 watch 指令）

~~~ bash myTmux
#!/usr/bin/env bash

# Usage
if [ "$1" == "" ];
then
	echo "Usage1: `basename $0` [SESSION_NAME] [PROJECT]"
	echo "	Create a new session with git/sass/tpl windows and start watch"
	echo "Usage2: `basename $0` [SESSION_NAME]"
	echo "	Attach the exist session and detach other clients"
	echo "---"
	echo "<Alive session>"
	tmux ls
	exit 0
fi

SESSION_NAME=$1
PROJECT=$2

# Ensure it's not exist
tmux has-session -t ${SESSION_NAME}

if [ $? != 0 ];
then

	# Check parameter $2
	if [ "${PROJECT}" == "" ];
	then
		echo "Syntax error: Missing param2 [PROJECT]"
		exit 0
	fi

	# Go to the project
	cd ${PROJECT}

	# Create the session
	tmux new-session -d -s ${SESSION_NAME}

	# Create windows (0 is exist, so use rename)
	tmux rename-window -t ${SESSION_NAME}:0 "git"
	tmux new-window -t ${SESSION_NAME}:1 -n sass
	tmux new-window -t ${SESSION_NAME}:2 -n tpl

	# Do somthing
	tmux send-keys -t ${SESSION_NAME}:0 './oconf compile' C-m
	tmux send-keys -t ${SESSION_NAME}:1 './oconf watch sass' C-m
	tmux send-keys -t ${SESSION_NAME}:2 './oconf watch tpl' C-m

	# Start on the first window
	tmux select-window -t ${SESSION_NAME}:0
fi

# Detach other clients & attach session : a=attach, d=detach other client, t=target
tmux a -dt ${SESSION_NAME}
~~~

執行方式

~~~ bash
$ ./myTmux [SESSION_NAME] [PROJECT]
~~~

另外可將指令[自訂別名(alias)][1]，這樣就可以不用找相對路徑來下指令了。

[1]: (http://thisis577.github.io/2016/08/05/bash-alias/)