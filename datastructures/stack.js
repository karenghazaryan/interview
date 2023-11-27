
class Stack {
    #memo = [];

    push(value) {
        return this.#memo.push(value)
    }

    pop(value) {
        return this.#memo.pop();
    }

}