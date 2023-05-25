const form = document.querySelector('.contact-form');
const emailInput = document.getElementById('email');
const userName = document.getElementById('name');
const userMessage = document.getElementById('message');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  const email = emailInput.value;
  if (email.trim() === '') {
    errorMessage.textContent = 'Please type your email on the provided space.';
  } else if (email !== email.toLowerCase()) {
    errorMessage.textContent = 'Email must be in lowercase.';
  } else {
    errorMessage.textContent = '';
    form.submit();

    // Update localStorage with the form data
    const contactFormData = {
      fullName: userName.value,
      email: emailInput.value,
      message: userMessage.value,
    };
    localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
  }
});

const contactFormData = {
  fullName: '',
  email: '',
  message: '',
};

form.addEventListener('input', () => {
  contactFormData.fullName = userName.value;
  contactFormData.email = emailInput.value;
  contactFormData.message = userMessage.value;
});

window.onload = () => {
  const contactData = JSON.parse(localStorage.getItem('contactFormData'));
  if (contactData) {
    userName.value = contactData.fullName;
    emailInput.value = contactData.email;
    userMessage.value = contactData.message;
  }
};
