// function usingMap(arr){
//     const onlyOdd = arr.map((a)=>{
//         if(a%2 !== 0){
//             return a**2
//         }

//         else{
//             return ""
//         }
//     })
//     return onlyOdd
// }

function usingMap(arr){
    const onlyOdd = arr.filter((a)=>a%2 !== 0)
    const squareOfOddNumbers = onlyOdd.map((a)=>{
        return a**2
    })

    return squareOfOddNumbers
}

console.log(usingMap([1,2,3,4,5,6,7,8,9,10]))