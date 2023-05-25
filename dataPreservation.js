// Retrieve data from local storage and fill the form
function fillFormFromLocalStorage() {
  const formData = JSON.parse(localStorage.getItem("formData"));
  if (formData) {
    document.getElementById("name").value = formData.name;
    document.getElementById("email").value = formData.email;
    document.getElementById("message").value = formData.message;
  }
}

// Add event listeners to input fields
document
  .getElementById("name")
  .addEventListener("input", saveFormDataToLocalStorage);
document
  .getElementById("email")
  .addEventListener("input", saveFormDataToLocalStorage);
document
  .getElementById("message")
  .addEventListener("input", saveFormDataToLocalStorage);

//Load form data from local storage on page load
fillFormFromLocalStorage();
//Save data to local storage when input fields change
function saveFormDataToLocalStorage() {
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
}
