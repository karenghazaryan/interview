function factorial(n) {
    let multiple = 1
    for (let i = 1; i <= n; i++) {
        multiple *= i
    }
    return multiple;
}

function factorialWithRecursion(n) {
    if (!Number.isInteger(n)) return new TypeError("dzer nshvac tiv@ chi hamapatasxanum Bagrati pahanjnerin");
    if (n > 0) {
        return n * factorialWithRecursion(n - 1)
    }
    if (n === 0) {
        return 1
    }

    if (n === 1) {
        return 1
    }
    return  new TypeError("dzer nshvac tiv@ chi hamapatasxanum Bagrati pahanjnerin");
}

const map = new Map()
function factorialWithDynamic(n) {
    let multiple = n;

    if (n === 0) {
        return 1
    }

    if (n === 1) {
        return 1
    }

    if (map.get(n-1)) {
        return multiple * map.get(n-1)
    }
    map.set(n - 1, factorialWithDynamic(n-1))
    return multiple * map.get(n-1)
}

console.log(factorial(1)) // 1
console.log(factorial(5)) // 120
console.log(factorial(7)) // 5040
//
console.log(factorialWithRecursion(1)) // 1
console.log(factorialWithRecursion(5)) // 120
console.log(factorialWithRecursion(7)) // 5040

// Big O - O(n)