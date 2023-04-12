function incrementString (strng) {
let separate = strng.match(/^(.*?)(\d*)$/)
if (separate === null){
  return strng + '1'
}
  let numbers = separate[2]
  let letters = separate[1]
  if (numbers === ''){
    return letters + '1'
  }
let num = parseInt(numbers) + 1
let zeros = numbers.length - num.toString().length;
  if (zeros > 0){
   return letters + '0'.repeat(zeros) + num;
  }
  return letters + num
}