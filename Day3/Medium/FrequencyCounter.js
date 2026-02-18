function CountFrequency(str2){
    let obj = {}
    const str = str2.split("")
    for(let i = 0; i < str.length; i++){
        if(obj[str[i]] === undefined){
            obj[str[i]] = 1;
        }

        else{
            obj[str[i]]++
        }
    }

    return obj;
}

console.log(CountFrequency("Pranam"))