function recursiveFibonacci(n) {
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}



console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(4)) // 3
console.log(recursiveFibonacci(6)) // 8


// for iterative approach : Big O = O(n) linear

// for recursive approach : Big O = O(2^n) 