


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












/* 5. Вам дана строка слов. Вам нужно найти слово "Nemo" и вернуть такую строку: «Я нашел Nemo в [номер слова по порядку]!».

Если вы не можете найти Немо, верните «Я не могу найти Nemo :(».

    findNemo("I am finding Nemo !") ➞ "Я нашел Nemo в 4!"

    findNemo("Nemo is me") ➞ "Я нашел Nemo в 1!"
    
    findNemo("I Nemo am") ➞ "Я нашел Nemo в 2!" */

// function findNemo(string){
//   var array = [];
//   array = string.split(' ');
//   var result = array.forEach(element => {
//     if(element == 'Nemo'){
//       console.log('Я нашел Nemo в ' + " " + (array.indexOf('Nemo') + 1))
//     }
//     else{
//       console.log('Я не могу найти Nemo :(');
//     }
//   });
//   return result;
// }

// console.log(findNemo("I am finding Nemo !"));