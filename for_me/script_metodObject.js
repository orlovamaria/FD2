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

var res = Object.assign(object, object2)
console.log(res)        /* {a: 2, b: 4, c: 6} Метод позволяет добавить изменения в целевой объект чтобы не искать и не вносить вручную во всем объекте изменения*/
console.log(object)     /* {a: 2, b: 4, c: 6} целевой объект изменен, он нашёл совпадения имен и заменил значения на значения второго объекта*/
console.log(object2)    /* {a: 2, b: 4, c: 6} */




/* CREATE
Метод Object.create() создает новый объект, используя 
существующий объект в качестве прототипа вновь созданного объекта. */
var person = {
    name: 'Maria',
    lastname: 'Orlova',
    age: 29,
}
person.father = 'alex';
console.log(person)
// var me = Object.create(person); Создаёт новый объект(копирует тип данных)
var me = 0;

me.mother = 'mama'
me.father = 'mama'

console.log(me)


/* defineProperties 
Метод Object.defineProperties() определяет новые или изменяет 
существующие свойства, непосредственно на объекте, возвращая этот объект.*/
var o = {
    
}



/* */




/* */




/* */




/* */




/* */