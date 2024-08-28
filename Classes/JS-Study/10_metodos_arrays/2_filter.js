// O método filter() cria um novo array com todos os elementos que passaram
const words = ["Javascript", "HTML", "CSS", "Web"];

const result = words.filter((word) => word.length > 3);

console.log(result);

const products = [
  { description: "Teclado", price: 150, promotion: true },
  { description: "Mouse", price: 70, promotion: false },
  { description: "Monitor", price: 900, promotion: true },
];

//exemplo de filtor
const promotion = products.filter((product) => product.promotion === true);
console.log(promotion);

//Retornar um array com os dados daquele array filtrados

const expend = products.filter((product) => product.price < 100);
console.log(expend);
