// Task1 

// var ulList = document.querySelector('#todo-list')

// ulList.addEventListener('click', function(event){
//     // event.target.classList.toggle('task-no-active')
//     if(event.target.tagName === 'P'){
//         event.target.classList.toggle('task-no-active')
//     }
// })


// Task 2

// var ulCollection = document.querySelector('.collection');

// ulCollection.addEventListener('click', function(event){
//     if(event.target.classList.contains('collection-item')){
//           event.target.nextElementSibling.classList.toggle('answer-item-show')
//     }
// })

// Task 3

// var btnOpenInfo = document.querySelector('#open-modal')
// var modalWindow = document.querySelector('#modal1')

// btnOpenInfo.addEventListener('click', function(){
//     modalWindow.classList.add('modal_open')
// })

// document.body.addEventListener('click', function(event){
//     if(event.target !== btnOpenInfo && !event.target.closest('#modal1')){
//         modalWindow.classList.remove('modal_open')
//     }
// })

// Task 4 

var bigPicture = document.querySelector('.photo img')
var boxImages = document.querySelector('.container')

boxImages.addEventListener('click', function(event){
    if(document.querySelectorAll('.active-image')){
        document.querySelectorAll('.active-image').forEach(function(elem){
            elem.classList.remove('active-image')
        })
    }
     if(event.target.parentElement.classList.contains('image')){
        bigPicture.src = event.target.src
        event.target.parentElement.classList.add('active-image')
     }
})

// Task 5

var btnList = document.getElementById('sort')
var nameList = document.querySelectorAll('.name')

btnList.addEventListener('click', function(){
    var arr = [];
    nameList.forEach(function(elem){
        arr.push([elem.innerHTML, elem.nextElementSibling.innerHTML])
        arr.sort()
    })
    for(var i = 0; i < nameList.length; i++){
            nameList[i].innerHTML = arr[i][0]
            nameList[i].nextElementSibling.innerHTML = arr[i][1]
        }
})

