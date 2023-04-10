function score(dice) {
  let counts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}; // object to count the occurrences of each number
  let score = 0; // variable to keep track of the total score
  // count the occurrences of each number
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i]]++;
  }
  // score triplets
  switch (true) {
    case (counts[1] >= 3):
      score += 1000;
      counts[1] -= 3;
      break;
    case (counts[6] >= 3):
      score += 600;
      counts[6] -= 3;
      break;
    case (counts[5] >= 3):
      score += 500;
      counts[5] -= 3;
      break;
    case (counts[4] >= 3):
      score += 400;
      counts[4] -= 3;
      break;
    case (counts[3] >= 3):
      score += 300;
      counts[3] -= 3;
      break;
    case (counts[2] >= 3):
      score += 200;
      counts[2] -= 3;
      break;
    default:
      break;
  }
  // score ones and fives
  score += counts[1] * 100 + counts[5] * 50;
  // score remaining four of a kind and five of a kind
  for (let num = 1; num <= 6; num++) {
    if (counts[num] >= 4) {
      score += num * 100;
      counts[num] -= 4;
    }
    if (counts[num] >= 5) {
      score += num * 100;
      counts[num] -= 5;
    }
  }
  // score remaining six of a kind
  for (let num = 1; num <= 6; num++) {
    if (counts[num] >= 6) {
      score += num * 100 * 2;
      counts[num] -= 6;
    }
  }
  return score;
}