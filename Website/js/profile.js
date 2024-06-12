const user = JSON.parse(localStorage.getItem('currentUser'));

if (user) {
    document.getElementById('lastName').innerText = user.lastName;
    document.getElementById('name').innerText = user.name;
    document.getElementById('email').innerText = user.email;
    document.getElementById('phone').innerText = user.phone;
    document.getElementById('image').src = user.image;
} else {
    alert("User not found :<");
    window.location.href = 'login.html';
}
