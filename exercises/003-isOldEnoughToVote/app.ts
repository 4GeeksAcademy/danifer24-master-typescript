function isOldEnoughToVote(age: number): boolean {
  // your code here
  if(age >= 18) 
    return true
  else
    return false;
}
let output = isOldEnoughToVote(22);
console.log(output); // --> true
export {};
