const product = {
  description: "Teclado",
  price: 150,
};

const { description, price } = product;

console.log("O nome do produto é:", description);
console.log("O preço é:", price);

//desestrturando uma função
function newProduct({ description, price }) {
  console.log("### Novo Produt o###");
  console.log("O nome do produto é:", description);
  console.log("O preço é:", price);
}

newProduct({
  price: 70,
  description: "Mouse",
});
