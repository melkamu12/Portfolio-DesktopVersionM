const UserName = document.getElementById("name");
const UserEmail = document.getElementById("email");
const UserMessage = document.getElementById("message");
const formcontrol = document.getElementById("contact-form");
const contactFormData = {
  UserFullName: String,
  UseremailAddress: String,
  UserMessageInformation: String,
};

formcontrol.addEventListener("input", () => {
  contactFormData.UserFullName = UserName.value;
  contactFormData.email = UserEmail.value;
  contactFormData.UserMessageInformation = UserMessage.value;

  localStorage.setItem("contactFormData", JSON.stringify(contactFormData));
});

window.onload = () => {
  const contactData = JSON.parse(localStorage.getItem("contactFormData"));

  if (contactData) {
    UserName.value = contactData.UserFullName;
    UserEmail.value = contactData.UseremailAddress;
    UserMessage.value = contactData.UserMessageInformation;
  }
};
