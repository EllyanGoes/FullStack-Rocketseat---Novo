let fruits = ["Apple", "Orange", "Banna"]

//verificar se existe um iten no array 

console.log(fruits.includes('Apple'))
console.log(fruits.includes('apple'))
console.log(fruits.includes('Banna'))
console.log(fruits.includes('Lemon'))



//Testando a remoção
let position = fruits.indexOf("Orange")
console.log(position)

console.log(fruits.splice(position,2))
console.log(fruits)

