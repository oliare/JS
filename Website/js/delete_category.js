const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
window.confirmDelete = id => {
    let modalTxt = document.querySelector('.modal-body');
    modalTxt.innerHTML = `Are you sure you want to delete category with id ${id}?`;
    modal.show();

    document.getElementById('deleteBtn').addEventListener('click', function () {
        axios.delete(`${server}api/Category/DeleteCategoryByID/${id}`)
            .then(() => {
                modal.hide();
                window.location.href = '/categories.html';
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
};
