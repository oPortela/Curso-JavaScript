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


let fruits = [
    'Maça',
    'Uva',
    'Laranja',
    'Banana'
];

fruits.every((value) => {
    return value.length > 3;
    /*if(value.length > 3) {
        return true;
    } else {
        return false;
    }*/
});

console.log(value())