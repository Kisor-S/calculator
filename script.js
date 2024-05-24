let firstNumber = 0;
let secondNumber = 0;
let operator = "";


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, num1, num2){
    if(operator == '+'){
        add(num1, num2);
    }

    else if(operator == '-') {
        subtract(num1, num2)
    }

    else if(operator == '*') {
        multiply(num1, num2)
    }

    else {
        divide(num1, num2)
    }
}

const numbersContainer = document.querySelector("#allNumbers");
const text = document.querySelector("#textArea");
// const  numbers = document.querySelectorAll("#number");

numbersContainer.addEventListener("click", (event) => {
    // if(event.target.tagName === 'BUTTON') {
        // console.log();
        text.innerHTML = event.target.innerText;
    // }

});


// console.log(add(2,3));
// console.log(subtract(2,3));
// console.log(multiply(2,3));
// console.log(divide(2,3));