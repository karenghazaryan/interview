class DoubleNode {
    constructor(value) {
        this.prev = null;
        this.next = null;
        this.value = value;
    }
}

class DoubleLinkedList {
    constructor(value) {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new DoubleNode(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++
    }

    append(value) {
        const node = new DoubleNode(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
           node.prev = this.tail;
           this.tail.next = node;
           this.tail = node;
        }

        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty")
        } else {
            let list = this.head;
            let listValue = "";
            while (list) {
                listValue += list.value;
                list = list.next;
            }
            console.log(listValue)
        }
    }
}
//
let doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.prepend(1);
doubleLinkedList.prepend(2);
doubleLinkedList.prepend(3);
doubleLinkedList.prepend(4);
doubleLinkedList.append(5);
doubleLinkedList.append(6);
doubleLinkedList.append(7);
doubleLinkedList.print()

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add a node to the end (tail) of the linked list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Add a node to the beginning (head) of the linked list
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    // Print the linked list
    printList() {
        let currentNode = this.head;
        const result = [];
        while (currentNode) {
            result.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(result.join(' -> '));
    }
}

// Usage example:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
linkedList.append(3);

linkedList.printList(); // Output: 0 -> 1 -> 2 -> 3
