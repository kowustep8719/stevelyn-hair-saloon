// Function to handle user registration form submission
function handleRegistrationFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    const name = document.getElementById("name").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Perform form validation and registration logic
    // (You can implement this logic based on your requirements)

    // Redirect the user to another page after successful registration
    window.location.href = "registration-success.html";
}

// Function to initialize registration functionality
function initRegistration() {
    const registrationForm = document.getElementById("registration-form");
    if (registrationForm) {
        registrationForm.addEventListener("submit", handleRegistrationFormSubmit);
    }
}

// Initialize registration functionality when the DOM is ready
document.addEventListener("DOMContentLoaded", initRegistration);
