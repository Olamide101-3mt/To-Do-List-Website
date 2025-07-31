console.log('To do list');

// Selecting Elements
const input = document.getElementById('input');
const button = document.querySelector('button');
const todoList = document.querySelector('#todoList');

// Add Task
button.addEventListener('click', () => {
  const inputValue = input.value.trim();

  if (inputValue === "") {
    alert("You must input a task!");
    return;
  }

  // Create Task Item
  const todoItem = document.createElement('div');
  todoItem.setAttribute('class', 'todo-item');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', 'todo-checkbox');

  const label = document.createElement('label');
  label.textContent = inputValue;

  checkbox.addEventListener('change', () => {
    label.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
  });

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'delete');
  deleteButton.textContent = '×';

  deleteButton.addEventListener('click', () => {
    todoList.removeChild(todoItem);
  });

  todoItem.appendChild(checkbox);
  todoItem.appendChild(label);
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);

  input.value = "";
});
