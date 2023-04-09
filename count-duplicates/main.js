function duplicateCount(text){
  //converted text to a single case so that case can be ignored
  text = text.toLowerCase()
  //create object to store counts
  let charCounts = {};
  //set initial value for duplicate count
  let duplicates = 0
  //loop through text and assign key values to charCounts
  // or increments the count if charCounts[char] already exists
    for (let i = 0; i < text.length; i++) {
    let char = text[i];
    charCounts[char] = (charCounts[char] || 0) + 1;
    //loop through charCounts object and count any number
    // greater than 1 as a duplicate
  }
  for (let i in charCounts){
    if (charCounts[i] > 1){
      duplicates ++;
    }
  }
  // The total count of duplicates is now equal to duplicates
  return duplicates
}