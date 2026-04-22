"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function areValidCredentials(name, pass) {
    // your code here
    if (name.length <= 3)
        return false;
    else if (pass.length < 8)
        return false;
    return true;
}
