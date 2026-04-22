function areValidCredentials(name: string, pass: string): boolean {
  // your code here
  if(name.length <= 3) return false;
  else if(pass.length < 8) return false;
  return true;
}

export {};
