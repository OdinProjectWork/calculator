let addition = (num1, num2) => num1 + num2;

let subtraction = (num1, num2) => num1 - num2;

let multiplication = (num1, num2) => num1 * num2;

let division = (num1, num2) => num1 / num2;

let modulo = (num1, num2) => num1 % num2;


let operations = [];

let value = "";

const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector("#text");


buttons.forEach((button) => {
    //perform operations based on the value of the button
    button.addEventListener("click", () => {
        if (button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/" || button.textContent === "%") {
            operations.push(value);
            operations.push(button.textContent);
            value = "";
        } else if (button.textContent === "=") {
            let res = operations[0];
            if(typeof operations[0] === "string"){
                res = operations[0].includes(".") ? parseFloat(operations[0]) : parseInt(operations[0])
            }
            operations.push(value);
            while (operations.length !== 0) {
                let val = operations.shift();
                if (val === "+") {
                    let secondVal = operations.shift();
                    secondVal = secondVal.includes(".") ? parseFloat(secondVal) : parseInt(secondVal);

                    res = addition(res, secondVal);
                } else if (val === "-") {
                    let secondVal = parseInt(operations.shift());
                    res = subtraction(res, secondVal);
                } else if (val === "*") {
                    let secondVal = parseInt(operations.shift());
                    res = multiplication(res, secondVal);
                } else if (val === "%") {
                    let secondVal = parseInt(operations.shift());
                    res = modulo(res, secondVal);
                    console.log(res);
                } else if (val === "/") {
                    let secondVal = parseInt(operations.shift());
                    if (secondVal === 0) {
                        res = "bruh";
                    } else {
                        res = division(res, secondVal);
                    }
                }
            }
            operations.push(res);
            screenDisplay.textContent = res;
        } else if (button.textContent === "ac") {
            operations = [];
            value = "";
            screenDisplay.textContent = "0";
        } else if (button.textContent === "+/-") {
            value = "-" + value;
        } else {
            value += button.textContent;
            screenDisplay.textContent = value;
        }
    })
})