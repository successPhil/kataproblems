function disemvowel(str) {
  let vowelCheck = /[aeiou]/gi;
  return str.replaceAll(vowelCheck, "");
}