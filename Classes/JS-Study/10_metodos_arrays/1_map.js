// O método map() chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. E no final, devolve o novo array.
const products = ["Teclado", "Mouse", "Monitor"]

// Percorro os itens do Array
products.map((product) => {
  console.log(product)
})

//Sintaxe reduzida
products.map((product) => console.log(product))

//Utilizando o novo objeto retornando
const formatted = products.map((product) => {
  //return product.toUpperCase();

  return {
    id: Math.random(),
    description: product,
  }
})

console.log(formatted)

//muito utlizado quando você precisa percorrer, manipular e retornar um array no final
