let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');
let inputField = document.querySelector('input');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(e) {
    const buttonText = e.target.innerHTML;

    try {
        if (buttonText === "=") {
            string = String(eval(string));
        } else if (buttonText === 'C') {
            string = "";
        } else if (buttonText === 'M+') {
            memory += parseFloat(string) || 0;
        } else if (buttonText === 'M-') {
            memory -= parseFloat(string) || 0;
        } else {
            string += buttonText;
        }

        inputField.value = string;
    } catch (error) {
        // Handle the error, for example, display an error message
        console.error("Error:", error.message);
    }
}
