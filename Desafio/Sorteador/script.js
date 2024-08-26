const button = document.querySelector("button");
const html = document.querySelector("html");
const result = document.getElementById("results");
const container = document.getElementById("container");
const luck = document.getElementById("luck");
const fieldset = document.querySelector("fieldset");

//FieldSett
const many = document.getElementById("many");
const start = document.getElementById("start");
const end = document.getElementById("end");
const toggle = document.getElementById("toggleSwitch");

button.addEventListener("click", (event) => {
  event.preventDefault();
  html.classList.toggle("running");

  if (html.classList.contains("running")) {
    luck.classList.toggle("hide");
    result.classList.toggle("hide");
    container.classList.toggle("hide");
    fieldset.classList.toggle("hide");

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
