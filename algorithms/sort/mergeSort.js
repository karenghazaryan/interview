//
// function merge(leftArr, rightArr) {
//     const resultArr = [];
//
//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] <= rightArr[0]) {
//             resultArr.push(leftArr.shift())
//         } else {
//             resultArr.push(rightArr.shift())
//         }
//     }
//
//     return [...resultArr, ...leftArr, ...rightArr];
// }
//
// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//
//     const midIndex = Math.floor(arr.length / 2);
//
//     const leftArr = arr.slice(0, midIndex);
//     const rightArr = arr.slice(midIndex);
//
//     return merge(mergeSort(leftArr), mergeSort(rightArr));
// }
//
// console.log(mergeSort([-6, 20, 8, -2, 4]))

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge arrays by comparing elements and pushing them into the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Push remaining elements from left and right arrays if any
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

function mergeSort(arr) {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }

    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

// Example usage:
const arr = [8, 45, 34, 22, 11, 90];
console.log("Original Array:", arr);
const sortedArray = mergeSort(arr);
console.log("Sorted Array:", sortedArray);

