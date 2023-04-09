function removeChar(str){
 let regEx = /(?<=.)\w+(?=.)/g
 let noFirstLast = "";
   if (regEx.test(str) == true){
   noFirstLast = str.match(regEx)[0]
 }
return noFirstLast
};