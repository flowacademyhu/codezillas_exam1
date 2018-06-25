/*
5.6. Írd le az unio tételét vagy egyéb algoritmust, mely két tömb unióját számolja ki. (5p)
*/
let tomb1 = [0, 1, 2, 3, 4, 5];
let tomb2 = [4, 5, 6, 7, 8];
let ujTomb = [];

for (let i = 0; i < tomb1.length; i++) {
  ujTomb.push(tomb1[i]);
}
for (let j = 0; j < tomb2.length; j++) {
  let flag = true;
  for (let i = 0; i < tomb1.length; i++) {
    if (tomb2[j] === tomb1[i]) flag = false;
  }
  if (flag) ujTomb.push(tomb2[j]);
}

console.log(ujTomb);
