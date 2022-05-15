// Task1 

var ulList = document.querySelector('#todo-list')

ulList.addEventListener('click', function(event){
    // event.target.classList.toggle('task-no-active')
    if(event.target.tagName === 'P'){
        event.target.classList.toggle('task-no-active')
    }
})


// Task 2

var ulCollection = document.querySelector('.collection');

ulCollection.addEventListener('click', function(event){
    if(event.target.classList.contains('collection-item')){
          event.target.nextElementSibling.classList.toggle('answer-item-show')
    }
})

// Task 3

var btnOpenInfo = document.querySelector('#open-modal')
var modalWindow = document.querySelector('#modal1')

btnOpenInfo.addEventListener('click', function(){
    modalWindow.classList.add('modal_open')
})

document.body.addEventListener('click', function(event){
    if(event.target !== btnOpenInfo && !event.target.closest('#modal1')){
        modalWindow.classList.remove('modal_open')
    }
})

// Task 4 

var bigPicture = document.querySelector('.photo img')
var boxImages = document.querySelector('.container')

boxImages.addEventListener('click', function(event){
     if(event.target.parentElement.classList.contains('image')){
        bigPicture.src = event.target.src
     }
})
