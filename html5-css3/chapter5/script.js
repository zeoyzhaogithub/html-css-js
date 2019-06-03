// 画矩形
function draw(id){
    var canvas = document.getElementById(id); // 取得canvas元素
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');   // 取得上下文，只能是2d
    // fill填充 stroke 绘制边框 style设置样式
    context.fillStyle = "#EEEEFF";           // 填充样式        
    context.fillRect(0,0,400,300);           // 绘制图形
    context.fillStyle = "red";
    context.strokeStyle = "blue";            // 边框样式
    context.lineWidth = 1;                   // 线宽
    context.fillRect(50, 50, 100, 100);
    context.strokeRect(50, 50, 100, 100);    // 绘制边框
    context.clearRect(150,150, 80,80);
}

// 画圆
function draw1(id){
    var canvas = document.getElementById(id); // 取得canvas元素

    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');     //取得上下文，只能是2d
    // fill填充 stroke 绘制边框 style设置样式
    context.fillStyle = "#EEEEFF";           // 填充样式        
    context.fillRect(0,0,400,300);           // 绘制图形
    var i = 0;
    for(var i = 0; i < 10; i++){
        context.beginPath();   // 创建路径
        // 创建圆形路径 
        // 参数依次为：起点横坐标、起点纵坐标、圆半径，开始角度、结束角度，是否逆时针绘制
        context.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true);
        context.closePath();     // 关闭路径
        context.fillStyle = 'rgba(255, 0, 0, 0.25)';
        context.fill();          // 绘制
    }
}

// 画椭圆
function draw2(id){
    var canvas = document.getElementById(id); // 取得canvas元素

    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');     //取得上下文，只能是2d
    // fill填充 stroke 绘制边框 style设置样式
    context.fillStyle = "#EEEEFF";           // 填充样式        
    context.fillRect(0,0,450,360);           // 绘制图形
    var n = 0;
    for(var i = 0; i < 10; i++){
        context.beginPath();   // 创建路径
        // 创建圆形路径 
        // 参数依次为：起点横坐标、起点纵坐标、椭圆横向半径、椭圆纵向半径、顺时针方向旋转角度、开始角度、结束角度，是否逆时针绘制
        context.ellipse(i * 25, i * 25, i * 10, i * 20, 30, 0, Math.PI * 2, true);
        context.closePath();     // 关闭路径
        context.fillStyle = 'rgba(255, 0, 0, 0.25)';
        context.fill();          // 绘制
    }
}

//没有关闭路径的效果
function draw3(id){
    var canvas = document.getElementById(id); // 取得canvas元素

    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');     //取得上下文，只能是2d
    // fill填充 stroke 绘制边框 style设置样式
    context.fillStyle = "#EEEEFF";           // 填充样式        
    context.fillRect(0,0,450,360);           // 绘制图形
    var n = 0;
    for(var i = 0; i < 10; i++){
        // context.beginPath();   // 创建路径
        // 创建圆形路径 
        // 参数依次为：起点横坐标、起点纵坐标、椭圆横向半径、椭圆纵向半径、顺时针方向旋转角度、开始角度、结束角度，是否逆时针绘制
        context.ellipse(i * 25, i * 25, i * 10, i * 20, 30, 0, Math.PI * 2, true);
        // context.closePath();     // 关闭路径
        context.fillStyle = 'rgba(255, 0, 0, 0.25)';
        context.fill();          // 绘制
    }
}


//绘制复杂图形
function draw4(id){
    var canvas = document.getElementById(id); // 取得canvas元素

    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');     //取得上下文，只能是2d
    // fill填充 stroke 绘制边框 style设置样式
    context.fillStyle = "#EEEEFF";           // 填充样式        
    context.fillRect(0,0,400,300);           // 绘制图形
    var n = 0,
        dx = 150,
        dy = 150,
        s = 100;
    context.beginPath();   // 创建路径
    context.fillStyle = 'rgb(100, 255, 100)';
    context.strokeStyle = 'rgb(0, 0, 100)'
    
    var x = Math.sin(0),
        y = Math.cos(0),
        dig = Math.PI / 15 * 11;

    for (var i = 0; i < 30; i ++){
        var x = Math.sin(i * dig);
        var y = Math.cos(i * dig);
        context.lineTo(dx + x*s, dy + y*s);
    }

    context.closePath();     // 关闭路径
    context.fill();          // 绘制
    context.stroke();
}

