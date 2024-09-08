import { apiConfig } from "./api-config"

export async function scheduleCancel({ id }) {
  console.log(`O ID a ser cancelado: ${id}`)
  try {
    const url = `${apiConfig.baseURL}/schedules/${id}`
    await fetch(url, {
      method: "DELETE",
    })
    console.log(url)
    alert("Agendamento Cancelado com Sucesso")
  } catch (error) {
    console.log("Não foi possível cancelar o agendamento")
  }
}
