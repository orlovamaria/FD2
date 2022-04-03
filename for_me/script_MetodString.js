// Строки

// Вставка произвольных выражений  

let text = 'Привет!'
let textAll = `${text} Я строка!`       /* Привет! Я строка! */

function someSum(a, b){
    return a + b;
}
console.log(`Сумма: ${someSum(4, 7)}`); /* Сумма: 11 */


// Свойсво length

console.log(text.length)                /* 7 */

// Получить конкретный символ строки

let letter = text[0];                   /* П */


// Цикл для вывода всех элементов строки

for (const char of text){
    console.log(char);                  /* П р и в е т ! */
}


// Изменение регистра строки вверхний или нижний

console.log(text.toUpperCase())         /* ПРИВЕТ! */
console.log(text.toLowerCase())         /* привет! */


// ПОИСК ЭЛЕМЕНТА В СТРОКЕ

// IndexOf(подстр)
// IndexOf(подстр, нач)

console.log(text.indexOf('рив'))        /* 1 - если найдена такая подстрока возвращает индекс строки с которого она начинается */
console.log(text.indexOf('рив', 3))     /* -1 - если не найдена возвращает -1 */


// Includes
// StartsWith
// EndsWidth     РЕГИСТР ИМЕЕТ ЗНАЧЕНИЕ

console.log(text.includes('рив'))       /* true */
console.log(text.includes('рив', 3))    /* false */

console.log(text.startsWith('рив'))     /* false - ищет подстроку в начале строки */
console.log(text.endsWith('!'))         /* true - ищет подстроку в конце строки*/


// ПОЛУЧЕНИЕ ЧАСТИ СТРОКИ

// slice(с первого по второй(не включая))

console.log(text.slice(1, 2))           /* p */
console.log(text.slice(-1, -2))         /* т - с конца */
console.log(text.slice(2))              /* pивет! */