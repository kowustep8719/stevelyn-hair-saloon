// navigation.js

// Function to toggle the active state of navigation links
function toggleActiveState() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all navigation links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add active class to the clicked navigation link
            this.classList.add('active');
        });
    });
}

// Function to initialize navigation functionality
function initNavigation() {
    toggleActiveState();
}

// Initialize navigation functionality when the DOM is ready
document.addEventListener('DOMContentLoaded', initNavigation);
