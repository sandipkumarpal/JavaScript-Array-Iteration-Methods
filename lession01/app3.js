const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let sName = [];

names.forEach(name  => {
    if (name.charAt(0) === 'S') {
        sName.push(name);
    }
});

console.log(sName);