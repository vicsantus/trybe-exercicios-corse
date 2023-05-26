with open('arquivo.txt', mode='r') as file:
    for lines in file:
        if int(lines.split()[1]) < 6:
            print(lines.split()[0])
