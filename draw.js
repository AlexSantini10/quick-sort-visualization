function initCanva() {
    ctx.fillStyle = "rgb(30, 30, 30)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBorder(xPos, yPos, width, height, thickness = 1) {
    ctx.fillStyle="#000000";
    ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
};

function drawCol(xPos, yPos, width, height, color = "#EDEDED") {
    ctx.fillStyle = color;
    ctx.fillRect(xPos, yPos, width, height);
}

function drawColBorder(xPos, yPos, width, height, color = "white") {
    drawBorder(xPos, yPos, width-2, height-2);
    drawCol(xPos, yPos, width, height, color);
}

function drawColB(x, val, width) {
    drawColBorder(x, canvas.height-val, width, val);
}

function drawCols() {
    for(let i=0; i<colNumber; ++i) {
        drawColB(i*20 + (offset/2), arr[i], 18);
    }
}