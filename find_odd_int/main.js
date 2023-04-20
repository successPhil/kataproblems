function findOdd(A) {
    // Use reduce to create an object of counts
    // set the accumulator prev to an empty object
    //curr will start at the first number in the array
    //check if it exists in our accumulator
    // if it does not, create it with a value of 1
    // if it does, increase the value by 1
    const count = A.reduce((prev, curr) => {
      prev[curr] ? prev[curr] ++ : (prev[curr] = 1)
      return prev
    }, {})
    //Iterate through object keys to compare values
    //If a key is found with an odd value, return it as a number
    for (let key in count){
      if (count[key] % 2 != 0){
        return +key
      }
    }
    return false;
  }