const creditCard = "1234567812344928"

console.log(creditCard)

const lastDigitals = creditCard.slice(-4)

console.log(lastDigitals)

//preenche a string restante com o que foi sugerido do incio
const maskNumber = lastDigitals.padStart(creditCard.length, "x")

console.log(maskNumber)

// preenche a string restante com o que foi sugerido pelo fim

const number = "123"

console.log(number.padEnd(10, "*"))
