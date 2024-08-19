// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"

let firstButton = document.querySelector("button");

//    - Select the second button by using an "id"

let secondButton = document.getElementById("second-button");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored

function colorFirstPara(){
    console.dir(secondButton)
}

secondButton.addEventListener("click", colorFirstPara)

//    - Output the second button WITHOUT using the variable in which it's stored

function removeThirdPara(value){
    console.dir(value.target)
}
firstButton.addEventListener("click", removeThirdPara)

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements

const firstPara = document.body.children[2].children[1]

const thirdPara = document.body.children[2].children[3]

//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)

function removeThirdPara(){
    thirdPara.remove()
}

firstButton.addEventListener("click", removeThirdPara)
//    - The second button changes the background color of the first paragraph to blue

// function colorFirstPara(){
//     firstPara.style.backgroundColor="blue"
// }

// secondButton.addEventListener("click", colorFirstPara)

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

function colorFirstPara(){
    firstPara.classList.add("color-class")
}

secondButton.addEventListener("click", colorFirstPara)

