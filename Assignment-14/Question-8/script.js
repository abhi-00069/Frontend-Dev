let user = { name: "John", email: "john@mail.com", age: 21 };

document.getElementById("editForm").addEventListener("submit", function (e) {
    e.preventDefault();

    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    document.getElementById("output").textContent = JSON.stringify(user, null, 2);
});
