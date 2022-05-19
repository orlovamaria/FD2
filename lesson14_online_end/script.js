var userForm = document.querySelector('#start-question');
var avatarContainer = document.querySelector('#start-question');
var userData = ['Joe', 'avatar'];
var questionBox = document.querySelector('#box-questions');
var questionForm = document.querySelector('.quiz-form');
var correctAnswers = ['B', 'D', 'B', 'A', 'C', 'B', 'A'];
var resultContainer = document.querySelector('.quiz__heading');
var btnPrev = document.getElementById('prev')
var btnNext = document.getElementById('next')
var btnSubmit = document.getElementById('submit')
var quizQuestions = document.querySelectorAll('.quiz-form__quiz');



 

avatarContainer.addEventListener('click', function(e){
    if(document.querySelectorAll('.show')){
        document.querySelectorAll('.show').forEach(function(item){
            item.classList.remove('show');
        })
    }

    if(e.target.tagName === 'INPUT' && e.target.type === 'radio'){
        console.log(e.target.previousElementSibling);
        e.target.previousElementSibling.firstElementChild.classList.add('show');
    }
})

userForm.addEventListener('submit', function(e){
    var activeAvatar = document.querySelector('input[name="question2"]:checked');
    var activeName = userForm.elements.question1.value;
    var activeImg = activeAvatar.previousElementSibling.firstElementChild.src;
    userData = [activeName, activeImg];


    console.log(userData);

    userForm.classList.add('quiz');

    questionBox.classList.remove('quiz');

    scrollingUp();

    e.preventDefault();
    quizQuestions.forEach(function(elem){
        elem.nextElementSibling.classList.add('none-quiz')
    })
    btnPrev.classList.add('btnNone-quiz') 
    btnSubmit.classList.add('btnNone-quiz')
    document.querySelector('#containerButtons').classList.add('textend')
})


questionForm.addEventListener('submit', function(e){
    var userInfo = document.querySelector('.name__user');
    var count = 0;
    var startResult = 0;

    var userAnswer = [
        questionForm.elements.q1,
        questionForm.elements.q2,
        questionForm.elements.q3,
        questionForm.elements.q4,
        questionForm.elements.q5,
        questionForm.elements.q6,
        questionForm.elements.q7
    ]


    userAnswer.forEach(function(item, index){
        if(item.value === correctAnswers[index]){
            count += 100/quizQuestions.length;
            for(var i = 0; i < item.length; i++){
                var isChecked = item[i].checked;
                if(isChecked){
                    item[i].parentElement.classList.add('correct')
                }
            }
        }else{
            for(var i = 0; i < item.length; i++){
                var isChecked = item[i].checked;
                if(isChecked){
                    item[i].parentElement.classList.add('wrong')
                }
            }
        }
    })

    btnPrev.classList.add('btnNone-quiz') 
    btnSubmit.classList.add('btnNone-quiz')
    btnNext.classList.add('btnNone-quiz')

    quizQuestions.forEach(function(elem){
        elem.classList.remove('none-quiz')
    })

    resultContainer.classList.add('show-quiz');

    userInfo.innerHTML = userData[0] + '  <img src="'+ userData[1] + '" alt="user">' +  '  ' +  Math.round(count.toFixed(2)) + ' %';

    scrollingUp();

    e.preventDefault();

})


function scrollingUp(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}



btnNext.addEventListener('click', function(){
    quizQuestions.forEach(function(elem){
        if(!elem.classList.contains('none-quiz')){
            result = elem
        }
    })
    if(result.nextElementSibling.classList.contains('quiz-form__quiz')){
        result.classList.add('none-quiz')
        result.nextElementSibling.classList.remove('none-quiz')
    }

    if(!quizQuestions[quizQuestions.length -1].classList.contains('none-quiz')){
        btnNext.classList.add('btnNone-quiz')
        btnSubmit.classList.remove('btnNone-quiz')
        document.querySelector('#containerButtons').classList.remove('textend')
    }
    else if(!quizQuestions[0].nextElementSibling.classList.contains('none-quiz')){
        btnPrev.classList.remove('btnNone-quiz')
        document.querySelector('#containerButtons').classList.remove('textend')
    }
})


btnPrev.addEventListener('click', function(){
    var result; 
    quizQuestions.forEach(function(elem){
        if(!elem.classList.contains('none-quiz')){
            result = elem
        }
    })
    if(result.previousElementSibling.classList.contains('quiz-form__quiz')){
        result.classList.add('none-quiz')           
        result.previousElementSibling.classList.remove('none-quiz')
    }
    if(!quizQuestions[quizQuestions.length -2].classList.contains('none-quiz')){
        btnNext.classList.remove('btnNone-quiz')
        btnSubmit.classList.add('btnNone-quiz')
        btnPrev.classList.remove('btnNone-quiz')
        document.querySelector('#containerButtons').classList.remove('textend')
    }
    else if(!quizQuestions[0].classList.contains('none-quiz')){
        btnPrev.classList.add('btnNone-quiz')
        document.querySelector('#containerButtons').classList.add('textend')
    }
})

 
 