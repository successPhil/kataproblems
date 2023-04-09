function oddOrEven(array) {
//Get sum for every element in the array with initial value of 0
   let sum = array.reduce((a, b) => a + b, 0);
//Set default answer to even since checking if even
  let answer = 'even'
//Check if sum has a remainder when divided by 2 and return default if true
  if (sum % 2 == 0){
    return answer
  }
//Re-assign answer to 'odd' if sum did not meet above conditions
  answer = 'odd'
  return answer
  }