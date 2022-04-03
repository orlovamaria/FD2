//1. Проверьте, является ли первая буква в каждом слове заглавной. 


// checkTitle("I Am Still Trying To Figure That Out!") ➞ true

// checkTitle("I Work In An Office!") ➞ true

// checkTitle("I do NOT work in an office") ➞ false


function checkTitle(string){
    var resultStr = string.trim().split(' ');  /* trim удалил ненужные символы перед и после строки типо пробелов и прочего */
    for (var i = 0; i < resultStr.length; i++){
        if(resultStr[i][0] === resultStr[i][0].toUpperCase()){
            return false;
        }
    }
    return true;
}

console,log(checkTitle("I Am Still Trying To Figure That Out!"));
console.log(checkTitle("I Work In An Office!"));
console.log(checkTitle("I do NOT work in an office"));














// 2. Создайте функцию, которая находит слово "велосипед" в заданной строке (без учета регистра). Если найдено, верните "Велосипед найден", иначе верните "Велосипеда нет".


// bikeSearch("Также популярен среди туристов и в спортивных целях.") ➞ "Велосипеда нет"

// bikeSearch("Велосипед как «транспортное средство") ➞ "Велосипед найден"

// bikeSearch("Первый велосипед в мире, похожий на используемые в наши дни, назывался Rover") ➞ "Велосипед найден"


//"велосипед" может встречаться в разных регистрах (например, в верхнем, нижнем, смешанном).


 
function bikeSearch(str){
    var result = str.toLowerCase().indexOf('велосипед');
    if(result === -1){
         return "Велосипеда нет"
    }
    else{
        return "Велосипед найден"
    }
}

console.log(bikeSearch("Также популярен среди туристов и в спортивных целях."));
console.log(bikeSearch("Велосипед как «транспортное средство"));
console.log(bikeSearch("Первый велосипед в мире, похожий на используемые в наши дни, назывался Rover"));













//3. Создайте функцию, которая принимает строку и возвращает количество (количество) гласных, содержащихся в ней.


// countVowels("Braid") ➞ 2

// countVowels("Daughter") ➞ 3

// countVowels("Package") ➞ 3
var obj = {a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'};

function countVowels(str){
    str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if(str[i] === obj[str[i]]){    /* str[i] in obj */
            ++count;
        }
    }
    return count;
}

console.log(countVowels("Braid"));
console.log(countVowels("Daughter"));
console.log(countVowels("Package"));


// a, e, i, o, u считаются гласными (без "y").
// Все тестовые примеры состоят из одного слова и содержат только буквы.