const getUsers = document.getElementById('getUsers');

getUsers.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(data => {
            dataProcessing(data);
        })
        .catch(error => {
            console.error('Something went wrong:', error);
        })
        .finally(() => {
            console.log('Fetch is complete.');
        });
});

function dataProcessing(users) {
    const tbody = document.querySelector('#jsonUsers tbody');
    tbody.innerHTML = '';

    users.forEach((user, index) => {
        let row = document.createElement('tr');
        let cells = [
            index + 1,
            user.name,
            user.username,
            user.email,
            `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
            '',
            user.phone,
            user.website,
            user.company.name,
        ];

        cells.forEach(data => appendCell(row, data));
        let geo = getGeoCell(user.address.geo.lat, user.address.geo.lng);
        row.replaceChild(geo, row.children[5]);

        tbody.appendChild(row);
    });
}

appendCell = (row, textContent) => {
    let cell = document.createElement('td');
    cell.textContent = textContent;
    row.appendChild(cell);
}

getGeoCell = (lat, lng) => {
    let geoCell = document.createElement('td');
    let url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    geoCell.innerHTML = `<p>${lat}, ${lng}</p>`;
   
    let button = document.createElement('button');
    button.textContent = 'View geo';
    button.style.width = '100%'
    button.addEventListener('click', () => {
        window.open(url, '_blank');
    });
    geoCell.appendChild(button);
    return geoCell;
}