/*1. Верните сумму всех элементов в массиве, где каждый элемент умножается на его индекс (отсчитываемый от нуля). Для пустых массивов верните 0.



indexMulSum([1, 2, 3, 4, 5]) ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

indexMulSum([-3, 0, 8, -6]) ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)

 */

// function indexMulSum(arr){
//     var result = arr.reduce(function(sum, elem, index){

//       return sum += (elem*index);
//     }, 0)
//     return result;
// }

// console.log(indexMulSum([1, 2, 3, 4, 5]))
// console.log(indexMulSum([-3, 0, 8, -6]))



  






/* 2. Напишите функцию, которая принимает массив объектов (продуктов), который вычисляет общую 
цену и возвращает ее в виде числа. У продуктового объекта есть продукт, количество и цена, например:
{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}

// 1 бутылка молока
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

// 1 бутылка молока & 1 коробка крупы
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

// 3 бутылки молока
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

// Несколько продуктов
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

// Немного конфет
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) ➞ 0.3

 */


// function getTotalPrice(arr){
//   var sumPrice = arr.reduce(function(sumPrice, elem){
//        return sumPrice += parseFloat(elem.quantity * elem.price)
//      }, 0)
//      return sumPrice;
// }

// console.log(getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50}
// ]))
// console.log(getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50},
//   { product: "Cereals", quantity: 1, price: 2.50}
// ]))
// console.log(getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50}
// ]))
// console.log(getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50},
//   { product: "Eggs", quantity: 12, price: 0.10},
//   { product: "Bread", quantity: 2, price: 1.60},
//   { product: "Cheese", quantity: 1, price: 4.50}
// ]))
// console.log(getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10},
//   { product: "Lollipop", quantity: 1, price: 0.20}
// ]))












/*

3. Напишите функцию, которая принимает массив элементов, удаляет все повторяющиеся элементы 
и возвращает новый массив в том же последовательном порядке, что и старый массив (за вычетом дубликатов).

*/


/* 
removeDups([0, 1, 0, 1]) ➞ [0, 1]

removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

removeDups(["Tom", "Joe", "Tom"]) ➞ ["Tom", "Joe"]

*/

// function removeDups(arr){
//   var Array = [];
//   for(var i = 0; i < arr.length; i++){
//     if(!Array.includes(arr[i])){
//         Array.push(arr[i])
//     }
//   }
//      return Array;
// }
// console.log(removeDups([0, 1, 0, 1]))
// console.log(removeDups(["The", "big", "cat"]))
// console.log(removeDups(["Tom", "Joe", "Tom"]))


// function removeDups(arr){
//   var Array = [];
//    Array = arr.filter(function(elem){
//     if(!Array.includes(elem)){
//        return Array.push(elem);
//     }
//   })
//      return Array;
// }
// console.log(removeDups([0, 1, 0, 1]))
// console.log(removeDups(["The", "big", "cat"]))
// console.log(removeDups(["Tom", "Joe", "Tom"]))



/* 
4. Напишите функцию, которая возвращает ближайшую главу к текущей странице, 
на которой вы находитесь. Если две главы одинаково близки, верните ту, у которой страница больше.


nearestСhapter({
    "Chapter 1" : 3,
    "Chapter 2" : 17,
    "Chapter 3" : 43
  }, 10) ➞ "Chapter 2"
  
  
nearestСhapter({
    "New Beginnings" : 7,
    "Strange Developments" : 46,
    "The End?" : 187,
    "The True Ending" : 520
  }, 200) ➞ "The End?"
  
  
nearestСhapter({
    "Chapter 1a" : 1,
    "Chapter 1b" : 5
  }, 3) ➞ "Chapter 1b"
 */


// function nearestСhapter(obj, num){
//   var array = [];
//   var sum = 0;
//   var resultFunc;
//   var fyfg;
//   for (var key in obj){
//     array.push([key, obj[key]])
//   }
//   for(var i = 0; i < array.length; i++){
//     var result = array[i];
//     if(result[1] < num){
//       resultFunc = result[1];
//     }else if(result[1] > num){
//       return fyfg = result[1]
//     }
//     if((num - resultFunc) < (fyfg - num)){
//       return 
//     }
//     else if((num - resultFunc) >= (fyfg - num))
//   }
  
  // for(var i = 0; i < array.length; i++){
  //   if(array[i] > num){
  //     sum += array[i];
  //   }
  //   var result = sum / 2;
  //   if ((result < num) && (array[i] > result)){
  //     resultFunc = array[i];

  //   }else if(result > array[i] > num){
  //      resultFunc = array[i]
  //   }
  // }
  // for(var key in obj){
  //   if(obj[key] == resultFunc){
  //     return fyfg = key;
  //   }
  // }
