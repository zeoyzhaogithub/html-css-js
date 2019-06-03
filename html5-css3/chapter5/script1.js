function draw0(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');
    // 起点横纵坐标、终点横纵坐标
    var g1 = context.createLinearGradient(0, 0, 0, 300);
    g1.addColorStop(0, 'rgb(255, 255, 0)');
    g1.addColorStop(1, 'rgb(0, 255, 255)');

    context.fillStyle = g1;
    context.fillRect(0, 0, 400, 300);

    var n = 0;
    var g2 = context.createLinearGradient(0, 0, 300, 0);
    g2.addColorStop(0, 'rgba(0, 0, 255, 0.5)');
    g2.addColorStop(1, 'rgba(255, 0, 0, 0.5)');

    for(var i = 0; i < 10; i ++){
        context.beginPath();
        context.fillStyle = g2;
        context.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    }
}

function draw1(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');
    // 
    var g1 = context.createRadialGradient(
        400,   // 渐变开始圆圆心横坐标
        0,     // 。。。 纵坐标
        0,     // 开始圆半径
        400,   // 渐变结束圆的圆心横坐标
        0,     // 。。。 纵坐标
        400    // 结束圆的半径
    );

    g1.addColorStop(0.3, 'rgb(255, 0, 255)');
    g1.addColorStop(1, 'rgb(0, 255, 255)');

    context.fillStyle = g1;
    context.fillRect(0, 0, 400, 300);

    var n = 0;

    var g2 = context.createRadialGradient(250, 250, 0, 250, 250, 300);
    g2.addColorStop(0.1, 'rgba(255, 0, 0, 0.5)');
    g2.addColorStop(0.7, 'rgba(255, 255, 0, 0.5)');
    g2.addColorStop(1, 'rgba(0, 0, 255, 0.5)');

    for(var i = 0; i < 10; i ++){
        context.beginPath();
        context.fillStyle = g2;
        context.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    }
}

// 坐标变换
function draw2(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEEEFF";
    context.fillRect(0, 0, 500, 400);
    // 绘制图形
    context.translate(250, 50);
    context.fillStyle = 'rgba(255, 100, 10, 0.25)'

    var n = 0;
    for(var i = 0; i < 50; i ++){
        context.translate(25, 25);
        context.scale(0.95, 0.95);
        context.rotate(Math.PI/10);
        context.fillRect(0, 0, 100, 50);
    }
}

function create5Star(context){
    var n = 0,
        dx = 100,
        dy = 0,
        s = 50;
    
    // 创建路径
    context.beginPath();
    context.fillStyle = 'rgba(255, 0, 0, 0.5)';

    var x = Math.sin(0),
        y = Math.cos(0),
        dig = Math.PI/5*4;
    for(var i = 0; i < 5; i ++){
        var x = Math.sin(i * dig);
        var y = Math.cos(i * dig);
        context.lineTo(dx + x * s, dy + y * s);
    }
    context.closePath();
}

function draw3(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEEEFF";
    context.fillRect(0, 0, 400, 300);
    // 绘制图形
    context.translate(200, 50);
    var n = 0;
    for(var i = 0; i < 50; i ++){
        context.translate(20, 20);
        context.scale(0.95, 0.95);
        context.rotate(Math.PI/8);
        create5Star(context);
        context.fill();
    }
}


// 矩阵变换
function draw4(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');
    // 定义颜色
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple', 'navy','blue', 'green','yellow', 'orange','red'];
    // 定义线宽
    context.lineWidth = 10;
    context.transform(1, 0, 0, 1, 100, 0);
    // 绘制圆弧
    var n = 0;
    for(var i = 0; i < colors.length; i ++){
        // 定义每次向下移动10个像素的变换矩阵
        context.transform(1, 0, 0, 1, 0, 10);
        // 设定颜色
        context.strokeStyle = colors[i];
        context.beginPath();
        context.arc(50, 100, 100, 0, Math.PI, true);
        context.stroke();
    }
}


//settransform
function draw5(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');
// 绘制红色长方形
    context.strokeStyle = "red";
    context.strokeRect(30, 10, 60, 20);
// 绘制顺时针旋转45度后的蓝色长方形
    // 绘制45度圆弧
    var rad = 45 * Math.PI / 180;
    // 定义顺时针旋转45度的变换矩阵
    context.setTransform(
        Math.cos(rad), 
        Math.sin(rad), 
        -Math.sin(rad),
        Math.cos(rad),
        0,
        0
    );
    // 绘制图形
    context.strokeStyle = "blue";
    context.strokeRect(30, 10, 60, 20);
    
// 绘制放大2.5倍后的绿色长方形
    // 定义放大2.5倍的变换矩阵
    context.setTransform(2.5, 0, 0, 2.5, 0, 0);
    // 绘制图形
    context.strokeStyle = "green";
    context.strokeRect(30, 10, 60, 20);
// 将坐标原点向右移动40像素，向下移动80像素后绘制灰色长方形
    // 定义将坐标原点向右移动40像素，向下移动80像素的矩阵
    context.setTransform(1, 0, 0, 1, 40, 80);
    // 绘制矩阵
    context.strokeStyle = "gray";
    context.strokeRect(30,10, 60, 20);
}

// 绘制图形阴影
function draw6(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEEEFF";
    context.fillRect(0, 0, 400, 300);

    //设置阴影
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowColor   = 'rgba(100, 100, 100, 0.5)';
    context.shadowBlur    = 7.5;   // 阴影的模糊范围

    // 绘制图形
    context.translate(0, 50);
    for(var i = 0; i < 3; i ++){
        context.translate(50, 50);
        create5Star(context);
        context.fill();
    }
}