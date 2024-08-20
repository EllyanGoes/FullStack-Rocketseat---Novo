/*
OPTIONAL CHAINING (?.) - encadeamento opcional
Se-a•propriedade•ou- função chamada é nullish (null or undefined), a expressão retorna undefined em vez de gerar um erro.
Útil ao explorar o conteúdo de um objeto quando não existe garantia da existência de determinadas propriedades obrigatórias.

*/

const user = {
  name: 'Ellyan',
  /*
  address: {
    street: 'Av. Brasil',
    city: 'São Paulo',
    geo: {
      latitude: 47.8080,
      Longitude: 66.5050,
    }
  },
   message: function(){
      console.log('olá')
    },
  */
}

//retorna underfined 
console.log(user?.adress?.street)

//Não faz nada
user?.message?.()



