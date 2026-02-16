const frequencyCounter = (arr)=>{
    let obj = {}
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


console.log(frequencyCounter(([
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple",
    "mango",
    "orange",
    "banana",
    "apple"
  ])))