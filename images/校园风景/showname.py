import os

s = os.listdir(os.getcwd())

with open('name.txt','a',encoding = 'utf-8') as f:
    for i in s:
        f.write('<img width="100%" align="center" src="https://gcore.jsdelivr.net/gh/YubaC/2810security.github.io@latest/images/校园风景/{0}"><br>\n'.format(i))
