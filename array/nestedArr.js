let arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];

let newArr = [];
function nested(arr){

    for(let i = 0; i<arr.length; i++){

        if(Array.isArray(arr[i])){
            nested(arr[i])
        }else{
            newArr[newArr.length] = arr[i]
        }
    }
    return newArr
}

console.log(nested(arr));


// recrusive function chla diya, and bahr vale array ki lenght pe daal diya number