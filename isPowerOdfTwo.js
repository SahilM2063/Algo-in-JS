function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

console.log(isPowerOfTwo(1))  // true
console.log(isPowerOfTwo(2))  // true
console.log(isPowerOfTwo(5))  // false


// Big O = O(log n) 



// Optimally


function isPowerOfTwoBitWise(n) {
    if (n < 1) return false;
    return (n & (n - 1)) === 0;
}


console.log(isPowerOfTwoBitWise(1))
console.log(isPowerOfTwoBitWise(2))
console.log(isPowerOfTwoBitWise(5))


// Big O = O(1)  constant