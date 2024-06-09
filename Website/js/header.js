loadDOM = (page) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `/${page}`, false)
    xhr.send();
    document.write(xhr.response);
}


