"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertDoubleSpaceToSingle(str) {
    // your code here
    return str.replace(/  /g, " ");
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
