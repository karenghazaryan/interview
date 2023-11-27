function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                const num = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = num;
                swapped = true;
            }
        }
    } while (swapped)

    return arr;
}

// Big -O = O(n^2)

console.log(bubbleSort([-6, 8, 200, -100, 600, 8000, -8000]));
