class optimalQueue {
    constructor() {
        this.items = {}
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++
    }

    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    peek() {
        return this.items[this.front];
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log(this.items)
    }
}


const opQueue = new optimalQueue();

console.log(opQueue.isEmpty())
opQueue.enqueue(12)
opQueue.enqueue(24)
opQueue.enqueue(36)
console.log(opQueue.size())
opQueue.print()
console.log(opQueue.dequeue())
opQueue.print()
console.log(opQueue.size())
console.log(opQueue.isEmpty())