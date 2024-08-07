// Callback function é quando uma função passaada para outra função como argumento 

//passando a função como paramentro

function execute(taskName, callback){

  // a ordem no escopo importa 
  console.log('Executando a tarefa: ', taskName)

  callback()
}

function callback(){
  console.log('Tarefa Finalizada')
}

//Função indo como argumento
execute('x', callback)

// Criando a função no paramentro (função anônima)

execute('y', function(){
  console.log('Função anonima no paramentro da função')
})

//Criando a função no parametro (arrow function)

execute('Exluindo arquivo...', ()=>{
  console.log("arquivo excluido")
})

execute('Salvando aruivo...', ()=>console.log('Arquivo Salvo'))