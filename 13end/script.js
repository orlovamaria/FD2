//Первые 6 на пустую строку Focus Out

var mainSubmit = document.querySelector('#publish');
var mainForm = document.querySelector('form');
var inputList = document.getElementsByClassName('inputLi');

console.log(inputList)

for(var i = 0; i < inputList.length; i++){
    inputList[i].addEventListener('click', function(event){
        var definedInput = event.target;
        definedInput.addEventListener('focusout', function(){
            if(definedInput.value.trim() === ''){
                definedInput.parentNode.querySelector('.validError').classList.add('validErrorOn')
            }
            else{
                if(definedInput.parentNode.querySelector('.validError').classList.contains('validErrorOn')){
                    definedInput.parentNode.querySelector('.validError').classList.remove('validErrorOn')
                }              
            }
        })
    })
}

//Select на пустую строку

var selectInput = document.querySelector('#catSelect');

var selectCheck = function(){ 
    if(selectInput.value == 'undefined'){
        selectInput.nextElementSibling.classList.add('validErrorOn')
        mainForm.setAttribute('action', '#');
    } else {
        if(selectInput.nextElementSibling.classList.contains('validErrorOn')){
            selectInput.nextElementSibling.classList.remove('validErrorOn')
        }              
    }
}

//Radio на невыбор

var radioElem = document.querySelectorAll('input[type=radio]');

var radioChecking = function(){
    var checkVar = 0;
    for (var i = 0; i < radioElem.length; i++){
        if(radioElem[i].checked == true ){
            checkVar++;
        }
    }
    if(checkVar === 0){
        document.querySelector('#radio-error').classList.add('validErrorOn');
        mainForm.setAttribute('action', '#');
    }            
}


//Checkbox на .checked

var checkboxInput = document.querySelector('#reviews');

var checkboxCheck = function(){
    if(checkboxInput.checked === false ){
        checkboxInput.nextElementSibling.classList.add('validErrorOn')
        mainForm.setAttribute('action', '#');
    }else{
        if(checkboxInput.nextElementSibling.classList.contains('validErrorOn')){
            checkboxInput.nextElementSibling.classList.remove('validErrorOn')
        }
    }
}

//Check на пустое место TextAria

var textAria = document.querySelector('#aboutSite');

var textAriaChecker = function(){
    if(textAria.value.trim() === ''){
        textAria.parentNode.querySelector('.validError').classList.add('validErrorOn')
        mainForm.setAttribute('action', '#');
    }
    else{
        if(textAria.parentNode.querySelector('.validError').classList.contains('validErrorOn')){
            textAria.parentNode.querySelector('.validError').classList.remove('validErrorOn')
        }
    }
}


// инпуты

function getInfInputs(){
    for(var i = 0; i < inputList.length; i++){
        if(inputList[i].value.trim() === ''){
            inputList[i].nextElementSibling.classList.add('validErrorOn')
            mainForm.setAttribute('action', '#')
        }
        else{
            var tempParentInput = inputList[i].nextElementSibling
            if(tempParentInput !== null && tempParentInput.classList.contains('validErrorOn')){
                inputList[i].nextElementSibling.classList.remove('validErrorOn')
            }
        }
    }
}


//Событие клика SUBMIT

// mainSubmit.addEventListener('submit', function(event){
//     selectCheck();
//     textAriaChecker();
//     radioChecking();
//     checkboxCheck();
//     getInfInputs();

//     for(var elem of inputList){
//         if(elem.value.trim() === ''){
//             elem.scrollIntoView();
//             elem.focus();
//             break;
//         }
    
    
    
//         if(selectInput.value === 'undefined'){
//             selectInput.scrollIntoView();
//             selectInput.focus();
//             break;
//         }
//         else if([...radio].every(box => box.checked === false)){
//             radioElem[0].scrollIntoView();
//             break;
//         }
//         else if(checkboxInput.checked === false){
//             checkboxInput.scrollIntoView();
//             checkboxInput.focus();
//             break;
//         }
//         else if(textAria.value.trim() === ''){
//             textAria.scrollIntoView();
//             textAria.focus();
//             break;
//         }

//     }
//     event.preventDefault();
// })

mainSubmit.addEventListener('click', function(e){
    selectCheck();
    textAriaChecker();
    radioChecking();
    checkboxCheck();
    getInfInputs();
    for(var i = 0; i < inputList.length; i++){
        if(inputList[i].value.trim() === ''){
            inputList[i].scrollIntoView()
            inputList[i].focus()
            break
        }
        else if(selectInput.value === 'undefined'){
            selectInput.scrollIntoView()
            selectInput.focus()
            break
        }
        else if([...radio].every(elem => elem.checked === false)){
            radioElem[0].scrollIntoView()
            break
       }
        else if(checkboxInput.checked === false){
            checkboxInput.scrollIntoView()
            checkboxInput.focus()
            break
        }
        else if(textAria.value.trim() === ''){
            textAria.scrollIntoView()
            textAria.focus()
            break
        }
    }
    e.preventDefault()
})
