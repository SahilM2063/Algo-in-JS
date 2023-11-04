function climbingStairCase(n) {
    noOfWays = [1, 2]

    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }

    return noOfWays[n - 1]
}

console.log(climbingStairCase(1))
console.log(climbingStairCase(2))
console.log(climbingStairCase(3))
console.log(climbingStairCase(5))

// big O = O(n) linear

// you can either climb 1 or 2 step at a time

// n = 1 | 1 | (1)
// n = 2 | 2 | (1,1) , (2)
// n = 3 | 3 | (1,1,1), (1,2), (2,1)
// n = 4 | 5 | (1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (2,2)
// n = 5 | 8 | (1,1,1,1,1), (1,1,1,2), (1,1,2,1), (1,2,1,1), (2,1,1,1), (2,2,1), (2,1,2), (1,2,2)