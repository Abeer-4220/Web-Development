let inputText = document.getElementById("enteredText");
let changedText = document.getElementById("changingText");

let textLength = inputText.maxLength;

function dynamicText(char) {
  let textInput = char.target.value;
  let textInputRemaining = textInput.length;

  let remainingChar = textLength - textInputRemaining;

  changedText.textContent = remainingChar;

  if (remainingChar === 0) {
    changedText.classList.add("error");
    inputText.classList.add("error");
  } else if (remainingChar <= 10) {
    changedText.classList.add("warning");
    inputText.classList.add("warning");
    changedText.classList.remove("error");
    inputText.classList.remove("error");
  } else {
    changedText.classList.remove("warning");
    inputText.classList.remove("warning");
  }
}
inputText.addEventListener("input", dynamicText);
