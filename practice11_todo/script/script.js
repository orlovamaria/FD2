var inputData = document.querySelector('#inputTask');
var btnAddTask = document.querySelector('#btn-add');
var ulList = document.querySelector('#list');
var spans = document.getElementsByTagName('span');
var container = document.getElementsByClassName('container')
var listElements = ulList.children;


// Coздание кнопки "Информация о себе"

var btnInfAboutMyself = document.createElement('button');
btnInfAboutMyself.className = 'about_myself'
btnInfAboutMyself.innerHTML = 'информация о себе'
ulList.after(btnInfAboutMyself)

// Coздание модального окна

var modalWindow = document.createElement('div')
var modalWindowText = document.createElement('span')
modalWindowText.innerHTML = 'Орлова Мария Александровна'
modalWindow.prepend(modalWindowText)
modalWindow.className = 'modal_window'
container[0].prepend(modalWindow);

// Cоздание счетчика

var counters = document.createElement('div')
var counterCross = document.createElement('div')
var counterCrossText = document.createElement('span')
var counterCrossNum = document.createElement('div')
counterCrossText.innerHTML = 'Сompleted task'
counterCrossNum.innerHTML = '0'
counterCross.prepend(counterCrossText)
counterCross.append(counterCrossNum)

var counterNotСrossedOut = document.createElement('div')
var counterNotСrossedOutText = document.createElement('span')
var counterNotСrossedOutNum = document.createElement('div')
counterNotСrossedOutText.innerHTML = 'An unfulfilled task'
counterNotСrossedOutNum.innerHTML = listElements.length;
counterNotСrossedOut.prepend(counterNotСrossedOutText)
counterNotСrossedOut.append(counterNotСrossedOutNum)


counters.prepend(counterCross)
counters.append(counterNotСrossedOut)
counterCross.classList.add('counters')
counterNotСrossedOut.classList.add('counters')
ulList.after(counters)



//<li>Task1 <span>Delete</span></li>s
function createTask(){
    var inputValue = inputData.value;
    inputData.value = '';

    var date = new Date()

    while(inputValue === ''){
        inputValue.focus()
    }

    var newLi = document.createElement('li');
    newLi.innerText = inputValue + ' ' + date.toLocaleDateString();

    var newSpan = document.createElement('span');
    newSpan.innerText = ' DELETE';

    newLi.append(newSpan);
    ulList.append(newLi);

    removeTask();

    setCrosOutElements();

    taskCounter();
}


function setCrosOutElements() {
    for(var i = 0; i < listElements.length; i++){
        listElements[i].addEventListener('click', crossOutAnElement)
    }
}

function crossOutAnElement(event){
    event.target.classList.toggle('cross')
    taskCounter();
}

function removeTask(){
    for(let spanItem of spans){
        spanItem.onclick = function(){
            spanItem.parentElement.remove();
        }
    }
}

function taskCounter() {
    var crosChild = ulList.querySelectorAll('.cross');
    updateDivCounter(ulList.children.length - crosChild.length, crosChild.length);
}

function updateDivCounter(notCrosCount, crosCount) {
    counterCrossNum.innerHTML = crosCount;
    counterNotСrossedOutNum.innerHTML = notCrosCount;
}

btnInfAboutMyself.addEventListener('click', function(){
    modalWindow.style.display = 'block';
})

window.addEventListener('keyup', function(event){
    if(event.code === 'Escape'){
        modalWindow.style.display = 'none';
    }
})



removeTask();
setCrosOutElements();
taskCounter();
btnAddTask.onclick = createTask;


