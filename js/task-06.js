const input = document.querySelector("#validation-input");
console.log(input);

input.addEventListener("blur", onInputTextLength);

function onInputTextLength(event) {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
console.log(input.classList);
