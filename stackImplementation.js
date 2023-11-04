class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString())
    }
}


const stack = new Stack();
// console.log(stack.isEmpty())


stack.push(23)
stack.push(3)
stack.push(12)
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())
stack.print()


// we uses stack over array because while implementing arrays time complexity is O(n) because of random indexed push - pop operations where in stack operations are performed in LIFO manner, so time complexity is constant O(1).