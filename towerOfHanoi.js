function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
        return
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

console.log(towerOfHanoi(6, 'A', 'C', 'B'))


// as time complexity

// when n = 1 then 1 statement executed
// when n = 2 then 3 statement executed
// when n = 3 then 7 statement executed
// when n = 4 then 15 statement executed
// which is  2^n - 1


// so Big O = O(2^n) approx~~~~~~~~~~~~~~~~~~~