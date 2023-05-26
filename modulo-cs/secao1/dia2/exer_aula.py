import sys


def vertical(n):
    for letter in n:
        print(f"{letter}", end="\n")


vertical("Bia")


def sum():
    count = 0
    while True:
        valStr = input("Digite um número: ")
        if not valStr.isnumeric():
            print(
                f"Erro ao somar valores, {valStr} é um valor inválido", file=sys.stderr
            )
            break
        count += int(valStr)
        again = input("Deseja somar mais algum número? (S/N)").capitalize()
        if again == "N":
            break
    return count


print(sum())
