// var num1 = 10;
// var num2 = 11;
// //var sum = num1+ num2 ;
// var sum = num1 + num2 + num3;
// console.log(sum);

function summator(){
    //return 10+10;
    if(false){
        console.log('this is true')
    } else{
        throw {name: 'Error100', message: 'This is error  № 100'}
    }
    
    //throw new Error({message: 'This is error  № 100'})
}

function generateError(){
    throw {name: 'Error101', message: 'This is error  № 101'}
}

try{
    var num1 = 10;
    var num2 = 11;
    //var sum = num1+ num2 ;
    //var sum = num1 + num2 + num3;
    //generateError();
    var sum = summator()
    console.log(sum);

}catch (err){
    // if(err.name === 'Error101'){
    //     console.log(101)
    // } else if(err.name === 'Error100'){
    //     console.log(100)
    // }
    // console.log('ERROR!!!!!!!!!!!!!');
    //console.log(err);
    //console.log(err.name)
    //console.log(err.message)
}

//console.log('Heelo wor!')