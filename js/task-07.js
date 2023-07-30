const inputRange = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

inputRange.addEventListener("input", onTextSizeChange);

function onTextSizeChange(event) {
  textSize.style.fontSize = `${event.currentTarget.value}px`;
}
