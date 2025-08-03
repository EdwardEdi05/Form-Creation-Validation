// Async Function Declaration
async function fetchUserData() {
    // Define API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch Data
        const response = await fetch(apiUrl);

        // Parse JSON
        const users = await response.json();

        // Clear Loading Message
        dataContainer.innerHTML = '';

        // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through users and create list items
        users.forEach(function(user) {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the <ul> to the dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle Errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
});
