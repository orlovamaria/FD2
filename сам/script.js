//1. Напишите функцию, которая принимает массив чисел и возвращает сумму своих кубов.

//sumOfCubes([1, 5, 9]) ➞ 855
// Считаем так: 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

//sumOfCubes([3, 4, 5]) ➞ 216

//sumOfCubes([2]) ➞ 8

//sumOfCubes([]) ➞ 0//

//Если дан пустой массив, верните 0.


// function sumOfCubes(arr){
//     var sum = 0;
//     for(var i = 0; i<arr.length; i++){
//         sum += Math.pow(arr[i], 3)
//     }
//     return sum;
// }

// console.log(sumOfCubes([1, 5, 9]))
// console.log(sumOfCubes([3, 4, 5]))
// console.log(sumOfCubes([2]))
// console.log(sumOfCubes([]))









// 2. Создайте функцию, которая принимает две строки в качестве аргументов и возвращает количество повторений,
//когда первая строка (единственный символ) встречается во второй строке.

//Ваш вывод должен быть чувствительным к регистру (см. Второй пример).

/* charCount("a", "games") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("b", "big fat bubble") ➞ 4 */

// function charCount(str1, str2){
//     var array = str2.split('');
//     var sum = 0;
//     array.forEach(function(elem){
//         if(elem === str1){
//             sum++;
//         }
//         return sum;
//     })
//     return sum;
// }
// console.log(charCount("a", "games"))
// console.log(charCount("c", "Chamber of secrets"))
// console.log(charCount("b", "big fat bubble"))












//3. Создайте функцию, которая принимает строку имени и проверяет, насколько хорошее данное имя. 
// Предварительно загруженный словарь оценок алфавита доступен в переменной scores. Сложите буквы своего имени, чтобы получить общий балл. */


var scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}

//Верните результат в соответствии со следующими правилами:

// score <= 60:   "NOT TOO GOOD"

// 61 <= score <= 300:  "PRETTY GOOD"

// 301 <= score <= 599:  "VERY GOOD"

// score >= 600:  "THE BEST"


// nameScore("JOHN") ➞ "THE BEST"

// nameScore("YOU") ➞ "VERY GOOD" 

// nameScore("MATT") ➞ "THE BEST"

// nameScore("PUBG") ➞ "NOT TOO GOOD"


// function nameScore(str){
//     var sum = 0;
//     var result = '';
//      var array = str.split('')
//      for(var i = 0; i < array.length; i++){
//          for(var key in scores){
//              if(key === array[i]){
//                  sum += scores[key];
//              }
//          }
//      }
//      if(sum <= 60){
//          result = "NOT TOO GOOD";
//      }
//      else if((sum >= 61) && (sum <= 300)){
//         result = "PRETTY GOOD";
//      }
//      else if((sum >= 301) && (sum <= 599)){
//         result = "VERY GOOD";
//      }
//      else if(sum >= 600){
//         result = "THE BEST";
//      }
//      return result;
// }
// console.log(nameScore("JOHN"))
// console.log(nameScore("YOU"))
// console.log(nameScore("MATT"))
// console.log(nameScore("PUBG"))











//4. Создайте функцию, которая определяет, соответствует ли заказ для бесплатной доставки. 
// Заказ имеет право на бесплатную доставку, если общая стоимость приобретенных товаров превышает 50 долларов.

// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false

// freeShipping({ "Flatscreen TV": 399.99 }) ➞ true

// freeShipping({ "Monopoly": 11.99, "Secret Book": 35.99, "Bananagrams": 13.99 }) ➞ true


//При расчете общей стоимости заказа игнорируйте налоги и дополнительные сборы.



// function freeShipping(obj){
//     var sum = 0;
//    for(var key in obj){
//        sum += obj[key];
//    }
//    if(sum > 50){
//        return true;
//    }
//    else{
//        return false;
//    }
// }
// console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }))
// console.log(freeShipping({ "Flatscreen TV": 399.99 }))
// console.log(freeShipping({ "Monopoly": 11.99, "Secret Book": 35.99, "Bananagrams": 13.99 }))




//5.Создайте функцию, которая принимает arr и возвращает сумму чисел между двумя "1".


// spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]) ➞ 14

// spaceApart(["1", 9, 20, 38, "1"]) ➞ 67

// spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]) ➞ "invalid"

// spaceApart([3, "1", 2, 9, "1", 0, 7, "1"]) ➞ "invalid"

/* 
Вернуть "invalid", если:
Отрицательное число присутствует внутри arr.
Количество единиц не равно двум.
Игнорировать любую другую строку внутри arr.
Обратите внимание, что "1" не равно 1. */

function spaceApart(arr){
    
    arr.map(function(elem, index, arr){
        return arr.splice(0, arr.indexOf('1'))
    })
    var sum = arr.reduce(function(sum, elem){
        if(elem < 0){
            return sum = 'invalid'
        }
        else{
            return sum += Number.isInteger(elem)
        }
    }, 0)
    
    return sum;
}
console.log(spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]))
console.log(spaceApart(["1", 9, 20, 38, "1"]))
console.log(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]))
console.log(spaceApart([3, "1", 2, 9, "1", 0, 7, "1"]))
