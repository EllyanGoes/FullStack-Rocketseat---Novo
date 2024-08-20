
let execute = true
//dentro do while é sempre uma verificação 
//Equanto a condição for verdadeira, ele executa o bloco de código
while(execute === true){

  let response = window.prompt('Deseja continuar: 1 (sim) ou 2 (não)')

  if(response === '2'){
    execute = false
  }

}

console.log('Segue o fluxo...')