// add
function addition() {
    const firstNum = parseFloat(document.getElementById("first-number").value);
    const secondNum = parseFloat(document.getElementById("second-number").value);

    if (isNaN(firstNum) || isNaN(secondNum)) {
        document.getElementById("output").innerHTML = "Please enter valid numbers";
        return;
    }

    const result = firstNum + secondNum;
    displayResult(result);
}

// Sub
function subtraction() {
    const firstNum = parseFloat(document.getElementById("first-number").value);
    const secondNum = parseFloat(document.getElementById("second-number").value);

    if (isNaN(firstNum) || isNaN(secondNum)) {
        document.getElementById("output").innerHTML = "Please enter valid numbers";
        return;
    }

    const result = firstNum - secondNum;
    displayResult(result);
}

// mult
function multiplication() {
    const firstNum = parseFloat(document.getElementById("first-number").value);
    const secondNum = parseFloat(document.getElementById("second-number").value);

    if (isNaN(firstNum) || isNaN(secondNum)) {
        document.getElementById("output").innerHTML = "Please enter valid numbers";
        return;
    }

    const result = firstNum * secondNum;
    displayResult(result);
}

// div
function division() {
    const firstNum = parseFloat(document.getElementById("first-number").value);
    const secondNum = parseFloat(document.getElementById("second-number").value);

    if (isNaN(firstNum) || isNaN(secondNum)) {
        document.getElementById("output").innerHTML = "Please enter valid numbers";
        return;
    }
    if (secondNum === 0) {
        document.getElementById("output").innerHTML = "Div by Zero";
        return;
    }

    const result = firstNum / secondNum;
    displayResult(result);
}

// pow 
function power() {
    const base = parseFloat(document.getElementById("first-number").value);
    const exponent = parseFloat(document.getElementById("second-number").value);

    if (isNaN(base) || isNaN(exponent)) {
        document.getElementById("output").innerHTML = "Please enter valid numbers";
        return;
    }


    if (!Number.isInteger(exponent)) { // is integer?
        document.getElementById("output").innerHTML = "Exponent must be an integer";
        return;
    }

    let result = 1;
    const absExponent = Math.abs(exponent);

    // for loop --->
    for (let i = 0; i < absExponent; i++) {
        result = result * base;
    }

    // negative ? take reciprocal
    if (exponent < 0) {
        result = 1 / result;
    }

    displayResult(result);
}

// clear calc
function clear() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "0";
    document.getElementById("output").classList.remove("negative-result");
}

// formatting step
function displayResult(result) {
    const outputElement = document.getElementById("output");

    // rounding step
    const roundedResult = Math.round(result * 100000000) / 100000000;
    outputElement.innerHTML = String(roundedResult);

    // negative ? red
    if (result < 0) {
        outputElement.classList.add("negative-result");
    } else {
        outputElement.classList.remove("negative-result");
    }
}