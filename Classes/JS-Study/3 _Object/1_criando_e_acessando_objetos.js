/*  #Objetos 

-> é uma coleção de dados e/ou funcionalidades 
-> Podem ter propiedades e métodos(funções)

*/

//Criando objeto vazio
const obj = {}

console.log(obj)
console.log(typeof obj)

//Criando objeto com métodos e propiedades
const user = {
  email: 'ellyan.goes@gmail.com', 
  age: 18,
  // Objeto alinhado para propiedades compostas 
  name:{
    firstName: 'Ellayn',
    lastName:'Góes',
  },
  adress: {
    street:'Rua x',
    city:'São Paulo',
    number: 28,
    postal_code: '12345-123',
  },
  // método
  message: ()=>{
    console.log('olá rodrigo')
  }
}

// Acessando propiedades e métodos uasndo anotação de pontos.

console.log(user.email)

console.log(user.name.firstName
)

//executando método 
user.message()

//notação de colchetes
console.log(user['email'])
console.log(user['name']['firstName'])

user['message']()

