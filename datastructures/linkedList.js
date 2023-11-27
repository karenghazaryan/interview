class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
       this.list = null;
       this.size = 0
    }

    isEmpty() {
        return !this.size
    }

    getSize () {
        return this.size;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.list = node
        } else {
            node.next = this.list;
            this.list = node;
        }
        this.size++
    }

    append(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.list = node
        } else {
            let list = this.list
            while (list.next) {
                list = list.next;
            }
            list.next = node;
        }
        this.size++
    }

    insert(value, index) {
        if (index > this.getSize()) {
           return false
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            let list = this.list;
            for (let i = 0; i <= index -1; i++) {
                list = list.next;
            }
            const insertionElem = new Node(value);
            insertionElem.next = list.next;
            list.next = insertionElem;
            this.size++
        }
    }

    removeFrom(index) {
        if (index > this.getSize()) return false;

        if (index !== 0) {
            let list = this.list;
            for (let i = 0; i < index - 1; i++) {
                list = list.next;
            }
            let removeNode = list.next
            list.next = removeNode.next;
        } else {
            const removeNode = this.list;
            this.list = removeNode.next;
        }

        this.size--
    }

    removeValue(value) {
        if (this.list.value === value) {
            this.list = this.list.next;
        } else {
            let prev = this.list;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            let removeValue = prev.next
            prev.next = removeValue.next
        }

    }

    search(value) {
        if(this.isEmpty()) {
            return -1
        }

        let index = 0;
        let list = this.list;

        while (list) {
            if (list.value === value) {
                return index
            }
            list = list.next;
            index ++
        }

        return -1
    }

    revers() {
        if (this.isEmpty()) {
            return false;
        }

        let curr = this.list;
        let prev = null;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }
        this.list = prev

    }

    print() {
        let result = "";
        let head = this.list;
        while (head) {
            result = `${result}${head.value}, `;
            head = head.next;
        }
        console.log(result);
    }
}

const list = new LinkedList();

// list.prepend(1);
// list.prepend(2);
// list.prepend(3);
// list.prepend(4);
// list.print()

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.print()

// list.insert(89, 0);
// list.removeFrom(1);
// list.removeValue(89);
list.revers()
list.print();

// console.log(list.search(4))




