/*This is a function that checks if the number "x" is a palindrome, 
e.g it returns the Boolean value "true" for x=121, and returns
false for x=321; Try it yourself! ^_^ */

var isPalindrome = function(x) {
    return x === Number(x.toString().split("").reverse().join(""))
};