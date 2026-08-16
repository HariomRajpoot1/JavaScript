let arr = [2, 1, 5, 1, 3, 2];
let K = 3; // 

function maxSubArray(arr,k){
let sum = 0
  for(let i =0; i<k; i++){
    sum += arr[i]
  }

  let max = sum

  for(let j =k ; j<arr.length; j++){
    sum = sum + arr[j]- arr[j-k]
     max = Math.max(max, sum)
}
return max
}

console.log(maxSubArray(arr,K))