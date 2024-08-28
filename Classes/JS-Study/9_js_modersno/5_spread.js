//spread (espalhar) permite ue um objeto iterável, como uma expressão de array ou uma string eja expandida para ser usado onde zero ou mais argumentos

const number = [1, 2, 3];
console.log(number);

console.log(...number);

//Criando objeto
const data = [
  {
    name: "Ellyan",
    email: "ellyan.goes@gmail.com",
    avatar: "r.png",
  },
  {
    name: "João",
    email: "joão.gomes@gmail.com",
    avatar: "r.png",
  },
];
console.log(data);

//utilizando spread com array
console.log(...data);
