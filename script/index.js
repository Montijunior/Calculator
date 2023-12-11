let displayTop = document.querySelector('.top');
let displayBottom = document.querySelector('.bottom');
let equalKey = document.querySelector('.answer');
let decimal = document.querySelector('.decimal');
let operators = document.querySelectorAll('.operator');
let numbers = document.querySelectorAll('.number')
let operatorNumber = document.querySelector('.buttons-operators')
let clearBtn = document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete');

function add(a,b){
    a = Number(a);
    b = Number(b);
    return a + b;
}

function subtract(a,b){
    a = Number(a);
    b = Number(b);
    return a - b;
}

function multiply(a,b){
    a = Number(a);
    b = Number(b);
    return a * b;
}

function divide(a,b){
    a = Number(a);
    b = Number(b);
    return a / b;
}

let firstOperand;
let secondOperand;
let operator;
let currentOperation;


 operatorNumber.addEventListener('click',(e)=>{
    let target = e.target;
    displayTop.innerText += target.value;
    let display = displayTop.innerText;
    let arrayOperands;
    if(display.includes('/')){
        arrayOperands = display.split('/');
        firstOperand = arrayOperands[0];
        secondOperand = arrayOperands[1];
        operator = '/'
    }else if(display.includes('*')){
        arrayOperands = display.split('*');
        firstOperand = arrayOperands[0];
        secondOperand = arrayOperands[1];
        operator = '*';
    } else if(display.includes('-')){
        arrayOperands = display.split('-');
        firstOperand = arrayOperands[0];
        secondOperand = arrayOperands[1];
        operator = '-';
    } else if(display.includes('+')){
        arrayOperands = display.split('+');
        firstOperand = arrayOperands[0];
        secondOperand = arrayOperands[1];
        operator = '+'
    }
    //  operate(firstOperand,secondOperand,operator);
    // displayBottom.innerText = result;
 });

 function operate(firstOperand,secondOperand,operator){
    if(operator === '/'){
        return divide(firstOperand,secondOperand);
    } else  if(operator === '*'){
        return multiply(firstOperand,secondOperand);
    } else  if(operator === '-'){
        return subtract(firstOperand,secondOperand);
    } else  if(operator === '+'){
        return add(firstOperand,secondOperand);
    }
 }

 equalKey.addEventListener('click',()=>{
    displayBottom.innerText = operate(firstOperand,secondOperand,operator);
    displayTop.innerText = displayBottom.innerText;
    displayBottom.textContent;
 });

 
 
