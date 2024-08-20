const product = {

  name: 'teclado',
  quantity: 10,
  
}

// Atualizando o valor 

console.log(product.name)
product.name = 'mouse'

console.log(product.name)
product.quantity = 2

console.log(product.quantity)

// Notação de colchete.
product['quantity'] = 40

console.log(product)
