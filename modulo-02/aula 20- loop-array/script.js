/* md02 aula 20*/

let cores = [
    { nome: 'preto', qt: 10 },
    { nome: 'azul', qt: 5 },
    { nome: 'vermelho', qt: 15 }
];

/*cores.push('Verde', 'Rosa');*/

for(let n = 0; n < cores.length; n++){
    console.log(cores[n].qt);
};

console.log('');

for(let i in cores) { //quando coloco o in e uma variavel x, essa variavel será a chave do meu array.
    console.log(cores[i].nome);
};
console.log('');

console.log(cores[0].nome);

console.log('');

for(let cor of cores) { //o valor que tiver em cores eu coloco em cor fazendo o loop.
    console.log(cor);
}

console.log('');

for(let cor of cores) {
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
};

console.log('');

for(let i in cores) {
    cores[i].nome = cores[i].nome.toUpperCase();
};

console.log(cores);