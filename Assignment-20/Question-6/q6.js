document.addEventListener("DOMContentLoaded", () => {
  const API = "http://localhost:3006/users";
  const form = document.getElementById("regForm");
  const msgBox = document.getElementById("message");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passInput = document.getElementById("password");

  // Helper to show messages
  function showMessage(text, isError = false) {
    msgBox.textContent = text;
    msgBox.className = isError ? "error" : "success";
  }

  // Reset UI
  function resetValidation() {
    msgBox.textContent = "";
    emailInput.classList.remove("invalid");
    nameInput.classList.remove("invalid");
    passInput.classList.remove("invalid");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    resetValidation();

    // Basic client-side validation
    const name = nameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const pass = passInput.value.trim();

    if (!name || !email || !pass) {
      showMessage("All fields are required", true);
      if (!name) nameInput.classList.add("invalid");
      if (!email) emailInput.classList.add("invalid");
      if (!pass) passInput.classList.add("invalid");
      return;
    }

    try {
      /* 
         1) Check if email already exists
         GET /users?email=abc@gmail.com
      */
      const dupRes = await axios.get(`${API}?email=${email}`);

      if (dupRes.data.length > 0) {
        // Email already present in DB
        emailInput.classList.add("invalid");
        showMessage("Email already registered.", true);
        return;
      }

      /* 
         2) Email is unique → submit registration
         POST /users
      */
      const newUser = {
        name,
        email,
        password: pass
      };

      await axios.post(API, newUser);

      showMessage("Registration successful!");

      // Clear form
      form.reset();

    } catch (err) {
      console.error(err);
      showMessage("Error while submitting form. Try again.", true);
    }
  });
});
