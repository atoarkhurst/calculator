function add(num1,num2) {
    console.log(`first number:  ${num1}`)
    console.log(`second number:  ${num2}`)
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
        case 'x': 
        return multiply(num1,num2);
        case '÷': 
        return divide(num1,num2);
        default: console.log("entered wrong thing");

    }

}
let displayValue = ''; 
let buttons = document.querySelectorAll('.button'); 
let firstNum = 0; 
let secondNum = 0; 
let operator; 
let result;
let activeOperator = 0;  


buttons.forEach(button=> {
    button.addEventListener("click", populateDisplay);
    
});

let display = document.querySelector('#input');

function populateDisplay(){
    let entry = this.textContent;
     

    if (entry === '+' || entry === '-' || entry === '÷' || entry === 'x' ){
        if(firstNum != 0){
            if(displayValue){
                display.textContent = '';
                secondNum = parseInt(displayValue); 
                result = operate(firstNum, operator, secondNum); 
                result = round(result); 
                display.textContent = result;
                operator = entry; 
                firstNum = result; 
                displayValue = ''; 
          }
        } else{ 
            
            if (displayValue.includes('.')){
                firstNum = parseFloat(displayValue)
            } else{
                firstNum = parseInt(displayValue);
            }
            displayValue = '';
            operator = entry; 
        }

        
        

    }else if(entry === '='){
        if(firstNum != 0 && operator && displayValue ){
            if (displayValue.includes('.')){
                secondNum = parseFloat(displayValue)
            } else{
                secondNum = parseInt(displayValue);
            }
            console.log(secondNum);
            result = operate(firstNum, operator, secondNum); 
            console.log(result);
            result = round(result); 
            console.log(result);
            display.textContent = result; 
        }else {
            console.log('Please enter numbers and operators'); 
        }
    }else if (entry === 'AC') {
        display.textContent = '';
        firstNum = 0; 
        secondNum = 0; 
        displayValue = 0; 
        
        
    }else{
        if(firstNum && !displayValue){
            display.textContent = '';
            display.textContent += entry; 
        displayValue += entry;
        } else{
            display.textContent += entry; 
        displayValue += entry;
        }
        

    }
   

   
}


function round (num){
    if(num % 1 != 0){
        return num.toFixed(6) /1; 
    }
    return num; 
}

