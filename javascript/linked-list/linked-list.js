class LinkedList {
  constructor() {
    this.list = [];
  }

  push(link) {
    this.list.push(link);
  }

  pop(link) {
    return this.list.pop();
  }
}

module.exports = LinkedList;
