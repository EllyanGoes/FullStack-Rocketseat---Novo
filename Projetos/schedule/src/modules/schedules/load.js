import { scheduleFetchByDay } from "../../service/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

//seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  //Obtém a data do input
  const date = selectedDate.value

  //Buscar na API os agendamentos
  //usar objetos como parâmetro deixa mais flexível pois futuramente você pode querer adicionar novas propriedades
  const dailySchedules = await scheduleFetchByDay({ date })

  // console.log(dailySchedules)
  // console.log({ dailySchedules })

  schedulesShow({ dailySchedules })

  //Renderiza a horas disponíveis
  hoursLoad({ date, dailySchedules })
}
