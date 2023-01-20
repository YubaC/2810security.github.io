# 仓库注释

这是仓库[二十八级十班安全局（github.com/YubaC/2810security.github.io/）](github.com/YubaC/2810security.github.io/)的一些代码方面解释与说明。

## 1. 概述

二十八级十班安全局官网由于时间、技术跨度较大，维护多有不便，故留此注释，以便于日常维护与更新。

官网虽页面众多，但还没有统一的样式文件。

## 2.网页构成

一个标准的网页应由如下部分组成（可以参考[模板.htm](模板.htm)）：

### 2.1. 头部的HTML定义以及引用文件，如
```html
<!DOCTYPE html>
<html>

<head>
    <link rel="icon" href="https://yubac.github.io/2810security.github.io/images/icon.png" type="image/x-icon">
    <meta http-equiv="Content-Language" content="zh-cn">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <!--l2d调用-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css">
    <!-- 用户分析统计 -->
    <script type="text/javascript" src="https://gcore.jsdelivr.net/gh/YubaC/2810security.github.io@latest/js/tongji0.js"></script>
    <script type="text/javascript" src="https://gcore.jsdelivr.net/gh/YubaC/2810security.github.io@latest/js/tongji1.js"></script>
    <!-- 鼠标指针 -->
    <script src="https://gcore.jsdelivr.net/gh/YubaC/2810security.github.io@latest/js/mouse.js"></script>
</head>
```
有的网页内的此部分可能还含有如下代码块：
```html
<style>
#github svg {
    transition: all 1s;
    fill: #222;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
    width: 80px;
    height: 80px;
}

#github:hover svg {
    width: 160px;
    height: 160px;
}
</style>
```
这部分已弃用。因此可以删去，也可以保留。新的网页内无需再加入这部分代码块。

### 2.2. body的background。如：

```html
<body background="https://gcore.jsdelivr.net/gh/YubaC/2810security.github.io@latest/images/desalination2.jpg"></body>
```

除首页外的所有网页均应使用这个样式。

### 2.3. 用于无障碍和live2d的代码块。如：
```html
<!-- 无障碍 -->
<script type="text/javascript" src="https://gcore.jsdelivr.net/gh/YubaC/2810security.github.io@latest/js/assist-entry.js"></script>


<!--l2d人物动画-->
<div>
<script src="https://gcore.jsdelivr.net/gh/YubaC/2810security.github.io@latest/js/autoload.js"></script>
</div>
```

### 2.4. 网站头部的title-image以及导航栏。如：
```html
 <!-- title-image以及导航栏 -->
    <table border="0" width="100%" id="table2">
        <tr>
            <td align="center" width="96%" height="239">
                <p><img border="0" src="https://gcore.jsdelivr.net/gh/YubaC/2810security.github.io@latest/images/title.jpg" width="1000" height="200"></td>
        </tr>
        <tr>
            <td align="center">
                <font face="华文中宋">团结紧张 严肃活泼</font>
            </td>
        </tr>
    </table>
    <hr>
    <table border="1" width="100%" id="table1">
        <tr>
            <td width="100" align="center"><a href="index.htm">首页</a></td>
            <td width="100" align="center"><a href="下属机构/下属机构.htm">下属机构</a></td>
            <td width="100" align="center"><a href="法律规章/法律规章.htm">法律规章</a></td>
            <td width="100" align="center"><a href="监督举报/监督举报.htm">监督举报</a></td>
            <td align="center" width="100"><a href="审查巡察/审查巡察.htm">审查巡察</a></td>
            <td align="center" width="100"><a href="服务大厅/服务大厅.htm">服务大厅</a></td>
            <td align="center" width="100" id='assist-open'>无障碍</td>
        </tr>
    </table>
```

