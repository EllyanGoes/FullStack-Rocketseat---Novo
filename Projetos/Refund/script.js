// Selecionando os elementos do formulário 
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')


//Seleciona os elementos da lista 
const expenseList = document.querySelector("ul")
const expenseTotal = document.querySelector("aside header h2")
const expenseQuantity = document.querySelector("aside header p span")

//Captura o evento de input para formatar o valor
amount.oninput = () => {
  //obtem o valor atual do input e remove os caracteres não numéricos
  let value = amount.value.replace(/\D/g,"");

  //Transformar o valor em centavos (exemplo: 100/150 =1.5 que é equivalente a R$1,50)
  value = Number(value)/100

  //Atualiza o valor do input
  amount.value = formatCurrencyBRL(value)

}

function formatCurrencyBRL(value){

  //formatando o valor no padrão BRL
  value = value.toLocaleString("pt-BR", {
    style: 'currency',
    currency: 'BRL'
  })

  // Retorna o valor formatado, atualizou ele 
  return value
}
// Captura o evento de submit para obter os valores 
form.onsubmit= (event) => {

//Previne o comportamento padrão de fazer reloald da página
 event.preventDefault()

//Cria um objeto com os detalhes da nova despesa 
 const newExpense = {
  id: new Date().getTime(),
  expense: expense.value, 
  category_id: category.value,
  category_name: category.options[category.selectedIndex].text,
  amount: amount.value, 
  created_at: new Date(),
 }
  expenseAdd(newExpense)
}

//Adicona um novo gasto na lista
function expenseAdd(newExpense){
  try {

    // cria o elemento(li) para adicionar o item na lista (ul)
    const expenseItem = document.createElement('li')
    expenseItem.classList.add('expense')

    //Cria o icone da categoria 
    const expenseIcon = document.createElement('img')
    expenseIcon.setAttribute("src",`img/${category.value}.svg`)
    expenseIcon.setAttribute("alt", newExpense.category_name)

    //Cria a info da despesa 
    const expenseInfo = document.createElement("div")
    expenseInfo.classList.add("expense-info")

    //Crinado o valor 
    const expenseAmount = document.createElement('span')
    expenseAmount.classList.add("expense-amount")
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount
    .toUpperCase()
    .replace('R$','')
    }`

    //Icone de remover
    const removeIcon = document.createElement("img")
    removeIcon.classList.add("remove-icon")
    removeIcon.setAttribute("src","img/remove.svg")
    removeIcon.setAttribute('alt','remover')


    //Cria o nome da Despesa
    const expenseName = document.createElement("strong")
    expenseName.textContent = newExpense.expense

    //Cria a ctegoria da despesa
    const expneseCategory = document.createElement("span")
    expneseCategory.textContent = newExpense.category_name

    //Adicionando informações dentro na div das Informações da Despesa
    expenseInfo.append(expenseName,expneseCategory)

    //Adicionando informações ao items
    expenseItem.append(expenseIcon, expenseInfo , expenseAmount , removeIcon)

    //Adicionando items na lista
    expenseList.append(expenseItem)
    
    //Limpar o formulário para adicionar um novo item
    formClear()

    //Atualiza os totais 
    updateTotal()


  } catch (error) {
    alert('Não foi possivel adicionar a despesa')
    console.log(error)

  }
}

// Atualiza os totais
function updateTotal() {
  try {
    // Recupera todos os itens da lista
    const items = expenseList.children

    //Atualiza a quantidade itens
    expenseQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas": "despesa"}`


    // Variável para icrementar o total
    let total = 0

    //Percorre cada item(li) da lista (ul)
    for (let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector(".expense-amount")

      //Remove caracteres não númericos e substitui a virgular pelo ponto 
     let value = itemAmount.textContent
     .replace(/[^\d,]/g, "")
     .replace(",", ".")

     console.log(value)

     //Converte o valor para float
     value = parseFloat(value)

     //Verificar se é um número válido
      if (isNaN(value)) {
        return alert("Não foi possivel calcular o total. O valor não parece ser um número")
      }

      //incrementar o valor total 
      total += Number(value)

    }

    //Criar a span para adicionar o R$ formatado 
    const symbolBRL = document.createElement("small")
    symbolBRL.textContent = "R$"

    //Fomrata o valor e retira o R$ que será exibido pela small
    total = formatCurrencyBRL(total).toUpperCase().replace('R$','')

    //Limpar o conteúdo htmml
    expenseTotal.innerHTML = ""

    //Adiciona o simbolo da moeda e o valo formatado 
    expenseTotal.append(symbolBRL , total)

  } catch (error) {
    alert('Não foi possivel atualizar os totais')
  }
  
}

// Evento que captura o clique nos itens da lista.
expenseList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-icon")) {
    //Obtem a li pai do elemento clicado - pai mais próximo
    const item = event.target.closest(".expense")

    //Reomve o item da lista
    item.remove()
  }

  //Atualiza os totais
  updateTotal()
})

function formClear(){
  //Limpa os inputs
  expense.value = ""
  category.value = ""
  amount.value = ""

  //Coloca o foco no input 
  expense.focus()
}