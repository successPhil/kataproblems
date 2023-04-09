function countPositivesSumNegatives(input) {
  //Create variables to create new array, count positives, sum negatives
  let resultArr = []; //Will return []; if push does not execute
  let posCount = 0;
  let negSum = 0;
  //loop through each element of input
  for (let i in input){
    if (input[i] > 0){
      posCount ++;
  //If number is positive, increase posCount by 1
    }
    if (input[i] < 0){
      negSum += input[i];
 //If number is negative, add number to negSum
    }
  }
  //Once loop is complete, check that posCount and NegSum are not 0 (default)
  if (posCount != 0 || negSum != 0){
    //If at least one value is not default, push
  resultArr.push(posCount, negSum)
    }
  return resultArr
}