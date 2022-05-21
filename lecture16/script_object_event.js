window.addEventListener('click', function(event){
    //console.log(event.target.className);
    //console.log(event.target);
    //console.log(event.type)
     console.log(event)
    //console.log(event.currentTarget);
    //console.log(event.button, event.which);
    //console.log(event.pageX, event.pageY)
    //console.log(event.clientX, event.clientY)
    //console.log(event.screenX, event.screenY)
})

// document.body.addEventListener('click', function(event){
//     console.log(event.currentTarget);
// })



// window.addEventListener('dblclick', function(event){
//     //console.log(event.target.className);
//     console.log(event.type)
// })


var link = document.querySelector('#yandex-link');

link.addEventListener('click', function(event){
    event.preventDefault();
})


document.forms[0].addEventListener('submit', function(event){
    
    var elem = 10;
    if(elem > 5){
        event.preventDefault();
    } 
    alert(2);
})