// validation
(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

// change profile image
const img = document.getElementById('image');
const initialImg = document.getElementById('userImg');
const messageDialog = new bootstrap.Modal(document.getElementById('messageDialog'));
const warning = document.getElementById("messageDialogText");

img.addEventListener('change', (e) => {
    let file = e.target.files[0];
    if (file) {
        if (file.type.startsWith('image/')) {
            initialImg.src = URL.createObjectURL(file);
            initialImg.style.width = '100%';
        } else {
            warning.innerHTML = 'Please select a valid image file';
            e.target.value = '';
            messageDialog.show();
        }
    }
});

// phone mask
let phoneInput = document.getElementById('phone');
let maskOptions = {
    mask: '+00(000) 000-00-00',
}
const mask = IMask(phoneInput, maskOptions);


// register
const form = document.getElementById('signupForm');

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    let email = document.getElementById("email").value;
    let lastName = document.getElementById("lastName").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById('phone').value;
    let image = document.getElementById('image').files[0];

    if (!image) {
        alert("Please select a profile picture");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const imgUrl = e.target.result;
        const user = {
            email,
            lastName,
            name,
            password,
            phone,
            image: imgUrl
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = "signup.html";
        // alert("Registration successful!");
    };
    reader.readAsDataURL(image);

    form.classList.add('was-validated');
});
