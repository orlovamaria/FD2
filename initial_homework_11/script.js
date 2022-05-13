 function changeInfoCat1(){
     var changeImage = document.getElementById('current-cat');

     changeImage.src = 'images/cat1.jpg'

     var changeTitle = document.getElementById('current-title');
     changeTitle.innerHTML = 'Cat 1'

     var changeText = document.getElementById('current-content');
     changeText.innerHTML = 'I am a beautiful cat №1'
 }

 function changeInfoCat2(){
    var changeImage = document.getElementById('current-cat');

    changeImage.src = 'images/cat2.jpg'

    var changeTitle = document.getElementById('current-title');
     changeTitle.innerHTML = 'Cat 2'

     var changeText = document.getElementById('current-content');
     changeText.innerHTML = 'I am a beautiful cat №2'
}

function changeInfoCat3(){
    var changeImage = document.getElementById('current-cat');

    changeImage.src = 'images/cat3.jpg'

    var changeTitle = document.getElementById('current-title');
     changeTitle.innerHTML = 'Cat 3'

     var changeText = document.getElementById('current-content');
     changeText.innerHTML = 'I am a beautiful cat №3'
}



function addNewCat(){
    var catList = document.getElementById('cat-info');

    catList.innerHTML += '<tr><td>Kevin</td><td>Brasil</td><td>2019</td></tr>'
}

function changeTheme(){
    var changeImage = document.querySelector('img[alt="sun"]');

    changeImage.src = './images/moon.svg'
    
    var changeBackground = document.getElementById('body');

    changeBackground.style.backgroundColor = 'black'
    changeBackground.style.color = 'white'
    changeImage.style.backgroundColor = 'white'
}




