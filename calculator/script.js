console.log("javascript is working!")

const buttonEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", () => {
        const buttonvalue = buttonEl[i].textContent;

        if (buttonvalue === "C") {
            clearResult();
        } else if (buttonvalue === "=") {
            calculateResult();
        } else {
            appendValue(buttonvalue);
        }
    });
}

function clearResult() {
    inputFieldEl.value = "";
}

function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonvalue) {
    inputFieldEl.value += buttonvalue;
}