//   return resultFunc;  
// }

// function nearestСhapter(oglavlenie, currentPage){
//   let arrayOglavlenie = [];

//   for(let keyFromOglavlenie in oglavlenie) {
//     arrayOglavlenie.push([keyFromOglavlenie, oglavlenie[keyFromOglavlenie]]);
//   }

//   arrayOglavlenie.sort((a,b) => a[1] - b[1]);

//   for(let i = 0; i < arrayOglavlenie.length; i++) {
//     if(arrayOglavlenie[i][1] > currentPage) {
//       if(i === 0) {
//         return arrayOglavlenie[i][0];
//       }

//       if(currentPage - arrayOglavlenie[i-1][1] < arrayOglavlenie[i][1] - currentPage) {
//         return arrayOglavlenie[i-1][0];
//       }
//       else {
//         return arrayOglavlenie[i][0];
//       }
//     }
//   }

//   return arrayOglavlenie[arrayOglavlenie.length - 1][0];
// }
// console.log(nearestСhapter({
//   "Chapter 1" : 3,
//   "Chapter 2" : 17,
//   "Chapter 3" : 43,
//   "Chapter 4" : 74,
//   "Chapter 5" : 200
// }, 10))
// console.log(nearestСhapter({
//   "New Beginnings" : 7,
//   "Strange Developments" : 46,
//   "The End?" : 187,
//   "The True Ending" : 520
// }, 200))
// console.log(nearestСhapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3))

function nearestСhapter(oglavlenie, currentPage){
  //Это массив в который мы сложем строки объекта.
  //Как в объекте, то только в массиве. Благодаря этому мы сможем их отсортировать
  //и проходить в цикле по ним по порядку

  let arrayOglavlenie = [];

  //Цикл в котором мы берем ключ каждого поля из объекта
  for(let keyFromOglavlenie in oglavlenie) {
    //Теперь пушаем в наш массив новый массив
    //Где в позицию 0 кладем ключ(Название главы)
    //А в позицию 1 кладем значение из объекта по ключу (номер страницы)
    arrayOglavlenie.push([keyFromOglavlenie, oglavlenie[keyFromOglavlenie]]);
  }

  //Сортируем
  //a и b это два какието элемента из нашего массива
  //каждый из этих элементов это массив из двух элементов
  //Где в позиции 0 Название главы
  //А в позиции 1 Номер страницы
  arrayOglavlenie.sort((a,b) => a[1] - b[1]);

  //Идем по нашему отсортированному по возрастанию массиву
  for(let i = 0; i < arrayOglavlenie.length; i++) {

    //Как только мы дойдем до элемента в котором номер страницы больше или равна currentPage
    //Это будет означать, что нам нужно вернуть либо название текущей главы
    //Либо название главы из предыдущего элемента
    //В зависимости до чего меньше разница
    //С этого момента мы уже должны что то вернуть и перестать перебирать
    //Остальные элементы фором
    if(arrayOglavlenie[i][1] >= currentPage) {

      //Тут мы на всякий случай смотрим, что если это нулевой элемент массива
      //То мы не сможем посмотреть в i - 1 и значит нужно просто вернуть название
      //главы из текущего элемента
      if(i === 0) {
        return arrayOglavlenie[i][0];
      }

      //Если разница между currentPage и номером страцицы главы из предыдущего
      //элемента массива, значит нужно вернуть название главы из предыдущего
      //элемента массива, а если разница меньше между currentPage и страницей
      //из текущего элемента массива, то возвращаем название главы текущего элемента
      //Соответственно мы вернем название главы из текущего элемента если разница будет одинаковая
      if(currentPage - arrayOglavlenie[i-1][1] < arrayOglavlenie[i][1] - currentPage) {
        return arrayOglavlenie[i-1][0];
      }
      else {
        return arrayOglavlenie[i][0];
      }
    }
  }

  //Тут на всякий случай. Если вдруг выяснится, что мы прошли весь массив
  //И не нашли главу с номером страницы больше чем currentPage
  //Поидее сюда попадать не должно никогда
  //Но мало ли пришлют кривые данные
  return arrayOglavlenie[arrayOglavlenie.length - 1][0];
}

console.log(nearestСhapter({
  "Chapter 1" : 3,
  "Chapter 2" : 17,
  "Chapter 3" : 43,
  "Chapter 4" : 74,
  "Chapter 5" : 200
}, 10))
console.log(nearestСhapter({
  "New Beginnings" : 7,
  "Strange Developments" : 46,
  "The End?" : 187,
  "The True Ending" : 520
}, 200))
console.log(nearestСhapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3))