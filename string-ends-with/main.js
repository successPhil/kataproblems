function solution(str, ending){
let start = str.length-ending.length;
let endStart = 0;

  for (let i = 0; i < str.length; i++){
    if (str[start+i] != ending[endStart]){
      return false;
    }
    endStart +=1;
    continue;
  }
  return true;
}