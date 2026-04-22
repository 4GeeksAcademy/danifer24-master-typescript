function getIndexOf(char: string, str: string): number {
  // your code here
  for(let i = 0; i < str.length; i++){
    if(char == str.charAt(i)){
      return i;
    }
  }
  return -1;
}

export {};
