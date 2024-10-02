let number1 = "";
let number2 = "";
let operator = "";
let displayValue = "0";

const resultDisplay = document.querySelector(".result>span");
const operationDisplay = document.querySelector(".operation>span");
const buttons = document.querySelector(".buttons");

document.addEventListener("DOMContentLoaded", () => {
  resultDisplay.textContent = displayValue;
});

const add = function (a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const operate = function (opeartor, a, b) {
    add(a, b);
};
