//Example no 1
const userInput = document.getElementById("user-number");
const outputButton = document.querySelector("#calculator button");

function calculate(){
    let inputUser = userInput.value;
    let calculator = 0
    for (let i = 0; i <= inputUser; i++){
        calculator = calculator + i;
    }
    const output = document.getElementById("calculated-sum");
    output.textContent=calculator;
output.style.display="block";
}

outputButton.addEventListener("click", calculate);

//Example no 2
const highlightButton = document.querySelector("#highlight-links button");
const highlightLinks = document.querySelectorAll("#highlight-links a");

function highlight(){
  for(const highlightLink of highlightLinks){
    highlightLink.classList.add("highlight");
  }
}

highlightButton.addEventListener("click", highlight);

//Example no 3
const userData = {
    Name: "Abeer",
    Age: 21,
    Gender: "Male",
    Degree: "Computer Science"
}
const displayButton = document.querySelector("#user-data button");
const outputData = document.getElementById("output-user-data");

function displayData(){
    outputData.innerHTML=""
for(const userDataInput in userData){
    const newUserData = document.createElement("li");
    const outputFormat = userDataInput.toUpperCase() + ": " + userData[userDataInput];
    newUserData.textContent=outputFormat;
    outputData.append(newUserData);
    }
}

displayButton.addEventListener("click", displayData);

//Example no 4
const diceButton = document.querySelector("#statistics button");
const diceInput = document.getElementById("user-target-number");
const numberOfDiceRolls = document.getElementById("output-total-rolls");
const outputOfDiceRoll = document.getElementById("output-target-number");



function math(){
    return Math.floor(Math.random()*6)+1;
}
function diceCalculation(){

}

diceButton.addEventListener("click", diceCalculation)