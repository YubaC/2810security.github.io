function getQinMingJieDate(fullYear) {
    //清明节的日期是不固定的，规律是：闰年开始的前2年是4月4日，闰年开始的第3年和第4年是4月5日
    if (isLeapYear(fullYear) || isLeapYear(fullYear - 1)) {
        return 04;
    } else {
        return 05;
    }
}
//判断是否是闰年
function isLeapYear(Year) {
    if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
        return (true);
    } else { return (false); }
}

function getCSS() {
    datetoday = new Date();
    timenow = datetoday.getTime();
    datetoday.setTime(timenow);
    myday = datetoday.getDate();
    mymonth = datetoday.getMonth() + 1;
    if (myday == getQinMingJieDate(datetoday.getYear() + 1900)) {
        if (mymonth == 4) {
            display = "css/1.css";
        }
    }
    var css = '<';
    css += 'link rel="stylesheet" href=' + display + ' \/';
    css += '>';
    document.write(css);
    document.write(' <!-- 下雨特效 -->');
    document.write('<script src="http://code.jquery.com/jquery-1.12.1.min.js"></script>');
    document.write('<script src="js/rain.js"></script>');
    window.alert("草萋萋，雨绵绵，清明含泪祭奠；行缓缓，路漫漫，凝眸缭绕清烟；忆深深，思拳拳，难忘故人容颜；情切切，语千千，诉说此生挂牵。故人安息，生者康安。");
}