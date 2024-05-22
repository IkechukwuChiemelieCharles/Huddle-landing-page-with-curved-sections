const emailInput = document.getElementById("email-input");
const errorMsg = document.getElementById("error-msg");
const subBtn = document.getElementById("btn");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

emailInput.addEventListener("input", function () {
  const email = emailInput.value.trim();
  const isValidEmail = validateEmail(email);

  if (isValidEmail) {
    errorMsg.textContent = "correct";
    errorMsg.classList.remove("error-message");
    errorMsg.classList.add("success-msg");
  } else {
    errorMsg.textContent = "Check your email please";
    errorMsg.classList.remove("success-msg");
    errorMsg.classList.add("error-message");
  }
});

subBtn.addEventListener("click", function () {
  // Check if the email is valid before displaying the message
  const email = emailInput.value.trim();
  const isValidEmail = validateEmail(email);

  if (isValidEmail) {
    errorMsg.textContent = "Email Sent!!";
    errorMsg.classList.remove("error-message");
    errorMsg.classList.add("success-msg");
  } else {
    errorMsg.textContent = "Check your email please";
    errorMsg.classList.remove("success-msg");
    errorMsg.classList.add("error-message");
  }
});
