 var cars = document.querySelector('#cars');

 cars.addEventListener('click', function(event){
    //console.log(event.target.tagName);
    var prevActiveElement = document.querySelector('.active-car');

    if(event.target.closest('li')){
        prevActiveElement.classList.remove('active-car');
        event.target.closest('li').classList.add('active-car');
    }
 })