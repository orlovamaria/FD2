// Task 1

// var btnValidInput = document.getElementById('btn-submit-name')
 
 
//  function validInput(){
//      var form = document.forms.form1;
//      var firstName = form.elements.firstName;
//      var errorMessage = document.querySelector('.error-message')

//      if(firstName.value === ''){
//         errorMessage.style.display = 'block';
//         firstName.focus();
//      }else{
//         errorMessage.style.display = 'none';
//      }
//  }

//  btnValidInput.onclick = validInput


//  Task 3

// var quad = document.querySelector('.blue_block')
//  function changeBackground(){
//     quad.classList.toggle('changeColor')
      
//  }

//  quad.onclick = changeBackground
//  quad.onmousemove = changeBackground
//  quad.onmouseover = changeBackground
// quad.addEventListener('contextmenu', changeBackground)

// Task 4

// var like = document.querySelector('img[src$="like.png"]')
// var likeCounter = document.getElementById('like-counter')
// var counter = 0;

// function changeCounter(){

//     likeCounter.innerHTML = counter++
// }
// like.addEventListener('dblclick', changeCounter)


// Task 5

// var inputName = document.getElementById('first_name2');

// inputName.addEventListener('keyup', function(event){
//     if(event.code === 'Enter'){
//         var currentValue = inputName.value;
//         var parentTable = document.getElementById('name_list')
//         parentTable.innerHTML += '<tr><td>' + currentValue + '</td></tr>'
//         inputName.value = ''
//     }
// })


// Task 6

// var btnOpen = document.getElementById('open-modal');
// var modal = document.getElementById('modal1')

// btnOpen.addEventListener('click', function(){
//     modal.classList.add('modal_open');
// })

// window.addEventListener('keyup', function(event){
//     if(event.code === 'Escape'){
//         modal.classList.remove('modal_open');
//     }
// })

// Task 2
var openWindow = document.querySelector('.error-message-lastname');
var btnSubmitLastame = document.querySelector('#btn-submit-lastname');


function submitLastame(){
    var form = document.forms.form2;
    var input = form.elements.lastName;
    var letters = input.value.length
    if(input.value === '' || letters < 3){
        input.focus();
        input.style.cssText = 'border: solid red 2px;'
        openWindow.style.cssText = 'display: block;'
    }
}

btnSubmitLastame.onclick = submitLastame;


// Task 8
var firstLogin = document.querySelector('#first_login');
var evError = document.querySelector('.error-message2')
firstLogin.addEventListener('keyгз', function(event){
    if(event.code === 'Enter'){
        if(firstLogin.value[0] === firstLogin.value[0].toUpperCase()){
                evError.style.display = 'block'
        }
    }
})


// Task 9

var inputWater = document.querySelector('#first_kg')
var btnWater = document.querySelector('#calculate-water')
var spanWater = document.querySelector('#final-calculate')

btnWater.addEventListener('click', function(){
    var value = inputWater.value;
    spanWater.innerHTML = value * 30 + ' мл'
    inputWater.value = ''
})

// Task 10

var inputDays = document.querySelector('#first_days')
var inputRate = document.getElementsByTagName('select');
var btnSalary = document.querySelector('#calculate-salary')
var resultSalary = document.querySelector('#final-salary')

btnSalary.addEventListener('click', function(){
    var result = (inputDays.value * 8) * inputRate[0].value
    resultSalary.innerHTML = result + ' $'
    inputDays.value = ''
})


