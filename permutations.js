const permutations = arr => {b
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
        (acc, item, i) =>
            acc.concat(permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val,])
            ),
        []
    );
};


console.log(permutations([1, 2, 3]))


/*

this all is concat with acc []
[]   - initial acc
[2,3]  - first item removed 
[[2,,3],[3,2]]  - result of permutations of rest of elements
[1,2,3],[1,3,2] - mapping each result with item 


*/