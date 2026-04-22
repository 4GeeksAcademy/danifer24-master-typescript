function convertDoubleSpaceToSingle(str: string): string {
  // your code here
  return str.replace(/  /g, " ");
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

export {};
