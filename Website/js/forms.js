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