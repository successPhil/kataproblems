let test = "AAAABBBCCDAABBB"
function uniqueInOrder(test){
    const unique = [];
for (let i = 0; i < test.length; i++){
    if (unique.includes(test[i]) == false){
        unique.push(test[i])
    }
    if (test[i] != unique[unique.length-1]){
        unique.push(test[i])
    }

}
return unique
}

console.log(uniqueInOrder(test))