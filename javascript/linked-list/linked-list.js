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

  shift() {
    return this.list.shift();
  }

  unshift() {
    return this.list;
  }
}

module.exports = LinkedList;
