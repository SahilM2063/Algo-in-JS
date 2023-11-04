function recursiveFact(n) {
    if (n === 0) {
        return 1;
    }
    return n * recursiveFact(n - 1)
}


console.log(recursiveFact(2))
console.log(recursiveFact(4))
console.log(recursiveFact(6))


// Big O = O(n) linear