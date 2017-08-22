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

  unshift(link) {
    return this.list.unshift(link);
  }

  count() {
    return this.list.length;
  }

  delete(link) {
    var linkIndex = this.list.indexOf(link);
    return this.list.splice(linkIndex, 1);
  }
}

module.exports = LinkedList;
