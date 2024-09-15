var isPalindrome = function(x) {
    let str = x.toString();
    let arr = str.split('').reverse().join('');

    if(str === arr) {
        return true
    }
    return false;
};