/*
5.7. Írj egy modult, mely négy függvényt exportál: osszeadas, kivonas, osztas, szorzas. A függvények működjenek is. (5p)
*/

const operations = require('./operationsModule');

let a = 10;
let b = 5;

console.log(operations.addition(a, b));
console.log(operations.subtraction(a, b));
console.log(operations.multiplication(a, b));
console.log(operations.division(a, b));
