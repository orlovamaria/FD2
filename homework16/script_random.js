function randomNumber(){
    var question1 = Math.floor(1+Math.random() * (10+1-1))
    var question2 = Math.floor(11+Math.random() * (20+1-11))
    var question3 = Math.floor(21+Math.random() * (30+1-21))
    var question4 = Math.floor(31+Math.random() * (40+1-31))
    var question5 = Math.floor(41+Math.random() * (50+1-41))

return 'Вопросы под номерами: ' + question1 + ' ' + question2 + ' ' + question3 + ' ' + question4 + ' ' + question5
}
console.log(randomNumber())
