// Task 1

function flatten(arr){
    var array = [];
    arr.forEach(function(elem){
        if(Array.isArray(elem)){
            return elem.forEach(function(el){
                return array.push(el)
            })
        }
    })
    return array;
}

console.log(flatten([[1, 2], [3, 4]]))
console.log(flatten([["a", "b"], ["c", "d"]]))
console.log(flatten([[true, false], [false, false], [true, true]]))

// Task 2

function afterNYears(obj, num){
    for(var key in obj){
        obj[key] = (obj[key] + num)
    }
    return obj;
}


console.log(afterNYears({"Joel" : 32,  "Fred" : 44,  "Reginald" : 65,  "Susan" : 33,  "Julian" : 13}, 1))
console.log(afterNYears({"Baby" : 2,  "Child" : 8,  "Teenager" : 15,  "Adult" : 25,  "Elderly" : 71}, 19))
console.log(afterNYears({"Genie" : 1000,  "Joe" : 40}, 5))


// Task 3

function canConcatenate(arr1, arr2){
    var array = [];
    array = (arr1.flat(Infinity)).sort(function(a,b){
        return a - b;
    })
    arr2.sort(function(a, b){
        return a - b
    })

    var result = array.every(function(elem){
        return arr2.includes(elem)
    })
    var result2 = array.length === arr2.length

    return result && result2;
}

console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]))
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]))
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]))
console.log(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]))
