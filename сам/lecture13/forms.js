// keyup and keydown

var form = document.forms.form1;
var input1 = form.elements.fName;
var input2 = form.elements.lName;
var input3 = form.elements.age;
var input4 = form.elements.aboutMe;
var input5 = form.elements.weight;

input1.addEventListener('keydown', function(event){
    //console.log('Hello Test!!!');
    //console.log(event.key);
    //console.log(event.keyCode);
    //console.log(event.which);
    //console.log(event.charCode)
    //console.log(event.code);
})



// События Форм и элементов формы

// select


input1.addEventListener('select', function(){
    input1.style.color = 'red';
})

// focus

input2.addEventListener('focus', function(){
    input2.style.border = '10px solid green';
    input2.style.transition = '1s';
})

// blur

input2.addEventListener('blur', function(){
    input2.style.border ='0';
})

// change

input3.addEventListener('change', function(){
    console.log(input3.value);
})

// input

input4.addEventListener('input', function(){
    console.log(input4.value);
})


// invalid

input5.addEventListener('invalid', function(event){
    event.preventDefault();

    input5.parentElement.innerHTML += '<div>12372167813678</div>'
})


// submit

form.addEventListener('submit', function(event){
    event.preventDefault();
})