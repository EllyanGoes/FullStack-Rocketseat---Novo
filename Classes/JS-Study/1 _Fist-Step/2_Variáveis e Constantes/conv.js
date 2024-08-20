/*
  - Conversão de tipos (type casting ou type conversion):
  ocorre quando você explicitamente transforma um valor de um tipo para outro. Isso é feito de forma consciente, usando funções ou métodos específicos para realizar a conversão.
*/


let value = "9"
console.log( typeof (value))
console.log( typeof Number(value))


let age = 18

console.log( typeof toString(age))
console.log( typeof age.toString())

let opotion = 1 
console.log( Boolean(opotion))
console.log( typeof Boolean(opotion))

/* - Coerção de tipos:
 acontece de forma automática (implicitamente). 0 JavaScript tenta automaticamente converter um dos valores para um tipo 
 compatível antes de realizar a operação.  */


 // exemplo de coerção 
 console.log( typeof ("10" + 5))