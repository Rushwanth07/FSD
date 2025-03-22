function primes(n){
    for (let i=2; i<=n; i++){
        let isprime=true;
        for(let j=2; j<i; j++){
            if(i%j==0){
                isprime=false;
                break;
            }
        }
        if(isprime){
            console.log(i);
        }
    }
}
const n=20;
primes(n);