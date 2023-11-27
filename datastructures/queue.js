class Queue {
    #memo = [];
    #length = 0;

    enqueue (value) {
        this.#length++;
       return this.#memo.push(value);
    }

    peek () {
       return this.#memo[0];
    }

    isEmpty () {
        return !!this.#length;
    }

    size () {
        return this.#length;
    }

    dequeue () {
        this.#length--
        return this.#memo.shift();
    }

    print () {
        console.log(this.#memo.toString());
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.print();

queue.dequeue();
queue.dequeue();
queue.print();
console.log(queue.peek());
console.log(queue.size());


class QueueWithObj {

    constructor() {
        this.items = {};
        this.key = 0;
        this.front = 0;
    }

    enqueue (value) {
        this.items[this.key] = value;
        this.key++
    }

    dequeue () {

        return delete this.items[this.front++];
    }

    isEmpty () {
        return !!(this.key - this.front)
    }

    peek () {
        return this.items[this.front]
    }

    size () {
        return this.key - this.front
    }

    print () {
        console.log(Object.values(this.items).toString());
    }
}

const queueObj = new QueueWithObj();


queueObj.enqueue(1);
queueObj.enqueue(2);
queueObj.enqueue(3);
queueObj.enqueue(4);

queueObj.print();

queueObj.dequeue();
queueObj.dequeue();
queueObj.print();
console.log(queueObj.peek());
console.log(queueObj.size());
console.log(queueObj.isEmpty())


class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentPosition = 0;
        this.front = 0;
        this.rear = 0;
    }

    isFull () {
        return this.currentPosition === this.currentPosition
    }

    isEmpty () {
        return this.currentPosition === 0
    }

    enqueue (value) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = value;
            this.currentPosition++
            if(this.front === -1) {
                this.front = this.rear
            }
        }
        this.items.push()
    }

    dequeue () {
       if(this.isEmpty())  {
           return null;
       }
       this.items[this.front] = null;
       this.front = (this.front + 1) % this.capacity;
       this.currentPosition--;
       if (this.isEmpty()) {
           this.rear = -1;
           this.front = -1;
       }
    }

    peek () {
        if (!this.isEmpty()) {
            return null
        }
        return this.items[this.front];
    }
}

module.exports.QueueWithObj = QueueWithObj;
