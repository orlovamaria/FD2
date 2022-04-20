function Laptop(name, model, serialNumber, yearOfManufacture, ramSize, romSize, mass, drive, webcam){
   this.name = name;
   this.model = model;
   this.serialNumber = serialNumber;
   this.yearOfManufacture = yearOfManufacture;
   this.ramSize = ramSize;
   this.romSize = romSize;
   this.mass = mass;
   this.drive = drive;
   this.webcam = webcam;
}

Laptop.prototype.getamountOfRamAndRom = function(){
      return this.ramSize + ' ' + this.romSize;
}
Laptop.prototype.getNameAndModel = function(){
    return this.name + ' ' + this.model;
}

function Ultrabook(name, model, serialNumber, yearOfManufacture, ramSize, romSize, mass, drive, webcam){
    Laptop.call(this, name, model, serialNumber, yearOfManufacture, ramSize, romSize, mass, drive, webcam)
}

Ultrabook.prototype = Object.create(Laptop.prototype)

Ultrabook.prototype.getNameYearModel = function(){
    return this.name + ' ' + this.model + ' ' + this.yearOfManufacture;
}


var laptop = new Laptop('Asus', 'UX305L', 'PD972', 2019, 8, 238, "1500г", false, true);
var ultrabook = new Ultrabook('Asus', 'UX309L', 'PD', 2018, 9, 239, "2000г", false, true)
console.log(laptop)
console.log(ultrabook)
console.log(laptop.getamountOfRamAndRom())
console.log(laptop.getNameAndModel())
console.log(ultrabook.getamountOfRamAndRom())
console.log(ultrabook.getNameYearModel())