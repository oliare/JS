const messageDialog = new bootstrap.Modal('#messageDialog');
const messageDialogText = document.getElementById("messageDialogText");
const image = document.getElementById('image');
const imagePreview = document.getElementById('imagePreview');

image.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        if (file.type.startsWith('image/')) {
            imagePreview.src = URL.createObjectURL(file);
        }
        else {
            messageDialogText.innerHTML = "Choose photo.";
            image.value = "";
            messageDialog.show();
        }
    } else {
        console.log('No file selected');
    }
});


// submit
const form = document.getElementById('needs-validation');
form.addEventListener('submit', event => {

    event.preventDefault();
    if (!form.checkValidity()) {
        event.stopPropagation();
    } else {
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const image = document.getElementById('image');
        if (image.files && image.files[0]) {
            const server = "https://pd322.itstep.click/";
            const url = server + 'api/Category/CreateCategory';
            const model = {
                name,
                description,
                "imageFile": image.files[0]
            }
            axios.post(url, model, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    window.location = "/categories.html";
                })
                .catch(error => {
                    console.error('Error sending data:', error);
                });

        } else {
            alert("Please select a profile picture.");
        }
    }
    form.classList.add('was-validated');

}, false);
