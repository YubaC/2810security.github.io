with open("0.txt",'r',encoding='utf-8') as f1:
    with open("1.txt",'w',encoding='utf-8') as f2:
        lines = f1.read().splitlines()
        for i in lines:
            f2.write('<p>{0}</p>\n'.format(i))
        f1.close()
        f2.close()