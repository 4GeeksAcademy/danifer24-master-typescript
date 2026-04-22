"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findShortestOfThreeWords(word1, word2, word3) {
    let shortest = word1;
    if (shortest.length > word2.length)
        shortest = word2;
    if (shortest.length > word3.length)
        shortest = word3;
    return shortest;
}
