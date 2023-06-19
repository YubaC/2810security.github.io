// 匿名函数
$(document).ready(() => {
    // 如果滚动条在顶部，设置自动滚动为true，否则为true
    // 这是为了显示加载完成的导航栏
    let autoScroll = $(window).scrollTop() === 0;
    // 滚动条滚动到顶部，不要动画
    // $("#header").load("header.html", () => {
    //     if (autoScroll) {
    //         $("html, body").animate({ scrollTop: 0 }, 0);
    //     }
    // });
    $("#footer").load("footer.html");
    $("#header").load("https://yubac.github.io/2810security.github.io/header.html", () => {
        if (autoScroll) {
            $("html, body").animate({ scrollTop: 0 }, 0);
        }
    });
    $("#footer").load("https://yubac.github.io/2810security.github.io/footer.html");
});