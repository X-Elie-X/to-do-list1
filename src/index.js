import './style.css';

import render from './populateui.js';
import AddToDoList from './list.js';

const taskList = new AddToDoList();
render(taskList);

const addTodoBtn = document.querySelector('.add-btn');
addTodoBtn.addEventListener('click', () => {
  const id = `id${Math.random().toString(16).slice(2)}`;
  const description = document.querySelector('.input-list').value.trim();
  const completed = false;
  const index = taskList.list.length + 1;

  const newTask = {
    id,
    description,
    completed,
    index,
  };
  if (description) {
    taskList.addTask(newTask);
    render(taskList);
  }
});
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  taskList.clearCompletedTask();
  render(taskList);
});
