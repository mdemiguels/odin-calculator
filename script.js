import { add, subtract, multiply, divide } from "./operations.js";

let number1 = "";
let number2 = "";
let operator = "";
let displayValue = "0";
let isFirstNumber = true;
let isResultDisplaying = false;

const resultDisplay = document.querySelector(".result>span");
const operationDisplay = document.querySelector(".operation>span");
const numberButtons = document.querySelectorAll(".number-row button");
const operatorButtons = document.querySelectorAll(".operators button");
const deleteButton = document.querySelector("#clear-button");
const signButton = document.querySelector("#sign-button");
const percentButton = document.querySelector("#percent-button");
const dotButton = document.querySelector("#dot-button");

document.addEventListener("DOMContentLoaded", () => {
    numberButtons.forEach((numberButton) => {
        numberButton.addEventListener("click", () => {
            const numberValue = numberButton.textContent;

            if (isResultDisplaying) {
                displayValue = "0";
                resetDisplayValues();
                isResultDisplaying = false;
            }

			if (displayValue.includes('.')) {
				dotButton.disabled = true;
			} else {
				dotButton.disabled = false;
			}
            inputNumber(numberValue);
            reloadDisplayResult();
        });
    });

    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener("click", () => {
            const operatorValue = operatorButton.value;
			dotButton.disabled = false;

            if (operatorValue !== "equals") {
                holdOperator(operatorValue);

                if (number1 === "" || number2 === "") {
                    holdNumber();
                }

                if (number1 !== "" && number2 !== "") {
                    operate();
                }
            } else {
                if (!isResultDisplaying) {
                    holdNumber();
                }
                if (number1 !== "" && number2 !== "") {
                    operate();
                }
            }
        });
    });

    deleteButton.addEventListener("click", () => {
        resetOperationValues();
        resetDisplayValues();
    });

    signButton.addEventListener("click", () => {
		displayValue = -displayValue;
		reloadDisplayResult();
	});

    percentButton.addEventListener("click", () => {
		displayValue = displayValue/100;
		reloadDisplayResult();
	});
});

function inputNumber(number) {
    if (displayValue === "0") {
		if (number === ".") {
			displayValue = "0.";
		} else {
			displayValue = number;
		}
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
        const number1Parsed = parseFloat(number1);
        const number2Parsed = parseFloat(number2);

        if (isNaN(number1Parsed) || isNaN(number2Parsed)) {
            throw new Error();
        }

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

            formatDisplayResult();
            reloadDisplayOperation();
            isResultDisplaying = true;
        }
    } catch (error) {
        displayValue = "Syntax error";
    } finally {
        reloadDisplayResult();
        resetOperationValues();
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

function resetOperationValues() {
    number1 = "";
    number2 = "";
    operator = "";
    isFirstNumber = true;
}

function resetDisplayValues() {
    displayValue = "0";
    resultDisplay.textContent = "0";
    operationDisplay.textContent = "";
}

function formatDisplayResult() {
    displayValue = parseFloat(displayValue).toFixed(2);
    displayValue = parseFloat(displayValue).toString();
}
