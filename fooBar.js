/** Create a function that can take a number as an argument
 * 
 * if the number is divisible by 3, the function returns "foo"
 * if the number is divisible by 5, the function returns "bar"
 * if the number is divisible by both 3 and 5, the function returns "foo bar"
 * 
 */

function fooBar(num) {

    // use the modulo character to determine if something is divisible by another number
    // for example; You can check if something is even or not by using % 2 === 0.
    // here we use modulo 3 and modulo 5 to check for 3 and 5 specifically.
    
    // additionally, the first line of code must be this one, otherwise the function will not
    // work properly due to how the boolean operators determine what will be evaluated
    if (num % 3 === 0 && num % 5 === 0) {
        return "foo bar";
    } else if (num % 3 === 0) {
        return "foo";
    } else if (num % 5 === 0) {
        return "bar"
    }
}
