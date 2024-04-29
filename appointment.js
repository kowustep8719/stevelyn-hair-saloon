// appointment.js

// Function to handle appointment booking form submission
function handleAppointmentFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    const telephone = document.getElementById("appointment-telephone").value;
    const email = document.getElementById("appointment-email").value;
    const date = document.getElementById("appointment-date").value;
    const time = document.getElementById("appointment-time").value;

    // Perform form validation
    if (!isValidTelephone(telephone)) {
        showErrorMessage("Invalid telephone number");
        return;
    }

    if (!isValidEmail(email)) {
        showErrorMessage("Invalid email address");
        return;
    }

    // Simulate appointment booking (you can replace this with actual booking logic)
    console.log("Appointment booked for telephone:", telephone, "email:", email, "date:", date, "time:", time);

    // Optionally, display a success message to the user or redirect to another page
    // alert("Appointment booked successfully!");
    // window.location.href = "appointment-success.html";
}

// Function to initialize appointment booking functionality
function initAppointment() {
    const appointmentForm = document.getElementById("appointment-form");
    if (appointmentForm) {
        appointmentForm.addEventListener("submit", handleAppointmentFormSubmit);
    }
}

// Initialize appointment booking functionality when the DOM is ready
document.addEventListener("DOMContentLoaded", initAppointment);
