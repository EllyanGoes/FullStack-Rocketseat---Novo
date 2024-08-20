const input = document.querySelector('input')

//keydown - quando uma tecla é pressionada (captura tudo incluindo control, shift, qualquer tecla)

/*
input.addEventListener('keydown',(event)=>{
	console.log(event.key)
})

*/

input.addEventListener('keypress',(event)=>{
	console.log(event.key)
})

input.onchange = () => {
	inputChange()
}

function inputChange(){
	console.log('O input mudou!')
}