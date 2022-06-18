// Открытие формы после анимации welcom

let circleWraper = document.querySelector('.circle_wraper');
let userDataForm = document.querySelector('.userDataForm')
let userNameInput = document.getElementById('userNameForm')
let userName = document.querySelector('.userName')

circleWraper.addEventListener('animationend', function(){
        circleWraper.style.display = 'none';
        userDataForm.style.display = 'flex';
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
        userDataForm.style.display = 'none'
        startWindow.style.display = 'block';
        userName.innerHTML = userNameInput.value;
        infBlocks.forEach(function(elem){
            return elem.style.display = 'flex';
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
    levelsStartWindow.style.display = 'none'
    firstLevelBodyInfBlock.style.display = 'flex';
})

// Функционал перемещения элементов первого задания первого уровня

let jsElem = document.querySelectorAll('.js-elem')
let elemDrags = document.querySelectorAll('.elem-drag')

let brownSquare = document.querySelector('.brown-square')
let firstGreenTriangle = document.querySelector('.firstGreenTriangle')
let secondGreenTriangle = document.querySelector('.secondGreenTriangle')
let popupDoneCorrectly = document.getElementById('popup_done_correctly')
let firstLevelBodyDoneButton = document.querySelector('.first-level-body-done-button')
let popupDoneIncorrectly = document.querySelector('#popup_done_incorrectly')


let firstLevelSecondTaskInfblock = document.querySelector('#firstLevel-secondTask-infblock');
let firstLevelBodySecondTask = document.querySelector('.first-level-body-secondTask')
let firstLevelBodySecondTaskDoneButton = document.querySelector('#first-level-body-secondTask-doneButton')

function dragAndDropFirstTask(){
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
            else if(activeElement.classList.contains('orange-trapezoid')){
                activeElement.style.position = 'absolute'
                activeElement.style.right = '150px'
            }
            elem.style.background = 'transparent'
        })
    })
}

dragAndDropFirstTask()


// Открытие модальных окон при (не) правильно выполненных заданиях

firstLevelBodyDoneButton.addEventListener('click', function(){
    if(brownSquare.offsetParent.classList.contains('white-square')){
        if(firstGreenTriangle.offsetParent.classList.contains('white-triangle')){
            if(secondGreenTriangle.offsetParent.classList.contains('white-triangle')){
                popupDoneCorrectly.style.display = 'flex';
                setTimeout(function(){
                    popupDoneCorrectly.style.display = "none"
                }, 2000)
                setTimeout(function(){
                    moveToTheNextTaskFirstLevel()
                }, 2000)
            }
            else{
                popupDoneIncorrectly.style.display = 'flex';
            setTimeout(function(){
                popupDoneIncorrectly.style.display = "none"
            }, 2000)
            }
        }
        else{
            popupDoneIncorrectly.style.display = 'flex';
        setTimeout(function(){
            popupDoneIncorrectly.style.display = "none"
        }, 2000)
        }
    }
    else{
        popupDoneIncorrectly.style.display = 'flex';
        setTimeout(function(){
            popupDoneIncorrectly.style.display = "none"
        }, 2000)
    }
})

let orangeTrapezoid = document.querySelector('.orange-trapezoid')
let blueCircleLargest = document.querySelector('.blue-circle-largest')
let blueCircleSmall = document.querySelector('.blue-circle-small')
let parentElem = document.querySelectorAll('.parentElem')

// Конфети

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
{ front: 'red', back: 'darkred' },
{ front: 'green', back: 'darkgreen' },
{ front: 'blue', back: 'darkblue' },
{ front: 'yellow', back: 'darkyellow' },
{ front: 'orange', back: 'darkorange' },
{ front: 'pink', back: 'darkpink' },
{ front: 'purple', back: 'darkpurple' },
{ front: 'turquoise', back: 'darkturquoise' }];

resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cx = ctx.canvas.width / 2;
    cy = ctx.canvas.height / 2;
  };


