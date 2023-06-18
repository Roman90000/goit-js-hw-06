const input = document.querySelector('#validation-input');

input.addEventListener('blur', inputBlur);

function inputBlur() {
    if (Number(input.value.length) === Number(input.dataset.length)) {
        input.classList.add("valid");
        input.classList.replace("invalid", "valid");       
    } else {
        input.classList.add("invalid");
        input.classList.replace("valid","invalid");
    };
};
