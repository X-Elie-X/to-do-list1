import AddToDoList from './list';
const newList = require('./__mock__/localStorage');
global.localStorage = newList;
const task = new AddToDoList();
test('add task function exist', () => {
  expect(task.addTask).toBeDefined();
});
