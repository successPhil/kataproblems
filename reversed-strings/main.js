function solution(str){
let reversed = "";
let start = 1;
  for (let i in str){
  reversed += str[str.length - start]
  start ++;
}
  return reversed;
}