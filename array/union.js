let arr1 = [1, 2, 2, 3, 4]
let arr2 = [7, 2, 3, 5, 6]

let result = new Set();
// Output: [1, 2, 3, 4, 5, 6]

arr1.forEach((val)=>{
    result.add(val)//1 2 3 4
})


arr2.forEach((val)=>{
    result.add(val)//2 3 5 6
})

console.log([...result]);