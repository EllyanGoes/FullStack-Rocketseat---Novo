const form = document.querySelector('form')


/*Dessa forma você vai direto para o evento ao invés de usar o 

	form.addEventListener('submit', ()=>{})

*/


form.onsubmit = (event)=>{
	event.preventDefault()
	console.log('você fez submit')
}

// o onsubmit só funciona o ultimo já o addEventListener funciona todos 
