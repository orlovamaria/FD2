// Выделяем окно пользователя на которое кликнули

const dialogsBox = document.querySelector('#all-dialogs')

const openCurrentDialog = (e) => {
   const targetEl = e.target;
   const prevActiveDialog = document.querySelector('.open-chat');
   const dialogElem = targetEl.closest('.dialogs-item');
   if(!!dialogElem && dialogElem !== prevActiveDialog){

        dialogElem.classList.add('open-chat')
        prevActiveDialog.classList.remove('open-chat')
   }
}

dialogsBox.addEventListener('click', openCurrentDialog)