document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const seats = document.getElementById("seats").value;

    const nameReg = /^[A-Za-z ]+$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const seatReg = /^([1-9]|10)$/;

    if (!nameReg.test(name) || !emailReg.test(email) || !seatReg.test(seats)) {
        alert("Invalid input");
        return;
    }

    const ticket = { name, email, seats: Number(seats) };
    console.log("Ticket:", ticket);
});
