// Task 1

// метод forEach

function vowels(str){
    var sumVowel = 0;
    var array = str.split('');
    var arrVowel = ["а", "е", "ё", "и", "о", "у", "э", "ю", "я", "ы"];
    array.forEach(function(elem){
        if(arrVowel.includes(elem)){
            return sumVowel++;
        } 
    })
   return sumVowel;
}

console.log(vowels('привет'));
console.log(vowels('как дела'));
console.log(vowels('автобетономешалка'));

// метод filter

function vowels(str){
    var array = str.split('');
    var arrVowel = ["а", "е", "ё", "и", "о", "у", "э", "ю", "я", "ы"];
    var sumVowel = array.filter(function(elem){
        return arrVowel.includes(elem);
    })
    return sumVowel.length;
}

console.log(vowels('привет'));
console.log(vowels('как дела'));
console.log(vowels('автобетономешалка'));

// метод reduce

function vowels(str){
    var array = str.split('');
    var arrVowel = ["а", "е", "ё", "и", "о", "у", "э", "ю", "я", "ы"];
    var sumVowel = array.reduce(function(sum, elem){
        if(arrVowel.includes(elem)){
            sum++;
        } 
        return sum;
    }, 0)
    return sumVowel;
}

console.log(vowels('привет'));
console.log(vowels('как дела'));
console.log(vowels('автобетономешалка'));

// Task 2

var names = ["Max", "Vera", "Joe", "Annette", "Sussan"];
var jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"];

function combineNameWork(arr1, arr2){
     var obj = {};
     arr1.forEach(function(elem, index){
         obj[elem] = arr2[index]
     })
     return obj;
}

console.log(combineNameWork(names, jobs))

// Task 3

function canFind(arr1, arr2){

    var result = arr1.every(function(elem){
        return arr2.some(function(el){
            return el.includes(elem)
        })
    })
  
    return result;
}

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]));
console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]));
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]));



