function narcissistic(value) {
let checkValue = 0
value = value.toString()
  for (let i in value){
    checkValue += value[i] ** value.length;
  }
if (checkValue == Number(value)){
  return true;
}
  return false;
}