const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

// Restore state on page load
document.addEventListener('DOMContentLoaded', restoreState);

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT') {
        event.target.parentElement.classList.toggle('todo-item--checked');
        saveState();
    }
});

createBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const textField = document.getElementById('new-item');

    if (!textField.value.trim()) {
        alert('Please enter a to-do item!');
        return;
    }

    const newItem = createItem(textField.value);
    list.appendChild(newItem);
    textField.value = '';
    saveState();
});

function saveState() {
    const items = Array.from(list.children).map(item => ({
        text: item.querySelector('.todo-item__description').textContent.trim(),
        checked: item.querySelector('input').checked,
        classList: Array.from(item.classList)
    }));

    localStorage.setItem('toDoState', JSON.stringify(items));
}

function restoreState() {
    const storedState = JSON.parse(localStorage.getItem('toDoState'));
    if (storedState) {
        list.innerHTML = '';
        storedState.forEach(({ text, checked, classList }) => {
            const newItem = createItem(text, checked);
            classList.forEach(cls => newItem.classList.add(cls));
            list.appendChild(newItem);
        });
    }
}

function createItem(text, checked = false) {
    const newItem = document.createElement('li');
    newItem.classList.add('todo-item');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = checked;

    const noteText = document.createElement('span');
    noteText.classList.add('todo-item__description');
    noteText.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo-item__delete');
    deleteBtn.textContent = 'Видалити';

    deleteBtn.addEventListener('click', () => {
        newItem.remove();
        saveState();
    });

    newItem.appendChild(checkBox);
    newItem.appendChild(noteText);
    newItem.appendChild(deleteBtn);

    return newItem;
}
