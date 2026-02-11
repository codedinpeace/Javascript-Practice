// Reverse an array without using .reverse().

function reversedArray (str){
    let strArray = str.split("")
    const reversedStr = strArray.reverse().join("")
    return reversedStr
}

console.log(reversedArray("Hello"))






