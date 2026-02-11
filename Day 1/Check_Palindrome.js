function checkPalindrome (str){
    let reversedStr = str.split("").reverse().join("")
    if(str === reversedStr){
        return true
    }
    else{
        return false
    }
}

console.log(checkPalindrome("madamfalse"))