const draggables = document.querySelectorAll('.draggable-item');
const columns = document.querySelectorAll('.column');
const closePopupBtn = document.getElementById('closePopupBtn');
const popupForm = document.getElementById('popupForm');
const popup = document.getElementById('popup');
let currcol = 0;
let tododata;
let itemcount = 5;

draggables.forEach(item => {
    setDraggables(item)
});
columns.forEach(item => {
    setColumns(item)
});
closePopupBtn.addEventListener('click', function () {
    popup.style.display = 'none';
});

popupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("event added");
    addTodo();
    popup.style.display = 'none';

});

function setDraggables(item) {
    item.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text', event.target.id);
        event.target.style.opacity = '0.5';
    });

    item.addEventListener('dragend', function (event) {
        event.target.style.opacity = '1';
    });
}
function setColumns(item) {
    item.addEventListener('dragover', function (event) {
        event.preventDefault();
        item.classList.add('dragover');
    });

    item.addEventListener('dragleave', function () {
        item.classList.remove('dragover');
    });

    item.addEventListener('drop', function (event) {
        event.preventDefault();
        const droppedItemId = event.dataTransfer.getData('text');
        console.log(droppedItemId);
        const droppedElement = document.getElementById(droppedItemId);
        item.appendChild(droppedElement);
        item.classList.remove('dragover');
    });
}

function addTodo() { 
    const todo = createTodo();
    document.getElementById("column" + currcol).appendChild(todo);

}
function makeTodo(col){
    popup.style.display = 'flex';
    currcol = col

}
function createTodo() {
    const title = document.getElementById('titleInput').value
    const desp = document.getElementById('descriptionInput').value
    const tag = document.getElementById('tagtype').value
    const todo = document.createElement('div');
    todo.classList.add('draggable-item');
    todo.draggable = true;
    todo.id = "item" + itemcount;
    todo.innerHTML = `
    <h2 class="item-title">${title}</h2>
    <p class="item-description">${desp}</p>
    <span class="item-tag">${tag}</span>
    `;
    itemcount++;
    setDraggables(todo);
    console.log(todo)
    
    return todo;
}
