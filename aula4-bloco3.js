//EXERCICIO 1
let fat = 10;
let result = 0;
for (let soma = 1; soma <= 50; soma++){
  result += soma;
}
console.log(result);

//EXERCICIO 2
let cont = 0;
for (let a = 2; a <= 150; a += 1){
  if (a % 3 === 0){
    cont++
  }

}
if (cont === 50){
  console.log('Parabéns! Resultado exatamente ' + 50);
}

//EXERCICIO 3
let matriz = [[505, 'maria'], [90, 'josé'], [200, 'ricardo']]
let indexMenor = 0;
let idade = matriz[0][0];
for (let x = 0; x < matriz.length; x++){
  if (idade >= matriz[x][0]){
    indexMenor = x;
    idade = matriz[x][0]
  }
}
console.log(matriz[indexMenor][1] + ' é mais novo(a).');
