//  Task 1

function enlargeThePicture(){
    var image = document.querySelector('img[src$="barcelona.png"]');
    var container = document.getElementsByClassName('club-image')

    image.style.width = '540px'
    image.style.height = '540px'
    container[0].style.height = '540px'
}

function enlargeThePicture2(){
    var image = document.querySelector('img[src$="bayern.png"]');
    var container = document.getElementsByClassName('club-image')

    image.style.width = '540px'
    image.style.height = '540px'
    container[0].style.height = '540px'
} 

function enlargeThePicture3(){
    var image = document.querySelector('img[src$="juventus.png"]');
    var container = document.getElementsByClassName('club-image')

    image.style.width = '540px'
    image.style.height = '540px'
    container[0].style.height = '540px'
}

// Task 2

function editText(){
    var button = document.getElementsByClassName('btn');

    var textButton = prompt('Введите новое название')

    button[0].innerHTML = textButton;
}

function editText2(){
    var button = document.getElementsByClassName('btn');

    var textButton = prompt('Введите новое название')

    button[1].innerHTML = textButton;
}

function editText3(){
    var button = document.getElementsByClassName('btn');

    var textButton = prompt('Введите новое название')

    button[2].innerHTML = textButton;
}

// Task 3

function changeLocationRight(){
    var image = document.getElementsByClassName('col')

    image[0].style.cssFloat = 'right'
}
function changeLocationLeft(){
    var image = document.getElementsByClassName('col')

    image[0].style.cssFloat = 'left'
}