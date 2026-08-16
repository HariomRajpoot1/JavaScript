
let arr = [1, 2, 4, 5, 6]; //3

function MissingNumber(arr){
    
    let n = arr.length+1;
    let n1 = n*(n+1)/2
    let total = 0;
    for(let i = 0 ; i<arr.length; i++){
        total += arr[i];
    }
    return n1-total

}

console.log(MissingNumber(arr));