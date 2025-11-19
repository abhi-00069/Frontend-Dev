document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const userReg = /^.{5,}$/;
    const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;

    if (!userReg.test(user)) {
        alert("Username must be at least 5 characters");
        return;
    }

    if (!passReg.test(pass)) {
        alert("Password must include uppercase, lowercase, digit, and special char");
        return;
    }

    alert("Login Successful");
});
