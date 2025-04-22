"use strict";

$(document).ready(function () {
  var list = $('#list');
  var createBtn = $('#create-btn');
  localStorage.removeItem('toDoState');
  list.on('click', function (event) {
    if (event.target.tagName === 'INPUT') {
      event.target.parentElement.classList.toggle('todo-item--checked');
      saveState();
    }
    if (event.target.tagName === 'SPAN') {
      console.log(event.target.innerText);
      var modalWindow = $('<div></div>');
      var closeBtn = $('<button></button>');
      var text = $('<span></span>');
      text.text(event.target.innerText);
      closeBtn.text('Close');
      modalWindow.addClass('modal');
      closeBtn.addClass('closeBtn');
      modalWindow.append(closeBtn);
      modalWindow.append("Your task:\n ".concat(event.target.innerText));
      $('body').append(modalWindow);
      $(closeBtn).on('click', function () {
        modalWindow.remove();
      });
    }
  });
  createBtn.on('click', function (event) {
    event.preventDefault();
    var textField = $('#new-item');
    if (!textField.val().trim()) {
      alert('Please enter a to-do item!');
      return;
    }
    var newItem = createItem(textField.val());
    list.append(newItem);
    textField.val('');
    saveState();
  });
  function saveState() {
    var items = list.children().map(function (_, item) {
      return {
        text: $(item).find('.todo-item__description').text().trim(),
        checked: $(item).find('input').prop('checked'),
        classList: $(item)[0].classList.value.split(' ')
      };
    }).get();
    localStorage.setItem('toDoState', JSON.stringify(items));
  }
  function restoreState() {
    var storedState = JSON.parse(localStorage.getItem('toDoState'));
    if (storedState) {
      list.empty();
      storedState.forEach(function (_ref) {
        var text = _ref.text,
          checked = _ref.checked,
          classList = _ref.classList;
        var newItem = createItem(text, checked);
        classList.forEach(function (cls) {
          return $(newItem).addClass(cls);
        });
        list.append(newItem);
      });
    }
  }
  function createItem(text) {
    var checked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var newItem = $('<li></li>');
    newItem.addClass('todo-item');
    var checkBox = $('<input type="checkbox">');
    checkBox.prop('checked', checked);
    var noteText = $('<span></span>');
    noteText.addClass('todo-item__description');
    noteText.text(text);
    var deleteBtn = $('<button></button>');
    deleteBtn.addClass('todo-item__delete');
    deleteBtn.text('Видалити');
    deleteBtn.on('click', function () {
      newItem.remove();
      saveState();
    });
    newItem.append(checkBox);
    newItem.append(noteText);
    newItem.append(deleteBtn);
    return newItem;
  }
});