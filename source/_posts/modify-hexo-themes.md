---
title: 修改 Hexo 主題
date: 2016-07-28 09:25:44
tags:
- gulp
- hexo
- jade
- SASS
---

# 不是秘技的秘技
將 themes 資料夾複製一份出來，這樣就可以自由修改la~ O_<

<div class="tip">
<div>記得將 themes 資料夾底下的 .git 資料夾砍掉</div>
<div>`(Windows 檢視需開啟隱藏資料夾才看得到)`</div>
`這樣自己的 git 才 track 到 themes 底下的所有變更`
</div>

<!-- more -->

&nbsp;

# 很難懂的 Jade
Hexo-theme-apollo 模版是以 `Jade` 寫的，與官方使用的 `ejs` 不同
但只需要另外安裝 `Jade` 外掛 [hexo-render-jade](https://github.com/hexojs/hexo-renderer-jade)

## 其實只需要一行指令
``` yml
# 安裝 Jade 外掛
npm install hexo-renderer-jade --save
```
如此一來只要下 `hexo server` 就會自動幫你 compile
也可以另外插入 css 去修改了

<div class="tip">
    凡是有修改 `*.jade` 建議關掉重開 hexo 比較好，以確保有吃到變更。
</div>

jade theme 寫法參考: [hexo-theme-pure](https://github.com/saintwinkle/hexo-theme-pure)

----

# 編譯 SASS

## 在 themes 底下安裝 gulp

``` yml
cd themes/[your-themes]
# 裝 themes 裡面的 package
npm install
# 裝 gulp
npm install gulp -g
npm install gulp-sass
```

<small class="murmur">
    因為我在 themes 底下裝一直會噴 Error: EMFILE, too many open files 的錯誤，
    所以我乾脆把 gulp 裝在 root 底下
</small>

``` json /package.json
"dependencies": {
    "gulp": "^3.9.0",
    "gulp-autoprefixer": "^3.0.2",
    "gulp-sass": "^2.0.4",
    "gulp-sourcemaps": "^1.6.0"
}
```

``` yml
# 直接用 npm 裝一次
npm install
```

## 編輯 `gulpfile.js` (此處改自[hexo-theme-apollo](https://github.com/pinggod/hexo-theme-apollo/blob/master/gulpfile.js))
``` js themes/gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// 一次性編譯 Sass
gulp.task('sass', function() {
    // 原主題使用 scss, 因個人習慣新增 *.sass (多個 src 可用 array[] 方式塞入)
    return gulp.src(['./source/scss/*.scss', './source/scss/*.sass'])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'));
});

// 即時編譯
gulp.task('default', ['sass'], function() {
    gulp.watch('./source/scss/_partial/*.scss', ['sass']);
    // 同時 watch scss & sass
    gulp.watch(['./source/scss/*.scss', './source/scss/*.sass'], ['sass']);
});
```

``` yml @themes/
# 一次性編譯
gulp sass
# 或者
# always watch
gulp
```

----

# Tags

需安裝 `hexo-generate-tags`

<div class="tip">
    注意 tag 大小寫，會造成資料夾目錄連不進去
</div>