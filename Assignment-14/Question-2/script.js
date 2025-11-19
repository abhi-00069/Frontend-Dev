document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const passwordField = document.getElementById("password");

    const nameReg = /^[A-Za-z ]+$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneReg = /^\d{10}$/;
    const passReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])/;

    function validate(field, regex, msg) {
        const error = field.nextElementSibling;
        if (!regex.test(field.value)) {
            field.style.border = "2px solid red";
            error.textContent = msg;
        } else {
            field.style.border = "2px solid green";
            error.textContent = "";
        }
    }

    validate(nameField, nameReg, "Invalid Name");
    validate(emailField, emailReg, "Invalid Email");
    validate(phoneField, phoneReg, "Invalid Phone");
    validate(passwordField, passReg, "Weak Password");
});
