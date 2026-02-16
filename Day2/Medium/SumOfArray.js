function SumOfArray (arr){
    const sum = arr.reduce((a,b)=>{
        return a + b;
    },0)
    
    return sum
}

console.log(SumOfArray([1,2,3,3,4,5,6,7,8,9,10]))