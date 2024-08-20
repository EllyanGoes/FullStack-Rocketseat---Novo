/*
  OPERADOR DE COALESCÊNCIA NULA (??)
  Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
*/

let content = undefined; 

console.log( content ?? 'Conteúdo padrão')

// funciona com null e com underfined 
// boleanos ele entende que é conteúdo

const user = {
  name: 'Ellyan',
  picture: undefined
}

console.log(user.picture ?? 'default.png')
