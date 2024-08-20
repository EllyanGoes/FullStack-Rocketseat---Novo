const ul = document.querySelector('ul')

ul.addEventListener('scroll', () => {
	// console.log(ul.scrollTop)

	if (ul.scrollTop >= 303){
		console.log('Chegou no fim da lista')

		ul.scrollTo(
			{
				top: 0,
				behavior: 'smooth'
			}
		)}
})

const button = document.querySelector('button')

button.addEventListener('click', (event)=>{
	event.preventDefault()
	console.log('Clicou')
})

