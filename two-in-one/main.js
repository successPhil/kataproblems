function longest(s1, s2) {
const distinctLetters = new Set( s1 + s2);
const distinctArr = Array.from(distinctLetters);
  let sorted = distinctArr.sort().join('');
  return sorted
}