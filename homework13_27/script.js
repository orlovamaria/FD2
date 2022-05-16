var form = document.forms.valid_form;
var inputs = document.querySelectorAll('.text')
var textarea = document.getElementById('description_of_the_site')
var select = form.elements.catalog_category;
var radio = document.querySelectorAll('input[type=radio]')
var checkbox = document.getElementById('allow_reviews')
var submit = document.getElementById('toPublish')




// Валидация на пустое поле во всех input 
for(var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('click', function(event){
        var definedInput = event.target;
        definedInput.addEventListener('focusout', function(){
            if(definedInput.value.trim() === ''){
                definedInput.parentNode.querySelector('.allError').classList.add('allErrorBlock')
            }
            else{
                if(definedInput.parentNode.querySelector('.allError').classList.contains('allErrorBlock')){
                    definedInput.parentNode.querySelector('.allError').classList.remove('allErrorBlock')
                }
               
            }
        })
    })
}
// Проверка на пустую строку textarea
textarea.addEventListener('focusout', function(){
    if(textarea.value.trim() === ''){
        textarea.parentNode.querySelector('.allError').classList.add('allErrorBlock')
    }
    else{
        if(textarea.parentNode.querySelector('.allError').classList.contains('allErrorBlock'))
        textarea.parentNode.querySelector('.allError').classList.remove('allErrorBlock')
    }
})

// Инпут "Посетителей в сутки" должен содержать именно число
var visitors = document.getElementById('visitors') 
visitors.addEventListener('change', function(){
    if(isNaN(visitors.value)){
        visitors.focus()
        alert('Введите число')
    }
})

// textarea не менее 10 символов
textarea.addEventListener('change', function(){
    if(textarea.value.trim().length < 10){
        textarea.focus()
        alert('Ввод не менее 10 символов')
    }
})


// E-mail должен содержать @ и .
var eMail = document.getElementById('e-mail')
eMail.addEventListener('change', function(){
    var str = '@.' 
    if(!(eMail.value.includes(str[0]) && eMail.value.includes(str[1]))){
        eMail.focus()
        alert('E-mail введен некорректно')
    }
})

// URL должен содержать либо http или www или .html 
var urlSite = document.getElementById('urlSite')
urlSite.addEventListener('change', function(){
    var arr = ['http', 'www', '.html'];
    var result = arr.some(function(elem){
        return urlSite.value.includes(elem)
    })
    if(result === false){
        alert('URL введен некорректно')
    }
})


// При клике на кнопку проверка заполенения всех полей
function getInfselect(){
    if(select.value === 'undefined'){
        select.nextElementSibling.classList.add('allErrorBlock')
        form.setAttribute('action', '#')
    }
    else{
        if(select.nextElementSibling.classList.contains('allErrorBlock'))
        select.nextElementSibling.classList.remove('allErrorBlock')
    }
}

function getInfInputRadio(){
    var temp = [...radio].find(elem => elem.checked === true);
    if(temp === undefined) {
        radio[0].parentNode.querySelector('.allError').classList.add('allErrorBlock');
        form.setAttribute('action', '#');
    }
    else{
        radio[0].parentNode.querySelector('.allError').classList.remove('allErrorBlock');
    }
}

function getInfInputs(){
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].value.trim() === ''){
            inputs[i].nextElementSibling.classList.add('allErrorBlock')
            form.setAttribute('action', '#')
        }
        else{
            var tempParentInput = inputs[i].nextElementSibling
            if(tempParentInput !== null && tempParentInput.classList.contains('allErrorBlock')){
                inputs[i].nextElementSibling.classList.remove('allErrorBlock')
            }
        }
    }
}

function getInfCheckbox(){
    if(checkbox.checked === false){
        checkbox.nextElementSibling.classList.add('allErrorBlock')
        form.setAttribute('action', '#')
    }
    else{
        if(checkbox.nextElementSibling.classList.contains('allErrorBlock')){
            checkbox.nextElementSibling.classList.remove('allErrorBlock')
        }
    }
}

function getInftextarea(){
    if(textarea.value.trim() === ''){
        textarea.nextElementSibling.classList.add('allErrorBlock')
        form.setAttribute('action', '#')
    }
    else{
        if(textarea.nextElementSibling.classList.contains('allErrorBlock')){
            textarea.nextElementSibling.classList.remove('allErrorBlock')
        }
    }
}

submit.addEventListener('click', function(){
        getInfselect()
        getInfInputRadio()
        getInfInputs()
        getInftextarea()
        getInfCheckbox()
        for(var i = 0; i < inputs.length; i++){
            if(inputs[i].value.trim() === ''){
                inputs[i].scrollIntoView()
                inputs[i].focus()
                break
            }
            else if(select.value === 'undefined'){
                select.scrollIntoView()
                select.focus()
                break
            }
            else if([...radio].every(elem => elem.checked === false)){
                radio[0].scrollIntoView()
                break
           }
            else if(checkbox.checked === false){
                checkbox.scrollIntoView()
                checkbox.focus()
                break
            }
            else if(textarea.value.trim() === ''){
                textarea.scrollIntoView()
                textarea.focus()
                break
            }
        }
})




