/*
5.8. Írd meg a fibonacci tételt rekurzió segítségével (a 100. elemnél lépjen ki) (5p)
*/
let fibNums = [1, 1];
let limit = 100;

const calcFibNum = (fibNums, limit) => {
  if (fibNums.length < limit) {}
}

for (let i = 2; i < limit; i++) {
  fibNums.push(fibNums[i - 1] + fibNums[i - 2]);
}

console.log(fibNums);
