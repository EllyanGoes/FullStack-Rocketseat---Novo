const data = ["Ellyan Góes", "ellyan.goes@gmail.com"];

//Destrtuturando o Array
const [username, email] = data;

console.log(username);
console.log(email);

const fruit = ["banana", "apple", "orange"];

//Desestrtuturar somente o primeiro

const [banana] = fruit;
console.log(banana);

//Destrtuturando o segundo

const [_, apple] = fruit;
console.log(apple);

//Ignorando o primeiro e o segundo

const [, , orange] = fruit;
console.log(orange);
