const users = [
    {name: 'Samir', age: 27},
    {name: 'Angela', age: 33},
    {name: 'Beatrice', age: 40}
  ];

const newUserArray = users.filter(user => user.name !== 'Samir');

console.log(newUserArray);

const personWithAge = users.map(user => `${user.name} ${user.age} is years old.`);

console.log(personWithAge);

const userObject = users.reduce((userObj, user) => {
    userObj[user.name] = user.age;
    return userObj;
}, {});

console.log(userObject);

const authors = [
    { firstName: "Beatrix", lastName: "Potter" },
    { firstName: "Ann", lastName: "Martin" },
    { firstName: "Beverly", lastName: "Cleary" },
    { firstName: "Roald", lastName: "Dahl" },
    { firstName: "Lewis", lastName: "Carroll" }
  ];
  let fullAuthorNames;
  
  // fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
  // Write your code below
  
  fullAuthorNames = authors.map((author) => {
    return `${author.firstName} ${author.lastName}`; 
  });

  console.log(fullAuthorNames);