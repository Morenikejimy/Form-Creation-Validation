     document.addEventListener("DOMContentLoaded", function() {

    // Select the form and the feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Define the named function to handle form submission and validation
    function handleRegistration(event) {
        // Prevent the form from submitting to the server
        event.preventDefault();

        // Retrieve and trim user inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // --- Validation Logic ---

        // 1. Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // 2. Email Validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // 3. Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // --- Displaying Feedback ---

        // Make the feedback div visible
        feedbackDiv.style.display = 'block';

        if (isValid) {
            // If all validations pass
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.backgroundColor = '#d4edda';
            feedbackDiv.style.color = '#155724';
        } else {
            // If there are validation errors
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.backgroundColor = '#ffbaba';
            feedbackDiv.style.color = '#d8000c';
        }
    }

    // Add a 'submit' event listener to the form, calling the named function
    form.addEventListener('submit', handleRegistration);
});