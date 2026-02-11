function CountNumbers (arr){
    const obj = {}
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 1;
        }
        else{
            obj[arr[i]]++
        }
    }

    return obj
}

console.log(CountNumbers([1,1,1,2,2,2,3,3,4,5,6,7,8]))