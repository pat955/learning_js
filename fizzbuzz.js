const fizzBuzz = (n) => {
    for (let i = 1; i < n; i++){
        if (i % 2 === 0 && i % 3 === 0){
            console.log(`FizzBuzz, ${i}`)
        }
        else if (i % 2 === 0){
            console.log(`Fizz, ${i}`)
        }
        else if (i % 3 === 0){
            console.log(`Buzz, ${i}`)
        }
        else{
            console.log(i)
        }
    }
}    
fizzBuzz(10)