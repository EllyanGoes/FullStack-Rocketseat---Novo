let date = new Date("2024-07-02T14:00:00")

//Exibi a data e hora e no formato local 
console.log(date.toLocaleDateString())

console.log(date.toLocaleTimeString())

//Exbi a data e hora no formato escolhido 

console.log(date.toLocaleDateString("en"))
console.log(date.toLocaleTimeString("en"))

