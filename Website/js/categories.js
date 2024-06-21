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
                        <th class="text-center" scope="row">${c.id}</th>
                        <td>${c.name}</td>
                        <td>${c.description}</td>
                        <td class="text-center"><img src="${img}" width="80"/></td>
                        <td class="text-center">
                            <a href="/edit_category.html?id=${c.id}">
                                <i class="bi bi-pencil"></i>
                            </a>
                        </td>
                         <td class="text-center">
                            <a href="#" onclick="confirmDelete(${c.id})">
                                <i class="bi bi-trash"></i>
                            </a>
                        </td>

                    </tr>
                `;
            tbody.innerHTML += row;
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
