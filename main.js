function add(num1,num2) {
    return num1 + num2; 
}

function subtract(num1,num2){
    return num1 - num2; 
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}


function operate(num1, operator,num2){
    switch (operator){
        case '+': 
        return add(num1,num2); 
        case '-': 
        return subtract(num1,num2);
        case '*': 
        return multiply(num1,num2);
        case '/': 
        return divide(num1,num2);
        default: console.log("entered wrong thing");

    }

}

let buttons = document.querySelectorAll('.button'); 

buttons.forEach(button=> {
    button.addEventListener("click", populateDisplay)
});

let display = document.querySelector('#input');

function populateDisplay(){
    display.textContent += " " + this.textContent;

}