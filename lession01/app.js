const fruits = ['Apple', 'Pear', 'Cherry'];
const capitalizeFruits = [];

fruits.forEach(fruit => {
    let capitalizeFruitsItems = fruit.toUpperCase();
    capitalizeFruits.push(capitalizeFruitsItems);
});

console.log(capitalizeFruits);