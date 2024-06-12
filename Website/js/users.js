document.addEventListener('DOMContentLoaded', () => {
    const usersTable = document.querySelector('#users tbody');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach(user => {
        const row = usersTable.insertRow();
        row.innerHTML = `   
            <td>${user.lastName}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td><button onclick="deleteUser('${user.email}')">Delete</button></td>
        `;
    });
});

function deleteUser(email) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(user => user.email != email);
    localStorage.setItem('users', JSON.stringify(users));

    location.reload();
}
