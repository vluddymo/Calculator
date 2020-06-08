function calculate() {

    let numberOne = Number(prompt("enter the first number", "0"));
    document.getElementById("numberOne").innerHTML = numberOne;
    let operator = prompt("Choose your operator: ", "+, -, *, /, %")
    document.getElementById("operator").innerHTML = operator;
    let numberTwo = Number(prompt("enter the second number", "0"));
    document.getElementById("numberTwo").innerHTML = numberTwo;
    let result = 0;


    if (!isNaN(numberOne) && !isNaN(numberTwo)) {
        if ((operator === "/" || operator === "%") && numberTwo === 0) {
            alert("dividing with zero is an invalid math operation")
            result = String("Oh boy... get some knowledge, mate !");
            return document.getElementById("number").innerHTML = result;

        } else {
            switch (operator) {
                case "+":
                    result = numberOne + numberTwo;
                    return document.getElementById("number").innerHTML = result;
                case "-":
                    result = numberOne - numberTwo;
                    return document.getElementById("number").innerHTML = result;
                case "*":
                    result = numberOne * numberTwo;
                    return document.getElementById("number").innerHTML = result;
                case "/":
                    result = numberOne / numberTwo;
                    return document.getElementById("number").innerHTML = result;
                case "%":
                    result = numberOne % numberTwo;
                    return document.getElementById("number").innerHTML = result;
                default:
                    return alert("Invalid operator");
            }
        }
    }
    return alert("only numbers are valid for this operation");
}
