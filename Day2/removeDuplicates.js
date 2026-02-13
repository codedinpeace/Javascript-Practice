function removeDuplicate(arr){
    const uniqueArray = [...new Set(arr)]
    return uniqueArray;
}

console.log(removeDuplicate([1,2,2,2,2,2,3,3,34,5,6,7]))