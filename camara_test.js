var ctx;
var factorValue = 1;
var fontfamily = "65px 'Gill Sans Ultra Bold', sans-serif";

function init() { 

    ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = fontfamily;
    ctx.save();
    dologo();

}

function dologo() {

    var offsety=80;

    ctx.restore();
    ctx.save();

    ctx.clearRect(0,0,600,400);
    ctx.scale(factorValue,factorValue);

    ctx.fillText("Camara", 15,60);
    ctx.translate(0,offsety);

    ctx.fillStyle = "#FF0042";
    ctx.beginPath();

    ctx.moveTo(20, 250);
    ctx.arcTo(20,0,60,0,60);
    ctx.lineTo(60, 0);
    ctx.arcTo(250,0,250,40,60);
    ctx.lineTo(250,0);
    ctx.arcTo(250,250,210,250,60);
    ctx.lineTo(250, 250);
    ctx.arcTo(20,250,20,210,60);

    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();

    ctx.moveTo(70, 185);
    ctx.arcTo(70,65,110,65,30);
    ctx.lineTo(70, 65);
    ctx.arcTo(200,65,200,105,30);
    ctx.lineTo(200, 65);
    ctx.arcTo(200,185,160,185,30);
    ctx.lineTo(200, 185);
    ctx.arcTo(70,185,70,145,30);

    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#FF0042";
    ctx.beginPath();

    ctx.moveTo(170, 85);
    ctx.arc(177,92,10,0,(Math.PI/180)*360, true);

    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#9A000F";
    ctx.beginPath();

    ctx.moveTo(110, 105);
    ctx.arc(138, 133, 25, 0, (Math.PI/180)*360, true);

    ctx.closePath();
    ctx.fill();

}

function changeScale(val) {

    factorValue=val/100;
    dologo();

}