function add(a, b) {
let current = 0;
let answer = ''

let i = a.length-1
let j = b.length-1

while (i >= 0 || j >= 0 || current > 0){
  let sum = current
  if (i >= 0){
    sum += parseInt(a[i]);
    i--
  }
  if (j >= 0){
    sum += parseInt(b[j]);
    j --
  }
current = Math.floor(sum/10);
answer = (sum % 10).toString() + answer;
}
return answer
}