randomRange = (min, max) => Math.random() * (max - min) + min;


initConfetti = () => {
    for (let i = 0; i < confettiCount; i++) {
      confetti.push({
        color: colors[Math.floor(randomRange(0, colors.length))],
        dimensions: {
          x: randomRange(10, 20),
          y: randomRange(10, 30) },
  
        position: {
          x: randomRange(0, canvas.width),
          y: canvas.height - 1 },
  
        rotation: randomRange(0, 2 * Math.PI),
        scale: {
          x: 1,
          y: 1 },
  
        velocity: {
          x: randomRange(-25, 25),
          y: randomRange(0, -50) } });
  
  
    }
  };
  
  render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    confetti.forEach((confetto, index) => {
      let width = confetto.dimensions.x * confetto.scale.x;
      let height = confetto.dimensions.y * confetto.scale.y;

      ctx.translate(confetto.position.x, confetto.position.y);
      ctx.rotate(confetto.rotation);
  
      confetto.velocity.x -= confetto.velocity.x * drag;
      confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
      confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();
  
      confetto.position.x += confetto.velocity.x;
      confetto.position.y += confetto.velocity.y;
  
      if (confetto.position.y >= canvas.height) confetti.splice(index, 1);
  
      if (confetto.position.x > canvas.width) confetto.position.x = 0;
      if (confetto.position.x < 0) confetto.position.x = canvas.width;
  
      confetto.scale.y = Math.cos(confetto.position.y * 0.1);
      ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;
  
      ctx.fillRect(-width / 2, -height / 2, width, height);
  
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    });

    if (confetti.length <= 10) initConfetti();
  
    window.requestAnimationFrame(render);
  };
  
  window.addEventListener('resize', function () {
    resizeCanvas();
  });


firstLevelBodySecondTaskDoneButton.addEventListener('click', function(){
    if(orangeTrapezoid.offsetParent.classList.contains('offsetParent')){
        if(blueCircleLargest.offsetParent.classList.contains('offsetParent')){
            if(blueCircleSmall.offsetParent.classList.contains('offsetParent')){
                popupDoneCorrectly.style.display = 'flex';
                canvas.style.cssText = 'position: absolute; z-index: 1; top: 0px;'
                initConfetti();
                render(); 
            }
            else{
                popupDoneIncorrectly.style.display = 'flex';
            setTimeout(function(){
                popupDoneIncorrectly.style.display = "none"
            }, 2000)
            }
        }
        else{
            popupDoneIncorrectly.style.display = 'flex';
        setTimeout(function(){
            popupDoneIncorrectly.style.display = "none"
        }, 2000)
        }
    }
    else{
        popupDoneIncorrectly.style.display = 'flex';
        setTimeout(function(){
            popupDoneIncorrectly.style.display = "none"
        }, 2000)
    }
})



// Переход на следующее задание первого уровня


function moveToTheNextTaskFirstLevel(){
    firstLevelBodyInfBlock.style.display = 'none'
    firstLevelBody.style.display = 'none'
    firstLevelBodyDoneButton.style.display = 'none'
    firstLevelSecondTaskInfblock.style.display = 'block'
    firstLevelBodySecondTask.style.display = 'flex'
    firstLevelBodySecondTaskDoneButton.style.display = 'block'
}


// Второй уровень

let secondLevelButton = document.querySelector('.second-level-button')
let secondLevel = document.querySelector('.second-level')
let secondLevelBody = document.querySelector('.second-level-body')

secondLevelButton.addEventListener('click', function(){
    secondLevel.style.display = 'block'
    levelsStartWindow.style.display = 'none'
    canvas.style.display = 'none'
    firstLevelBodySecondTaskDoneButton.style.display = 'none'
})
let number6 = document.querySelector('.number-6')
let secondLevelSecondTask = document.querySelector('.second-level-secondTask')
number6.addEventListener('click', function(){
    secondLevel.style.display = 'none'
    secondLevelSecondTask.style.display = 'block'
})
