const input = document.querySelector('#name')

//Adiciona
// input.classList.add('input-error')

//Remover a classe 
input.classList.remove('input-error')

// Toggle - Alternar - muito bom para exibir uma tela modal 
// se tem classe remova, se não tem adiciona
input.classList.toggle('input-error')

//Acessando o estilo 

const button = document.querySelector('button')
button.style.backgroundColor = "red"

