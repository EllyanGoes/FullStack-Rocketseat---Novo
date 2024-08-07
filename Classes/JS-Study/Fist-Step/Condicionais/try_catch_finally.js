
// try{
//     //Tenta executar algo
//   console.log(result)
// } catch(error){
//   // Capturar o erro para tratar 
//   // console.log( 'não foi possivele executar os eu pedido')
//   console.log(error)
   
// } finally { // indepedente se deu certou ou errado
//   console.log('fim')
// }


let result = 0

try{ 
   // cria um execeção personalizada
  if ( result === 0){
    throw new Error('O valor é igual a 0')
  }

} catch(error) {
  console.log(error)
}finally{
  console.log('fim')
}