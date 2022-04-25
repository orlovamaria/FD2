// Task 1

function numbSort(arr){
  var array = arr.map(function(elem){
      return  (elem.toString()).split('')
   })
   array.sort(function(a, b){
      return a.length - b.length;
   })
   var array2 = array.map(function(elem){
       return +elem.join('')
   })
   return array2;
}

console.log(numbSort([2, 37, 1, 2, 739, 2]))
console.log(numbSort([777, 182, 11, 881, 27]))
console.log(numbSort([5, 4, 3, 2, 1, 18, 6, 1, 3]))


// Task 2

function sortStr(arr, str){
     var array = str.split('');
     var array2 = [];
     array.forEach(function(elem){
         return arr.some(function(el){
             if(elem == el[0]){
                 return array2.push(el);
             }
         })
     })
     return array2;
}
console.log(sortStr(["orange", "mandarin", "pear", "coconut"], "cmop"))
console.log(sortStr(["middle", "junior", "senior"], "stnmj"))
console.log(sortStr(["bike", "car", "motorcycle"], "camrb"))

// Task 3


function revOddWord(str){
    var arr = str.split(' ')
    var punctuationMarks = ['.', ','];
    var result = '';
    
    for(var i = 0; i < arr.length; i++){
        if(checkWord(arr[i])){
            result = result + ' ' + arr[i]
        }
        else{
            result = result + ' ' + checkPunctuation(arr[i])
        }
    }
    

    function checkPunctuation(word){
        var char = word.split('');
        var storagePunctuation = [];
        punctuationMarks.forEach(function(elem){
            if(char[char.length - 1] === elem){
                return storagePunctuation.push(char.pop())
            }
        }) 
        
        char.reverse();

        storagePunctuation.forEach(function(elem){
            return char.push(elem);
        })
        return char.join('');
    }

    function checkWord(word){
        punctuationMarks.forEach(function(elem){
            if(word[word.length - 1] === elem){
                word = word.slice(0, -1)
            }
        }) 

        if(word.length % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    }
    return result.trim();
}
console.log(revOddWord("Egg"))
console.log(revOddWord("It is false"))
console.log(revOddWord("Dear Santa, give me a new iPhone"))
