function findSecondLargestNumber (arr){
    let largest = -Infinity;
    let secondLargest = -Infinity
    for(let i = 0; i < arr.length; i++){
        let current = arr[i]
        if(current > largest){
            secondLargest = largest
            largest = current
        }

        else if(current > largest && current < secondLargest){
            secondLargest = current;
            largest = secondLargest;
        }
    }

    return {"Largest" : largest, "SecondLargest" : secondLargest}
}

console.log(findSecondLargestNumber([1,2,3,4,5,6,7,8,9,10]))