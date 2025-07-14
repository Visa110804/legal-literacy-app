document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = form.username.value;
        const password = form.password.value;

        // Check if username and password are correct
        if (username === "admin" && password === "password") {
            // Redirect to the next page upon successful login
            window.location.href = "greet.html";
        } else {
            // Show error message if login is unsuccessful
            errorMessage.textContent = "Invalid username or password";
        }
    });
});
