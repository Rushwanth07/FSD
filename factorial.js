function factorial(n){
    if(n<0){
        return "Factorial of negative number is not possible";
    }
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
}
const n=5;
console.log(factorial(n));