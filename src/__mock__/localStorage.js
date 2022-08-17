class localStorageMock {
  constructor() {
    this.taskList = {};
  }
  clear() {
    this.taskList = {};
  }
  getIteam(key) {
    return this.taskList[key] || null;
  }
  setItem(key, value) {
    this.taskList[key] = String(value);
  }
  removeItem(key) {
    delete this.taskList[key];
  }
}
const newList = new localStorageMock();

module.exports = newList;
