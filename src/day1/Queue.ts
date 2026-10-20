type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
        }

        this.tail.next = node; // the item being inserted becomes the next item (the current tail now points to next since it's a linked list)
        this.tail = node; // now the tail of the list has to be updated to the last element

    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        // 1. save head
        const head = this.head;
        // 2. update head
        this.head = this.head.next;

        // clean up step (not necessary in JS but other languages might need it)
        head.next = undefined;

        if (this.length === 0) {
            this.tail = undefined
        }

        // 3. return the value 
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;

    }
}