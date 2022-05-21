// Генерируемые и пользовательские события

var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');

input1.addEventListener('input', function(event){
    console.log(event.target.value);

    input2.dispatchEvent(new Event('click'));

});

input2.addEventListener('click', function(event){
    input2.value = input1.value;
    console.log(event.isTrusted);
})