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
    console.log(task.list);
    expect(task.list).toHaveLength(2);
    const storeData = JSON.parse(localStorage.getItem('taskList'));
    expect(storeData).toHaveLength(2);
    expect(storeData[0].description).toBe('test1');
  });
});
