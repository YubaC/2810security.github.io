let div = document.getElementsByClassName("images-to-load")[0];
let imgs = div.getElementsByTagName("img");

console.log(div);
console.log(imgs);

for (i of imgs) {
    console.log(i);
    i.setAttribute("data-original", i.src);
    // i.setAttribute("class", "lazyloading");
    i.src = "";
}

// https://www.jb51.net/article/226958.htm
let view = document.documentElement.clientHeight; //获取浏览器窗口可视区的高度
function fn1() {
    setTimeout(function lazyload() { //添加一个定时器一秒钟后开始执行
        // let imgs = document.querySelectorAll('img'); // 获取所有img标签
        // console.log(imgs);
        for (let item of imgs) { // 使用for-of遍历所有图片
            // 显示图片出现在浏览器的位置
            let rect = item.getBoundingClientRect(); // 找到每一个图片在可视区上的位置
            console.log(rect);
            if (rect.bottom >= 0 && rect.top < view) { //给个if语句如果图片的底部大于0并且小于这个浏览器的可视区域 ，就执行以下操作
                item.src = item.getAttribute('data-original') // 获取data-original的路径传给img
            }
        }
    }, 1000)
}
fn1();
document.addEventListener('scroll', fn1) //当滚动事件发生时就开始执行fn1函数里的任务