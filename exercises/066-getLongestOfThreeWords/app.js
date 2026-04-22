"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let longest = word1;
    if (longest.length < word2.length)
        longest = word2;
    if (longest.length < word3.length)
        longest = word3;
    return longest;
}
