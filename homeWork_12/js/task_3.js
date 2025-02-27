const addButton = document.getElementById('add-btn');
const itemsList = document.getElementById('to-do-items');
const input = document.getElementById('new-item-input');

addButton.addEventListener('click', () => {
    const newItemInputValue = input.value;

    if(newItemInputValue.trim() !== '') {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';

        const newItem = document.createElement('li');
        newItem.textContent = newItemInputValue;

        newItem.appendChild(deleteButton);
        itemsList.appendChild(newItem);
    }

    input.value = '';
});

itemsList.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON') {
        event.target.parentElement.remove();
    }
});