day = int(input('Digite um número de 1 a 7:  '))

if day == 1:
    print('Domingo')
elif day == 2:
    print('Segunda-feira')
elif day == 3:
    print('Terça-feira')
elif day == 4:
    print('Quarta-feira')
elif day == 5:
    print('Quinta-feira')
elif day == 6:
    print('Sexta-feira')
elif day == 7:
    print('Sabádo')
else :
    print("Opção inválida!")


months = int(input('Digite um número de 1 a 12:  '))

if months == 1:
    print('Janeiro')
elif months == 2:
    print('Fevereiro')
elif months == 3:
    print('Março')
elif months == 4:
    print('Abril')
elif months == 5:
    print('Maio')
elif months == 6:
    print('Junho')
elif months == 7:
    print('Julho')
elif months == 8:
    print('Agosto')
elif months == 9:
    print('Setembro')
elif months == 10:
    print('Outubro')
elif months == 11:
    print('Novembro')
elif months == 12:
    print('Dezembro')
else :
    print("Opção inválida!")


n1 = float(input('Digite a nota da primeira prova: '))
n2 = float(input('Digite a nota da segunda prova: '))
n3 = float(input('Digite a nota da terceira prova: '))
p1 = float(input('Digite a nota da peso da primeira prova: '))
p2 = float(input('Digite a nota da peso da segunda prova: '))
p3 = float(input('Digite a nota da peso da terceira prova: '))


soma = (n1 * p1) + (n2 * p2) + (n3 * p3)
psoma = p1 + p2 + p3
media = soma / psoma

media_formatada = "{:.2f}".format(media)

print(f'A sua média foi de {media_formatada}')
##print(f'A sua média foi de {media}')

if media >= 60 :
  print('Você está aprovado!')
else :
  print('Você está reprovado!')
