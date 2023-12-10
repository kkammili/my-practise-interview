// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {

    constructor() {
        this.arr = []

    }

    // unshift adds an item at the end of the array
    add(item) {
        this.arr.unshift(item)
    }

    // pop removes item at the end of the array
    remove() {
        return this.arr.pop()
    }

}

module.exports = Queue;
