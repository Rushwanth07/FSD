function getDenomination(amount){
    let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    console.log("Denomination breakdown:");
    for(let note of notes){
        let count=Math.floor(amount/note);
        if(count>0){
            console.log(`${note} : ${count}`);
            amount%=note;
        }
    }
}
const amount=2133;
getDenomination(amount);