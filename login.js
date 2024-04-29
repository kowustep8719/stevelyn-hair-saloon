// login.js

// Function to handle user login form submission
function handleLoginFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Perform form validation (you can add your validation logic here)

    // Simulate user login (you can replace this with actual login logic)
    console.log("User logged in with email:", email, "and password:", password);

    // Optionally, redirect the user to another page after successful login
    // window.location.href = "dashboard.html";
}

// Function to initialize login functionality
function initLogin() {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", handleLoginFormSubmit);
    }
}

// Initialize login functionality when the DOM is ready
document.addEventListener("DOMContentLoaded", initLogin);
