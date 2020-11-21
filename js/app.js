document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const filmListItem = createFilmListItem(event.target);
    const filmList = document.querySelector('#film-list');
    filmList.appendChild(filmListItem);

    event.target.rest();
}

const createFilmListItem = function (form) {
    const filmListItem = document.createElement('li');
    filmListItem.classList.add('film-list-item');

    const title = document.createElement('h2');
    title.textContent = form.title.value;
    filmListItem.appendChild(title);

    const genre = document.createElement('h3');
    genre.textContent = form.genre.value;
    filmListItem.appendChild(genre);

    const stars = document.createElement('p');
    stars.textContent = form.stars.value;
    filmListItem.appendChild(stars);

    return filmListItem;
    }

    const handleDeleteAllClick = function (event) {
        const filmList = document.querySelector('#film-list');
        filmList.innerHTML = '';
}