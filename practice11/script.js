 function changeBackground(){
     var title = document.getElementById('naw-head');

     title.style.backgroundColor = 'green'
 }


 function changeFirstLink(){
     var changeLink = document.getElementById('first-link');

     changeLink.style.cssText = 'color: blue; font-size: 30px;';
 }


 function changeColorLinks(){
     var changeLinks = document.getElementsByClassName('breadcrumb_links');

     for(var i = 0; i < changeLinks.length; i++){
        changeLinks[i].style.color = 'blue';
     }
 }

 function changeImage(){
     var changeImage = document.getElementById('current-img');

     changeImage.src = 'images/photo2.jpg';
 }

 function initialImage(){
    var initialImage = document.getElementById('current-img');

    initialImage.src = 'images/photo1.jpg';
}


function changeTitle(){
    var title = document.getElementById('card2-title');

    title.innerHTML = 'New Title';
}


function changeDescription(){
    var description = document.getElementById('description');

    description.innerHTML = 'Я очень простая карта. Я хорошо улавливаю небольшие кусочки информации. Я удобен, потому что мне нужно немного разметки для эффективного использования.'
}


function addNewLink(){
    var link = document.getElementById('list-links');

    link.innerHTML += '<a href="#!" class="breadcrumb">New Link</a>'
}


function addNewItem(){
   var item = document.getElementById('collection-items');

   item.innerHTML += '<a href="#!" class="collection-item">Item 5</a>'
}