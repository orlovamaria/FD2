/* Разработка приложения “Книги”.
1. Объявить класс под названием “Book”
2. Класс “Book”. У каждой книги(созданного объекта от класса Book) есть “название”, “автор”, “количество экземпляров”, “количество страниц”.
 Есть метод который выводит количество страниц книги.
 Есть метод который считает количество глав(1 глава равна 10 страницам).


3. Класс “Journal”. У каждого журнала(созданного объекта от класса Journal)есть поля: "название", “год выпуска”, "месяц выпуска," номер выпуска”, “количество страниц”.
 Есть метод который выводит данные о количестве страниц.
 Есть метод, который выводит такие данные как: "номер выпуска", "год выпуска", "месяц выпуска".
 */

function Book(title, numberOfPages, author, numberOfCopies){
   this.title = title;
   this.author = author;
   this.numberOfCopies = numberOfCopies;
   this.numberOfPages = numberOfPages;
}
Book.prototype.getNumberOfPages = function(){
    return this.numberOfPages;
}
Book.prototype.getCountChapters = function(){
    return Math.round(this.numberOfPages / 10);
}
var book = new Book('title', 'author', 199, 27);
console.log(book.getNumberOfPages())
console.log(book.getCountChapters())



function Journal(title, numberOfPages, yearProd, monthProd, numberProd){
    this.yearProd = yearProd;
    this.monthProd = monthProd;
    this.numberProd = numberProd;
    Book.call(this, title, numberOfPages)
}
// Прототипное наследование
Journal.prototype = Object.create(Book.prototype)
Journal.prototype.constructor = Journal; /* оставиили конструктор старым, без значений класса book */


Journal.prototype.getInfoProd = function(){
    return this.yearProd + ' ' + this.monthProd + ' ' + this.numberProd;
}
var journal = new Journal('Newt', 199, 2022, 04, 10);
console.log(journal)
console.log(journal.getInfoProd())
console.log(journal.getNumberOfPages())

