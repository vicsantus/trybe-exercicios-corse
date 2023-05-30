def fibonacci(num):  # nome da função e parâmetro
    print(num)
    if (num <= 1):  # condição de parada

        return num

    else:

        return fibonacci(num - 2) + fibonacci(num - 1)


print(f"Resultado: {fibonacci(93)}")
