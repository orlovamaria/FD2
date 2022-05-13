function changeColorLinks(){
    var allLinks = document.getElementsByClassName('breadcrumb_links');
    for(var i = 0; i < allLinks.length; i++){
        allLinks[i].classList.add('new-color');
    }
}

function changeImage(){
    var currentImage = document.getElementById('current-img-change');
    //currentImage.src = 'images/photo2.jpg';
    currentImage.setAttribute('src', 'images/photo2.jpg');
}

function initialImage(){
    var currentImage = document.getElementById('current-img-change');
    currentImage.setAttribute('src', 'images/photo1.jpg');
}



function changeTitle(){
    var title = document.querySelector('#card2-title');
    title.innerText += 'New title';
}


function addNewLink(){
    var parentNav = document.querySelector('#list-links');
    parentNav.innerHTML += ' <a href="#!" class="breadcrumb">new link</a>';
}



// <a href="#!" class="collection-item">Item 4</a>
var i = 5;
function addNewItem(){
    i++;
    var list = document.querySelector('#collection-list');
    var testChild = document.querySelector('#test-child');

    var newItem = document.createElement('a');
    newItem.setAttribute('href', '#!');
    newItem.classList.add('collection-item');
    newItem.innerText = 'New element' + i;

    list.insertAdjacentHTML('afterend', '<a href="#!" class="collection-item">Item 4</a>');
    //list.after(newItem);
    //list.before(newItem);
    //list.prepend(newItem);
    //list.append(newItem);
    // list.append('<a href="#!" class="collection-item">Item 4</a>');
    //list.insertBefore(newItem, testChild);
    //list.appendChild(newItem);
    //list.innerHTML += newItem;
    //console.log(newItem);
}