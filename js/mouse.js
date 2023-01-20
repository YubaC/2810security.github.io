var evt = {
    //window.event和事件参数对象e的兼容
    getEvent: function(evt) {
        return window.event || evt;
    },
    //可视区域的横坐标的兼容代码
    getClientX: function(evt) {
        return this.getEvent(evt).clientX;
    },
    //可视区域的纵坐标的兼容代码
    getClientY: function(evt) {
        return this.getEvent(evt).clientY;
    },
    //页面向左卷曲出去的横坐标
    getScrollLeft: function() {
        return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
    },
    //页面向上卷曲出去的纵坐标
    getScrollTop: function() {
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    },
    //相对于页面的横坐标(pageX或者是clientX+scrollLeft)
    getPageX: function(evt) {
        return this.getEvent(evt).pageX ? this.getEvent(evt).pageX : this.getClientX(evt) + this.getScrollLeft();
    },
    //相对于页面的纵坐标(pageY或者是clientY+scrollTop)
    getPageY: function(evt) {
        return this.getEvent(evt).pageY ? this.getEvent(evt).pageY : this.getClientY(evt) + this.getScrollTop();
    }

};

function doMouseMove(e) {
    var x = evt.getPageX(e) + 20;
    var y = evt.getPageY(e) + 20;

    var curElement = document.getElementById("myImg");
    curElement.style.left = x + "px";
    curElement.style.top = y + "px";
}

function IsPc() { //是PC→false，是移动端→true
    let userAgent = navigator.userAgent,
        Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    console.log('userAgent:', userAgent)
    return Agents.some((i) => {
        return userAgent.includes(i)
    })
}

if (!IsPc()) {
    document.onmousemove = doMouseMove;

    document.write('<div ID="myDiv">');
    document.write('<img id="myImg" src="https://gcore.jsdelivr.net/gh/YubaC/2810security.github.io@latest/images/mouse.png" STYLE="position:absolute;TOP:0pt;LEFT:0pt;width=103;height=28;Z-INDEX:2;">');
    document.write('</div>');
}