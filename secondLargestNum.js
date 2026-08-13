let arr = [10, 5, 8, 20, 15]
// op :- 15

function secondHighest(arr) {


    let max = -Infinity
    let SecondHigh = -Infinity;

    for(let i = 0; i<arr.length; i++){
        if(arr[i]>max){
            SecondHigh = max
            max = arr[i]
        }
        else if(arr[i] > SecondHigh && arr[i] < max ){
            SecondHigh = arr[i]
        }
    }
    return SecondHigh

}

console.log(secondHighest(arr));