import { add, subtract, multiply, divide } from "./operations.js";

let number1 = "";
let number2 = "";
let operator = "";
let displayValue = "0";
let isFirstNumber = true;

const resultDisplay = document.querySelector(".result>span");
const operationDisplay = document.querySelector(".operation>span");
const numberButtons = document.querySelectorAll(".number-row button");
const operatorButtons = document.querySelectorAll(".operators button");

document.addEventListener("DOMContentLoaded", () => {
    numberButtons.forEach((numberButton) => {
        numberButton.addEventListener("click", () => {
            const numberValue = numberButton.textContent;
            inputNumber(numberValue);
            reloadDisplayResult();
        });
    });

    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener("click", () => {
            const operatorValue = operatorButton.value;

			
            if (operatorValue !== "equals") {
				
				holdOperator(operatorValue);

                if (number1 === "" || number2 === "") {
                    holdNumber();
                } else {
                    holdNumber();
                    operate();
                }
            } else {
                holdNumber();
                if (number1 !== "" && number2 !== "") {
                    operate();
                }
            }

        });
    });
});

function inputNumber(number) {
    if (displayValue === "0") {
        displayValue = number;
    } else {
        displayValue += number;
    }
}

function reloadDisplayResult() {
    resultDisplay.textContent = displayValue;
}
function reloadDisplayOperation() {
	operationDisplay.textContent = `${number1} ${operator} ${number2}`;
}

function operate() {
    try {
        const number1Parsed = parseInt(number1);
        const number2Parsed = parseInt(number2);

        if (operator !== "") {
            switch (operator) {
                case "*":
                    displayValue = multiply(number1Parsed, number2Parsed);
                    break;
                case "/":
                    displayValue = divide(number1Parsed, number2Parsed);
                    break;
                case "+":
                    displayValue = add(number1Parsed, number2Parsed);
                    break;
                case "-":
                    displayValue = subtract(number1Parsed, number2Parsed);
                    break;
            }

			reloadDisplayOperation();
            reloadDisplayResult();
        }
    } catch (error) {
        displayValue = "Syntax Error";
    } finally {
        resetValues();
    }
}

function holdNumber() {
    if (isFirstNumber) {
        number1 = displayValue;
        isFirstNumber = false;
    } else {
        number2 = displayValue;
        isFirstNumber = true;
    }

    displayValue = "0";
}

function holdOperator(operatorValue) {
    operator = operatorValue;
}

function resetValues() {
    number1 = "";
    number2 = "";
    operator = "";
    isFirstNumber = true;
}
