//Task1. Напишите функцию, которая для каждого элемента массива добавлять +1 к текущему числу.

/* incrementElements([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

incrementElements([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

incrementElements([-1, -2, -3, -4]) ➞ [0, -1, -2, -3] */

 function incrementElements(arr1){
     for (var i = 0; i < arr1.length; i++){
         arr1[i]++;
     } 
     return arr1;
 }


console.log(incrementElements([0, 1, 2, 3]));
console.log(incrementElements([2, 4, 6, 8]));
console.log(incrementElements([-1, -2, -3, -4]));




// Task2. Напишите функцию для отображения массива в обратном порядке.


// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []


function reverse(arr2){
  arr2.reverse();
  return arr2;
}

console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([]));





// Task3. Создайте функцию, которая принимает два массива и вставляет второй массив в середину первого массива.

// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]


//* Первый массив всегда состоит из двух элементов.

 function tuckIn(arr3, arr4){
    arr2.push(arr3[1]);
    arr2.unshift(arr3[0]);
    return arr4;
 }

 

 console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));
 console.log(tuckIn([15,150], [45, 75, 35]));
