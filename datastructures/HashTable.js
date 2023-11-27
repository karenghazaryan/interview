function hash() {

}

class HashTable {
    constructor(size) {
        this.table =  new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for(let i = 0; i< key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        let indexKey = this.hash(key);
        this.table[indexKey] = value;
    }

    get(key) {
        let indexKey = this.hash(key);
        return this.table[indexKey];
    }

    remove(key) {
        let indexKey = this.hash(key);
        this.table[indexKey] = undefined;
    }

    display() {
        for (let i =0; i < this.size; i++) {
            if(this.table[i]) {
                console.log(this.table[i])
            }
        }
    }
}

const table = new HashTable(10)