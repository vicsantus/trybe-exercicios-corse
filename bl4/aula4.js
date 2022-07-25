let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 }
};

console.log("A jogadora", player.name, player.lastName, "tem", player.age, "anos de idade.");

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

let qtMelhor = 0;
for (let x of player.bestInTheWorld){qtMelhor++}

console.log("A jogadora Marta Silva foi eleita a melhor do mundo por", qtMelhor,"vezes");
console.log("A jogadora possui", player.medals.golden,"medalhas de ouro e", player.medals.silver,"medalhas de prata");






//Exercicio 2
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for (let x in names){
  console.log("Olá", names[x])
}


let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let x in car){ console.log(x, car[x])}
