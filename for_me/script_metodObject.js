// MEТОДЫ РАБОТЫ С ОБЪЕКТАМИ

/* ASSIGN 
Метод Object.assign() копирует все перечисляемые собственные 
свойства из одного или нескольких исходных объектов в целевой 
объект. Он возвращает измененный целевой объект.*/
var object = {
    a: 1,
    b: 2,
    c: 5,
}

var object2 = {
    a: 2,
    b: 4,
    c: 6,
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var arr = [[1,2], [3,4], [5,6]]

var res = Object.assign(object, object2)
// console.log(res)        /* {a: 2, b: 4, c: 6} Метод позволяет добавить изменения в целевой объект чтобы не искать и не вносить вручную во всем объекте изменения*/
// console.log(object)     /* {a: 2, b: 4, c: 6} целевой объект изменен, он нашёл совпадения имен и заменил значения на значения второго объекта*/
// console.log(object2)    /* {a: 2, b: 4, c: 6} */

var a = Object.assign({}, array)  /* преобразовывает массив в объект */
// console.log(a)
var b = Object.assign({}, arr)  /* преобразовывает массив в объект */
// console.log(b) /* {0: [1,2], 1: [3,4], 2: [5,6]} - в ключ записывает индекс в значение - значение массива*/


/* CREATE
Метод Object.create() создает новый объект, используя 
существующий объект в качестве прототипа вновь созданного объекта. */
var person = {
    name: 'Maria',
    lastname: 'Orlova',
    age: 29,
}
person.father = 'alex';
// console.log(person)
var me = Object.create(person); /* Создаёт новый объект(копирует тип данных) */
var me = 0;

me.mother = 'mama'
me.father = 'mama'

// console.log(me)


/* defineProperties 
Метод Object.defineProperties() определяет новые или изменяет 
существующие свойства, непосредственно на объекте, возвращая этот объект.*/
var o = {
    
}



/* KEYS - возвращает массив ключей объекта*/
/* VALUES - возвращает массив значений объекта*/

var object86 = {
    a: 1,
    b: 2,
    c: 5,
}

let keys = Object.keys(object86)
// console.log(keys)    /* Получаем массив ключей объекта */
let value = Object.values(object86)
// console.log(value)  /* Получаем массив значений объекта */


/* ENTRIES Получаем массив с вложенными массивами. Во вложенных массивах два значения из ключа и знач объекта*/
var object87 = {
    a: 1,
    b: 2,
    c: 5,
}

let entries = Object.entries(object87)
console.log(entries)


/* FROMENTRIES передаем любые массивы и получаем объект*/
var object56 = {
    a: 1,
    b: 2,
    c: 5,
}

let fromEntries = Object.fromEntries([['a', 'values'], ['b', 'better']])
console.log(fromEntries) /*  */


/* */




/* Копирование объектов */

let obj34 = {
    name: 'Denis'
}

let obj56 = {
    age: 20
}

let object90 = obj34 /* Такое копирование не верно, так как меняя что-то object будет меняться значение и в obj34*/

let newObj = Object.assign({}, obj34, obj56)  /* Такое копирование ВЕРНО, так как меняя что-то newObj значение в obj34 меняться не будет!!!!!! Важно чтобы первый аргумент был пустым объектом иначе изменится obj34*/

// НО это метод неглубокого копирования то есть если в объекте есть вложенные объекты, они при замене значения изменятся и в целевом объекте!!!!!

// Метод глубокого копирования

let glObj = JSON.stringify(obj34)
let nObj = JSON.parse(glObj)

// console.log(nObj)   