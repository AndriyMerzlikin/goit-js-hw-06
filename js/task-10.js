function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const input = document.querySelector("input");
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const boxContainer = document.querySelector("#boxes");

// createBtn.addEventListener("click", createBoxes);

// function createBoxes(amount) {
//   const arrBox = [];

//   if (Number(input.value) >= 1 && Number(input.value) <= 100) {
//     amount = Number(input.value);

//     for (let i = 0; i < amount; i += 1) {
//       const newDiv = document.createElement("div");
//       newDiv.style.backgroundColor = getRandomHexColor();
//       newDiv.style.width = "30px";
//       newDiv.style.length = "30px";

//       arrBox.push(newDiv);
//       console.log(arrBox);
//     }
//   }
//   boxContainer.append(...arrBox);
//   console.log(boxContainer);
// }
