// push(): Adiciona um elemento ao final do array.
// unshift(): Adiciona um elemento ao início do array.
// pop(): Remove o último elemento do array.
// shift(): Remove o primeiro elemento do array.
// slice(): Cria uma nova array com uma parte do array atual.
// indexOf(): Encontra o índice de um elemento no array.
// forEach(): Chama uma função para cada elemento do array.
// map(): Cria um novo array com os resultados da aplicação de uma função a cada elemento do array.
// filter(): Cria um novo array com os elementos do array atual que atendem a uma determinada condição.
// reduce(): Aplica uma função a cada elemento do array e retorna um resultado único.

let fruits = ['maça','uva','laranja', 'banana'];

fruits.push('kiwi', 'pera');
fruits.pop();
fruits.shift();
fruits.unshift('limão');
fruits[1] = 'mamão';
fruits[fruits.length - 1] = 'Jabuticaba'


console.log(fruits.join(' - ')); // adiciona um separador entre os itens do array, além de transformar em string.
console.log(fruits);
console.log(fruits.length);

