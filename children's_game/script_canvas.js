
let canvas2 = document.getElementById('canvas2')
let ctx = canvas2.getContext("2d");

let letterA = new Image();
letterA.src = "Ellipse-A.png";
let objLetterA = {
    img: letterA,
    x: 120,
    y: 120,
};

let letterP1 = new Image();
letterP1.src = "Ellipse-P1.png";
let objLetterP1 = {
    img: letterP1,
    x: 300,
    y: 500,
};

let letterP2 = new Image();
letterP2.src = "Ellipse-P2.png";
let objLetterP2 = {
    img: letterP2,
    x: 700,
    y: 200,
};

let letterL = new Image();
letterL.src = "Ellipse-L.png";
let objLetterL = {
    img: letterL,
    x: 1000,
    y: 600,
};

let letterE = new Image();
letterE.src = "Ellipse-E.png";
let objLetterE = {
    img: letterE,
    x: 1270,
    y: 150,
};


letterA.onload = function() {
	ctx.drawImage(objLetterA.img, objLetterA.x, objLetterA.y);
};

letterP1.onload = function() {
	ctx.drawImage(objLetterP1.img, objLetterP1.x, objLetterP1.y);
};

letterP2.onload = function() {
	ctx.drawImage(objLetterP2.img, objLetterP2.x, objLetterP2.y);
};


letterL.onload = function() {
	ctx.drawImage(objLetterL.img, objLetterL.x, objLetterL.y);
};


letterE.onload = function() {
	ctx.drawImage(objLetterE.img, objLetterE.x, objLetterE.y);
};



let lineArr = [];

function isInside(x, y , obj) {
    if(x > obj.x && x < obj.x + obj.img.width) {
        if( y > obj.y && y < obj.y + obj.img.height) {
            return true;
        }
    }

    return false;
}

function getStartObjectByCountEndedLine(countEndedLine) {
    switch (countEndedLine) {
        case 0:{
            return objLetterA;
        }
        case 1: {
            return objLetterP1;
        }
        case 2: {
            return objLetterP2;
        }
        case 3: {
            return objLetterL;
        }
    }
}

function getFinishObjectByCountEndedLine(countEndedLine) {
    switch (countEndedLine) {
        case 0: {
            return objLetterP1;
        }
        case 1: {
            return objLetterP2;
        }
        case 2: {
            return objLetterL;
        }
        case 3: {
            return objLetterE;
        }
    }
}

canvas2.addEventListener('mousedown', function(event){
    var x = event.offsetX;
    var y = event.offsetY;

    //если массив пустой
    if(lineArr.length === 0) {
        if(isInside(x, y, objLetterA)) {
            lineArr.push({
                state: 0,
                startX: x,
                startY: y,
                finishX: -1,
                finishY: -1
            })
        }
        else {
            // добавить звук
        }
    }
    else {
        let enndedLine = lineArr.filter(function(elem){
            if(elem.state === 1){
                return elem;
            }
        })

        switch(lineArr[lineArr.length - 1].state) {
            case 0: {
                lineArr[lineArr.length - 1].finishX = x;
                lineArr[lineArr.length - 1].finishY = y;

                let curObj = getFinishObjectByCountEndedLine(enndedLine.length);

                if(isInside(x, y, curObj)) {
                    lineArr[lineArr.length - 1].state = 1;
                }
                else {
                    lineArr[lineArr.length - 1].state = 2;
                }

                break;
            }
            case 1: {
                let curObj = getStartObjectByCountEndedLine(enndedLine.length);

                if(isInside(x, y, curObj)) {
                    lineArr.push({
                        state: 0,
                        startX: x,
                        startY: y,
                        finishX: -1,
                        finishY: -1
                    })
                }
                else {
                    // добавить звук
                }   

                break;
            }
            case 2: {
                lineArr.pop();

                let curObj = getStartObjectByCountEndedLine(enndedLine.length);

                if(isInside(x, y, curObj)) {
                    lineArr.push({
                        state: 0,
                        startX: x,
                        startY: y,
                        finishX: -1,
                        finishY: -1
                    })
                }
                else {
                    // добавить звук
                } 

                break;
            }
        }
    }

    myDraw(event);
})

canvas2.addEventListener('mousemove', function(event){
    myDraw(event);
})

function myDraw(event) {
    ctx.clearRect(0,0,1700, 800);

    ctx.drawImage(objLetterA.img, objLetterA.x, objLetterA.y);
    ctx.drawImage(objLetterP1.img, objLetterP1.x, objLetterP1.y)
    ctx.drawImage(objLetterP2.img, objLetterP2.x, objLetterP2.y)
    ctx.drawImage(objLetterL.img, objLetterL.x, objLetterL.y);
    ctx.drawImage(objLetterE.img, objLetterE.x, objLetterE.y);

    var x = event.offsetX;
    var y = event.offsetY;

    lineArr.forEach(elem => {
        ctx.beginPath()

        switch(elem.state) {
            case 0: {
                ctx.strokeStyle = 'blue'
                ctx.lineWidth = '5'
                ctx.moveTo(elem.startX, elem.startY)
                ctx.lineTo(x, y)
                break;
            }
            case 1: {
                ctx.strokeStyle = 'green'
                ctx.lineWidth = '5'
                ctx.moveTo(elem.startX, elem.startY)
                ctx.lineTo(elem.finishX, elem.finishY)
                break;
            }
            case 2: {
                ctx.strokeStyle = 'red'
                ctx.lineWidth = '5'
                ctx.moveTo(elem.startX, elem.startY)
                ctx.lineTo(elem.finishX, elem.finishY)
                break;
            }
        }

        ctx.stroke()
    })
}
