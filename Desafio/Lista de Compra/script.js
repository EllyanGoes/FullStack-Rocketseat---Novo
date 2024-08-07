const form = document.querySelector('form')
const button = document.getElementById('btn')
const input = document.getElementById('new')
const list = document.querySelector('ul')
const message = document.getElementById('message')
const closer = document.getElementById('closer')
const messageText = document.querySelector('#message span')

closer.addEventListener('click', ()=>{
  message.classList.add('hide')
})

form.addEventListener('submit', (event)=>{
  event.preventDefault()

  const value = input.value
  
  if(value !== ""){
    setTimeout(()=>{createNewIten(value)}, 200)
    
    input.value = ''

  } else {
    alert('Por favor prencha o campo')
  }

})

function createNewIten(newIten){
  const iten = document.createElement('li')
  iten.classList.add('itens')

  const trash = document.createElement('img')
  trash.classList.add('delete')
  trash.src = './assets/trash.svg'

  const itenName = document.createElement('label')
  itenName.classList.add('iten')
  itenName.innerText = newIten
  
  const checkbox = document.createElement('input')
  checkbox.classList.add('checkbox')
  checkbox.type = 'checkbox'

  //removendo o item cirado
  trash.addEventListener('click', ()=>{
    list.removeChild(iten)
    messageText.innerText = `O item '${newIten}' foi removido.`
    message.classList.remove('hide')
  })
  
  iten.prepend(checkbox , itenName , trash)

  list.prepend(iten)
}

