function frequencyChecker(arr){
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 1;
        }

        else{
            obj[arr[i]]++
        }
    }
    return obj;
}

console.log(frequencyChecker([1,2,3,43,4,5,6,6,4,34,3,4]))

