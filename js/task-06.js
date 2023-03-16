const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {

    if (input.value.length > input.dataset.length) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else if (input.value.length < input.dataset.length) {
        input.classList.remove("valid");
        input.classList.add("invalid");
        }
    }
)
