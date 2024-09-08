//Atualização dos horários após a mudança de data no formulário

import { schedulesDay } from "../schedules/load.js"

//Seleciona o input de data
const selectedDate = document.getElementById("date")

//Recarrega o a lista de horários quando o input de data mudar.
selectedDate.onchange = () => schedulesDay()
