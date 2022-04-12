// Task 1

function mapping(arr){
    var obj = {};
     arr.forEach(function(elem){
         return obj[elem] = elem.toUpperCase() 
     })
   return obj;
}

console.log(mapping(["p", "s"]))
console.log(mapping(["a", "b", "c"]))
console.log(mapping(["a", "v", "y", "z"]))

// Task 2


function getStudentTopNotes(arr) {
    var array = arr.map(mapElem => {
         return mapElem['notes'].reduce(function(result, reduceElem) {
           if(reduceElem > result) {
             return reduceElem;
           }
           else {
             return result;
           }
         }, 0);
    });
    return array;
  }

console.log(getStudentTopNotes([
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  },
  {
      id: 4,
      name: "Zygmunt",
      notes: []
  }
]))

// Task 3

function simpleCompare(arr1, arr2){
     var result = arr1.every(function(everyElem){
         return arr2.some(function(someElem){
             return Math.pow(everyElem, 2) == someElem;
         })
     })
     return result;
}

console.log(simpleCompare([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))
console.log(simpleCompare([4, 4], [1, 31]))
console.log(simpleCompare([2, 2, 3], [4, 4, 9]))

// Task 4

function makeTitle(str){
   var arr = str.split(' ');
   var result = arr.map(function(elem){
     return elem.replace(elem[0], elem[0].toUpperCase())
   })
   return result.join(' ');
}

console.log(makeTitle("This is a title"))
console.log(makeTitle("capitalize every word"))
console.log(makeTitle("I Like Pizza"))
console.log(makeTitle("PIZZA PIZZA PIZZA"))

