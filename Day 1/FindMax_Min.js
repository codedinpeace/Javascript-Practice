function findMax(array){
    
    let MaximumNumber = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] > MaximumNumber){
            MaximumNumber = array[i]
        }
    }
    return MaximumNumber;
}

console.log(findMax([1,2,3,4,5,6,7,8,9,19]))

// -------------------------------------------------------------------------------------------------------------------------------------------

function findMinimum(arr){
    let minimumNumber = Infinity

    for(let i = 0; i < arr.length; i++){
        if(minimumNumber > arr[i]){
            minimumNumber = arr[i]
        }
    }

    return minimumNumber
}

console.log(findMinimum([1,2,3,4,5,6,7,8,9,10]))