let fruits = ["Apple", "Watermelon", "Lemon","StrawBerry"]
//console.log

//encontra e retorna o indice do elemento no awway
//se não ecnotra, retorna -1
let position = fruits.indexOf('Lemon')
console.log(position)

//Delta os a partir de um intervalo do indice 
// o primeiro diz qual começa e o segundo a quantidade a partir do primeiro para ser deletado
// fruits.splice(1 , 1)
//remove um item pela posição do iten
fruits.splice(position, 1)
console.log(fruits)
