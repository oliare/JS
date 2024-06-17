const url = "https://pd322.itstep.click/api/Category/CategoryGetAsync";
axios.get(url)
    .then(resp => {
        let tbody = document.querySelector('#categories tbody');
        tbody.innerHTML = '';

        resp.data.forEach(({ id, name, description }) => {
            let row = document.createElement('tr');
            row.innerHTML = `<td>${id}</td>
                             <td>${name}</td>
                             <td>${description}</td>`;
            tbody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
