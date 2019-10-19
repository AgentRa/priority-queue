const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
	  this.heap = new MaxHeap();
    this.maxSize = maxSize;
	}

	push(data, priority) {
	  if (this.heap.size() == this.maxSize) throw new Error();
    this.heap.push(data, priority);
	}

	shift() {
    this.heap.pop();
	}

	size() {
	  return this.heap.size();
	}

	isEmpty() {
		if (!this.heap.size()) return true;
	}
}

module.exports = PriorityQueue;
