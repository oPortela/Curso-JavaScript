/*let fruits = [
    'Maça',
    'Uva',
    'Laranja',
    'Banana'
];

let bigFruits = fruits.filter((item) => item.length > 4);

/*let bigFruits = fruits.filter((item) => {
    //return item.length > 4;

    if(item.length > 4) {
        return true;
    }else {
        return false;
    }
});

console.log(bigFruits);*/


/*let fruits = [
    'Maça',
    'Uva',
    'Laranja',
    'Banana', 
    'Pêra'
];

let ok = fruits.every((value) => {
    //return value.length > 3;
    if(value.length > 3) {
        return true;
    } else {
        return false;
    }
});

if(ok) {
    console.log('Todos são maiores que 3')
} else {
    console.log('não são todos maiores que 3')
}
*/


/*let fruits = [
    'Uva',
    'Maça',
    'Laranja',
    'Banana', 
    'Pêra'
];

let ok = fruits.some((value) => { //o some ao contrario do every, ele retorna TRUE quando um item ja satisfaz a minha condição (Como no caso, uma fruita tem mais de três letras, então logo ele retorna TRUE).
    //return value.length > 3;
    if(value.length > 3) {
        return true;
    } else {
        return false;
    }
});

if(ok) {
    console.log('Algum item é maior do que 3')
} else {
    console.log('Nenhum item é maior do que 3')
}
*/


let fruits = [
    'Uva',
    'Maça',
    'Laranja',
    'Banana', 
    'Pêra'
];



if(fruits.includes('Uva')) { //o includes verfica se possui alguma string dentro de um array, se sim ele retorna TRUE
    console.log('Tem uva sim')
}else {
    console.log('Não possui uva...')
}