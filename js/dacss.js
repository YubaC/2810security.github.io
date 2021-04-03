function getCSS() {
    datetoday = new Date();
    timenow = datetoday.getTime();
    datetoday.setTime(timenow);
    myday = datetoday.getDate();
    mymonth = datetoday.getMonth() + 1;
    if (myday == 4) {
        if (mymonth == 4) {
            display = "css/1.css";
            window.alert("草萋萋，雨绵绵，清明含泪祭奠；行缓缓，路漫漫，凝眸缭绕清烟；忆深深，思拳拳，难忘故人容颜；情切切，语千千，诉说此生挂牵。故人安息，生者康安。");
        }
    }
    var css = '<';
    css += 'link rel="stylesheet" href=' + display + ' \/';
    css += '>';
    document.write(css);
}

