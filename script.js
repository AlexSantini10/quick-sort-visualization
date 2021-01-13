var arr = new Array();
var states = new Array();

var colNumber = 0;
const dim = 20;
var offset;

document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementsByTagName('body')[0];
 
    var canvas = document.createElement('canvas');
    canvas.id = "canvas";

    if (window.screen.height <= window.screen.width){
        canvas.height = (window.screen.height/5*3);
        canvas.width = (window.screen.width/100*99);
        canvas.style.marginTop = String((window.screen.height/2)-(canvas.height/5*3)) + 'px';
        canvas.style.left = String((window.screen.width/2) - (canvas.width/2)) + 'px';
    }
    else {
        canvas.height = (window.screen.height/100*80)-(window.screen.height/100*80)%dim;
        canvas.width = (window.screen.width/100*90)-(window.screen.width/100*90)%dim;
        canvas.style.marginTop = String((window.screen.height/2)-(canvas.height/100*60)) + 'px';
        canvas.style.left = String((window.screen.width/2) - (canvas.height/2)) + 'px';
    }

    colNumber = canvas.width/dim - (canvas.width/dim)%1;
    offset = (canvas.width%dim);

    body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    initCanva();

    for(let i=0; i<colNumber; ++i){
        let val = Math.floor(Math.random() * canvas.height - 30) + dim;
        if (val<=0) val = 5;
        if (val%5 != 0) val += 5 - val%5;
        arr.push(val);
    }

    states = new Array(colNumber);

    drawCols();
    /*
    arr = arr.sort((a,b) => {return a-b});
    drawCols();
    */

    quickSort(arr, 0, arr.length-1);
});