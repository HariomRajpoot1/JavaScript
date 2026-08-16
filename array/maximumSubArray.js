let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// 6

function maxiMumSubArray(arr){

   let currentSum = 0;
   let maxSum = -Infinity;

   for(let i = 0; i<arr.length; i++){
    currentSum = Math.max(arr[i], arr[i]+currentSum);
    maxSum = Math.max(maxSum,currentSum);
   }

   return maxSum;
}

console.log(maxiMumSubArray(arr))  //6