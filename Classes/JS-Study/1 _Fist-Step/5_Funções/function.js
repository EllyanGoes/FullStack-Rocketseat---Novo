//Criando a função 

// function message(){
//   console.log('Bom Dia')
// }

// message()
// message()



function sum(a,b){
 console.log( a + b )
}

sum(10,2)
sum(30,40)

function joinText(text1, text2 = '', text3 = ''){
  console.log(text1, text2, text3)
}

//Ordem importa
joinText('Ellyan', 'João', 'Gabi')
joinText('Gabi','João', 'Ellyan')
joinText('Ellyan')