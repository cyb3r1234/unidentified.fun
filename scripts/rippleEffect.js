// Function to create a ripple effect
async function rippleEffect(element, ResultText) {
  const textElement = element;
  const originalText = textElement.textContent;
  const secretText = ResultText;

  // Function to get a random special character
  function getRandomSpecialChar() {
    const specialChars = '!@#$%^&*()_+-={}:<>?';
    return specialChars[Math.floor(Math.random() * specialChars.length)];
  }

  // Loop through all characters for 5 seconds with a smooth typing effect
  const startTime = Date.now();
  const intervalId = setInterval(() => {
    const newText = Array(originalText.length).fill('').map(() => getRandomSpecialChar()).join('');
    textElement.textContent = newText;
    if (Date.now() - startTime >= 5000) {
      clearInterval(intervalId);
    }
  }, 50); // update every 30ms

  // Wait for the 5-second loop to finish
  await new Promise(resolve => setTimeout(resolve, 5000));

  // Spell out "Secret 1" with a smooth typing effect
  for (let i = 0; i < secretText.length; i++) {
    textElement.textContent = secretText.substring(0, i + 1);
    await new Promise(resolve => setTimeout(resolve, 30)); // update every 100ms
  }
}

window.onload = function() {
  // Set the initial text for the elements
  rippleEffect(document.getElementById("text"), "Secret 1");
  rippleEffect(document.getElementById("paragraph"), "Congratulations! You found the first secret! There are more secrets to be found. The next secrets will have a word which describes how I felt about you that day and a little description.");
  rippleEffect(document.getElementById("paragraph-3"), "Love you always");
  rippleEffect(document.getElementById("paragraph-4"), "Forever yours, my love.");

}
  // After the ripple effect, set the