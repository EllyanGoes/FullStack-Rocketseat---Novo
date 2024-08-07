// Função anonima é uma função sem nome

const showMessage1 = function (){

  return 'Olá, Ellyan'
}

console.log(showMessage1())

const showMessage2 = function (message,name){

  return message + name 
}

console.log(showMessage2('Olá, ',"João"))