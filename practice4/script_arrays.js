// 1. Создайте функцию, которая принимает два массива, и склеивает массивы вместе. Обязательно после склиевания массива, нужно их отсортировать по возрастанию.


// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

// tuckIn([[5, 6], [1, 2]]) ➞ [1, 2, 5, 6]]


function tuckIn(array, array2){
      for(var i = 0; i < array2.length; i++){
          array.push(array2.pop());
      }
      return array;
}


console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15,150], [45, 75, 35]));
console.log(tuckIn([[5, 6], [1, 2]]));

// рекурсия
// получаем числа от 1 до 10 например

var sum1 = 0;

function sumFunc(currentValue){
     sum1 += currentValue;
     if(currentValue < 10){
        return sumFunc(++currentValue);
     }
     console.log(sum1, currentValue);
}

sumFunc(0);

// замыкания, сборщик мусора почитать

// Встроенный класс string

// доступные методы string.prototype 

 



