var user1 = {
    age: 19,
    fName: 'Max'
}

var user2 = {
    age: 29,
    fName: 'Michael'
}



// Class (ES5)

function Person(age, firstName, about){
    // var this = {}
    this.age = age;
    this.firstName = firstName;
    var about = about;
    var self = this;
    // this.obj1 = {a: 123}
    this.getDays = function(){
        return this.age * 365;
    }
    this.getAbout = function(){
        //return about;
        return getInfo();
    }
    var getInfo = function(){
        return self.age + about;
    }
    // return this;
}

var user3 = new Person(29, 'Nick', 'About Nick')
var user4 = new Person(27, 'Peter');
var user5 = new Person(32, 'Joe')
//user3.age = 100;
//user3.address = 'jdkfhkwef';
// console.log(user3.about);
//  console.log(user3);
//  console.log(user3.getAbout());
 //console.log(user.getInfo())
// console.log(user4.getDays());
// console.log(user5.getDays());





// Click event


function User(age, name){
    this.age = age;
    this.name = name;
    this.getFullInfo = function(){
        return this.age + ' ' + this.name;
    }
}

var user = new User(19, 'Max');
//console.log(user);
//console.log(user.getFullInfo())

function getClickInfo(){
    var current = user.getFullInfo();
    alert(current);
}

//getClickInfo();