Class {
// Assigned a starting value to determine whether or not first call
 static start = 0;
// Return 1 for first call and change start value;
// Number will always get multiplied by 2 in future calls
static getNumber() {
    if (Class.start == 0){
      Class.start = 1;
    } else {
      Class.start *= 2
    }
    return Class.start