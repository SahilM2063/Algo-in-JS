function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1;
        }
        arr[j + 1] = numberToInsert
    }
}



const arr = [3, 12, 6, -1, -4]
console.log("Before sorting : [" + arr + "]")
insertionSort(arr)
console.log("After sorting : [" + arr + "]")


// Big O = O(n^2) because of nested loooooooooooooooooops. 