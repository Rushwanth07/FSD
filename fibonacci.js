function fibonacci(limits){
    let a=0, b=1, next;
    console.log("Fibonacci series upto "+limits+" terms:");
    console.log(a);
    if(limits>0){
        console.log(b);
        next=a+b;
        while(next<=limits){
            console.log(next);
            a=b;
            b=next;
            next=a+b;
        }
        
    }
}
let limits=10;
fibonacci(limits);