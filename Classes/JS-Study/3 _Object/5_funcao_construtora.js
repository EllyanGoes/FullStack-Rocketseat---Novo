function createProduct(name){
  const product = {}

  product.name = name 

  product.details = function(){
    console.log(`O produto descrito é ${name}`)
  }

  return product
}

// o New cria um novo objeto usando a a estrutura da função construtora 

product1 = new createProduct('Teclado')
product1.details()

console.log(product1.name)


// Exemplos de funções construtoras dentro do Jarvascript 

let myName = new String('Ellyan')
console.log(myName)

let price = "40.6".replace('.','')
console.log(price)

let date = new Date('2024-1-1')
console.log(date)


//outra forma de fazer uma função construtora
function Person(name){
  this.name = name
  this.message = function(){
    console.log(`Olá ${this.name}`)
  }
}


const person1 = new Person('joão')

console.log(person1)
console.log(person1.name)
person1.message()
console.log(person1['message'])


