// 画太极图
function draw0(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    canvas.width = 1000;
    canvas.height = 500;
    var context = canvas.getContext('2d');

    context.arc(300,300,200, 0, Math.PI* 2);
    context.fillStyle = '#000';
    context.fill();
    context.strokeStyle = '#ccc';
    context.stroke();

    // 画另一个大圆
    // 重置
    context.beginPath();
    context.arc(300, 300, 200, 1.5 * Math.PI, 0.5 * Math.PI);
    context.fillStyle = '#fff';
    context.fill();
    context.stroke();

    // 画另一个圆
    // 重置
    context.beginPath();
    context.arc(300, 200, 100, 0, 2 * Math.PI);
    context.fillStyle = '#000';
    context.fill();
    context.strokeStyle = '#000';
    context.stroke();

    // 画另一个圆
    // 重置
    context.beginPath();
    context.arc(300, 400, 100, 0, 2 * Math.PI);
    context.fillStyle = '#fff';
    context.fill();
    context.strokeStyle = '#fff';
    context.stroke();

    // 画另一个圆
    // 重置
    context.beginPath();
    context.arc(300, 200, 50, 0, 2 * Math.PI);
    context.fillStyle = '#fff';
    context.fill();
    context.strokeStyle = '#fff';
    context.stroke();

    // 画另一个圆
    // 重置
    context.beginPath();
    context.arc(300, 400, 50, 0, 2 * Math.PI);
    context.fillStyle = '#000';
    context.fill();
    context.strokeStyle = '#000';
    context.stroke();
}


// 画钟表
var canvas1 = "",
    context1 = "";
function draw1(id = 'canvas1'){
    var canvas1 = document.getElementById(id);
    if(canvas1 == null){
        return false;
    }
    canvas1.width = 1000;
    canvas1.height = 500;

    var context1 = canvas1.getContext('2d');
    var x = 210,
        y = 210,
        r = 200,
        date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    
    var h = (-90 + hours* 30 + (minutes / 2)) * Math.PI / 180,
        m = (-90 + minutes* 6 + (seconds / 10)) * Math.PI / 180,
        s = (-90 + seconds* 6) * Math.PI / 180;
    
    context1.beginPath();
    context1.arc(x, y, r, 0, 360 * Math.PI / 180);
    context1.fillStyle = '#fff';
    context1.fill();
    context1.strokeStyle = '#ccc';
    context1.stroke();
    context1.closePath();

    // 分针
    context1.beginPath();
    for(var i = 0; i < 60; i ++){
        context1.moveTo(x, y);
        context1.arc(
            x,
            y,
            r,
            i * 6 * Math.PI/180, 
            (i + 1)*6 * Math.PI/180);
    }
    context1.fillStyle = "#000";
    context1.stroke();
    
    context1.beginPath();
    context1.arc(x, y, r*(18/20), 0, 2 * Math.PI);
    context1.fillStyle = '#fff';
    context1.fill();
    context1.strokeStyle = "#fff";
    context1.stroke();
    //context.closePath();

    // 时针
    context1.beginPath();
    for(var i = 0; i < 12; i ++){
        context1.moveTo(x, y);
        context1.arc(
            x,
            y,
            r,
            i * 30 * Math.PI/180, 
            (i + 1)*30 * Math.PI/180);
    }
    context1.lineWidth = 3;
    context1.strokeStyle = "#000";
    context1.stroke();
    
    context1.beginPath();
    context1.arc(x, y, r*(16/20), 0, 2 * Math.PI);
    context1.fillStyle = '#fff';
    context1.fill();
    context1.strokeStyle = "#fff";
    context1.stroke();

    // 画时分秒线
    // 时
    context1.beginPath();
    context1.moveTo(x, y);
    context1.arc(x, y, r*(10/20), h, h);
    context1.lineWidth = 5;
    context1.strokeStyle = '#000';
    context1.stroke();
    // 分
    context1.beginPath();
    context1.moveTo(x, y);
    context1.arc(x, y, r*(12/20), m, m);
    context1.lineWidth = 3;
    context1.strokeStyle = '#000';
    context1.stroke();
    // 秒
    context1.beginPath();
    context1.moveTo(x, y);
    context1.arc(x, y, r*(14/20), s, s);
    context1.lineWidth = 1;
    context1.strokeStyle = '#000';
    context1.stroke();   
}
draw1();
setInterval(draw1, 1000);



// 画拆线图
function draw2(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');
}