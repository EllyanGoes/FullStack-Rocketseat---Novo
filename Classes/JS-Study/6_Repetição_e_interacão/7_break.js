//Breal encerra a execução da interação para ir para a instrução seguinte 

/*
let option = 3; 

switch(option){
  case 1: 
    console.log("cadastrar 1")
    break
  case 2: 
    console.log("cadastrar 2")
    break
  case 3: 
    console.log("cadastrar 3")
    break
  default:
    console.log("cadastrar 4")
}

*/

//utilizando o break nas repetições 
for( let i = 0; i < 10 ; i++) {
  if(i === 5){
    break
    //ele encerra a execução e vai para a próxima instrução
  }
  console.log(i)
}
