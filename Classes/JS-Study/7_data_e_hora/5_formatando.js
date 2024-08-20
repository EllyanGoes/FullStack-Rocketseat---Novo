let date = new Date('July 12, 2024 14:30:00')

let day = date.getDate().toString().padStart(2,"0")

console.log(day)

let month = (date.getMonth() + 1).toString().padStart(2,"0")

console.log(month)

// Montar data e hora com um padrão 

let year = date.getFullYear()

let hour = date.getHours()

let minutes = date.getMinutes()

console.log(`${day}/${month}/${year} às ${hour}:${minutes}`)

