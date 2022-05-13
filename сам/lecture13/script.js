 var quad = document.querySelector('.container1');
 
 function changeBackground(){
     quad.classList.add('add-bg');
     console.log('count');
 }

 //quad.onclick = changeBackground;
 //quad.onmouseover = changeBackground;
 //quad.onmouseenter = changeBackground;
 //quad.onmousemove = changeBackground;

 //quad.oncontextmenu = changeBackground;

quad.addEventListener('contextmenu', changeBackground); 