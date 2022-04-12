// 1.Напишите функцию, которая возвращает сумму пропущенных чисел из заданного массива.


//sumMissingNumbers([4, 3, 8, 1, 2]) ➞ 18
// 5 + 6 + 7 = 18

//sumMissingNumbers([17, 16, 15, 10, 11, 12]) ➞ 27
// 13 + 14 = 27

//sumMissingNumbers([1, 2, 3, 4, 5]) ➞ 0
// Нет пропущенных номеров (т.е. все числа в [1, 5] присутствуют в списке)

//Числовой диапазон, который следует учитывать при поиске пропущенных чисел в массиве, - это последовательность последовательных чисел между минимальным и максимальным из чисел (включительно).


// function GetMissed(arr) {
//     arr.sort((a,b) => a - b)
 
//     let res = 0;

//     for(var j = arr[0]; j < arr[arr.length - 1]; j++){
//         if(arr.indexOf(j) == -1){
//             res += j;
//         } 
//     }

//    return res;
//  }
 
//   console.log(GetMissed([4, 3, 8, 1, 2]));
//   console.log(GetMissed([17, 16, 15, 10, 11, 12]));
//   console.log(GetMissed([1, 2, 3, 4, 5]));
 

  // 2. Напишите функцию, которая принимает массив строк и возвращает массив только со строками, в которых есть числа. Если нет строк, содержащих числа, вернуть пустой массив.

/* numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"] 

Строки могут содержать пробелы или символы любого типа.
Попробуйте решить это без регулярного выражения.

*/
// function numInStr(array){
//     var arr = [];
//     var arr2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     for(var i = 0; i < array.length; i++){
//         var result = array[i].split('');
//         for(var j = 0; j < result.length; j++){
//              if(arr2.includes(result[j])){
//                  if(!arr.includes(array[i])){
//                     arr.push(array[i]);
//                  }
//              }
//         }
//     }
//     return arr;
// }
// console.log(numInStr(["1a", "a", "2b", "b"]))
// console.log(numInStr(["abc", "abc10"]))
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]))
// console.log(numInStr(["this is a test", "test1"]))


/*  3.  Создайте функцию, которая принимает массив с объектами и возвращает сумму бюджетов людей.

  getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]) ➞ 65700
  
  getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]) ➞ 62600 */

//   function getBudgets(array){
//       var sum = 0;
//       array.filter(function(elem){
//           return sum += elem.budget;
//       })
//       return sum;
//   }

// console.log(getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]))
// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]))


/*  4.Напишите функцию, которая принимает массив объектов даты и возвращает «самую длинную полосу» (т. Е. Количество последовательных дней подряд).



longestStreak([
  {
    "date": "2021-04-18"
  },
  {
    "date": "2021-04-19"
  },
  {
    "date": "2021-04-20"
  },
  {
    "date": "2021-04-26"
  },
  {
    "date": "2021-04-27"
  },
  {
    "date": "2021-04-30"
  }
]) ➞ 3


Пустой массив должен возвращать 0.

*/


function doubleElement(str){
  var array = str.split('');
  for(var i = 0; i < array.length; i++){
      array.splice(i+1, 0, array[i])
  }
//    array.forEach(function(elem, index){
//        return array.splice(index, 0, elem);
//    })

return array;
}
console.log(doubleElement("String"))
console.log(doubleElement("Hello World!"))
console.log(doubleElement("1234!_ "))