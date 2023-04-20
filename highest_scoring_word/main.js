function high(x){
    // Create map for scoring points against characters
    const scoringMap = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5,
      'f': 6,
      'g': 7,
      'h': 8,
      'i': 9,
      'j': 10,
      'k': 11,
      'l': 12,
      'm': 13,
      'n': 14,
      'o': 15,
      'p': 16,
      'q': 17,
      'r': 18,
      's': 19,
      't': 20,
      'u': 21,
      'v': 22,
      'w': 23,
      'x': 24,
      'y': 25,
      'z': 26
      }
    // Use split to convert string to an array of words
    let words = x.split(" ")
    //Create array to hold scores after they are calculated
      let score = [];
    //Create a loop through the array of words  
      for (let i = 0; i < words.length; i++){
    //We set points to 0 in this loop so that it is reinitialized each new word
          let points = 0
  //Create a inner loop to iterate through the characters in each word
  for (let j = 0; j < words[i].length; j++){
  //We are taking each character and adding the value represented in our map
  points += scoringMap[words[i][j]]
  }
  //When the total points for a word is calculated, we will push the amount of points
  // to score.
  //Points will be reset at the beginning of the next word iteration
  score.push(points)
      }
  //We can use Math.max on scores to find the highest value in scores
  //Then use indexOf to find where that value is in scores
  //Since we built our scores array in the same order as our words array
  // We can use the same index on our words array to return the word
      let mostIdx = score.indexOf(Math.max(...score))
    return words[mostIdx]
      }