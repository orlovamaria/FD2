// Task 1

function chessBoard(str){
    let arr = ['a', 'c', 'e', 'g'];
    let arr2 = ['b', 'd', 'f', 'h'];
    let result = '';
    if(str[1] < 9){
        arr.forEach(function(elem){
            if(elem === str[0]){
                if(str[1] % 2 === 0){
                    result = 'белый'
                }
                else{
                    result = 'черный'
                }
            }
        })
    
        arr2.forEach(function(elem){
            if(elem === str[0]){
                if(str[1] % 2 === 0){
                    result = 'черный'
                }
                else{
                    result = 'белый'
                }
            }
        })    
    }
    
    return result;
}

console.log(chessBoard("a1"))
console.log(chessBoard("e5"))
console.log(chessBoard("d1"))
console.log(chessBoard("h7"))
console.log(chessBoard("a7"))
console.log(chessBoard("a9"))


// Task 2

function mirror(arr){
   let max = 0;
   arr.forEach(function(elem){
       return max = Math.max(elem)
   })
   for(let i = arr.length; i >= 0; i--){
       if(arr[i] < max){
           arr.push(arr[i])
       }
   }
return arr;
}

console.log(mirror([0, 2, 4, 6]))
console.log(mirror([1, 2, 3, 4, 5]))
console.log(mirror([3, 5, 6, 7, 8]))

// Task 3

function isDisarium(num){
    let arr = Array.from('' + num)
    let counter = 1;
    let result = 0;
    arr.forEach(function(elem){
        return result += (elem ** counter++)
    })

    return result == num
}

console.log(isDisarium(75)) 
console.log(isDisarium(135))
console.log(isDisarium(8))
console.log(isDisarium(466))