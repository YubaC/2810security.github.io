function IsPc() { //是PC→false，是移动端→true
    let userAgent = navigator.userAgent,
        Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    console.log('userAgent:', userAgent);
    return Agents.some((i) => {
        return userAgent.includes(i);
    })
}

if (IsPc()) {
    // document.getElementById("title_red").innerText = "济南舜耕中学二十八级十班安全局";
    document.getElementById("document").style.marginLeft = "3%";
    document.getElementById("document").style.marginRight = "3%";

    document.getElementById("titles").style.fontSize = "large";
}