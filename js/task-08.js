const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const data = {
    email: email.value,
    password: password.value,
  };

  const values = Object.values(data);

  if (values.includes("")) {
    alert("усі поля мають бути заповненими");
  } else {
    form.reset();
    console.log(data);
  }
}
