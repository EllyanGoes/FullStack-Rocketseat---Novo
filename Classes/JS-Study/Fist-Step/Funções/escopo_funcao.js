
showMessage('Olá, Ellyan')



function showMessage(message){
  console.log(message)
  endLine()

  function endLine(){
  console.log("---------------")
  }
}

showMessage('Aqui')


// Função não existe nesse escopo
endLine()