//Função que retorna uma Promise.

function asyncFunction() {
  return new Promise((resolve, reject) => {
    //simula uma operação assíncrona.
    setTimeout(() => {
      const isSuccess = true;

      if (isSuccess) {
        resolve("A operação foi concluída com sucesso!");
      } else {
        reject("Algo deu errado");
      }
    }, 3000); // Simula a operação que leva 3 segundo
  });
}

//Visualizando que o retorno é uma promise
//console.log(asyncFunction());

console.log("Executando função assíncrona");
// const response = asyncFunction();
// console.log(response);

asyncFunction()
  .then((response) => {
    console.log("Sucesso:", response);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Fim da Execução");
  });
