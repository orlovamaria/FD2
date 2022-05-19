//  Task 1
 
 var todoList = document.querySelector('#todo-list');

 todoList.addEventListener('click', function(event){
       if(event.target.classList.contains('waves-effect')){
           var newTitle = prompt('Input new title!')
            event.target.previousElementSibling.innerHTML = newTitle;
       }
 })

 //  Task 2

 var numbers = document.querySelector('#numbers');
 var input = numbers.querySelector('input[type=text]')

 numbers.addEventListener('click', function(event){
     if(event.target.classList.contains('waves-effect')){
        input.value = event.target.innerHTML * event.target.innerHTML
     }
 })

 //  Task 3
 var count = 3;

 var menuList = document.getElementById('menuList');
 var btnAdd = document.getElementById('btnAdd')

 btnAdd.addEventListener('click', function(){
    menuList.innerHTML += '<li>task ' + ++count + '</li>'
 })

 menuList.addEventListener('click', function(e){
     if(e.target.tagName = 'LI'){
        e.target.classList.add('text-decoration')
     }
 })


 //  Task 5
 var cou = 0;

 var btnDecrease = document.getElementById('decrease');
 var btnAdd = document.getElementById('add')
 var price = document.getElementById('price')
 var result = document.getElementById('result')
 var summ = document.getElementById('summ')
 var currentTotal = document.getElementById('current-total')

 btnDecrease.addEventListener('click', function(){
     if(cou > 0){
        result.value = --cou
     }
 })
 btnAdd.addEventListener('click', function(){
    result.value = ++cou
 })

 summ.addEventListener('click', function(){
    currentTotal.innerHTML = cou * price.innerHTML
 })

 //  Task 6
var summa = document.getElementById('summa');
var currentTotalItems = document.getElementById('current-total-items')
var currentCartItems = document.getElementById('current-cart-items')

currentCartItems.addEventListener('click', function(e){
    if(e.target.dataset.btn === 'btn-neg'){
        if(e.target.parentElement.querySelector('.total').value > 0){
            e.target.parentElement.querySelector('.total').value--;
        }
    }
    else if(e.target.dataset.btn === 'btn-pos'){
        e.target.parentElement.querySelector('.total').value++;
    }
})
var card = document.querySelectorAll('.card')
summa.addEventListener('click', function(){
    var res = 0;
    card.forEach(function(elem){
        var valueInputs = elem.querySelector('.total');
        var prices = elem.querySelector('.price')
        res += valueInputs.value * prices.innerHTML
    })
    currentTotalItems.innerHTML = res
})

//  Task 7

var inputInfo = document.getElementById('input-info');

inputInfo.addEventListener('keydown', function(e){
    if(e.code === 'Enter'){
        var text = document.createElement('p')
        text.innerHTML = inputInfo.value
        inputInfo.after(text)
        inputInfo.value = ''
    }
})




 