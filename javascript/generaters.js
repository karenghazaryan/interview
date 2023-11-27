function* pseudoRandom(seed){
    let value = seed;
    while (true) {
        value = value * 16807 % 2147483647;
        yield value;
    }
}

let generator1 = pseudoRandom(123);
let generator2 = pseudoRandom(123);
console.log(generator1.next().value === generator2.next().value);
console.log(generator1.next().value === generator2.next().value);


const nonIterableObject = {
    name: "gago",
    age: 70
}

nonIterableObject[Symbol.iterator] = function () {
        let keys = Object.keys(this);
        return {
            next: () => {
                return {
                    done: !keys.length,
                    value: {key: keys[0], value: this[keys.shift()]},
                }
            }
        }
}

nonIterableObject[Symbol.iterator] = function* () {
    let keys = Object.keys(this);
    while(keys.length) {
        yield {key: keys[0], value: this[keys.shift()]}
    }
}

for({key, value} of nonIterableObject) {
    console.log(key, value);
}
