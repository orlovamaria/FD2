// Открытие формы после анимации welcom

let circleWraper = document.querySelector('.circle_wraper');
let userDataForm = document.querySelector('.userDataForm')
let userNameInput = document.getElementById('userNameForm')
let userName = document.querySelector('.userName')

circleWraper.addEventListener('animationend', function(){
        userDataForm.classList.add('displayBlock')
})

let userDataFormButton = document.getElementById('userDataFormButton')
let startWindow = document.querySelector('.start-window')
let infBlocks = document.querySelectorAll('.inf-blocks-style')

// Открытие стартовой страницы после заполнения формы

userDataFormButton.addEventListener('click', function(){
    if(userNameInput.value === ''){
        alert('Please, enter a name!')
    }
    if(userNameInput.value !== ''){
        userDataForm.classList.remove('displayBlock')
        userDataForm.style.display = 'none'
        startWindow.classList.add('displayBlock')
        userName.innerHTML = userNameInput.value;
        infBlocks.forEach(function(elem){
            return elem.classList.add('displayBlock')
        })
    }
})

// Открытие первого уровня (собери ёлку из данных фигур)

let firstLevelButton = document.querySelector('.first-level-button');
let firstLevelBody = document.querySelector('.first-level-body')
let levelsStartWindow = document.querySelector('.levels-start-window')
let firstLevelBodyInfBlock = document.querySelector('.first-level-body-infBlock')

firstLevelButton.addEventListener('click', function(){
    firstLevelBody.style.display = 'flex';
    firstLevelBody.classList.add('displayBlock')
    levelsStartWindow.style.display = 'none'
    firstLevelBodyInfBlock.style.display = 'block'
})

// Функционал перемещения элементов первого уровня

let jsElem = document.querySelectorAll('.js-elem')
let elemDrags = document.querySelectorAll('.elem-drag')

let brownSquare = document.querySelector('.brown-square')
let firstGreenTriangle = document.querySelector('.firstGreenTriangle')
let secondGreenTriangle = document.querySelector('.secondGreenTriangle')
let popupDoneCorrectly = document.getElementById('popup_done_correctly')
let firstLevelBodyDoneButton = document.querySelector('.first-level-body-done-button')
let popupDoneIncorrectly = document.querySelector('#popup_done_incorrectly')

function dragAndDrop(){
    let activeElement;
    elemDrags.forEach(function(elemDrag){
        elemDrag.addEventListener('dragstart', function(event){
            activeElement = event.target;
            setTimeout(function(){
                elemDrag.style.display = 'none'
            }, 0)
        })
        elemDrag.addEventListener('dragend', function(){
            elemDrag.style.display = 'flex'
        })
    })
    
    jsElem.forEach(function(elem){
        elem.addEventListener('dragover', function(event){
            event.preventDefault()
        })
        elem.addEventListener('dragenter', function(event){
            elem.style.background = '#d1d8e2'
            event.preventDefault()
        })
        elem.addEventListener('dragleave', function(){
            elem.style.background = 'transparent'
        })
        elem.addEventListener('drop', function(){
            elem.append(activeElement)
            if(activeElement.classList.contains('green-triangle')){
                activeElement.style.position = 'absolute'
                activeElement.style.right = '-171px'
            }
            elem.style.background = 'transparent'
        })
    })
}

dragAndDrop()

// Открытие модальных окон при (не) правильно выполненных заданиях

firstLevelBodyDoneButton.addEventListener('click', function(){
    if(brownSquare.offsetParent.classList.contains('white-square')){
        if(firstGreenTriangle.offsetParent.classList.contains('white-triangle')){
            if(secondGreenTriangle.offsetParent.classList.contains('white-triangle')){
                popupDoneCorrectly.classList.add('displayBlock')
            }
            else{
                popupDoneIncorrectly.classList.add('displayBlock')
            setTimeout(function(){
                popupDoneIncorrectly.classList.remove('displayBlock')
            }, 2000)
            }
        }
        else{
            popupDoneIncorrectly.classList.add('displayBlock')
        setTimeout(function(){
            popupDoneIncorrectly.classList.remove('displayBlock')
        }, 2000)
        }
    }
    else{
        popupDoneIncorrectly.classList.add('displayBlock')
        setTimeout(function(){
            popupDoneIncorrectly.classList.remove('displayBlock')
        }, 2000)
    }
})



