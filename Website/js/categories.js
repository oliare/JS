const server = 'https://pd322.itstep.click/';
let url = `${server}api/Category/CategoryGetAsync`;
let tbody = document.querySelector("#categories tbody");
let defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNHDxW4Ms3wQ_SizDhUn7O9ivXu7BM2pfTw&s";
tbody.innerHTML = "";

axios.get(url)
    .then(resp => {
        let categories = resp.data;
        categories.forEach(c => {
            let img = c.imagePath ? `${server}images/320_${c.imagePath}` : defaultImage;
            let row = `
                    <tr>
                        <th scope="row">${c.id}</th>
                        <td>${c.name}</td>
                        <td>${c.description}</td>
                        <td><img src="${img}" width="75"/></td>
                    </tr>
                `;
            tbody.innerHTML += row;
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
