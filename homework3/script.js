// Task 1 !!!

function sumFive(array){
    var summ = 0;
     for(var i = 0; i < array.length; i++){
         if(array[i] > 5){
             summ += array[i];
         }
     }
     return summ;
}

console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));

// 2 способ Task 1

function sumFive(array){
    var summ = 0;
    array.forEach(element => {
        if(element > 5){
            summ += element;
        }
    });
    return summ;
}

console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));







// Тask 2 !!!

function objectToArray(object){
    var Array = [];
    for(key in object){
        Array.push([key, object[key]])
    }
    return Array;
}

console.log(objectToArray({D: 1, B: 2, C: 3}));
console.log(objectToArray({likes: 2, dislikes: 3, followers: 10}));




// Task 3 !!!

function numbersSum(Array){
    var summ = 0;
    for(var i = 0; i < Array.length; i++){
        if(Number.isInteger(Array[i])){
             summ += Array[i];
        }
    }
    return summ;
}

console.log(numbersSum([1, 2, "13", "4", "645"]));
console.log(numbersSum([true, false, "123", "75"]));
console.log(numbersSum([1, 2, 3, 4, 5, true]));




// Task 4 (Не очень понятно как сортировать. В данном решении я просто сортирую каждый массив.)

function keysAndValues(object){
     var Array = [];
     var arr1 = [];
     var arr2 = [];
     for(key in object){
         arr1.push(key);
         arr2.push(object[key]);
     }
     arr1.sort();
     arr2.sort();
     return Array = [arr1, arr2];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// В этом решении я сортирую 2 массив(значений объекта) согласно порядка значений после сортировки 1 массива(ключей объекта)

function keysAndValues(object){
    var Array = [];
    var arr1 = [];
    var arr2 = [];
    for(key in object){
        arr1.push(key);
    }
    arr1.sort();

    for(var i = 0; i < arr1.length; i++){
        arr2.push(object[arr1[i]]);
    }

    return Array = [arr1, arr2];
}


console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));