const strings = ['1','2','3','4','5'];

const numbers = strings.map(string => parseInt(string,10));

console.log(numbers);

// ================================================

const fruits = ['apple', 'pear', 'cherry'];

const capitalize = fruits.map(fruit => fruit.toUpperCase());

console.log(capitalize);

// ===================================================
const prices = [5, 4.23, 6.4, 8.09, 3.20];

const displayPrice = prices.map(price => `$${price.toFixed(2)}`);

console.log(displayPrice);