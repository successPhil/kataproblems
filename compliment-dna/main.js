function DNAStrand(dna){
  let dnaKey = {
    'A': 'T',
    'C': 'G',
    'G': 'C',
    'T': 'A'
  }
  let compliment = "";
  for (let i in dna){
    compliment += dnaKey[dna[i]];
  }
  return compliment
}