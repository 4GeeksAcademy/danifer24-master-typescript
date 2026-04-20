function computeAverageOfNumbers(nums: number[]): number {
  if (nums.length == 0) return 0;
  let suma = 0
  for (let i = 0; i < nums.length; i++) {
    suma += nums[i]
  }
  return suma/nums.length;
}

export { };
