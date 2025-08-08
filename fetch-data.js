// 8. Invoke fetchUserData on DOMContentLoaded
// This ensures the script runs only after the entire HTML document has been loaded and parsed.
document.addEventListener('DOMContentLoaded', function() {

    // 1. Initialize the Async Function
    // This function will handle fetching and displaying the user data.
    async function fetchUserData() {

        // 2. Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // 3. Select the Data Container Element
        const dataContainer = document.getElementById('api-data');

        // 4. Fetch Data Using try-catch for error handling
        try {
            // Use await to pause execution until the fetch promise resolves
            const response = await fetch(apiUrl);
            
            // Check if the response was successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Use await to parse the JSON response
            const users = await response.json();

            // 5. Clear the Loading Message
            dataContainer.innerHTML = '';

            // 6. Create and Append User List
            const userList = document.createElement('ul');

            // Loop through each user in the received data
            users.forEach(user => {
                // Create a new list item element
                const listItem = document.createElement('li');
                // Set the text content of the list item to the user's name
                listItem.textContent = user.name;
                // Append the list item to the user list
                userList.appendChild(listItem);
            });

            // Append the complete user list to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // 7. Error Handling
            console.error('Fetch error:', error); // Log the actual error to the console for debugging
            // Clear any previous content (like the loading message)
            dataContainer.innerHTML = ''; 
            // Display a user-friendly error message on the page
            dataContainer.textContent = 'Failed to load user data.';
        }
    }

    // Call the function to execute the data fetching process
    fetchUserData();
});