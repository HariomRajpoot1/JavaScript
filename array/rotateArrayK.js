let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

// [5, 6, 7, 1, 2, 3, 4]


function RotateK(arr,k){
let newArr = [];
// 7 -3 => 4
for(let i = arr.length-k; i< arr.length ; i++){
    newArr.push(arr[i])
}
for(i=0; i<arr.length-k; i++){
    newArr.push(arr[i])
}

return newArr;
}

console.log(RotateK(arr,k));