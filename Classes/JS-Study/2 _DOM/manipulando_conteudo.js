const guest = document.querySelector("#guest-1")

//Retorna o conteúdo como texto
// console.log(guest.textContent)
// guest.textContent = 'Ellyan'

console.log(guest.textContent) // Retorna com formatação, e contéudo visível e oculto
console.log(guest.innerText) // Retorna sem formatação e somente o conteúdo visível
console.log(guest.innerHTML) // Retorna o html