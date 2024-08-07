window.addEventListener('loald', ()=>{
  console.log('A página foi carregada')
} )
/*
addEventListener('click', (event)=>{

  // previne o padrão do elemento
  //event.preventDefault()

  //Retorna todas as informações do evento
  //console.log(event)

  console.log(event.target)

})
*/

addEventListener('click', function (event){
  
 event.preventDefault() 
 console.log(event)

 console.log(event.target)

 console.log(event.target.innerText)
})
