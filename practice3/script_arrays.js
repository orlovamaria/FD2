//1. Создайте функцию, которая принимает массив чисел или букв и возвращает строку.

/*arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"*/


function getString(array){
    array.join('');
    return array;
}

function arrayToString(arr){
    var str = '';
    for(var i = 0; i < arr.length; i++){
        str += arr[i];
    }
    return str;
}





