// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this._size = 0
  }

  insertFirst (data) {
    this.insertAt(data, 0)
  }

  size () {
    return this._size
  }

  getFirst () {
    return this.getAt(0)
  }

  getLast () {
    return this.getAt(this.size() - 1)
  }

  clear () {
    this.head = null
    this._size = 0
  }

  removeFirst () {
    this.removeAt(0)
  }

  removeLast () {
    this.removeAt(this.size() - 1)
  }

  insertLast (data) {
    this.insertAt(data, this.size())
  }

  getAt (index) {
    if (index === 0) {
      return this.head
    }

    if (index < 0 || index > this.size() || !this.head) {
      return null
    }

    let node = this.head
    let counter = 0

    while (node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }

    return null
  }

  removeAt (index) {
    if (!this.head) {
      return
    }

    if (index === 0) {
      this.head = this.head.next
      this._size--
      return
    }

    const previous = this.getAt(index - 1)
    if (!previous || !previous.next) {
      return
    }
    previous.next = previous.next.next

    this._size--
  }

  insertAt (element, index) {
    if (index === 0) {
      this.head = new Node(element, this.head)
    } else if (index >= this.size() - 1) {
      const last = this.getLast()
      last.next = new Node(element)
    } else {
      const previous = this.getAt(index - 1)
      previous.next = new Node(element, previous.next)
    }
    this._size++
  }

  forEach (fn) {
    let node = this.head
    let counter = 0

    while (node) {
      fn(node, counter++)
      node = node.next
    }
  }

  * [Symbol.iterator] () {
    let node = this.head

    while (node) {
      yield node
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList }
