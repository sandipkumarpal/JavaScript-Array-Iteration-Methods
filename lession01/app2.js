const numbers = [1,2,3,4,5,6,7,8,9,10];

const withOut3 = numbers.filter(number => number !== 3);
console.log(withOut3);

const onlyNumber5 = numbers.filter(number => number === 5);
console.log(onlyNumber5);

const even = numbers.filter(number => number % 2 === 0);
console.log(even);