
function HashStorageFunc(){
    var object = {};

    this.addValue = function(key, value){
        key = prompt('Введите название напитка')
        value = [];
        do
          {
            value[0] = prompt('Напиток алкогольный? Введите "да" или "нет"')
          
            if(value[0].toLowerCase() === 'да'){
                value[0] = 'да';
                break;
            }
            else if(value[0].toLowerCase() === 'нет'){
                value[0] = 'нет';
                break;
            }
            else{
             alert('Некорректный ввод. Введите "да" или "нет"')
            }
        }while(true);

        value[1] = prompt('Введите рецепт напитка')

        object[key] = value;
    }

    this.getValue = function(key){
        key = prompt('Введите название напитка')
        if(key in object){
            alert('напиток ' + key + '\n' + 'алкогольный: ' + object[key][0] + '\n'  + 'рецепт приготовления: '+ '\n' + object[key][1])
        }
        else{
            alert('Данный напиток отсутствует в списке')
        }
    }

    this.deleteValue = function(key){
        key = prompt('Введите название напитка')
        if(key in object){
            alert('напиток ' + key + ' удалён из списка')
            delete object[key];
        }
        else{
            alert('Данный напиток не может быть удален так как отсутствует в списке')
        }
    }

    this.getKeys = function(){
        alert(Object.keys(object))
    }
}

var drinkStorage = new HashStorageFunc();






