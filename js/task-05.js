const input = document.querySelector("input#name-input");
console.log(input);
const nameLabel = document.querySelector("span#name-output");
console.log(nameLabel);

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    nameLabel.textContent = "Anonymous";
  } else {
    nameLabel.textContent = event.currentTarget.value;
  }
}
