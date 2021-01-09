const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
    var item = document.createElement(classNames.TODO_ITEM);
    list.appendChild(item);
    var br = document.createElement("BR")
    item.appendChild(br);
    var checkbox = document.createElement(classNames.TODO_CHECKBOX)
    item.appendChild(checkbox);
    var button = document.createElement('INPUT')
    button.setAttribute("type", "checkbox");
    checkbox.appendChild(button)
    var text = document.createElement(classNames.TODO_TEXT);
    text.innerHTML = ' Item #' + parseInt(itemCountSpan.innerHTML)
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1
    item.appendChild(text);
    var del = document.createElement(classNames.TODO_DELETE);
    item.appendChild(del);

}