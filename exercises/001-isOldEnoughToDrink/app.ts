function isOldEnoughToDrink(age: number) {
  // your code here
  if(age >= 21) {
    return true
  } else return false
}
let output = isOldEnoughToDrink(22);
console.log(output); // --> true

export {};
