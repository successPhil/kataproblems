function betterThanAverage(classPoints, yourPoints) {
classPoints.push(yourPoints)
let average = classPoints.reduce((a, b) => a + b, 0)/classPoints.length
  if (average < yourPoints){
    return true;
  }
  return false;
}