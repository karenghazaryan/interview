function cartesianProduct(arrA, arrB) {
    let indexA = 0;
    let indexB = 0;

    const result = [];

    while (indexB <= arrB.length - 1 || indexA <= arrA.length - 1) {
        result.push([arrA[indexA], arrB[indexB]]);
        indexB++;

        if (indexB === arrB.length - 1 && indexA < arrA.length - 1) {
            indexB = 0
            indexA++
        }
    }
    return result;
}

const arrA = [1, 2];
const arrB = [3, 4, 5];

console.log(cartesianProduct(arrA, arrB))