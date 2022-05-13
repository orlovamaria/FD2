function changeColorLinks(){
    var links = document.getElementsByClassName('breadcrumb_links');

    for(var i = 0; i < links.length; i++){
        links[i].classList.toggle('new_color')
    }
}

function changeImage(){
    var image = document.getElementById('current-img-change');

    image.setAttribute('src', 'images/photo2.jpg')
}

function initialImage(){
    var image = document.getElementById('current-img-change');

    image.setAttribute('src', 'images/photo1.jpg')
}

function changeTitle(){
    var title = document.getElementById('card2-title')

    title.innerText = 'New Title'
}

function addLink(){
    var links = document.getElementById('list-links')

    links.innerHTML += '<a href="#!" class="breadcrumb">Four</a>'
}

function addNewItem(){
    var item = document.getElementById('collection-list')
    var testChild = document.querySelector('#')

    // item.innerHTML += '<a href="#!" class="collection-item">Item</a>'
    var newItem = document.createElement('a')
    newItem.setAttribute('href', '#!')
    newItem.classList.add('collection-item')
    newItem.innerText = 'Item'

    // item.appendChild(newItem)
    item.
}