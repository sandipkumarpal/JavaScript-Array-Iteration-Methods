const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

// const sNames = names.filter(name => {
//     if (name.charAt(0) === 'S') {
//         return true;
//     } else {
//         return false;
//     }
// });
const sNames = names.filter(name => name.charAt(0) === 'S');

console.log(sNames);
