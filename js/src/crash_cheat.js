/* 所在目录：~/theme/next/source/js/ */

/* 崩溃欺骗 */
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '╭(°A°`)╮ 你给我回来！';
        clearTimeout(titleTime);
    }
    else {
        document.title = '(ฅ>ω<*ฅ) 同济呀同济～' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
