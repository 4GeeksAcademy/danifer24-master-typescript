"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStringLength(string) {
    // your code here
    let i = 0;
    while (string.slice(i, i + 1) !== "") {
        i++;
    }
    return i;
}
