function checkPalindrome(string){
    const len=string.length;
    for(let i=0; i<len/2; i++){
        if(string[i]!==string[len-1-i]){
            return 'It is not a palinfrome';
        }
    }
    return 'It is a palindrome';
}
const string = 'fullstack';
const value=checkPalindrome(string);
console.log(value);