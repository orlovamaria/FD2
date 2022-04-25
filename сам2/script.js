function InflatableBoat(length, width, weight, loadCapacity, numberOfSeats, prodСountry, motor){
      this.length = length;
      this.width = width;
      this.weight = weight;
      this.loadCapacity = loadCapacity;
      this.numberOfSeats = numberOfSeats;
      this.prodСountry = prodСountry;
      this.motor = motor;
}
InflatableBoat.prototype.getParameters = function(){
    return this.length + ' ' + this.width + ' ' + this.weight;
}
InflatableBoat.prototype.getLoading = function(){
    if((parseFloat(this.loadCapacity)) <= 220){
         return parseFloat(this.loadCapacity)
    }
    else{
        return 'Данная грузоподъемность не соответствует лодке'
    }  
}


var inflatableBoat = new InflatableBoat(300, 150, '100кг', '250кг', 4, 'Belarus', true);
console.log(inflatableBoat.getParameters())
console.log(inflatableBoat.getLoading())


function Boat(length, width, weight, loadCapacity, numberOfSeats, prodСountry, motor, lifeTime){
    InflatableBoat.call(this, length, width, weight, loadCapacity, numberOfSeats, prodСountry, motor)
    this.lifeTime = lifeTime;
}

Boat.prototype = Object.create(InflatableBoat.prototype)

var boat = new Boat(300, 150, '100кг', '50кг', 4, 'Belarus', true, '2 года');
console.log(boat.getParameters())


function Yacht(length, width, weight, loadCapacity, prodСountry, motor, height){
    InflatableBoat.call(this, length, width, weight, loadCapacity, prodСountry, motor)
    this.height = height;
}

Yacht.prototype = Object.create(InflatableBoat.prototype)

var yacht = new Yacht(300, 150, '100кг','50кг', 'Belarus', true, '150см')
console.log(yacht.getParameters())