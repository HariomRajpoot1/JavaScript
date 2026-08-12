let arr = [1, 2, 3, 2, 4, 5, 1]
// opt :- 1,2

function removeDuplicate(arr){
    let seen = {}
    let result = [];
    for(let i = 0; i< arr.length; i++){
        if(seen[arr[i]] !== undefined){
            result.push(arr[i])
        }else{
            seen[arr[i]] = true
        }

    }


    return result;
}

console.log(removeDuplicate(arr));
