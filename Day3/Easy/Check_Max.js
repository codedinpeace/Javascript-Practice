function checkMax(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return `${num1} is the largest`
    }

    else if(num2 > num1 && num2 > num3){
        return `${num2} is the largest`
    }
    
    else if(num3 > num1 && num3 > num2){
        return `${num3} is the largest`
    }
//     else{
//         return "Greatest numbers are equal"
//     }
}


console.log(checkMax(1,2,3))    