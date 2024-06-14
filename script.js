let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let flag = 0;
let flag1 = 0;
let flag2 = 0;
let final ='';

function add(a, b){
    return (a + b);
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return (a / b);
}

function operate(operator, num1, num2){
    if(operator === '+'){
       return add(num1, num2);
    }

    else if(operator == '-') {
        return subtract(num1, num2)
    }

    else if(operator == '\u00d7') {
       return multiply(num1, num2)
    }

    else if(operator == '\u00f7') {
        if (num2 == 0){
            return "lmao";
        }
        else return divide(num1, num2);
    }

    else {
        if(text.innerHTML !== 0){
            return final;
        }
    }
}

const numbersContainer = document.querySelectorAll('.number');
const text = document.querySelector("#textArea");
text.innerHTML = 0;
// const  numbers = document.querySelectorAll("#number");


numbersContainer.forEach(element => {
    element.addEventListener("click", (event) => {

        if(event.target.innerText !== "."){
            if(flag1 == 0 && text.innerHTML === '0'){
                text.innerHTML = '';
                text.innerHTML = text.innerHTML + event.target.innerText;
            }
            else if (flag1 == 0){
                text.innerHTML = text.innerHTML + event.target.innerText;
            }
            else {
                text.innerHTML = '';
                flag1 = 0;
                text.innerHTML = text.innerHTML + event.target.innerText;
            }
        }

        else {
            let containPeriod = text.innerHTML.match(/\./g);

            if (containPeriod === null) {
                if (flag1 == 0){
                    text.innerHTML = text.innerHTML + event.target.innerText;
                }
                else {
                    flag1 = 0;
                    text.innerHTML = text.innerHTML + event.target.innerText;
                }
            }

            else if (flag1 == 1) {
                flag1 = 0;
                text.innerHTML = 0;
                text.innerHTML = text.innerHTML + event.target.innerText;
            }   
        }
    })
});


// const decimal = document.querySelector(".decimal");
// decimal.addEventListener("click", (d) => {
//     let containPeriod = text.innerHTML.match(/\./g);

//     if (containPeriod === null) {
//         if (flag1 == 0){
//             text.innerHTML = text.innerHTML + d.target.innerText;
//         }
//         else {
//             flag1 = 0;
//             text.innerHTML = text.innerHTML + d.target.innerText;
//         }
//     }

//     else if (flag1 == 1) {
//         flag1 = 0;
//         text.innerHTML = 0;
//         text.innerHTML = text.innerHTML + d.target.innerText;
//     }   
// })

const erase = document.querySelector("#clear");
erase.addEventListener("click", () => {
    text.innerHTML = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    flag =0;
    flag1 =0;
})

const backSpace = document.querySelector("#backSpace");
backSpace.addEventListener("click", () => {
    if (operator !== "=") {
        if(flag2 == 0){
            text.innerHTML = text.innerHTML.slice(0, -1);
            firstNumber = Number(text.innerHTML);
            final = Number(text.innerHTML);
        }
        else {
            text.innerHTML = text.innerHTML.slice(0, -1);
            secondNumber = Number(text.innerHTML);
        }
    }
});



const symbolsContainer = document.querySelectorAll(".symbol");
symbolsContainer.forEach(element => {
    element.addEventListener("click", (e) => {
    // if(text.innerHTML != ''){
        if(flag == 0 && e.target.innerText !== "="){
            firstNumber = Number(text.innerHTML);
            operator = e.target.innerText;
            flag = 1;
            flag1 = 1;
            flag2 = 1;
            decimalFlag = 1;
            // text.innerHTML = 0;
        }

        else if (flag == 1){
            secondNumber = Number(text.innerHTML);
            final = operate(operator, firstNumber, secondNumber);
            operator = e.target.innerText;
            firstNumber = final;
            secondNumber = 0;
            text.innerHTML = final;
            flag1=1;
            flag2 =1;
            decimalFlag = 1;
            console.log(final);
        }
    //}
    })
});

// console.log(operate('+', 2, 3));






// console.log(add(2,3));
// console.log(subtract(2,3));
// console.log(multiply(2,3));
// console.log(divide(2,3));