**修改时请注意相对路径是否正确。[checkLinks.py](./tools/Check-Links/checkLinks.py)可以帮助您检查仓库内所有.html文件内的引用链接(仅限形如`<a href="LINK">`内的相对链接)。** 详情请参考：[检查相对路径](#checkLinks)</a>

由于开发时使用的技术过于久远，导航栏并没有使用`<nav></nav>`等标签进行标注，这会对网站无障碍造成一定的干扰，新网页应注意修复。

### 2.5. 页面正文

由于开发时使用的技术过于久远，部分页面仍在使用表格进行布局，维护时应注意。

由于开发时使用的技术过于久远，页面正文并没有使用`<main></main>` `<section></section>`等标签进行标注，这会对网站无障碍造成一定的干扰，新网页应注意修复。

### 2.6. 页脚，如：

```html
<p align="center">　</p>
<hr>
<p>
    <font face="宋体">常用外网链接：<a href="http://jnsgzx.jinan.cn/">济南舜耕中学</a></font>
</p>
```

由于开发时使用的技术过于久远，页脚并没有使用`<footer></footer>`等标签进行标注，这会对网站无障碍造成一定的干扰，新网页应注意修复。

## 3. 特殊格式网页

### 3.1. 公文页面

#### 3.1.1. 概述

公文页面是用于在线展示公文的网页。所有的公文页面都应当提供对应的PDF版公文文档的下载链接以方便查看与打印。

一个完整的公文页面应至少一个公文页面的HTML文件、一个woff格式的字体文件（用于公文的标题字体）、一个PDF格式的公文文件。

为节约带宽、缩短加载时间，每个woff格式字体都应近包含标题所用文字以压缩文件大小。制作方式详见[字体文件的获取](#getFont)

#### 3.1.2. 编写与维护

##### 3.1.2.1. 快速生成

公文页面可由[writer.py](./tools/HTML-Document-Writer/writer.py)快速生成。详情请参考：[生成公文](#documentWriter)

<span id="checkLinks"></span>

[checkLinks.py](./tools/Check-Links/checkLinks.py)可以帮助您检查仓库内所有.html文件内的引用链接(仅限形如`<a href="LINK">`内的相对链接)。

##### 3.1.2.2. 手动编写及维护

一个完整的HTML公文文件应包含如下部分：

```html
<!-- 红头文件 -->
<link rel="stylesheet" href="https://yubac.github.io/2810security.github.io/css/document.css">
<style>
    @font-face {
        font-family: "FZXBSJW_2105485711";
        src: url("YOUR_WOFF_FILE_SRC");
        font-weight: normal;
        font-style: normal;
    }
</style>

<div id="document">
    <div id="titles">
        <div id="titles">
            <h1 id="title_red">YOUR_RED_TITLE</h1>
            <hr>
            <h1>YOUR_BLACK_TITLE</h1>
        </div>
    </div>
    <div id="main_body">
        <p>YOUR_PARAGRAPHS</p>
        <div id="sign_father">
            <img src="https://yubac.github.io/2810security.github.io/images/stamp.png">
            <p id="sign" align="right">YUOR_SIGN<br>YOUR_SIGN_TIME</p>
        </div>
    </div>
</div>
<script type="text/javascript" src="https://yubac.github.io/2810security.github.io/js/document.js"></script>
```

<span id="getFont"></span>

##### 3.1.2.3. 字体文件的获取

- 自动获取：[快速生成公文](#documentWriter)所生成的公文包含了一个字体文件。

- 手动获取：    
    1. 进入[方正小标宋字体包，方正小标宋字体打包下载_字加网](https://www.zijia.com.cn/164?utm_source=onlinedown)

    2. 在“输入文字，即时体验”输入框内输入标题并点击确定

    3. 等下方的文字加载出来后按`F12`打开DEVTools，选择查看器，点击右侧字体，点击并查看页面上的所有字体。目标字体一般为所有字体的第一个，并通常以“fzFZXBSJW”开头。

    4. 点击下方的复制链接并下载字体。

    5. 修改公文。
        ```css
        @font-face {
        font-family: "FZXBSJW_2105485711";
        src: url("将这里修改为你下载的字体的位置");
        font-weight: normal;
        font-style: normal;
        }
        ```

## 4. 小工具

<span id="checkLinks"></span>

### 4.1 检查链接（相对路径）

[checkLinks.py](./tools/Check-Links/checkLinks.py)可以帮助您检查仓库内所有.html文件内的引用链接(仅限形如`<a href="LINK">`内的相对链接)。直接双击运行脚本即可开始检查。这可能需要几分钟的时间。

当提示importError的时候，请在./tools/Check-Links/目录下打开cmd，运行以下命令：

`pip install -r checkLinks-requirements.txt`

检查结束后将会在仓库的根目录下生成一个checkLinks.md文件。**这个文件将会覆盖同名文件**。您可以依据这个MarkDown文件进行无效链接的修复。如果它是空的，则说明所有网页链接均完好，无需调整。

可以在[checkLinks.ignore](./tools/Check-Links/checkLinks.ignore)文件里设置要忽略的文件和链接。方法是：每行一个链接，使用相对链接。当文件的文件名或符合其中之一的时候这个文件将被忽略；当这个文件的一个链接在内时将被忽略不做检查。

<span id="documentWriter"></span>

### 4.2 快速生成公文

#### 4.2.1 启动

[writer.py](./tools/HTML-Document-Writer/writer.py)可以帮助您快速生成公文页面。直接双击运行脚本即可开始。我们同时提供了打包后的EXE版本的工具，请**将[writer.zip](./tools/HTML-Document-Writer/writer.zip)完全解压后**双击其中的writer.exe运行。

当提示importError的时候，请在./tools/HTML-Document-Writer/目录下打开cmd，运行以下命令：

`pip install -r requirements.txt`

#### 4.2.2 使用

请根据提示一步步进行操作。当输入结束后回车输入空内容即可完成。

例如：输入完红头标题后回车，会提示输入下一个红头标题。这时候再次回车输入空内容即可跳过这一部分的输入。

**我们推荐使用cmd运行这个程序，因为这样可以使用右键进行粘贴。**

当输入完成后，将会在指定的目录下生成两个文件：一个document.html文件，为公文网页，以及一个woff格式的字体文件。这两个文件应被置于同一文件夹下。