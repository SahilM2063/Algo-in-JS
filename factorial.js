function fact(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(fact(2))  // 2
console.log(fact(5))  // 120
console.log(fact(7))  // 5040


// Big O = O(n) Linear