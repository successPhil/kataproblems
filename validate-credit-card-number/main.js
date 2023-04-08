function validate(n){
    let numArr = n.toString().split('')
      for (let i = 0; i < numArr.length; i++){
      numArr[i] = Number(numArr[i]);
    }
    
      if (numArr.length > 16){
      return false
    }
      
      if (numArr.length % 2 == 0){
      for (let i = 0; i < numArr.length; i += 2){
        let temp = numArr[i]
        let updated = temp * 2;
        if (updated > 9){
          updated -= 9
        }
        numArr[i] = updated
      }
    }
    if (numArr.length % 2 != 0){
      for (let i = 1; i < numArr.length; i += 2){
        let temp = numArr[i]
        let updated = temp * 2;
        if (updated > 9){
          updated -= 9
        }
        numArr[i] = updated
      }
    }
    let modCheck = 0;
    for (let i = 0; i < numArr.length; i++){
      modCheck += numArr[i]
    }
    if (modCheck % 10 != 0){
      return false;
    } else {
      return true;
    }
    }