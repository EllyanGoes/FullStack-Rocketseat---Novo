let obj = [17]
let index = 300

try{
  //obj.execute()
  if(!obj.includes(17)){
    // o throw tem um comportamento similar ao return, então ele não irá continuar executando, logo vai parar e irá pular para o bloco de tratamento em catch
    throw new Error ('o número 17 não está disponível')
  }

  if(index > 99){
    throw new RangeError('O número está fora do intervalo. Escolha um número de 0 a 99.')
  }

}catch(error){
  if(error instanceof TypeError){
    console.log('Esse método está indisponível')
  }else if(error instanceof RangeError){
    console.log(error.message)
  } else{
    console.log('Não foi possivel realizar a ação')
  }

  // console.log(error)
}