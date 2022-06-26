/** Create a function that can take a number as an argument
 * 
 * if the number is divisible by 3, the function returns "foo"
 * if the number is divisible by 5, the function returns "bar"
 * if the number is divisible by both 3 and 5, the function returns "foo bar"
 * 
 */

function fooBar(num) {

    if (num % 3 === 0 && num % 5 === 0) {
        return "foo bar";
    } else if (num % 3 === 0) {
        return "foo";
    } else if (num % 5 === 0) {
        return "bar"
    }
}