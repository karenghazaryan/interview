function binarySearch(arr, num) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        const middleValue = arr[middleIndex];
        if (middleValue === num) {
            return middleIndex;
        }

        if (middleValue < num) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }

    return -1
}
//
// console.log(binarySearch([-2, 7, 9, 15, 69, 117], 67))
// console.log(binarySearch([-2, 7, 9, 15, 69, 117], 69))

//Big-O O(log^n)


function recursiveBinarySearch (arr, num, leftIndex = 0, rightIndex = arr.length - 1) {
    if ( leftIndex >= rightIndex) {
        return -1
    }
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);
    const midValue = arr[midIndex]
    if (midValue === num) {
        return midIndex
    }

    if (midValue < num) {
        return recursiveBinarySearch(arr, num, midIndex + 1, rightIndex)
    } else {
        return recursiveBinarySearch(arr, num, leftIndex, midIndex -1)
    }
}

console.log(recursiveBinarySearch([-2, 7, 9, 15, 69, 117], 67))
console.log(recursiveBinarySearch([-2, 7, 9, 15, 69, 117], 69))