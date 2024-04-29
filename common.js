// common.js (or utils.js)

// Function to validate email address format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate telephone number format
function isValidTelephone(telephone) {
    const telephoneRegex = /^\d{10}$/; // Assuming 10-digit phone number format
    return telephoneRegex.test(telephone);
}

// Function to display a success message
function showSuccessMessage(message) {
    alert("Success: " + message);
}

// Function to display an error message
function showErrorMessage(message) {
    alert("Error: " + message);
}
