function wave(people) {
    const waveArr = [];
    
    if (!people) {
      return [];
    }
    
    for (let i = 0; i < people.length; i++) {
      if (/[a-zA-Z]/.test(people[i])) {
        const person = people.slice(0, i).toLowerCase() + people[i].toUpperCase() + people.slice(i + 1).toLowerCase();
        waveArr.push(person);
      }
    }
    
    return waveArr;
  }
  
console.log(wave("test ing"))
console.log(wave("a  b"))
console.log(wave("  ga p"))
