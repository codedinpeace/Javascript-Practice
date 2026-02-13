function findLargestNumber(arr){
    
    let Largest = -Infinity;
    let Smallest = Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > Largest){
            Largest = arr[i]
        }

        if(arr[i] < Smallest){
            Smallest = arr[i]
        }
    }

    return {Largest, Smallest};
}

console.log(findLargestNumber([1,2,3,34,45,6,7]))