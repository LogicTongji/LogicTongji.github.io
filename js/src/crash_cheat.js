/* 所在目录：~/theme/next/source/js/ */

/* 崩溃欺骗 */
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/favicon_1.ico");
        document.title = '╭(°A°`)╮ 你给我回来！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '(ฅ>ω<*ฅ) 同济呀同济～' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
