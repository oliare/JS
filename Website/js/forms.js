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

img.addEventListener('change', (e) => {
    let newImg = e.target.files[0];
    if (newImg) {
        let src = URL.createObjectURL(newImg);
        initialImg.src = src;
        initialImg.style.width = '100%';
    }
})

// phone mask



