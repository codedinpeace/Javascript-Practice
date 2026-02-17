let numbers = 100;

function fizzbuzz(){

    for(let i = 0; i < 100; i++){
        if(i % 2 === 0){
            console.log("Fizz")
        }
        else if(i % 3 === 0){
            console.log("Buzz")    
        }
        
        else if(i % 2 === 0 && numbers[i] % 3 === 0){
            console.log("FizzBuzz")
        }
    }
}

fizzbuzz()