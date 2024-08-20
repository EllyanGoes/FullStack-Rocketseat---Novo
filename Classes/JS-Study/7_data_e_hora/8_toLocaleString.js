let date = new Date("2024-07-02T14:00:00")

console.log(date.toLocaleString('en'))

//Exibi a data em Styles diferentes
console.log(date.toLocaleString("pt-BR", {
  dateStyle: "short",
}))

console.log(date.toLocaleString('pt-BR', {
  dateStyle: "long",
}))

console.log(date.toLocaleString('pt-BR', {
  dateStyle: "medium",
}))

console.log(date.toLocaleString('pt-BR', {
  dateStyle: "full",
}))

console.log(date.toLocaleString('pt-Br', {
  day: '2-digit',
  month: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
}))

// O to localString pode ser usado para valores também 

let amount = 12.5

console.log(amount.toLocaleString("pt-BR", {
  style: 'currency',
  currency: 'BRL'
}))