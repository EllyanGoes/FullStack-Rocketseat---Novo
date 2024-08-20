
//criando os elementos e colocando dentro de variáveis 

const guest = document.querySelector('ul')

const newGuest = document.createElement('li')
//criando a classe 
newGuest.classList.add('guest')
const guestName = document.createElement('span')

guestName.textContent = 'Ellayn'

const lastName = document.createElement('span')
lastName.textContent = 'Góes'


// adicionando os elementos criados dentro dos elementos do html 

// Adiciona após o ultimo filho
// newGuest.append(guestName, lastName)

//Adicona antes do primeiro filho 
// newGuest.prepend(lastName)

// É mais simples que o append mas aceira só um argumento 
newGuest.appendChild(guestName)

//guest.append(newGuest)
guest.prepend(newGuest)

