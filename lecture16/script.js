function getInfo(){
    console.log('Info 1');
}

function getInfo2(){
    console.log('Info 2');
}

var btn2 = document.querySelector('#btn2');
btn2.ondblclick = getInfo;
btn2.ondblclick = getInfo2;

btn2.ondblclick = null;


var btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function(){
    getInfo();
})

btn3.addEventListener('click', getInfo2);

btn3.removeEventListener('click', getInfo2);




// Всплытие и погружение событий

var box1 = document.querySelector('.container1')
var box2 = document.querySelector('.container2')
var box3 = document.querySelector('.container3')


box3.addEventListener('click', function(event){
    console.log('Синий квадрат');

    // console.log('___________________target');
    // console.log(event.target);
    // console.log('___________________currentTarget');
    // console.log(event.currentTarget);
     alert(1);
}, false)

box2.addEventListener('click', function(event){
    console.log('Зеленый квадрат');
   
    //event.stopPropagation();
    //event.stopImmediatePropagation();
    // console.log('___________________target');
    // console.log(event.target);
    // console.log('___________________currentTarget');
    // console.log(event.currentTarget);
    alert(1);
}, false)

box2.addEventListener('click', function(event){
    console.log('Зеленый квадрат 2');
    alert(1);
})

box1.addEventListener('click', function(event){
    console.log('Желтый квадрат');
 
    // console.log('___________________target');
    // console.log(event.target);
    // console.log('___________________currentTarget');
    // console.log(event.currentTarget);
    alert(1);
}, false)

// document.body.addEventListener('click', function(){
//     console.log('Body event');
//     alert(1);
// }, true)

// document.addEventListener('click', function(){
//     console.log('Document event');
//     alert(1);
// }, true)

// window.addEventListener('click', function(){
//     console.log('Window event');
//     alert(1);
// }, true)