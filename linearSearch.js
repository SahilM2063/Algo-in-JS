function linearSearch(arr, elm) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elm) return i;
    }
    return -1;
}


console.log(linearSearch([5, 2, -7, 8, 1], 8))
console.log(linearSearch([12, 34, 18, 5, -7], -7))
console.log(linearSearch([-3, -7, -12, 8, 4], 20))


// Big O = O(n) linear