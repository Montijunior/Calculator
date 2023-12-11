//function add,subtract,multiply,divide
const add = function(a,b){
    return a + b;
};

const subtract = function(a,b){
    return a - b;
};

const multiply = function(a,b){
    return a * b;
};

const divide = function(a,b){
    return a / b;
};

let firstNumber;
let operator;
let secondNumber;

function operate(operator,a,b){
    if (operator === '+') {
        return add(a,b)
    }
    else if (operator === '-'){
        return subtract(a,b);
    } else if (operator === '*') {
        return multiply(a,b);
    } else if (operator === '/') {
        return divide(a,b);
    }
    
}


const displayTop = document.querySelector('.top')
const displayBottom = document.querySelector('.bottom');
const clear = document.querySelector('.clear')
const deleteBtn = document.querySelector('.delete');
const equalsKey = document.querySelector('.answer');
