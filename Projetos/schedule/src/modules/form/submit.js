//Envio das informações do formulário para API

import dayjs from "dayjs"

import { scheduleNew } from "../../service/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

//Date atual para o input

const inputToDay = dayjs(new Date()).format("YYYY-MM-DD")

//Carregar a data atual e define a data mínima como a atual
selectedDate.value = inputToDay
selectedDate.min = inputToDay

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    //Recuperando o nome do cliente .
    const name = clientName.value.trim() //remover espaços a mais

    if (!name) {
      return alert("Informe o nome do cliente")
    }
    //Recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Selecione a hora")
    }

    //Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":")

    //Inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    //Gera um ID
    const id = String(new Date().getTime())

    //Fazemos o agendamento
    await scheduleNew({
      id,
      name,
      when,
    })

    //Recarregar os agendamento
    await schedulesDay()

    //Limpar o input de nome do cliente
    clientName.value = ""
  } catch (error) {
    alert("Não foi possível realizar o agendamento")
  }
}
