function firstNonRepeatingLetter(s) {
let counts = {};
let first = "";
  for (let char in s){
  let lower = s[char].toLowerCase()
    if (lower.charCodeAt(0) != counts){
      counts[lower.charCodeAt(0)] = 0;
    }
    }
  
  for (let i = 0; i < s.length; i++){
    counts[s[i].toLowerCase().charCodeAt(0)] += 1;
  }
  if (!s){
    return first
    }
  for (let char in s){
    let charcodes = s[char].toLowerCase().charCodeAt(0)
    if (counts[charcodes] <= 1){
      return s[char]
  } 
    if (s.indexOf(s[char].toLowerCase()) == s.toLowerCase().lastIndexOf(s[char])){
    return s[char]
  }
  }
  
  return first
  }