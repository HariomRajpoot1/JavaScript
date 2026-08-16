let arr = [1,2,3,4];
//let output = [24, 12, 8, 6];


function productArr(arr){

    let totalProduct = 1;
    let newResult = [];
    
    for(let i = 0; i< arr.length; i++){
        totalProduct= totalProduct*arr[i];
    }

    for(let j = 0; j<arr.length; j++){
        newResult.push(totalProduct/arr[j])
    }

    return newResult;

}

console.log(productArr(arr));