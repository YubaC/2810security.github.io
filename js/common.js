$(document).ready(() => {
    $("#header").load("header.html", () => {
        // 滚动条滚动到顶部，不要动画
        $("html, body").animate({ scrollTop: 0 }, 0);
    });
    $("#footer").load("footer.html");
    // $("#header").load("https://yubac.github.io/2810security.github.io/header.html", () => {
    //     // 滚动条滚动到顶部，不要动画
    //     $("html, body").animate({ scrollTop: 0 }, 0);
    // });
    // $("#footer").load("https://yubac.github.io/2810security.github.io/footer.html");
});