let message = 'Estou aprendendo os fundamentos de JarvaScript'

//Substituindo texto 

/*
console.log(message.replace('JarvaScript','métodos de string'))
*/

// Extraindo uma parte da string (star, end)
console.log(message.slice(6,31)
)

//Extraindo de trás para frente 
console.log(message.slice(-11))

//Remover espaços em branco no inicio e fim de uma string, ele não remove espaços no meio por que ele entende que faz parte do texto 

let textWithSpace = '  texto de exemplo  '

console.log(textWithSpace.length)

console.log(textWithSpace.trim().length)