const form = document.getElementById('loginForm');
form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'profile.html';
    } else {
        alert("Enter the correct data");
    }
    form.classList.add('was-validated');
});