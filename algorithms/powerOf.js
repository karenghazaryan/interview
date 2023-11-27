function powerOfTow(n) {
    if (n < 1 ) {
        return false;
    }
    let int = n

    while (int > 2) {
        if (int%2 === 0) {
            int = int/2
        } else {
            return false
        }
    }

    return true
}

console.log(powerOfTow(2));
console.log(powerOfTow(5));
console.log(powerOfTow(8));
console.log(powerOfTow(24));