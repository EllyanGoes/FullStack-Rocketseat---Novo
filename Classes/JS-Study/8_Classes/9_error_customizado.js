class MyCustomError {
  constructor(message){
    this.message = 'CLASSE DE ERROR CUSTOMIZADA: ' + message
  }
}

try {
  //throw new Error('Erro genérico')
  throw new MyCustomError('Error personalizado lançado')
} catch (error) {
  if(error instanceof MyCustomError){
    console.log(error.message)
  } else console.log('NÃO FOI POSSIVEL EXECUTAR!')
}