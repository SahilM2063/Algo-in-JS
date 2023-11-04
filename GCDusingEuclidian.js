function gcd(a, b) {
    if (a === 0) return b;
    return gcd(b % a, a);
}


console.log(gcd(10, 35)) // 5
console.log(gcd(24, 48)) // 24
console.log(gcd(8, 12))  // 4