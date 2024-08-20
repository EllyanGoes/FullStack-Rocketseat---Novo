//for in executa  a iteração a partir de um objeto a as propiedades 

let person = {
  name:'Rodrigo',
  surname: 'Góes',
  email: 'ellyan.goes@gmail.com',
}

let steps = 1

for(let propierty in person){
  console.log(steps)

  //exibi o nome da propiedade
  console.log(propierty)

  //exibi o conteúdo da propiedade
  console.log(person[propierty])

  steps++;

}

let students = ['Rodrigo', 'Ellyan', 'João' ]

for(let index in students){
  console.log(index)
  console.log(students[index])
}