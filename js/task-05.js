const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", inputEvent);

function inputEvent(event) {

    if (input.value.trim()) {
        
       return span.textContent = event.currentTarget.value;
    };   
      return  span.textContent = "Anonymous";   
};
