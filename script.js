const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

// Valid email regex
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.style.display = "none";

  let valid = true;

  // Name validation
  const name = nameInput.value.trim();
  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  // Email validation
  const email = emailInput.value.trim();
  if (email === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!isValidEmail(email)) {
    emailError.textContent = "Invalid email format";
    valid = false;
  }

  // Message validation
  const message = messageInput.value.trim();
  if (message === "") {
    messageError.textContent = "Message is required";
    valid = false;
  }

  // Show success if valid
  if (valid) {
    successMessage.style.display = "block";
    form.reset(); // Reset form inputs
  }
});
