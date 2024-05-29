let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let flag = 0;
let flag1 = 0;
let flag2 = 0;
let final =0;


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
    if(operator === '+'){
       return add(num1, num2);
    }

    else if(operator == '-') {
        return subtract(num1, num2)
    }

    else if(operator == '*') {
       return multiply(num1, num2)
    }

    else if(operator == '/') {
       return divide(num1, num2)
    }

    else {
        return final;
    }
}

const numbersContainer = document.querySelector("#allNumbers");
const text = document.querySelector("#textArea");
text.innerHTML = '';
// const  numbers = document.querySelectorAll("#number");

numbersContainer.addEventListener("click", (event) => {
    
        if(flag1 == 0){
            text.innerHTML = text.innerHTML + event.target.innerText;
        }
        else {
            text.innerHTML = '';
            flag1 = 0;
            text.innerHTML = text.innerHTML + event.target.innerText;
        }

});

const erase = document.querySelector("#clear");
erase.addEventListener("click", () => {
    text.innerHTML = '';
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    flag =0;
    flag1 =0;
})

const backSpace = document.querySelector("#backSpace");
backSpace.addEventListener("click", () => {
    if(flag2 == 0){
        text.innerHTML = text.innerHTML.slice(0, -1);
        firstNumber = Number(text.innerHTML);
        final = Number(text.innerHTML);
    }
    else {
        text.innerHTML = text.innerHTML.slice(0, -1);
        secondNumber = Number(text.innerHTML);
    }
    
})



const symbolsContainer = document.querySelector("#allSymbol");
symbolsContainer.addEventListener("click", (e) => {
    if(flag == 0){
        firstNumber = Number(text.innerHTML);
        operator = e.target.innerText;
        flag = 1;
        flag1 = 1;
        flag2 = 1;
        // text.innerHTML = 0;
    }

    else{
        secondNumber = Number(text.innerHTML);
        final = operate(operator, firstNumber, secondNumber);
        operator = e.target.innerText;
        firstNumber = final;
        secondNumber = 0;
        text.innerHTML = final;
        flag1=1;
        flag2 =1;
        console.log(final);
    }
});

// console.log(operate('+', 2, 3));






// console.log(add(2,3));
// console.log(subtract(2,3));
// console.log(multiply(2,3));
// console.log(divide(2,3));