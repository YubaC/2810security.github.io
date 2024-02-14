# 用于遍历整个文件夹内的所有文件，逐行分析文件
# 然后查找所有的<a>标签，提取其中的链接
# 分析链接，查看是否有效
# 如果无效，打印出来，并添加到checkLinks.md文件内
# 输出格式为：文件名 行号 链接

import os
import re
import requests
# import csv

# 忽略的链接，不需要检查
# 当链接的目标是这里面的文件的时候跳过

# 切换文件夹为tools/Check-Links
f = open("checkLinks.ignore", "r", encoding="utf-8")
ignores = [os.path.normpath(path) for path in f.read().splitlines()]
f.close()

# 遍历文件夹内的所有文件
def checkLinks(path):
    # 起始位置为path
    start_path = path
    for root, dirs, files in os.walk(path):
        for file in files:
            # print(file)
            # 判断是否为html文件
            if file.endswith('.html') or file.endswith('.htm') or file.endswith('.HTML') or file.endswith('.HTM'):
                checkFile(root, file, start_path)

# 检查文件内的所有链接
def checkFile(root, file, start_path):
    # print(root, file)
    with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
        lines = f.readlines()
        for i, line in enumerate(lines):
            # print(i, line)

            # i为行号，line为行内容
            checkLine(os.path.join(root, file), i, line, start_path)

# 检查行内的所有链接
def checkLine(file, i, line, start_path):
    # print(file, i, line)
    links = re.findall(r'<a href="(.+?)".*?>', line)
    for link in links:
        # print(link)
        checkLink(file, i, link, start_path)

# 检查链接是否有效
def checkLink(file, i, link, start_path):
    global ignores
    # print(file, i, link)
    # 如果链接是以#开头的，说明是本页内的锚点，不需要检查
    # 如果链接是以javascript:开头的，说明是js脚本，不需要检查
    # 如果是邮件地址，不需要检查
    # 如果链接是相对路径，则查看对应路径下的文件是否存在
    try:
        # print(link)
        if link.startswith('#') or link.startswith('javascript:'):
            pass

        # !检查外部链接是否有效太慢了，暂时不检查
        elif link.startswith('http'):
            pass
            # # file转换为相对路径
           # file = os.path.relpath(file, start_path)

           # r = requests.get(link)
           # if r.status_code != 200:
           #     with open(os.path.join(start_path, 'checkLinks.md'), 'a', encoding='utf-8') as f:
           #         f.write('* [ ]  '+file + ', line ' + str(i) + ', ' + link + '\r\n')
           #         f.close()
        elif link.startswith('mailto:'):
            pass
        else:
            # 进入file所在目录
            os.chdir(os.path.dirname(file))

            # file转换为相对路径
            file = os.path.relpath(file, start_path)

            # 如果file在ignores内就忽略
            # 如果link在ignore内也忽略
            if file in ignores or link in ignores:
                pass
            else:
                if not os.path.exists(link):
                    # print(file, i, link)
                    with open(os.path.join(start_path, 'checkLinks.md'), 'a', encoding='utf-8') as f:
                        f.write('* [ ]  '+file + ', line ' +
                                str(i) + ', ' + link + '\r\n')
                        f.close()

            # 回到初始目录
            os.chdir(start_path)

    except:
        # print(file, i, link)
        with open(os.path.join(start_path, 'checkLinks.md'), 'a', encoding='utf-8') as f:
            f.write('* [ ]  '+file + ', line ' + str(i) + ', ' + link + '\r\n')
            f.close()


if __name__ == '__main__':
    # 检查仓库文件夹下的所有文件
    repo_path = os.path.abspath(os.path.dirname(os.getcwd()))
    os.chdir(repo_path)
    repo_path = os.path.abspath(os.path.dirname(os.getcwd()))
    os.chdir(repo_path)

    f = open('checkLinks.md', 'w', encoding='utf-8')
    f.close()

    # print("Checking Links in " + repo_path)
    checkLinks(repo_path)

    # 如果有无效链接就报错退出
    f = open('checkLinks.md', 'r', encoding='utf-8')
    lines = f.read().splitlines()
    f.close()
    if len(lines) > 0:
        print("Invalid Links Found")
        exit(1)
