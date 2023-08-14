/*let number = 0;

while (number <= 10) {
    console.log(`O numero da vez é ${number}`);
    number++;
}

for (let number = 0; number <= 10; number++) {
    console.log(`O number da vez é ${number}`);
}
*/

// tabuada com while
let n2 = 0;

while (n2 <= 10) {
    let n1 = 0;
        while (n1 <= 9) {
            n1++;
            console.log(`${n1} x ${n2} = ${n1 * n2}`)
        }
    n2++;
}

