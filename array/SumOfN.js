// let a = [2, 3, 5, 7, 6, 1];
// let k = 8;

// let seen = {}
// for(let i = 0 ; i<a.length; i++){
//     let completed = k-a[i]
//     if(seen[completed] !== undefined){ 
//        console.log(completed,a[i]);
//     }
//     seen[a[i]] = i 
// }


let arr = [2, 7, 4, 1, 5, 3]
let K = 6

//Output:
//[ [2, 4], [1, 5], [3, 3] ]

let obj = {}
let result = []
for(let i = 0; i< arr.length; i++){
 let currentElm = K-arr[i]
 if(obj[currentElm] !==  undefined){
    result.push([arr[i], currentElm])
 }
 obj[arr[i]] = true;

}

console.log(result);
