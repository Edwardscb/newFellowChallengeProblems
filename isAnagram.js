/** Create a function that takes two strings as arguments
 * 
 * An Anagram can be a word, or phrase, that is formed by
 * re-arranging the letters of a different word or phrase.
 * 
 * For this example, let's say all the original letters are
 * used exactly once.
 */

const isAnagram = (string1, string2) => {
// the above is the same as writing: function isAnagram(string1, string2) {}
// if you haven't got that far, don't worry, keep going :)

//  As you might imagine, there are multiple ways to solve this, but here is one
//  way that you can do it:

//  I make two arrays to hold my strings
let firstWord = [];
let secondWord = [];

//  push the words two the arrays
for (let letter of string1) {
//  if you use (let i=0; i < string1.length; i++) to do your loop thats fine too
//  if you're farther along you might also be using map, or you could even
//  practice recursion.
    firstWord.push(letter)
}
for (let letter of string2) {
    secondWord.push(letter);
}


if (firstWord.length !== secondWord.length) {
// if they aren't the same length we already know the two words are not anagrams
    return false;
}

// sort the arrays
let first = firstWord.sort();
let second = secondWord.sort();

for (let i = 0; i < first.length; i++) {
// now we can just check to make sure that all the letters are the same
    if (first[i] !== second[i]) {
    // if the letters are not the same, they are not anagrams
        return false;
    }
} 
// if the function makes it this far, they must be anagrams
return true;

}