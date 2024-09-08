import { apiConfig } from "./api-config.js"

//vantagem de se utilizar uma desestruturação como parâmetro é que não importa a ordem das propriedades e vai ter que ser passado um objeto
export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(
      `${apiConfig.baseURL}/schedules`, //o path
      {
        //Defini a configuração da requisição
        method: "POST", // cadastro
        headers: {
          "Content-type": "application/json", // Tipo do conteúdo
        },
        body: JSON.stringify({ id, name, when }), //serializar
      }
    )

    alert("Agendamento Realizado com sucesso")
  } catch (error) {
    console.log(error)
    alert("Não foi possível agendar, tente novamente mais tarde ")
  }
}
