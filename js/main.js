const container = document.querySelector(".container");

const boton = document.querySelector(".form-wrapper-left button");

boton.addEventListener("click", () => {
  container.classList.toggle("switch");
});
