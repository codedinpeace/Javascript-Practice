function flattenArray (arr){
    const flatArray = arr.flat()
    return flatArray
}

console.log(flattenArray([1,2,[2,3,3],2,5]))