/*
5.4. Írd le a megszámlálás tételét (3p)
*/

let tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let limit = 6;
let counter = 0;

for (let i = 0; i < tomb.length; i++) {
  if (tomb[i] > limit) counter++;
}

console.log(counter + ' db elem van a tömbben, ami nagyobb, mint ' + limit + '!');
