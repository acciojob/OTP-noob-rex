let inputElements = document.getElementsByClassName("code");

for (let i = 0; i < inputElements.length; i++) {
  inputElements[i].addEventListener("keyup", (event) => {
    let currentElement = event.target;

    // Handle Backspace: move focus to the previous input
    if (event.key === "Backspace") {
      let prevElement = currentElement.previousElementSibling;
      if (prevElement) prevElement.focus();
      return;
    }

    // Allow only numeric input
    if (!/^[0-9]$/.test(event.key)) {
      currentElement.value = ""; // Clear invalid input
      return;
    }

    // Move focus to the next input on valid digit
    let nextElement = currentElement.nextElementSibling;
    if (nextElement) nextElement.focus();
  });
}
