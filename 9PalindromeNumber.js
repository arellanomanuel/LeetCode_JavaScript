/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let res = false;
    let aux_x= x;
    let aux=0;
    while(aux_x!=0){
        resultado=aux_x%10;
        aux_x=Math.trunc(aux_x/10);
        aux=aux*10+resultado;
    }
    if (x==aux&&x>=0){
        res=true;
    }
    return res;
};
console.log(121==-121);
console.log(isPalindrome(22));
console.log(isPalindrome(-121));
console.log(isPalindrome(3113));
console.log(isPalindrome(4223224));
console.log(isPalindrome(422237832344));
