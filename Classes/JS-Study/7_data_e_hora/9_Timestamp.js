// Conhecendo a INTL de internacionalização do ECMScript 

//Obter informações da localidade 
const currentLocale =  Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)

//Exibi no formato de  acordo com a localidde 
console.log( new Intl.DateTimeFormat('pt-br').format(new Date()))
console.log( new Intl.DateTimeFormat('en').format(new Date()))


const date = new Date()

// Obtem o diferença de minutos do timezone 
console.log(date.getTimezoneOffset())

// Obtem o diferença em horas do timezone 
console.log(date.getTimezoneOffset()/60)


