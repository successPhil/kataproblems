let first = "coffee"
let second = "ffeeco"

function shift_diff(first, second){
    if (first == second){
        return 0
    }
    for (let i = 0; i < first.length; i++){
        const shifted = first.slice(-i) + first.slice(0, -i)
        if (shifted == second){
            return i
        }
    }
    return -1



}

console.log(shift_diff(first, second))