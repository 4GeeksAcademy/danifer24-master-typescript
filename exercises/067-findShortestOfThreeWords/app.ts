function findShortestOfThreeWords(word1: string, word2: string, word3: string): string {
  let shortest = word1;
  if(shortest.length > word2.length)
    shortest = word2
  if(shortest.length > word3.length)
    shortest = word3
  return shortest;
}

export {};
