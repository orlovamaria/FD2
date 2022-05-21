//  Task 1

var inputCancelClick1 = document.querySelector('input[value=hello]')
var inputCancelClick2 = document.querySelector('input[type=number]')
var inputCancelClick3 = document.querySelector('input[type=email]')

function openAlert1(){
    alert(inputCancelClick1.value)
    inputCancelClick1.removeEventListener('click', openAlert1)
}
inputCancelClick1.addEventListener('click', openAlert1)

function openAlert2(){
    alert(inputCancelClick2.value)
    inputCancelClick2.removeEventListener('click', openAlert2)
}
inputCancelClick2.addEventListener('click', openAlert2)

function openAlert3(){
    alert(inputCancelClick3.value)
    inputCancelClick3.removeEventListener('click', openAlert3)
}
inputCancelClick3.addEventListener('click', openAlert3)


//  Task 2

var inputs = document.querySelectorAll('#inputsTask2')

inputs.forEach(function(elem){
    elem.addEventListener('focusout', function(){
        return elem.nextElementSibling.innerHTML = 'Вы ввели ' + elem.value
    })
})

//  Task 3

var btnSubmit = document.querySelector('button[type=submit]')

btnSubmit.addEventListener('click', function(e){
    var result = 0;
    var form = document.querySelector('#sum-form');
    form.querySelectorAll('input').forEach(function(elem){
        return result += +elem.value
    })
    alert(result)
    e.preventDefault()
})

//  Task 4

var select = document.querySelector('select');
var inputSelect = document.querySelector('#inputSelect')

select.addEventListener('change', function(event){
    inputSelect.value = event.target.options[event.target.selectedIndex].text
})

// Функция выбора случайных чисел

function randomNumber(){
    var question1 = Math.floor(1+Math.random() * (10+1-1))
    var question2 = Math.floor(11+Math.random() * (20+1-11))
    var question3 = Math.floor(21+Math.random() * (30+1-21))
    var question4 = Math.floor(31+Math.random() * (40+1-31))
    var question5 = Math.floor(41+Math.random() * (50+1-41))

return 'Вопросы под номерами: ' + question1 + ' ' + question2 + ' ' + question3 + ' ' + question4 + ' ' + question5
}
console.log(randomNumber())
