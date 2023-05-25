function validateEmail(event) {
  event.preventDefault(); // Prevent form submission

  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");
  const email = emailInput.value;

  if (email.trim() === "") {
    errorMessage.textContent = "Please type your email on the provided space.";
  } else if (email !== email.toLowerCase()) {
    errorMessage.textContent = "Email must be in lowercase.";
  } else {
    errorMessage.textContent = "";
    event.target.closest("form").submit();
  }
}
