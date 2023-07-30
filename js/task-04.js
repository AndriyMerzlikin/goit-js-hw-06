// const container = document.querySelector("div#counter");
// console.log(container);
// const downBtn = document.querySelector(
//   '.counter button[data-action="decrement"]'
// );
// const upBtn = document.querySelector(
//   '.counter button[data-action="increment"]'
// );
// console.log(counter.dataset.action);
// const counterBtns = document.querySelectorAll("button");
// console.log(counterBtns);

// const mainValue = document.querySelector("span#value");
// console.log(mainValue);

// counterBtns.addEventListener("click", countValue);

// const countValue = (event) => {};

const refs = {
  removePointBtn: document.querySelector('[data-action="decrement"]'),
  addPointBtn: document.querySelector('[data-action="increment"]'),
  resultValue: document.querySelector("span#value"),
};
console.log(refs);

let counterValue = 0;

refs.removePointBtn.addEventListener("click", onDecrement);
refs.addPointBtn.addEventListener("click", onIncrement);

function onDecrement() {
  counterValue -= 1;
  refs.resultValue.textContent = counterValue;
}

function onIncrement() {
  counterValue += 1;
  refs.resultValue.textContent = counterValue;
}
