let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 2, 4, 5];

let obj = {};
let result = [];

for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
}

for (let i = 0; i < arr2.length; i++) {

    if (obj[arr2[i]]) {
        result.push(arr2[i]);
        delete obj[arr2[i]];
    }
}

console.log(result);