function removeDuplicates(arr){
    const uniqueArray = [...new Set(arr)]
    return uniqueArray
}

console.log(removeDuplicates([1,2,2,2,3,3,3,4,4,4,5,6,6,7]))