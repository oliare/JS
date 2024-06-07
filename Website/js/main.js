let btn = document.querySelector('#add');
const img = document.getElementById('img');
const img_url = document.getElementById('image_url');

// https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg
btn.addEventListener('click', () => {
    const url = img_url.value;
    img.innerHTML += `<img src="${url}" />`;
})

