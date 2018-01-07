const arr = [1,2,3];

const arryAdd = arr
    .filter(number => number !== 2)
    .map(number => number + 1);

console.log(arryAdd);