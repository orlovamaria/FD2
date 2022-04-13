// Task 1

function reorderNums(arr, str){
     var result = arr.map(function(elem){
         var arrElem = (elem.toString()).split('');
         if(str === 'asc'){
             arrElem.sort(function(a, b){
                  return a - b;
             })
             return +arrElem.join('');
         }
         else if(str === 'desc'){
            arrElem.sort(function(a, b){
                return b - a;
           })
           return +arrElem.join('');
         }
     })
     return result;
}

console.log(reorderNums([515, 341, 98, 44, 211], "asc"))
console.log(reorderNums ([515, 341, 98, 44, 211], "desc"))
console.log(reorderNums ([63251, 78221], "asc"))
console.log(reorderNums ([63251, 78221], "desc"))
console.log(reorderNums ([1, 2, 3, 4], "asc"))
console.log(reorderNums ([1, 2, 3, 4], "desc"))


// Task 2

function parseCode(str){
    var arr = str.split('0');
    var arr2 = [];
    
    arr.map(function(elem){
        if(elem !== ''){
            arr2.push(elem)
        }
    })
   var obj = {
        firstName: arr2[0],
        lastName: arr2[1],
        id: arr2[2],
    }
    return obj;
}

console.log(parseCode("John000Doe000123"))
console.log(parseCode("michael0smith004331"))
console.log(parseCode("Thomas00LEE0000043"))

// Task 3

function isAvgWhole(arr){
    
var result = arr.reduce(function(sum, elem){
    return sum += elem / arr.length;
    }, 0)
    return Number.isInteger(result);
}

console.log(isAvgWhole([1, 3]) )
console.log(isAvgWhole([1, 2, 3, 4]))
console.log(isAvgWhole([1, 5, 6]))
console.log(isAvgWhole([1, 1, 1]))
console.log(isAvgWhole([9, 2, 2, 5]))

// Task 4

function getOnlyEvens(arr){
      var arrResult = [];
        arr.map(function(elem, index){
            if((elem % 2 == 0) && (index % 2 == 0)){
                return arrResult.push(elem)
            }
      })
      return arrResult;
}

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]))
console.log(getOnlyEvens([0, 1, 2, 3, 4]))
console.log(getOnlyEvens([1, 2, 3, 4, 5]))