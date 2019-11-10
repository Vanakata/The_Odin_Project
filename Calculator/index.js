let tempNumber = "";
let num1 = "";
let num2 = "";
let sum = 0;
let operand1 = "";
let operand2 = "";
let display = document.getElementById("result");


const myCalc = (input) => {

    if (input >= 0 || input <= 9) {

        if (num1 === "") {
            firstNumber(input)

        }
        else if (num2 === "") {

            secondNumber(input);
        }
    } else {

        if (num1 === "") {

            num1 = tempNumber;
            tempNumber = "";

        } else if (num2 === "") {
            num2 = tempNumber;
            tempNumber = "";

            if (operand1 !== "" && input === "=") {

                mathCalc();

            }
        }

        operator(input);
    }
};

const firstNumber = (input) => {

    if (input !== "+" && input !== "-" && input !== "/" && input !== "*" && input !== "=") {

        tempNumber += input
        display.innerHTML = tempNumber;

    } else {
        display.innerHTML = "Must enter first a number";
    }
}

const secondNumber = (input) => {

    if (input !== "+" && input !== "-" && input !== "/" && input !== "*" && input !== "=") {

        tempNumber += input
        display.innerHTML = tempNumber;

    } else {
        display.innerHTL = "Must enter first a number";
    }
};
const operator = (input) => {

    if (input === "+" || input === "-" || input === "/" || input === "*") {

        operand1 = input;
        display.innerHTML = "";

    }

};

const mathCalc = () => {

    if (operand1 === "+") {
        sum = Number(num1) + Number(num2);
        displayResult(sum);

    } else if (operand1 === "*") {
        sum = Number(num1) * Number(num2);
        displayResult(sum);
    } else if (operand1 === "/") {
        sum = Number(num1) / Number(num2);
        displayResult(sum);
    } else if (operand1 === "-") {
        sum = Number(num1) - Number(num2);
        displayResult(sum);
    }
}

const displayResult = (sum) => {
    display.innerHTML = sum;

};


const clearAll = () => {
    num1 = "";
    num2 = "";
    sum = "";
    display.innerHTML = "";
}