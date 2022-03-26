
do{
    var surname = prompt('Введите вашу фамилию', ''); 
} while (surname === '');

do{
    var name = prompt('Введите ваше имя', '');
} while (name === '');

do{
    var patronymic = prompt('Введите ваше отчество', '');
} while (patronymic === '');


do{
    var age = parseInt(prompt('Введите ваш возраст в годах', ''));
} while (isNaN(age));

var age_days = age * 365;
var age_future = age + 5;
var gender = confirm('Ваш пол - мужской?');
if (gender == true){
    gender = 'мужской';
}
else{
    gender = 'женский';
}

var retire;
if ((age >= 58) && (gender === 'женский')) {
    retire = 'да';
    }
else if ((age >= 63) && (gender === 'мужской')){
    retire = 'да';
}
else{
    retire = 'нет';
}

var anketa = alert('Ваше ФИО: ' + surname + ' ' + name + ' ' + patronymic + ' ' + '\n' + 
    'Ваш возраст в годах:' + ' ' + age + '\n' + 'Ваш возраст в днях:' + ' ' + age_days + '\n' + 
    'Через 5 лет вам будет:' + ' ' + age_future +'\n' + 'Ваш пол:' + ' ' + gender + '\n' + 'Вы на пенсии:' + ' ' + retire)




        

        

        
        