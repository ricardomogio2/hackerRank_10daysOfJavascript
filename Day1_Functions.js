/*
 * Create the function factorial here
 */
function factorial(n){
    let calcFact
    if (n <= 1){
        return (1)
    }
    else{
        calcFact = n * factorial(n-1)
        return (calcFact)
    }
}
