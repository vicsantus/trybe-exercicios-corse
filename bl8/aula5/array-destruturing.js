let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal]

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['qwer', 'eryt', 'yuio'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['asdf', 'dfgh', 'hjkl'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));