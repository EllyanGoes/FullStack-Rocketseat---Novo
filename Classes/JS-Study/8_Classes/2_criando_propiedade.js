class Product {
  constructor(name){
    //this se refere ao contexto que estou inserido
    //recebe o nome recebido e coloca ele a disponível como uma propiedade dentro de uma classe
    this.name = name
  }
}

const product1 = new Product('Teclado')
console.log(product1.name)

const product2 = new Product('Mouse')
console.log(product2.name)

