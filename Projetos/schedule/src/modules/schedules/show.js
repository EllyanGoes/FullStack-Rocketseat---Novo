import dayjs from "dayjs"

//Selecionar as sessões manhã, tarde e noite.
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

//Renderizando elas
export function schedulesShow({ dailySchedules }) {
  try {
    //Limpa as listas
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    //Renderizar os agendamentos por período
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      //#Adiciona o Id do agendamento
      //"data-id": É o nome do atributo que você está criando ou modificando no elemento item. Neste caso, é um atributo personalizado, começando com data-, que é uma convenção no HTML5 para criar atributos de dados personalizados.

      item.setAttribute("data-id", schedule.id)
      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      //Criar o Ícone de cancelar o agendamento
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar")

      //Adicionar o tempo, o nome e o ícone no item.
      item.append(time, name, cancelIcon)

      //Obtém somente a hora
      const hour = dayjs(schedule.when).hour()

      //Renderizar o agendamento na sessão (manhã, tarde e noite)
      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })
  } catch (error) {
    alert("Não foi possível renderizar os agendamentos")
    console.log(error)
  }
}
