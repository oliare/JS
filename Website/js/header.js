let xhr = new XMLHttpRequest();
xhr.open("GET", "/_header.html", false)
xhr.send();
document.write(xhr.response);

