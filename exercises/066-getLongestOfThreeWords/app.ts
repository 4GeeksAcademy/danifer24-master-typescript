function getLongestOfThreeWords(word1: string, word2: string, word3: string): string {
  // your code here
  let longest = word1;
  if(longest.length < word2.length)
    longest = word2
  if(longest.length < word3.length)
    longest = word3
  return longest;
}

export {};
