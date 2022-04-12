// Task 1

// Способ 1
 function treeSum(array) {
    let res = 0;

    for(let i=0; i<array.length; i++) {
        if(!Array.isArray(array[i])) {
            if(typeof array[i] === 'number' && !isNaN(array[i])){
                res += array[i];
            }
        }
        else {
            res += treeSum(array[i]);
        }
    }

    return res;
}

console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]))

//   Способ 2


function treeSum(array){
    var sum = 0;
    var result = [];
    result = array.flat(Infinity);
    for(var i = 0; i < result.length; i++){
            if(!isNaN(result[i])){
              sum += result[i]
            }
    }
    return sum;
}


// Task 2
// 1 способ
function removeLeadingTrailing(str){
    return +str.toString()
}

console.log(removeLeadingTrailing("190.000"))
console.log(removeLeadingTrailing("00803"))
console.log(removeLeadingTrailing("07.1200"))
console.log(removeLeadingTrailing("90"))
console.log(removeLeadingTrailing("00000"))
console.log(removeLeadingTrailing("0.0"))
console.log(removeLeadingTrailing("00.00"))
console.log(removeLeadingTrailing("0"))
console.log(removeLeadingTrailing("4.0"))
console.log(removeLeadingTrailing("00830"))

// 2 способ

function removeLeadingTrailing(str){
   var array = str.split('');
   while (array[0] == '0'){
       array.shift();
   }

   if(array.find(elem => elem == '.') != undefined){
       while (array[array.length - 1] == '0'){
            array.pop()
        }
   }
   
   if(array[0] == '.'){
       array.unshift('0');
   }

   if(array[array.length - 1] == '.'){
       array.pop()
   }

   if(array.length === 0 || (array.length === 2 && array[1] === '.')) {
       return '0'
   }

   return array.join('');
}

onsole.log(removeLeadingTrailing("7.012"))
console.log(removeLeadingTrailing("190.000"))
console.log(removeLeadingTrailing("00803"))
console.log(removeLeadingTrailing("07.1200"))
console.log(removeLeadingTrailing("90"))
console.log(removeLeadingTrailing("00000"))
console.log(removeLeadingTrailing("0.0"))
console.log(removeLeadingTrailing("00.00"))
console.log(removeLeadingTrailing("0"))
console.log(removeLeadingTrailing("4.0"))


