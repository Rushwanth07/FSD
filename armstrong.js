function isArmstrong(num) {
    let sum=0;
    let temp=num;
    let digits=num.toString().length;
    while(temp>0){
        let digits=temp%10;
        sum+=digits**digits;
        temp=Math.floor(temp/10);
        
    }
    return sum===num;
}
console.log(isArmstrong(2133));