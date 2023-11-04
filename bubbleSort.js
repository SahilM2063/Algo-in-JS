function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
}

const arr = [3, 12, 6, -1, -4]
console.log("Before sorting : [" + arr + "]")
bubbleSort(arr)
console.log("After sorting : [" + arr + "]")


// Big O = O(n^2)   because of nested loops