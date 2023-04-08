var number = function(busStops){

let peopleOn = 0;
let peopleOff = 0;

  for (let i = 0, j = 0; i < busStops.length; i++){
    peopleOn += busStops[i][j];
    peopleOff += busStops[i][j+1];
  }
let stillOn = peopleOn - peopleOff;
  return stillOn
}