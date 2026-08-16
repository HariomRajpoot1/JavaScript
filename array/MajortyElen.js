let arr = [2, 2, 1, 1, 1, 2, 2];
// 2

let number =arr.length/2
let newObj = {}

for(let i = 0; i< arr.length; i++){

    if(newObj[arr[i]] !== undefined){
        newObj[arr[i]]++
        
    }else{
        newObj[arr[i]] = 1
    }

    if(newObj[arr[i]]> number){
    console.log(arr[i]);
        break;
    }

}