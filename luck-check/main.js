function luckCheck(ticket){
  if (ticket.length < 1){
  throw Error("String is not valid")
}
let isValid = /\d+/
for (let i = 0; i < ticket.length; i++){
  if (isValid.test(ticket[i]) == false){
    throw Error("String is not valid")
  }
}
  
let removeNumber = Math.floor(ticket.length/2)
let firstSum = 0;
let secondSum = 0;
let initialArr = ticket.split('')
  if (ticket.length % 2 != 0){
    removeNumber = Math.floor((ticket.length)/2)
    initialArr.splice(removeNumber, 1)
  } 
for (let i = 0; i < initialArr.length; i++){
  if (i < initialArr.length/2){
    firstSum += Number(initialArr[i])
  } else {
    secondSum += Number(initialArr[i])
  }
}

if (firstSum == secondSum){
  return true;
} else {
    return false;
}
}  