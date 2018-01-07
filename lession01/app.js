const total = [ 0, 1, 2, 3 ].reduce(
    ( acc, cur ) => acc + cur,
    3
);

console.log(total);

// ==========================================================

const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

const totalPrice = prices.reduce((sum, price) => sum + price);

console.log(totalPrice);

// ========================================================

const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

const gNameCount = names.reduce((count, name) => {
    if (name[0] === 'G') {
        return count + 1;
    }
    return count;
}, 0);

console.log(gNameCount);
