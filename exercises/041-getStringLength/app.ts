function getStringLength(string: string): string {
  // your code here
  let i = 0;
  while (string.slice(i, i + 1) !== "") {
    i++;
  }
  return i;

}

export {};
