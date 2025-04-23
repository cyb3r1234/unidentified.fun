
// Get the form element
const form = document.getElementById('login-form');

const TextDiv = document.getElementById("ResponseText");
const INVALID_USERNAME_PASSWORD = "Invalid username or password. Please try again.";
const PasswordBox = document.getElementById('password');
let typingEffectRunning = false;

function typeText(element, text) {
  if (!(element instanceof HTMLElement)) {
    throw new TypeError('Parameter \'element\' must be a valid DOM element.');
  }

  if (typeof text !== 'string') {
    throw new TypeError('Parameter \'text\' must be a string.');
  }

  let index = 0;
  const textLength = text.length;

  const intervalId = setInterval(() => {
    element.textContent = text.slice(0, index + 1);
    index += 1;

    if (index >= textLength) {
      clearInterval(intervalId);
    }
  }, 50);
}


// Add an event listener to the form element
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();
  // Get the values of the form fields
  const TextBox = document.getElementById('Textbox');
  const inputName = TextBox.value.replace(/\s+/g, "").toLowerCase(); // remove all spaces and convert to lowercase
  const inputPassword = PasswordBox.value.replace(/\s+/g, "").toLowerCase(); // remove all spaces and convert to lowercase

  // Check if the username and password are valid
  if (inputName === "valeriaduarte" && inputPassword === "iloveyou") {
    // If the username and password are valid, redirect to the next page
    window.location.href = './Pages/personal/special-message.html';
  } else {
    // If the username and password are not valid, display an error message
    if (typingEffectRunning) return; // Prevent starting a new typing effect if one is already running

    typingEffectRunning = true;
   
    typeText(TextDiv, INVALID_USERNAME_PASSWORD);
    setTimeout(() => {
      typingEffectRunning = false;
    }, 2500); // Adjust the timeout duration to match the typing effect duration
  }
});


