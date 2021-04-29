// Add your functions here
function map(arr, cb) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i]))        
    }
    return result
}

function reduce(arr, cb, startingPoint) {
    let total
    if (startingPoint) {
        total = startingPoint
        for (let i = 0; i < arr.length; i++) {
            total = cb(arr[i], total)        
        }
        return total
    } else {
        total = arr[0]
        for (let i = 1; i < arr.length; i++) {
            total = cb(arr[i], total)        
        }
        return total
    }
}