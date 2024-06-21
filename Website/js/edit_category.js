const messageDialog = new bootstrap.Modal('#messageDialog');
const messageDialogText = document.getElementById("messageDialogText");
const image = document.getElementById('image');
const imagePreview = document.getElementById('imagePreview');

image.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        if (file.type.startsWith('image/')) {
            imagePreview.src = URL.createObjectURL(file);
        } else {
            messageDialogText.innerHTML = "Please select a photo.";
            image.value = "";
            messageDialog.show();
        }
    } else {
        console.log('No file selected');
    }
});

document.addEventListener('DOMContentLoaded', () => {

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const id = params.get('id');
    console.log("id = ", id);
    const server = "https://pd322.itstep.click/";

    const name = document.getElementById("name");
    const description = document.getElementById("description");


    axios.get(`${server}api/category/` + id)
        .then(res => {
            console.log('Category info: ', res.data);
            const { data } = res;
            name.value = data.name;
            description.value = data.description;
            if (data.imagePath !== null)
                imagePreview.src = server + 'images/320_' + data.imagePath;

        })

    const form = document.getElementById('needs-validation');
    form.addEventListener('submit', event => {

        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            let file = null;
            const image = document.getElementById('image');
            if (image.files && image.files[0]) {
                file = image.files[0];
            }
            const url = server + 'api/Category/EditCategory';
            const model = {
                id,
                name: name.value,
                description: description.value,
                "imageFile": file
            }
            axios.put(url, model, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(() => {
                    window.location = "/categories.html";
                })
                .catch(error => {
                    console.error('Error sending data:', error);
                });
        }
        form.classList.add('was-validated');

    }, false);
});