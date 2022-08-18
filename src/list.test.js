import AddToDoList from './list.js';

const newList = require('./__mock__/localStorage.js');

global.localStorage = newList;

const task = new AddToDoList();

describe('Add and remove functions', () => {
  const newTask = {
    id: '1',
    description: 'test1',
    completed: false,
    index: 1,
  };
  const newTask2 = {
    id: '2',
    description: 'test2',
    completed: false,
    index: 2,
  };

  test('addTask function exist', () => {
    expect(task.addTask).toBeDefined();
  });
  test('removeTask function exist', () => {
    expect(task.removeTask).toBeDefined();
  });
  test('AddTask', () => {
    task.addTask(newTask);
    task.addTask(newTask2);
    expect(task.list).toHaveLength(2);
    const storeData = JSON.parse(localStorage.getItem('taskList'));
    expect(storeData).toHaveLength(2);
    expect(storeData[0].description).toBe('test1');
  });
  test('removeTask', () => {
    task.removeTask(newTask.id);
    expect(task.list).toHaveLength(1);
    const storeData = JSON.parse(localStorage.getItem('taskList'));
    expect(storeData).toHaveLength(1);
    expect(storeData[0].description).toBe('test2');
  });
});

describe('Test editTask, completeTask and clearCompletedTask functions', () => {
  test('editTask', () => {
    const newTask3 = {
      id: '3',
      description: 'test3',
      completed: false,
      index: 3,
    };
    task.addTask(newTask3);
    task.editTask(newTask3.id, 'EDITED TASK');
    expect(task.list).toHaveLength(2);
    const storeData = JSON.parse(localStorage.getItem('taskList'));
    expect(storeData).toHaveLength(2);
    expect(storeData[1].description).toBe('EDITED TASK');
  });
});