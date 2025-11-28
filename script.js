document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let errorMsg = document.getElementById("errorMsg");

    if (name.trim() === "") {
        errorMsg.textContent = "Full name is required!";
        return;
    }

    if (email.trim() === "") {
        errorMsg.textContent = "Email is required!";
        return;
    }

    if (!email.includes("@")) {
        errorMsg.textContent = "Enter a valid email!";
        return;
    }

    if (pass.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters!";
        return;
    }

    errorMsg.style.color = "green";
    errorMsg.textContent = "Form submitted successfully!";
});
