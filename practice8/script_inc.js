
/* 1. Напишите класс с именем Name и создайте следующие поля (как fname и lname):

Метод getFullname, который возвращает имя и фамилию.
Метод getInitials , который возвращает первые буквы имени и фамилии.
Не забудьте также запретить доступ к атрибутам fname и lname по отдельности.

var a1 = new Name("john", "SMITH")

a1.fname ➞ undefined

a1.lname ➞ undefined

a1.getFullname() ➞ "John Smith"

a1.getInitials() ➞ "J.S"

Убедитесь, что только первая буква каждого имени написана с заглавной буквы.
*/

// function Name(fname, lname){
//     var fname = fname;
//     var lname = lname;
//     this.getFullname = function(){
//         var currentFirstName = fname[0].toUpperCase() + fname.toLowerCase().slice(1)
//         var currentLastName = lname[0].toUpperCase() + lname.toLowerCase().slice(1)
//         return currentFirstName + ' ' + currentLastName;
//     }
//     this.getInitials = function(){
//         var upFname = fname[0].toUpperCase()
//         var upLname = lname[0].toUpperCase()
//         return upFname + '.' + upLname
//     }
// }
// var a1 = new Name("john", "SMITH")
// console.log(a1.fname)
// console.log(a1.lname)
// console.log(a1.getFullname())
// console.log(a1.getInitials())
 

 





/* 2. Напишите класс с именем CurrencyConverter и создайте следующие поля (как amountMoney):
Такие поля как  currencyUSD = 2,52, currencyEuro = 2,99, currencyRub = 0,034 не должны иметь общий доступ.
Метод getDollarCurrency, который конвертирует белорусские рубли в доллар и возвращает результат.
Метод getEuroCurrency, который конвертирует белорусские рубли в евро и возвращает результат.
Метод getRubCurrency, который конвертирует белорусские рубли в российские рубли и возвращает результат.
Не забудьте также запретить общий доступ к атрибутам currencyUSD, currencyEuro, currencyRub по отдельности.


var currency = new CurrencyConverter(10);

currency.getDollarCurrency() ➞ "3.97 $"
currency.getEuroCurrency() ➞ "3.34 £"
currency.getRubCurrency() ➞ "294.11 ₽"
currency.getDollarCurrency ➞ undefined
*/

// function CurrencyConverter(amountMoney){
//     this.amountMoney = amountMoney;
//    var currencyUSD = 2.52;
//    var currencyEuro = 2.99;
//    var currencyRub = 0.034;
//    this.getDollarCurrency = function(){
//        return (this.amountMoney / currencyUSD).toFixed(2) + ' $'
//    }
//    this.getEuroCurrency = function(){
//     return (this.amountMoney / currencyEuro).toFixed(2) + ' £'
//    }
//    this.getRubCurrency = function(){
//     return (this.amountMoney / currencyRub).toFixed(2) + ' ₽'
//    }
//    var getDollarCurrency1 = (this.amountMoney / currencyUSD).toFixed(2) + ' $'
// }
// var currency = new CurrencyConverter(10);
// console.log(currency.getDollarCurrency())
// console.log(currency.getEuroCurrency())
// console.log(currency.getRubCurrency())
// console.log(currency.getDollarCurrency1)


