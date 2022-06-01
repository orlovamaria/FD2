// Изменяем тему(светлая и темная)

let themeSwitcher = document.querySelector('#theme-switcher');

function switchBackground(){
    document.body.classList.toggle('dark')
}

themeSwitcher.addEventListener('click', switchBackground)

// Выделяем окно пользователя на которое кликнули



