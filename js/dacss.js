function getCSS() {
    datetoday = new Date();
    timenow = datetoday.getTime();
    datetoday.setTime(timenow);
    myday= datetoday.getDate();
    mymonth=datetoday.getMonth()+1;
    if (myday == 4){
        if (mymonth == 4){
        display = "css/1.css";
        }
    }
    var css = '<';
    css += 'link rel="stylesheet" href=' + display + ' \/';
    css += '>';
    document.write(css);
}