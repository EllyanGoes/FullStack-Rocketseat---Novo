// Usado para validação - regex

const input = document.querySelector('input')
const form = document.querySelector('form')

/* 
input.addEventListener('input',()=>{
	const value = input.value

	const regex = /\D+/g 


	//Testa se atende o padrão
	//Retornar o padrão encontrado na string - ele verifica se o input da match com o padrão que estabelcemos 
	//console.log(value.match(regex))

	const isValid = regex.test(value)

	console.log(isValid)

})
*/

form.addEventListener('submit', (event)=>{
	event.preventDefault()
	const value = input.value

	const regex = /\D+/g

	if(regex.test(value)){
		alert('Padrão encontrado') 
	} else {
		alert('Padrão não encontrado')
	}

	// const value = input.value.replace(regex, 'X')

	console.log(value)
})