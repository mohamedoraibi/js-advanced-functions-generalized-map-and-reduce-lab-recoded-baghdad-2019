// Add your functions here


function map(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray
}

function reduce(array, callback, start = 0) {
    let trueValue=0
    let checkNumber = true;
    let checkString = false
    for (let i = 0; i < array.length; i++) {

        if (typeof (array[i]) != "number") {
            checkNumber = false
        }
        if (typeof (array[i]) == "string") {
            checkString = true
        }
        if(array[i]){
      trueValue++
    }

    }
    if (checkNumber === true && checkString === false) {
        let newSum = start
        for (let i = 0; i < array.length; i++) {
            newSum += (callback(0, array[i]))
        }
        return newSum
    } else {
        let newArray = Boolean
        let checkTrue = 0
        let checkFalse = 0
        for (let i = 0; i < array.length; i++) {
            newArray = callback(array[i])
            if (newArray) {
                checkTrue++
            }
            if (!newArray) {
                checkFalse++
            }
        }
       if(checkFalse>0){
         return false
       }
       else if (checkTrue == array.length||checkFalse==0||trueValue>=array.length-1) {
            return true
        } else if (checkFalse == array.length) {
            return false
        } else {
            return true
        }
    }
}