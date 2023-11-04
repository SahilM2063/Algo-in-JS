function recursiveBinarySearch(arr, elm) {
    return search(arr, elm, 0, arr.length - 1);
}

function search(arr, elm, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) return -1;

    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (elm === arr[midIndex]) return midIndex;
    if (elm > arr[midIndex]) {
        return search(arr, elm, midIndex + 1, rightIndex);
    } else {
        return search(arr, elm, leftIndex, midIndex - 1)
    }
}


console.log(recursiveBinarySearch([-7, 1, 2, 5, 8], 8))
console.log(recursiveBinarySearch([-7, 5, 13, 18, 34], -7))
console.log(recursiveBinarySearch([-12, -7, -3, 4, 8], 20))


// Big O = O(log n)