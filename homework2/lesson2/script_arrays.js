//1. Создайте функцию,
//которая принимает два числа в качестве аргументов (num, length) и возвращает массив, каждый элемент которого кратный num, пока длина массива не достигнет length.

/* arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102] */

//Обратите внимание, что num также включено в возвращаемый массив.

function arrayOfMultiples(num, length){
    var Array = [];
    if  (num % num == 0){
        Array.push(num);
    }
    for (var i = 0; i < (length - 1); i++){
       Array.push(Array[Array.length - 1] + num)
    }
    return Array;
    
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));
 








//2. Учитывая число(в виде аргумента), верните массив, содержащий две половины числа. Если число нечетное, сделайте крайнее правое число выше.

//Все числа должны быть целыми.
//Вы также можете ожидать отрицательные числа.

/* numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]
 */

function numberSplit(num){
      var array = [];
      if (num % 2 == 0){
          array.push(num/2);
          array.push(num/2);
      }
      else if((num < 0) && (num % 2 != 0)) {
        array.push((num/2) - 0.5);
        array.push((num/2) + 0.5);
      }
      else{
        array.push(parseInt(num/2));
        array.push((num/2) + 0.5);
      }
      return array;
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
console.log(numberSplit(-10));