const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", inputEvent);

function inputEvent(event) {

    if (input.value) {
        span.textContent = event.currentTarget.value;
    }
    if (!input.value){
        span.textContent = "Anonymous";
    }    
}
