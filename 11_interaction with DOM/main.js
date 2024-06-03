let modal = document.getElementById('modal');
let btn = document.getElementById('btn');
let modalClose = document.getElementById('close');

btn.onclick = () => modal.style.display = 'block';
let win = modalClose.onclick = () => modal.style.display = 'none';

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

let send = document.querySelector('input[type="submit"]');
send.onclick = (e) => {
    e.preventDefault();
    let data = document.querySelectorAll('input');
    for (const i of data) {
        if (i.value == '') {
            alert('Please fill in all fields');
            return;
        }
    }
    win();
    alert('Application accepted :>');
    const form = document.querySelector('form')
    form.reset();
};
