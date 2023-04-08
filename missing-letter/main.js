let alpha = {
  'a': 0,
  'b': 1,
  'c': 2,
  'd': 3,
  'e': 4,
  'f': 5,
  'g': 6,
  'h': 7,
  'i': 8,
  'j': 9,
  'k': 10,
  'l': 11,
  'm': 12,
  'n': 13,
  'o': 14,
  'p': 15,
  'q': 16,
  'r': 17,
  's': 18,
  't': 19,
  'u': 20,
  'v': 21,
  'w': 22,
  'x': 23,
  'y': 24,
  'z': 25
}

function findMissingLetter(array){
  let idxArr = []
  for (let i in array) {
    idxArr.push(alpha[array[i].toLowerCase()])
    }
let answer
  for (let i = 0; i < idxArr.length; i++) {
    if (idxArr[i] + 1 != idxArr[i+1]) {
      if (alpha[array[i]] == undefined){
        return answer = Object.keys(alpha)[idxArr[i] + 1].toUpperCase()
      } else {
        return answer = Object.keys(alpha)[idxArr[i] + 1]
      }
        
      }
    }
  console.log(answer)
  return answer;
}