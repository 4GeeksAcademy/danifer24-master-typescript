"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getIndexOf(char, str) {
    // your code here
    for (let i = 0; i < str.length; i++) {
        if (char == str.charAt(i)) {
            return i;
        }
    }
    return -1;
}
