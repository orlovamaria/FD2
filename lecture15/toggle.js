 document.addEventListener('click', function(event){
     //console.log(event.target.dataset.toggleId);

     var currentId = event.target.dataset.toggleId;

     if(!currentId){
         console.log('Не раскрыли форму');
         return;
     }

     var elem = document.getElementById(currentId);
     elem.hidden = !elem.hidden;
 })