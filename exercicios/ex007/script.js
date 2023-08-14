// 1. No array abaixo, qual o número que pega a Ferrari?
let cars = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1
console.log('1. ' + cars[x]);

// 2.Troque a Ferrari por Audi
cars[1] = 'Audi';

console.log('2. Lista com audi:');
console.log(cars);

// 3. Adicione o Volvo a lista
cars.push('Volvo');

console.log('3. Lista com Volvo:')
console.log(cars);

// 4. Exiba quantos itens tem no array

console.log('4. Itens no array:')
console.log(`Possui ${cars.length} carros nesse array`);