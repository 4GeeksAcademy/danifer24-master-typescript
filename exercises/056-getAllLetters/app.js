"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllLetters(str) {
    // your code here
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr[i] = str.charAt(i);
    }
    return arr;
}
