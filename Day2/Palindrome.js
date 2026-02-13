function checkPalindrome(str){
    let strArray = str.split("").reverse()
    let reversedStr = strArray.join("")
    if(reversedStr === str){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkPalindrome("madam"))
console.log(checkPalindrome("Pranam"))