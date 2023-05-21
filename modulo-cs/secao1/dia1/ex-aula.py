a = 10
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a ** b)
print(a / b)
print(a // b)
print(b % a)



hours = 6
minutes = hours * 10
seconds = minutes * 10
print(f"{hours}hrs, {minutes}min, {seconds}secs")


book = 24.2
desc = 0.4
transport = 3 + (0.75 * 59)

bookWithDiscount = book - (book * desc)
totalBook = (bookWithDiscount * 60) + transport
print(totalBook)
# help("for")

trybe_course = ["Introdução", "Front-end", "Back-end"]

trybe_course.append("Ciência da Computação")
trybe_course[0] = "Fundamentos"

var = set()
var.add('seu_nome')

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info.update({"recorrente": "Sim"})
print(info)
info.pop("origem")
print(info)


n = 1000
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

x = 1
fat = 9
for n in range(1, fat + 1):
    x = x * n
print(f"Fatorial de {fat}: {x}")

ratings = [6, 8, 5, 9, 10]
print(f'{[rating * 10 for rating in ratings]}')
print(f'Multiplos de 3: {[mult for mult in ratings if mult % 3 == 0]}')