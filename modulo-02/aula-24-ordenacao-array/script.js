/*let fruits = [
    'Maça',
    'Uva',
    'Laranja',
    'Banana'
];

fruits.sort(); /*Ele fica em ordem alfabética
fruits.reverse();
/* Combinando os dois ordenamos em ordem de Z a A. 

console.log(fruits);
*/

let cars = [
    { brand: 'Fiat', year: 2022},
    { brand: 'Bmw', year: 2018},
    { brand: 'Volkswagen', year: 2004},
    { brand: 'Ferrari', year: 2020},
    { brand: "ford", year: 1969}
];

cars.sort((a, b) => a.year - b.year); //menor para o maior
console.log(cars);

cars.sort((a, b) => b.year - a.year); //maior para o menor
console.log(cars);

/*cars.sort((a, b) => {
    return a.year - b.year;
});*/

/*if(a.year > b.year) {
        return 1;
    } else if(a.year < b.year) {
        return -1;
    }else {
        return 0;
    }*/