var canvas = document.querySelector('#c1')
var ctx = canvas.getContext('2d')

// заливка прямогугольника
ctx.fillStyle = 'red'
ctx.fillRect(100, 50, 150, 75)

// cтереть прямоугольник

// ctx.clearRect(0,0,400,200)

// прямоугольник прямого вида
// ctx.strokeStyle = 'green'
// ctx.lineWidth = '10'
// ctx.rect(50,10,100,100);
// ctx.stroke()
// ctx.fillStyle = 'orange'
// ctx.fill()


// Рисуем линии
ctx.beginPath()
ctx.strokeStyle = 'red'
ctx.lineWidth = '5'
ctx.moveTo(100, 50)
ctx.lineTo(150, 150)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = 'blue'
ctx.lineWidth = '10'
ctx.moveTo(200, 50)
ctx.lineTo(300, 50)
ctx.lineTo(300, 100)
ctx.lineCap = 'round'
// ctx.lineCap = 'square'
// ctx.lineCap = 'butt'
ctx.stroke()


// Рисуем треугольник

ctx.beginPath()
ctx.moveTo(50, 150)
ctx.lineTo(150, 50)
ctx.lineTo(200, 150)
// ctx.lineTo(50, 150)
ctx.lineWidth = '5'
ctx.lineCap = 'round'
ctx.fillStyle = 'yellow'
ctx.closePath()
ctx.stroke()
ctx.fill()


// Рисуем при нажатии мыши

document.getElementById('color').oninput = function(){
    mycolor = this.value;
}
    //  var x = event.offsetX;
    //  var y = event.offsetY;
    //  ctx.fillRect(x - 5, y - 5, 10, 10)
    canvas.onmousedown = function(event){
        canvas.onmousemove = function(event){
        var x = event.offsetX;
        var y = event.offsetY;

        ctx.fillRect(x - 5, y - 5, 10, 10)
        ctx.fillStyle = mycolor
        ctx.fill()
    }
    canvas.onmouseup = function(){
        canvas.onmousemove = null;
    }
}


// Дуги и круги
var pi = Math.PI;
ctx.beginPath()
ctx.lineWidth = '5'
ctx.strokeStyle = 'red'
ctx.fillStyle = 'yellow'
ctx.arc(150, 100, 75, 0, 2*pi, false);
ctx.stroke();
ctx.fill()

// анимация круга

canvas.onmousemove = function(event){
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.clearRect(0,0,600, 600)

    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.lineWidth = '5'
    ctx.moveTo(100, 50)
    ctx.lineTo(x, y)
    ctx.stroke()

    // ctx.beginPath()
    // var radius = Math.pow(Math.pow(x-200, 2) + Math.pow(y - 100, 2),0.5)
    // ctx.arc(200, 100, radius, 0, 2*pi, false);
    // ctx.stroke();
    // ctx.fill()
}

// Кривые