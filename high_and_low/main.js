function highAndLow(numbers){
    //Split by space to get an array of numbers as strings
    let nums = numbers.split(" ")
    //create empty array to hold converted string to integer values
    let ints = [];
    //Use a loop with Numbers() to convert the string numbers
    //Push to empty array to fill
    for (let i in nums){
      ints.push(Number(nums[i]))
    }
  //Can now use Math.max/min
  //Converted back to string for answer
  let high = Math.max(...ints).toString()
  let low = Math.min(...ints).toString()
  //stored variables for high and low and inserted with string concat
  let answer = `${high}` + " " + `${low}`
  return answer
  }