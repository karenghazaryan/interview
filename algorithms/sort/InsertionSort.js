function insertionSort (arr) {

    for (let i = 1 ; i < arr.length; i++) {
        const numToInsert = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > numToInsert) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j + 1] = numToInsert;
    }

    return arr;
}

console.log(insertionSort([-6, 8, -100, -100, 600, 8000, -8000, 1, 1, 1]));

