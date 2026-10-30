function dnaStrand(dna){

  const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
  let result = '';
  
  for (const char of dna) {
    result += pairs[char];
  }
  
  return result;
}