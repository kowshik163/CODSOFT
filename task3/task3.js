let cells = document.getElementsByClassName("inbox");
let result = document.getElementById("result");

let currentInput = "";
let lastResult = "";

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
        let value = cells[i].textContent;

        if (value === "=") {
            try {
                lastResult = eval(currentInput);
                result.innerHTML = lastResult;
                currentInput = lastResult;
            } catch (e) {
                result.innerHTML = "Error";
                currentInput = "";
            }
        } else if (value === "AC") {
            currentInput = "";
            result.innerHTML = "0";
        } else if (value === "del") {
            let a = currentInput.toString();
            a = a.slice(0, -1);
            currentInput = a || "0";
            result.innerHTML = currentInput;
        } else {
            currentInput += value;
            result.innerHTML = currentInput;
        }
    });
}