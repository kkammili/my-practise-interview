class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0
  }
}

//[1, 2, 3, 4]
//[]

//[4, 3, 2, 1]

module.exports = Stack;
