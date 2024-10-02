import { add, subtract, multiply, divide } from "./operations.js";

let number1 = "";
let number2 = "";
let operator = "";
let displayValue = "0";

const resultDisplay = document.querySelector(".result>span");
const operationDisplay = document.querySelector(".operation>span");
const numberButtons = document.querySelectorAll(".number-row button");
const optionButtons = document.querySelectorAll(".number-row button");
const operatorButtons = document.querySelectorAll(".operators button");

document.addEventListener("DOMContentLoaded", () => {
    resultDisplay.textContent = displayValue;

    numberButtons.forEach((button) => {
        button.addEventListener("click", (evt) => {
            displayValue = button.firstChild.textContent;
            refreshDisplay();
        });
    });
});

const refreshDisplay = function () {
    if (resultDisplay.textContent === "0") {
        resultDisplay.textContent = displayValue;
    } else {
        resultDisplay.textContent += displayValue;
    }
};
