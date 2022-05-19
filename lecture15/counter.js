 document.addEventListener('click', function(event){
    // console.log(event.target.dataset.counter1)
    if(event.target.dataset.counter1 != undefined){
        event.target.value++;
    }
 })