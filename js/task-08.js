const form = document.querySelector('.login-form');
form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value.trim() === '' || password.value.trim() === '') {
       alert("Все поля должны быть заполнены!!!")
    } else {
        const formData = {
            email: email.value,
            password: password.value
        };
        event.currentTarget.reset();
    }

}
