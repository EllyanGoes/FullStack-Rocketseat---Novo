//Visualizar o conteúdo do documento 
// console.log(document)

// Obter o title da página 
console.log(document.title)

//Acessa o Elemento pelo ID (seletor ID)
const guest1 = document.getElementById('guest-1')
const guest2 = document.getElementById('guest-2')


console.log(guest1)

// Mostrar todas as propiedades do elemento
console.dir(guest2)

//Acessar o elemento pela Class 
const guestsByClass = document.getElementsByClassName('guest')

console.log(guestsByClass)

// Exibir o primero elemento 

console.log(guestsByClass.item(0))
console.log(guestsByClass[1])

// Selecionar a lista de elementos pela tag 

const guestTag = document.getElementsByTagName('li')

console.log(guestTag)