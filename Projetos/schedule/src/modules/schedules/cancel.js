import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../service/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

//Gera evento click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  //Captura o evento de click
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado
      const item = event.target.closest("li")

      //Pega o Id do agendamento para remover
      const { id } = item.dataset

      //Confirma que o Id foi selecionado
      if (id) {
        //Confirma se o usuário quer cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar esse agendamento?"
        )
        if (isConfirm) {
          //faz a requisição na API para cancelar
          console.log(`antes: ${id}`)
          await scheduleCancel({ id })
          //recarrega os agendamentos
          schedulesDay()
        }
      }
    }
  })
})
