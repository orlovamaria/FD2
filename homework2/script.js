// Задание 1
function convertElements(Array){
        let newArr = Array.map(element => {
            return element.toString();
        });
        return newArr;
};
        
console.log(convertElements([1, 2, "x", "z"]));
console.log(convertElements(["pdf", 123, "def", 456]));
console.log(convertElements([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(convertElements([]));


// Задание 2

function numericTrue(Array2){
    let newArr2 = Array2.filter(elem => {
        return elem == true;
   });
   return newArr2.length;
};

console.log(numericTrue([true, false, false, true, false]));
console.log(numericTrue([false, false, false, false]));
console.log(numericTrue([]));

// Задание 3

function highLow(Array3){
    Array3.sort((a,b) => b-a);
    
    return `${Array3[0]}, ${Array3[Array3.length - 1]}`;
}

console.log(highLow([1, 2, 3, 4, 5]));
console.log(highLow([1, 9, 3, 4, -5]));
console.log(highLow([1, 2, -3, 4, 5]));
console.log(highLow([13]));



