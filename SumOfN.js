let a = [2, 3, 5, 7, 6, 1];
let k = 8;

let seen = {}
for(let i = 0 ; i<a.length; i++){
    let completed = k-a[i]
    if(seen[completed] !== undefined){ 
       console.log(completed,a[i]);
    }
    seen[a[i]] = i 
}