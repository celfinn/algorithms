// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack')

class Queue {
  constructor () {
    this.stack = new Stack()
  }

  add (element) {
    this.stack.push(element)
  }

  remove () {
    const temp = this._reverseStack(this.stack)
    const element = temp.pop()
    this.stack = this._reverseStack(temp)

    return element
  }

  peek () {
    const temp = this._reverseStack(this.stack)
    const value = temp.peek()
    this.stack = this._reverseStack(temp)

    return value
  }

  _reverseStack (stack) {
    const temp = new Stack()

    while (stack.peek()) {
      temp.push(stack.pop())
    }

    return temp
  }
}

module.exports = Queue
