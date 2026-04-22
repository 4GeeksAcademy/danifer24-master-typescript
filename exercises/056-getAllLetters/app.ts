function getAllLetters(str: string) {
  // your code here
  let arr: string[] = []; 
  for(let i = 0; i < str.length; i++){
    arr[i] = str.charAt(i);
  }
  return arr;
}

export {};
