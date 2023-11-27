function isPrimeNumber (n) {
    if (n < 2) {
        return  false
    }
   for (let i = 2; i < n; ++i) {
       if (n%i === 0) {
           return false;
       }
   }
   return true;
}

function countOfPrimeNumbers(n) {

}

console.log(isPrimeNumber(1)) // false
console.log(isPrimeNumber(2)) // true
console.log(isPrimeNumber(3)) // true
console.log(isPrimeNumber(4)) // false
console.log(isPrimeNumber(5)) // true
console.log(isPrimeNumber(9)) // false
console.log(isPrimeNumber(41)) // true
console.log(isPrimeNumber(89)) // true

// Big-O O(n)