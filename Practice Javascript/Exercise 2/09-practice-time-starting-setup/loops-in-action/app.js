//Example no 1

const inputNumber = document.getElementById("user-number");
const calculateButton = document.querySelector("#calculator button");
const outputNumber = document.getElementById("calculated-sum");

function calculator() {
  const userInputNumber = inputNumber.value;

  let calculatingNumber = 0;

  for (let i = 0; i <= userInputNumber; i++) {
    calculatingNumber = calculatingNumber + i;
  }

  outputNumber.textContent = calculatingNumber;
  outputNumber.style.display = "block";
}

calculateButton.addEventListener("click", calculator);

//Example no 2

const links = document.querySelectorAll("#highlight-links a");
const highlightButton = document.querySelector("#highlight-links button");

function highlight() {
  for (let highlightLinks of links) {
    highlightLinks.classList.add("highlight");
  }
}
highlightButton.addEventListener("click", highlight);

//Example no 3

const dummyData={
    name: "Abeer",
    father_name: "Moin",
    age: 21,
    gender: "Male"
};
const displayButton = document.querySelector("#user-data button");
const displayOutput = document.querySelector("#output-user-data");

function displayData(){
    displayOutput.innerHTML="";
    for(const innerValue in dummyData){
    const newData = document.createElement("li");
    const output = innerValue.toUpperCase()+": "+dummyData[innerValue];
    newData.textContent=output;
    displayOutput.append(newData);
}
}
displayButton.addEventListener("click", displayData);

//Example no 4
const targetNumberInput = document.getElementById("user-target-number");
const rollTheDiceButton = document.querySelector("#statistics button");
const noOfDiceRolls = document.getElementById("output-total-rolls");
const targetNumber = document.getElementById("output-target-number");
const diceRoll = document.getElementById("dice-rolls");

function math(){
  return Math.floor(Math.random()*6)+1
}

function diceRollNumber(){
  const targetInputNumber = targetNumberInput.value;
  diceRoll.innerHTML="";

let hasRolledTargetNumber = false;
let numberOfRolls = 0;

while (!hasRolledTargetNumber){
  const rolledNumber = math();
  numberOfRolls++;
  if(targetNumberInput.value<=6){
    let output = document.getElementById("output-line")
    hasRolledTargetNumber = rolledNumber == targetInputNumber;
    const newRolledListItemElement = document.createElement("li");
    const outputText = "Number of Dice Rolls " + numberOfRolls + ": " + rolledNumber;
    newRolledListItemElement.textContent = outputText;
    diceRoll.append(newRolledListItemElement);
  }else{
    alert("Invalid Number")
    output.innerHTML=""
    break  
  }
}
noOfDiceRolls.textContent=numberOfRolls
targetNumber.textContent=targetInputNumber
}


rollTheDiceButton.addEventListener("click", diceRollNumber);




