# import pandas as pd
from jinja2 import Environment, FileSystemLoader

import requests
import json
import os
import random

# folder_path = "D:\\000000"
folder_path = os.path.normpath(input("输入要保存的路径："))

red_title = ''
red_title_input = ""
title = ""

i = 1

while True:
    red_title_input = input("红头标题{0}：".format(i))
    if red_title_input == "":
        break
    if i != 1:
        red_title += '            <h1 id="title_red">{0}</h1>\n'.format(
            red_title_input)
    else:
        red_title += '<h1 id="title_red">{0}</h1>\n'.format(
            red_title_input)
    title += red_title_input + ' '
    i += 1

black_title_input = input("标题：")

sign = title
title += black_title_input

i = 1

para_input = ""
para = ""

while True:
    para_input = input("段{0}：".format(i))
    if para_input == "":
        break
    para += '            <p>&emsp;&emsp;{0}</p>\n'.format(
        para_input)
    i += 1

time = input("时间：")

# with open(os.path.join(folder_path, 'document.html'), 'w', encoding="utf-8") as f:
#     with open('data/data0', 'r', encoding="utf-8") as d:
#         f.write(d.read()+title)
#         f.close()
#         d.close()

# with open(os.path.join(folder_path, 'document.html'), 'a', encoding="utf-8") as f:
#     with open('data/data1', 'r', encoding="utf-8") as d:
#         f.write(d.read() + '\n' + red_title + '            <hr>\n            <h1>' +
#                 black_title_input + '</h1>\n        </div>\n        <div id="main_body">\n' + para + '            <div id="sign_father">\n                <img src="https://yubac.github.io/2810security.github.io/images/stamp.png">\n                <p id="sign" align="right">' + sign.replace(' ', '<br>') + time)
#         f.close()
#         d.close()

# with open(os.path.join(folder_path, 'document.html'), 'a', encoding="utf-8") as f:
#     with open('data/data2', 'r', encoding="utf-8") as d:
#         f.write(d.read())
#         f.close()
#         d.close()

if __name__ == '__main__':
    cookie = "token=code_space;"
    header = {
        "cookie": cookie,
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36"
    }
    # 发送字典
    post_dict = {'key1': 'value1', 'key2': 'value2'}
    # 发送元组
    post_tuple = (('key1', 'value1'), ('key1', 'value2'))
    # 发送json
    post_json = json.dumps(
        {'fontname': '[{"fontname":"FZXBSJW","content":"' + title + '"},{"fontname":"FZXBSFW","content":"' + title + '"}]', 'talk': 'chinese', 'authcode': '3EVA9C'})
    # https://www.zijia.com.cn/dealFontnew
    # print(post_json)
    r1 = requests.post("https://www.zijia.com.cn/dealFontnew",
                       data=post_json, headers=header)

    # print(r1.json()["FZXBSJW"]["url"][:-3] + "woff")

    woff = requests.get(r1.json()["FZXBSJW"]["url"][:-3] + "woff")  # 发送请求

    font_name = 'FZXBSJW_' + str(random.randint(100000000, 999999999)) + '.woff'

    with open(os.path.join(folder_path, font_name), 'wb') as f:
        f.write(woff.content)
        f.close()


# data = {'strategy_name': '第一个策略', 'start_time': '2020-01-01', 'end_time': '2021-06-01', 'money': 20000}
env = Environment(loader=FileSystemLoader('./'))
template = env.get_template('data.html')
with open(os.path.join(folder_path, "document.html"), 'w+', encoding='utf-8') as f:
    out = template.render(title=title, document_title=red_title + '            <hr>\n            <h1>' +
                          black_title_input + '</h1>', para=para, sign=sign, time=time, font_name = font_name)
    f.write(out)
    f.close()
