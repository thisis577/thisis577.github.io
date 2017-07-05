---
title: Performance of animation
date: 2017-07-05 13:19:08
tags:
- CSS
- performance
---

最近在研究效能研究到快爆炸了，剛剛看了[一篇關於開合動畫的文章](https://developers.google.com/web/updates/2017/03/performant-expand-and-collapse)讓我好震驚：

## 指定寬高的寫法是最差的寫法！！！
~~~ css
.menu {
  overflow: hidden;
  width: 350px;
  height: 600px;
  transition: width 600ms ease-out, height 600ms ease-out;
}

.menu--collapsed {
  width: 200px;
  height: 60px;
}
~~~
原來指定`width`跟`height`的作法會讓畫面在每個 frame 重算 layout 跟重畫(paint)結果！！

<div class="tip">
要讓效能好，要避開重算 layout & paint ，只做 composite，而會觸發 composite 的屬性只有 `opacity` & `transform`，其他屬性都會動到兩項之一，通通NG～
</div>

看來我的學習還不夠，前端之路還很漫長啊...


### 參考資料
* [High Performance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
* [Let's Talk about CSS triggers](https://www.chenhuijing.com/slides/css-triggers/#/)