// 保存图形文件
function draw0(id){
    let canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    let context = canvas.getContext('2d');

    context.fillStyle = 'rgb(0, 0, 255)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'rgb(255, 255, 0)';
    context.fillRect(10, 20, 50, 50);

    context.fillStyle = 'rgb(250, 200, 100)';
    context.fillRect(80, 50, 50, 50);
    window.location = canvas.toDataURL("../img/canvas");
}

// 绘制动画
var context1,
    width,
    height,
    i = 0;
function draw1(id){
    let canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    context1 = canvas.getContext('2d');

    width = canvas.width;
    height = canvas.height;
    i = 0;
    setInterval(rotate, 100);
    
}

function rotate(){
    context1.clearRect(0, 0, width, height);
    context1.fillStyle = "red";
    context1.fillRect(i, 0, 20, 20);  
    i = i + 20;
}

// 循环显示组合效果
var globalId;
var i1 = 0;
function draw2(id){
    globalId = id;
    setInterval(Composite, 1000);
}

function Composite(){
    var canvas = document.getElementById(globalId);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');

    // 图形组合数组
    var oprtns = new Array(
        "source-atop",
        "source-in",
        "source-out",
        "source-over",
        "destination-in",
        "destination-atop",
        "destination-out",
        "destination-over",
        "lihter",
        "copy",
        "xor" // 只绘制新图形与原图形不重叠的部分
    );
    if(i1 > 10) i1 = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    // 绘制原有图形
    context.fillStyle = "blue";
    context.fillRect(10, 10, 60, 60);
    // 设置组合方式
    context.globalCompositeOperation = oprtns[i1];
    // 设置新图形
    context.beginPath();
    context.fillStyle = "red";
    context.arc(60, 60, 30, 0, Math.PI * 2, false);
    context.fill();
    context.restore();
    i1 = i1 + 1;
}

