function binarySearch(arr, elm) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (elm === arr[midIndex]) return midIndex;
        if (elm < arr[midIndex]) {
            rightIndex = midIndex - 1;
        } else {
            leftIndex = midIndex + 1;
        }
    }
    return -1;
}


console.log(binarySearch([-7, 1, 2, 5, 8], 8))
console.log(binarySearch([-7, 5, 13, 18, 34], -7))
console.log(binarySearch([-12, -7, -3, 4, 8], 20))


// Big O = O(log n) 