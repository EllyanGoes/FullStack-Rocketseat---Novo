//Função que retorna uma Promise.

function asyncFunction() {
  return new Promise((resolve, reject) => {
    //simula uma operação assíncrona.
    setTimeout(() => {
      const isSuccess = false;

      if (isSuccess) {
        resolve("A operação foi concluída com sucesso!");
      } else {
        reject("Algo deu errado");
      }
    }, 3000); // Simula a operação que leva 3 segundo
  });
}

/*
const fetch = async () => {
  const response = await asyncFunction();
  console.log(response);
};
*/

async function fetch() {
  try {
    const response = await asyncFunction();
    console.log("Sucesso:", response);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Fim da execução");
  }
}

fetch();
