document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const loggedInArea = document.getElementById('loggedInArea');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Send registration data to the server
        fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => console.log(data)); // Handle the response as needed
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;

        // Send login data to the server
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: loginUsername, password: loginPassword }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                loggedInArea.style.display = 'block';
            } else {
                console.log(data.message); // Handle login failure
            }
        });
    });
});
