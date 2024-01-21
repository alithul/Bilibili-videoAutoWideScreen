// ==UserScript==
// @name         Bilibili-videoAutoWideScreen
// @namespace    https://github.com/alithul/Bilibili-videoAutoWideScreen
// @version      2024-01-13
// @description  在哔哩哔哩网站打开视频后，自动将视频设置为宽屏模式。
// @author       alithul
// @match        *://www.bilibili.com/video/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 统计运行次数
    let count = 0;

    // 设置定时器以尝试进入宽屏模式
    let timer = setInterval(function () {
        ++count;
        console.log(`attempt ${count}`);
        let btn = document.querySelector("div.bpx-player-ctrl-wide");
        if (btn) {
            btn.click();
            clearInterval(timer);
        } else if (count > 50) {
            clearInterval(timer);
        }
    }, 200);

})();
