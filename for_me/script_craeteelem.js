// Coздание элемента

let div = document.createElement('div')

// Cоздание нового текстового узла с заданным текстом

let textNode = document.createTextNode('а вот и я')

// Методы вставки элементов

div.append(textNode) /* добавляет узлы и строки в конец */
div.prepend(textNode) /* добавляет узлы и строки в начало */
div.before(textNode) /* вставляет узлы и строки до тега */
div.after(textNode) /* вставляет узлы и строки после тега */
div.replaceWith(textNode) /* заменяет заданными узлами или строками */
div.remove(textNode) /* удаляет */
div.replaceChild(div, textNode) /* заменяет среди дочерних элементов */
div.removeChild(textNode) /* удаляет среди дочерних элементов */


// Добавление атрибута

div.setAttribute('type', 'button')

// Вернуть следующий соседний элемент

div.nextElementSibling

// предыдущий элемнет

div.previousElementSibling

// обращение к родительскому элементу 

div.parentElement

// обращение к самому главному родительскому элементу 

div.parentElement.parentElement

// обращение к дочернему элементу 

div.children /* возвращает HTML коллекцию из всех дочерних элементов ПЕРВОГО уровня*/

// Список дочерних элементов в виде NODELIST, включает в себя не только элементы но и все переносы и комментарии

div.childNodes


// РАБОТА С ЭЛЕМЕНТАМИ ФОРМ

// Получить HTML коллекию из форм с которыми мы работаем

document.forms

// Доступ к атрибуту name, вводим название атрибута

document.forms.userForm

// Ищем элемент внутри формы

var form = document.forms.userForm;

console.log(form.elements) /* возвращает все инпуты чекбоксы и тд внутри формы */

// При клике на кнопку что-то вводится в инпут

function setLastName(){
    var form = document.forms.userForm;
    // ищем определённый инпут по атрибуту name(вводим его название из разметки)
    form.elements.lastname.value = 'Peter'
}

// Работа с тегами селект(теги выбора из списка)

function getCurrentSelected(){
    var form = document.forms.userForm;
    var sel = form.elements.currentOption
    console.log(sel.value) /* Получаем значение value выбранного чего-то  */
    console.log(sel.selectedIndex) /* Получаем индекс выбранного значения */
    console.log(sel.options[sel.selectedIndex].text) /* Получаем текс выбранного значения */
}

// Работа с чекбоксами

function getCheckbox(){
    var form = document.forms.userForm;
    console.log(form.elements.inputColors[3].checked) /* выбираем чекбокс по атрибуту name затем выбираем определенный чекбокс и смотрим его активность */
}

function setCheckBox(){
    var form = document.forms.userForm;
    form.elements.inputColors[3].checked = 'checked' /* делаем чекбокс активным */
}


// Работа с инпутом

function setFocusElement(){
    var form = document.forms.userForm;
    form.elements.userAge.focus() /* делаем инпут активным при клике на кнопку */

    setTimeout(function(){
        form.elements.userAge.blur();
    }, 3000)  /* убираем активность через 3 секунды */
}

// Отправить данные

function submitData(){
    var form = document.forms.userForm;
    form.submit();
}

// Очищаем все поля ввода

function resetData(){
    var form = document.forms.userForm;
    form.reset()
}

// Вернуться к началу формы

function scrollToElement(){
    var form = document.forms.userForm;
    form.elements.firstName.scrollIntoView()
    form.elements.firstName.focus() /* сделали активным первый инпут */
}