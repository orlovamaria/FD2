function clearPreloader() {
    var preloader = document.querySelector('#preloader');
    var content = document.querySelector('#site');
    preloader.style.display = 'none';
    content.style.opacity = '1';
}

setTimeout(clearPreloader, 1000);




// Task 1

var quad = document.getElementById('quad')
quad.addEventListener('dblclick', function(){
    quad.style.backgroundColor = 'blue'
})


// Task 2

var clubImage = document.querySelector('.club-image');

clubImage.addEventListener('click', function(event){
   if(event.target.tagName === 'IMG'){
       alert(event.target.src)
   }
})

// Task 3

var link = document.querySelectorAll('.link');

link.forEach(function(elem){
    elem.addEventListener('mouseover', function(event){
        event.target.nextElementSibling.innerHTML = '( ' + event.target.href + ' )'
        // event.target.innerHTML += '( ' + event.target.href + ' )'
    })
    elem.addEventListener('mouseout', function(event){
        event.target.nextElementSibling.innerHTML = ""
    })
})

// Task 4

var card = document.querySelector('.card');

window.addEventListener('keydown', function(event){
    if(event.code === 'Escape'){
        card.style.display ='none'
    }
})

// Task 5

var selecters = document.getElementById('selecters');
var currentResult = document.getElementById('current-result')

selecters.addEventListener('change', function(event){
    currentResult.innerHTML = selecters.options[selecters.selectedIndex].getAttribute('value')
})

// Task 6

var table = document.querySelector('table')
var form = document.querySelector('#add-form')
var btnForm = document.querySelector('#button-add')
var inputs = form.querySelectorAll('input[type=text]')


table.addEventListener('click', function(event){
    if(event.target.tagName === 'TD'){
        var newValue = prompt('Введите новое значение')
        event.target.innerHTML =  newValue
    }
})
function getValueInputs(){
    var result = true;

    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].value === ''){
            result = false;
            inputs[i].style.border = '2px solid red';
        }
    }

    if(result){
        setNewUser();
    }
}

function setNewUser() {
    table.innerHTML += "<tr><td>" + inputs[0].value + "</td><td>" + inputs[1].value + "</td><td>$ " + inputs[2].value + "</td></tr>"
}

btnForm.addEventListener('click', function(){
    getValueInputs()
})


// Task 7


var searchList = [
    'Мишка',
    'Осьминожка',
    'Акула',
    'Авокадо',
    'Моль Молли',
    'Альпака',
    'Пингвиненок',
    'Моль',
    'Пачакун',
    'Ленивец'
]
var input = document.querySelector('input[type=search]');
var list = document.getElementById('list')


input.addEventListener('input', function(event){
    for(var i = 0; i < list.children.length; i++){
        list.children[i].style.color = 'black'
    }
    
    var arr = searchList.filter(function(elem){
           if(elem.includes(event.target.value)){
                 return elem
           }
    })

    arr.forEach(function(elem){
        return [...list.children].forEach(function(el, index){
            if(elem === el.innerHTML){
                return el.style.color = 'orange'
            }
        })
    })
})



