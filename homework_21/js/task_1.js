$(document).ready(() => {
    const list = $('#list');
    const createBtn = $('#create-btn');

    localStorage.removeItem('toDoState');


    list.on('click', (event) => {
        if (event.target.tagName === 'INPUT') {
            event.target.parentElement.classList.toggle('todo-item--checked');
            saveState();
        }

        if (event.target.tagName === 'SPAN') {
            console.log(event.target.innerText);
            const modalWindow = $('<div></div>');
            const closeBtn = $('<button></button>')
            const text = $('<span></span>');
            text.text(event.target.innerText);
            closeBtn.text('Close');
            modalWindow.addClass('modal');
            closeBtn.addClass('closeBtn');
            modalWindow.append(closeBtn);
            modalWindow.append(`Your task:\n ${event.target.innerText}`);
            $('body').append(modalWindow);

            $(closeBtn).on('click', () => {
                modalWindow.remove();
            });
        }
    });

    createBtn.on('click', (event) => {
        event.preventDefault();

        const textField = $('#new-item');

        if (!textField.val().trim()) {
            alert('Please enter a to-do item!');
            return;
        }

        const newItem = createItem(textField.val());
        list.append(newItem);
        textField.val('');
        saveState();
    });

    function saveState() {
        const items = list.children().map((_, item) => ({
            text: $(item).find('.todo-item__description').text().trim(),
            checked: $(item).find('input').prop('checked'),
            classList: $(item)[0].classList.value.split(' ')
        })).get();

        localStorage.setItem('toDoState', JSON.stringify(items));
    }

    function restoreState() {
        const storedState = JSON.parse(localStorage.getItem('toDoState'));
        if (storedState) {
            list.empty();
            storedState.forEach(({ text, checked, classList }) => {
                const newItem = createItem(text, checked);
                classList.forEach(cls => $(newItem).addClass(cls));
                list.append(newItem);
            });
        }
    }

    function createItem(text, checked = false) {
        const newItem = $('<li></li>');
        newItem.addClass('todo-item');

        const checkBox = $('<input type="checkbox">');
        checkBox.prop('checked', checked);

        const noteText = $('<span></span>');
        noteText.addClass('todo-item__description');
        noteText.text(text);

        const deleteBtn = $('<button></button>');
        deleteBtn.addClass('todo-item__delete');
        deleteBtn.text('Видалити');

        deleteBtn.on('click', () => {
            newItem.remove();
            saveState();
        });

        newItem.append(checkBox);
        newItem.append(noteText);
        newItem.append(deleteBtn);

        return newItem;
    }
});