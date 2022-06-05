//  Task1

class Car{
    constructor(model, weight, amountFuelUsed, distanceTraveled){
        this._model = model;
        this._weight = weight;
        this._amountFuelUsed = amountFuelUsed;
        this._distanceTraveled = distanceTraveled;
    }

    get model(){
        return this._model;
    }

    get weight(){
        return this._weight;
    }
    get amountFuelUsed(){
        return this._amountFuelUsed;
    }
    get distanceTraveled(){
        return this._distanceTraveled;
    }

    set amountFuelUsed(amount){
        this._amountFuelUsed = amount
    }
    set distanceTraveled(distance){
        this._distanceTraveled = distance
    }

    // getFuelConsumption(){
    //     return (this.amountFuelUsed / this.distanceTraveled) * 100
    // }
}

const car = new Car('Mers', 2, 100, 1000)
console.log((car.amountFuelUsed / car.distanceTraveled) * 100) /* getter */
car.distanceTraveled = 1000; /* setter */
car.amountFuelUsed = 100; /* setter */



class CustomString{
    constructor(str){
        this.str = str;
    }
    reverse(){
        return this.str.split('').reverse().join('')
    }
    capFirstWord(){
       return this.str[0].toUpperCase() + this.str.slice(1, this.str.length - 1)
    }

    capAllWords(){
        this.str.split(' ').forEach(function(elem){
            return elem[0].toUpperCase()
        })
    }
}

const customString = new CustomString('привет мир!')
console.log(customString.reverse())
console.log(customString.capFirstWord())
console.log(customString.capAllWords())
