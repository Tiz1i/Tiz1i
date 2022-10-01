console.log("HELLO WORLD");
//pushFront([5,7,2,3], 8) => [8,5,7,2,3]
//pushFront([99], 7) => [7, 99]

function pushFront(arr, val){
    for(let i = arr.length; i>=0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = val
    return arr
}
console.log(pushFront([99, 7]))
