var formDef1 = [
    {label: 'Название сайта:', kind: 'longtext', name: 'sitename'},
    {label: 'URL сайта:', kind: 'longtext', name: 'siteurl'},
    {label: 'Посетителей в сутки:', kind: 'number', name: 'visitors'},
    {label: 'E-mail для связи:', kind: 'shorttext', name: 'email'},
    {label: 'Рубрика каталога:', kind: 'combo', name: 'division', variants: [{text: "здоровье", value: 1}, {text: 'домашний уют', value: 2}, {text: 'бытовая техника', value: 3}]},
    {label: 'Размещение:', kind: 'radio', name: 'payment', variants: [{text: "бесплатное", value: 1}, {text: 'платное', value: 2}, {text: 'VIP', value: 3}]},
    {label: 'Разрешить отзывы:', kind: 'check', name: 'votes'},
    {label: 'Описание сайта:', kind: 'memo', name: 'description'},
    {caption: 'Опубликовать', kind: 'submit'}
]

var formDef2 = [
    {label: 'Фамилия:', kind: 'longtext', name: 'lastname'},
    {label: 'Имя:', kind: 'longtext', name: 'firstname'},
    {label: 'Отчество:', kind: 'longtext', name: 'secondname'},
    {label: 'Возраст:', kind: 'number', name: 'age'},
    {caption: 'Зарегестрироваться', kind: 'submit'}
]

var firsForm = document.forms.firsr_form;
var secondForm = document.forms.second_form;


function createAForm(arr, form){
    var divisionText = '';
    var divisionValue = '';
   arr.forEach(function(elem){
        for(var key in elem){
            if(elem.name == 'division'){
                elem.variants.forEach(function(el){
                    divisionText = el.text;
                    divisionValue = el.value;
                })
            }
            if(key == 'label'){
                var tag = document.createElement(key)
                tag.innerHTML = elem[key]
                tag.setAttribute('kind', elem.kind)
                tag.setAttribute('name', elem.name)
                form.append(tag)
                var enter = document.createElement('br')
                tag.after(enter)
            }
            if(key.name == 'division'){
                var select = document.createElement('select')
                
            }
            else if(key == 'caption'){
                var submit = document.createElement('button');
                submit.setAttribute('kind', elem.kind)
                submit.innerHTML = elem[key]
                form.append(submit)
                var cross = document.createElement('hr')
                form.after(cross)
            }
        }
    })
    var division = firsForm.elements.division;
    var payment = document.forms.payment;
    var votes = document.forms.votes;
    
    // arr.forEach(function(elem){
    //     var division = document.forms.division;
    //      for(var key in elem){
    //          if(key.name == 'division'){
    //              key.variants.forEach(function(element){
    //                  for(var i in element){
    //                      var select = document.createElement('select')
    //                      var option = document.createElement('option')
    //                      if(i == 'text'){
    //                          option.innerHTML = element[i]

    //                      }
    //                      else if(i == 'value'){
    //                         option.setAttribute(i, element[i])
    //                      }
    //                      select.append(option) 
    //                  }
    //              })
    //          }
    //      }
    //      division.append(select)
    // })

}

createAForm(formDef1, firsForm)
createAForm(formDef2, secondForm)
