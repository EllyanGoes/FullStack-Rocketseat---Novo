// for ... of itera sobre os valores de um objeto iterável 

// a diferença com o for in é que no for in, a itereação ocorre com a propiedade, no for of a iteração é feita em cima do dos valores 

// precisar se um objeto que pode ser percorrido 

let students = ['Rodrigo', 'Amanda', 'João']

// Boas práticas a lista é no plural e a variável é no singular 


for(let student in students){
  console.log(student)
}
// mostra o index que é a propiedade 

for(let student of students){
  console.log(student)
}

// mostra o valor 

let user = {
  nome: 'Ellyan',
  email: 'ellyan.goes@gmail.com',
}

for(let value of user){
  console.log(value)
}
