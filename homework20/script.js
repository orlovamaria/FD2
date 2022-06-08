
class HashStorageClass{
    constructor(){
        this.obj = {};
    }
    

    addValue = function(key, value){
        this.obj[key] = value;
        return this.obj
    }

    getValue = function(key){
        if(key in this.obj){
            return [key, this.obj[key][0], this.obj[key][1]]
        }
    }

    deleteValue = function(key){
        if(key in this.obj){
             return delete this.obj[key];
        }
        
    }

    getKeys = function(){
        return Object.keys(this.obj) 
    }
}

const drinkStorage = new HashStorageClass();

function enteringDrinkInf(){
    var nameDrink = prompt('Введите название напитка');
    do
          {
            var alcoDrink = prompt('Напиток алкогольный? Введите "да" или "нет"')
          
            if(alcoDrink.toLowerCase() === 'да'){
                alcoDrink = 'да';
                break;
            }
            else if(alcoDrink.toLowerCase() === 'нет'){
                alcoDrink = 'нет';
                break;
            }
            else{
             alert('Некорректный ввод. Введите "да" или "нет"')
            }
        }while(true);

        var recipeDrink = prompt('Введите рецепт напитка')

        drinkStorage.addValue(nameDrink, [alcoDrink, recipeDrink])
}

function getInfAboutDrink(){
    var nameDrink = prompt('Введите название напитка')
    var result = drinkStorage.getValue(nameDrink)
    if(result !== undefined){
        alert('напиток ' + result[0] + '\n' + 'алкогольный: ' + result[1] + '\n'  + 'рецепт приготовления: '+ '\n' + result[2])
    }
    else{
        alert('Данный напиток отсутствует в списке')
    } 
}

function deleteDrink(result){
    var nameDrink = prompt('Введите название напитка')
    var result = drinkStorage.deleteValue(nameDrink)
    if(result === true){
        alert('напиток ' + nameDrink + ' удалён из списка')
    }
    else{
        alert('Данный напиток не может быть удален так как отсутствует в списке')
    }
}


function listOfAllDrinks(){
      alert(drinkStorage.getKeys())
}


