function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorName = document.querySelector(".color");
const actionBtn = document.querySelector(".change-color");

actionBtn.addEventListener("click", onChangeColor);

function onChangeColor() {
  const currentColour = getRandomHexColor();
  body.style.backgroundColor = currentColour;
  colorName.textContent = currentColour;
}
