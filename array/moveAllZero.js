let arr = [0, 1, 0, 3, 12];

// Output:
// [1, 3, 12, 0, 0]

function moveZero(arr) {
    // return arr;
    let left = 0;
    let right = arr.length - 1;
    let newArr = [];
    while (left < right) {
        if (arr[left] === 0) {
            [arr[right], arr[left]] = [arr[left], arr[right]];
            right--;
        }
        else {
            left++
        }

    }
    return arr;
}

console.log(moveZero(arr))