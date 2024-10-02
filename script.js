import { add, subtract, multiply, divide } from "./operations.js";

let number1 = "";
let number2 = "";
let operationValue = "";
let operationSymbol = "";
let displayValue = "0";

const resultDisplay = document.querySelector(".result>span");
const operationDisplay = document.querySelector(".operation>span");
const numberButtons = document.querySelectorAll(".number-row button");
const operatorButtons = document.querySelectorAll(".operators button");

document.addEventListener("DOMContentLoaded", () => {
    resultDisplay.textContent = displayValue;

    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            displayValue = button.firstChild.textContent;
            refreshDisplay();
        });
    });

    operatorButtons.forEach((button) => {
        if (button.value !== "equals") {
            button.addEventListener("click", () => {
                operationValue = button.value;
                saveNumber();
            });
        } else {
            button.addEventListener("click", () => {
                saveNumber();
                operate();
            });
        }
    });
});

function refreshDisplay() {
    if (resultDisplay.textContent === "0") {
        resultDisplay.textContent = displayValue;
    } else {
        resultDisplay.textContent += displayValue;
    }
}

function saveNumber() {
    if (number1 !== "") number2 = resultDisplay.textContent;
    else number1 = resultDisplay.textContent;
    resultDisplay.textContent = "";
}

function setOperation() {
    operationDisplay.textContent = `${number1} ${operationSymbol} ${number2}`;
}

function setResult(result) {
    resultDisplay.textContent = result;
    setDefaultValues();
}

function operate() {
    if (number1 === "" || number2 === "") return;

    let result;

    switch (operationValue) {
        case "division":
            operationSymbol = "/";
            result = divide(number1, number2);
            break;
        case "multiplication":
            operationSymbol = "x";
            result = multiply(number1, number2);
            break;
        case "substraction":
            operationSymbol = "-";
            result = subtract(number1, number2);
            break;
        case "addition":
            operationSymbol = "+";
            result = add(number1, number2);
            break;
    }

    setOperation();
    setResult(result);
}

function setDefaultValues() {
    number1 = "";
    number2 = "";
    operationValue = "";
    operationSymbol = "";
}
