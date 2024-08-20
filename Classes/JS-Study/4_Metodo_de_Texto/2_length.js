// string é uma cadeia de caracteres

let message = 'Estou aprendendo os fundamento de JarvaScript'

// quantidade de caracteres, incluindo os espaços
console.log(message.length)

// muito utilizado em senha 

let password = "123456"

if(password.length < 6){
  console.log("A senha deve ter ao menos 6 dígitos")
}

// Quantos dígitos tem um número 
let value = 12345 

console.log( typeof String(value))
console.log(String(value).length)
console.log(value.toString().length)


