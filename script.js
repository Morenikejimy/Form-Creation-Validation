// Task Requirement: Start with DOMContentLoaded Event
document.addEventListener('DOMContentLoaded', () => {

    // Task Requirement: Form and Feedback Division Selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Task Requirement: Form Submission Event Listener
    form.addEventListener('submit', (event) => {
        // Task Requirement: Prevent form from submitting
        event.preventDefault();

        // Task Requirement: Retrieve and Trim User Inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Task Requirement: Initialize Validation Variables
        let isValid = true;
        const messages = [];

        // Task Requirement: Username Validation (at least 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Task Requirement: Email Validation (must include '@' and '.')
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Task Requirement: Password Validation (at least 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Task Requirement: Displaying Feedback
        feedbackDiv.style.display = "block"; // Make the feedback div visible

        if (isValid) {
            // If validation passes
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green for success
            form.reset(); // Optional: clear the form on success
        } else {
            // If validation fails
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with line breaks
            feedbackDiv.style.color = '#dc3545'; // Red for errors
        }
    });
});