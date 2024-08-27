const button = document.querySelector("button");
const html = document.querySelector("html");
const result = document.getElementById("results");
const container = document.getElementById("container");
const luck = document.getElementById("luck");
const fieldset = document.querySelector("fieldset");

button.addEventListener("click", (event) => {
  event.preventDefault();
  html.classList.toggle("running");

  if (html.classList.contains("running")) {
    luck.classList.toggle("hide");
    result.classList.toggle("hide");
    container.classList.toggle("hide");
    fieldset.classList.toggle("hide");

    const quantidade = Number(document.getElementById("many").value);
    const min = Number(document.getElementById("start").value);
    const max = Number(document.getElementById("end").value);
    const naoPermitirRepeticao =
      !document.getElementById("toggleSwitch").checked;
    console.log(quantidade, min, max, naoPermitirRepeticao);

    const numeros = gerarNumerosAleatorios(
      min,
      max,
      quantidade,
      naoPermitirRepeticao
    );

    container.innerHTML = ""; // Limpa o container antes de adicionar novos resultados

    let delay = 0; // Inicializa o atraso

    numeros.forEach((numero) => {
      const resultDiv = document.createElement("div");
      resultDiv.classList.add("result-container"); // Contêiner para cada resultado

      const backgroundDiv = document.createElement("div");
      backgroundDiv.classList.add("background"); // Div de fundo rotacionando

      const numberDiv = document.createElement("div");
      numberDiv.classList.add("numbers-results"); // Div para o número
      numberDiv.textContent = numero;

      resultDiv.appendChild(backgroundDiv);
      resultDiv.appendChild(numberDiv);
      container.appendChild(resultDiv);

      // Define a animação e o atraso para cada resultado
      setTimeout(() => {
        // Adiciona a animação de rotação e as classes para mostrar o resultado
        backgroundDiv.classList.add("rotate-center"); // Inicia a animação de rotação
        resultDiv.classList.add("show"); // Mostra a div do resultado
        backgroundDiv.classList.add("show"); // Aplica a cor de fundo
        numberDiv.classList.add("show"); // Aplica a cor do texto

        setTimeout(() => {
          numberDiv.classList.add("final-color"); // Aplica a cor final após a animação
        }, 1000); // Ajuste este tempo se necessário, deve ser igual ou maior que a duração da animação
      }, delay); // Usa o atraso acumulado
      // Usa o atraso acumulado

      // Incrementa o atraso para a próxima div
      delay += 2000; // 4 segundos entre as animações (2 segundos de rotação + 2 segundos de exibição)
    });

    button.innerHTML = `<p class="">Sortear Novamente</p>
          <img class="" alt="" src="./assets/again.svg" />`;
  } else {
    luck.classList.toggle("hide");
    result.classList.toggle("hide");
    container.classList.toggle("hide");
    fieldset.classList.toggle("hide");

    button.innerHTML = `<p class="">Sortear</p>
          <img class="" src="./assets/arrow.svg" alt="" />`;
  }
});

function gerarNumerosAleatorios(min, max, quantidade, naoPermitirRepeticao) {
  const numerosGerados = [];

  while (numerosGerados.length < quantidade) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    if (naoPermitirRepeticao || !numerosGerados.includes(numeroAleatorio)) {
      numerosGerados.push(numeroAleatorio);
    }
  }

  return numerosGerados;
}