//绘制复杂图形
function draw5(id){
    var canvas = document.getElementById(id); // 取得canvas元素

    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');     //取得上下文，只能是2d
    // fill填充 stroke 绘制边框 style设置样式
    context.fillStyle = "#EEEEFF";           // 填充样式        
    context.beginPath();   // 创建路径
    context.lineWidth = 10;
    context.lineJoin = "round";   // 两线交汇处创建圆形拐角
    context.lineCap = "round";    // 添加圆形线帽
    context.moveTo(20, 20);
    context.lineTo(20,200);
    context.lineTo(200, 200);
    
    context.lineWidth = 5;
    context.setLineDash([5, 20, 10, 10]);   // 设置线段长度 
    context.closePath(); 
    console.log(context.getLineDash());
}

//绘制曲线
function draw6(id){
    var canvas = document.getElementById(id); // 取得canvas元素
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');     //取得上下文，只能是2d
    // fill填充 stroke 绘制边框 style设置样式
    context.fillStyle = "#EEEEFF";           // 填充样式        
    context.beginPath();   // 创建路径
    context.moveTo(150, 20);
    context.arcTo(150,100, 50, 20, 30);
    context.stroke();
}

// 贝塞尔曲线
function draw7(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }

    var context = canvas.getContext('2d');
    context.fillStyle = "#EEEEFF";
    context.fillRect(0, 0, 400, 300);

    var n = 0,
        dx = 150,
        dy = 150,
        s = 100;
    context.beginPath();
    context.globalCompositeOperation = 'and';
    context.fillStyle = 'rgb(100, 255, 100)';

    var x = Math.sin(0),
        y = Math.cos(0),
        dig = Math.PI / 15 * 11;
    context.moveTo(dx, dy);

    for (var i = 0; i < 30; i ++){
        var x = Math.sin(i * dig);
        var y = Math.cos(i * dig);
        context.bezierCurveTo(
            dx + x * s,        // 第一个控制点横坐标
            dy + y * s - 100,  // 第一个控制点纵坐标
            dx + x * s + 100,  // 第二个控制点横坐标
            dy + y * s,        // 第二个控制点纵坐标
            dx + x * s,        // 终点横坐标
            dy + y * s         // 终点纵坐标
        );
    }
    context.closePath();
    context.fill();
    context.stroke();
}

// path2d
// 画圆
function draw8(id){
    var canvas = document.getElementById(id); // 取得canvas元素

    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');     //取得上下文，只能是2d
    // fill填充 stroke 绘制边框 style设置样式
    context.fillStyle = "#EEEEFF";           // 填充样式        
    context.fillRect(0,0,400,300);           // 绘制图形
    var i = 0;
    for(var i = 0; i < 10; i++){
        var path = new Path2D();
        // 参数依次为：起点横坐标、起点纵坐标、圆半径，开始角度、结束角度，是否逆时针绘制
        path.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true);
        path.closePath();     // 关闭路径
        context.fillStyle = 'rgba(255, 0, 0, 0.25)';
        context.fill(path);          // 绘制
    }
}

// 套用另一个对象
function draw9(id){
    var canvas = document.getElementById(id); // 取得canvas元素

    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');     //取得上下文，只能是2d
    var path1 = new Path2D();
    // 参数依次为：起点横坐标、起点纵坐标、圆半径，开始角度、结束角度，是否逆时针绘制
    path1.rect(10, 10 , 100, 100);

    var path2 = new Path2D(path1);
    path2.moveTo(220, 60);
    path2.arc(170, 60, 50, 0, 2*Math.PI);
    context.stroke(path2);
}

// 套用另一个对象2
function draw10(id){
    var canvas = document.getElementById(id); // 取得canvas元素

    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');     //取得上下文，只能是2d
    var path1 = new Path2D();
    // 参数依次为：起点横坐标、起点纵坐标、圆半径，开始角度、结束角度，是否逆时针绘制
    path1.rect(10, 10, 100, 100);

    var path2 = new Path2D();
    path2.moveTo(220, 60);
    path2.arc(170, 60, 50, 0, 2*Math.PI);
    // path2.addPath(path1);   // 将path1对象代表的路径添加到path2中
    context.stroke(path2);
}


// 套用另一个对象SVG
function draw11(id){
    var canvas = document.getElementById(id); // 取得canvas元素

    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');     //取得上下文，只能是2d
    var path1 = new Path2D("M10 10 h 80 v 80 h -80 Z");
    // 参数依次为：起点横坐标、起点纵坐标、圆半径，开始角度、结束角度，是否逆时针绘制
    path1.rect(10, 10, 100, 100);
    context.fill(path1);
}
