//  Task 1
 
 var todoList = document.querySelector('#todo-list');

 todoList.addEventListener('click', function(event){
       if(event.target.classList.contains('waves-effect')){
           var newTitle = prompt('Input new title!')
            event.target.previousElementSibling.innerHTML = newTitle;
       }
 })

 //  Task 2

 var numbers = document.querySelector('#numbers');
 var input = numbers.querySelector('input[type=text]')

 numbers.addEventListener('click', function(event){
     if(event.target.classList.contains('waves-effect')){
        input.value = event.target.innerHTML * event.target.innerHTML
     }
 })

 //  Task 3

 