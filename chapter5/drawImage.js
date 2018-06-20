// 绘制图片
function draw0(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEEEFF";
    context.fillRect(0, 0, 500, 400);

    var image0 = new Image();
    image0.src = "../img/river.jpg";
    image0.onload = function(){
        drawImg(context, image0);
    };
}

// 加载图像
function drawImg(context, image0){
    for(var i = 0; i < 7; i ++){
        context.drawImage(
            image0,
            0 + i * 50,
            0 + i * 30,
            100,
            100
        );
    }
}


// 复制放大图像
function draw1(id){
    let canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    let context = canvas.getContext('2d');
    context.fillStyle = "#EEEEFF";
    context.fillRect(0, 0, 500, 400);

    var image1 = new Image();
    image1.src = "../img/river.jpg";
    image1.onload = function(){
        drawImg1(context, image1);
    };
}

// 放大图像
function drawImg1(context, image1){
    var i = 0;
    // 绘制原图像
    context.drawImage(image1, 0, 0, 100, 100);
    // 局部放大后的图像
    context.drawImage(
        image1,    // image对象
        23,       // 复制源图像被复制区域的起始横坐标
        5,        // 。。。纵坐标
        57,       // 被复制区域的宽
        80,       // 。。。高
        200,      // 复制后目标图像的起始横坐标
        100,        // 。。。 纵坐标
        100,      // 宽
        100       // 高
    );
}


// 坐标变换
function draw2(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');

    var image2 = new Image();
    image2.src = "../img/river2.jpeg";
    image2.onload = function(){
        drawImg2(canvas, context, image2);
    };
}

// 平铺
function drawImg2(canvas, context, image){
    // 平铺比例
    var scale = 5;
    // 缩小后图像宽度
    var n1 = image.width/scale;
    // 缩小后图像高度
    var n2 = image.height/scale;
    // 平铺横向个数
    var n3 = canvas.width/n1;
    // 平铺纵向个数
    var n4 = canvas.height/n2;
    for(var i = 0; i < n3; i ++){
        for(var j = 0;  j < n4; j ++){
            context.drawImage(image, i * n1, j * n2, n1, n2);
        }
    }
}


function draw3(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');

    var image = new Image();
    image.src = "../img/river2.jpeg";
    image.onload = function(){
        // 创建填充样式，全方向平铺
        var ptrn = context.createPattern(image, 'repeat');
        // 指定填充样式
        context.fillStyle = ptrn;
        //填充画布
        context.fillRect(0, 0, 400, 300);
    };
}


// 图像剪裁
function draw4(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');
    // 定义颜色
    var gr = context.createLinearGradient(0, 400, 300, 0);
    gr.addColorStop(0, 'rgb(255, 255, 0)');
    gr.addColorStop(1, 'rgb(0, 255, 255)');

    context.fillStyle = gr;
    context.fillRect(0,0, 400, 300);
    var image = new Image(); 
    image.onload = function(){
        drawImg4(context, image);
    }
    image.src = "../img/river.jpg";
}

// 图像剪裁
function drawImg4(context, image){
    create5StarClip(context);
    context.drawImage(image, -50, -150, 300, 300);
}

// 创建路径
function create5StarClip(context){
    var n = 0,
        dx = 100,
        dy = 0,
        s = 150;
    
    // 创建路径
    context.beginPath();
    context.translate(100, 150);

    var x = Math.sin(0),
        y = Math.cos(0),
        dig = Math.PI/5*4;
    for(var i = 0; i < 5; i ++){
        var x = Math.sin(i * dig);
        var y = Math.cos(i * dig);
        context.lineTo(dx + x * s, dy + y * s);
    }
    context.clip();
}


//settransform
function draw5(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');
    var image5 = new Image();
    image5.src = "../img/wisteria.jpg";
    image5.onload = function(){
        context.drawImage(image5, 0, 0);
        console.log(image5.width);
        // 获取像素数据
        // var imagedata = context.getImageData(1, 0, image5.width, image5.height);
        // console.log(imagedata);
        // for(var i = 0, n = imagedata.data.length; i < n; i += 4){
        //     imagedata.data[i + 0] = 255 - imagedata.data[i + 0];  // red
        //     imagedata.data[i + 1] = 255 - imagedata.data[i + 2];  // green
        //     imagedata.data[i + 2] = 255 - imagedata.data[i + 1];  // blue
        // }
        // context.putImageData(imagedata, 0, 0);
    };
}


// 图形组合示例
function draw6(id){
    var canvas = document.getElementById(id);
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

    context.fillStyle = "blue";
    context.fillRect(10, 10, 60, 60);
    // 设置组合方式
    context.globalCompositeOperation = oprtns[7];

    // 设置新图形
    context.beginPath();
    context.fillStyle = "red";
    context.arc(60,60,30,0, Math.PI * 2, false);
    context.fill();
}


// 混合图形
function draw7(id){
    // 图形组合数组
    var oprtns = new Array(
        "normal",
        "darken",
        "lighten",
        "multiply",
        "screen",
        "color-burn",
        "color-dodge",
        "hard-light",
        "soft-light",
        "overlay",
        "difference",
        "exclusion"
    );
    console.log(oprtns);
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');
    // 设置组合方式
    context.globalCompositeOperation = oprtns[3];
    var image = new Image();
    image.src = "../img/river.jpg";
    image.onload = function(){
        context.drawImage(image, 0, 0);
        var image2 = new Image();
        image2.src = "../img/wisteria.jpg";
        image2.onload = function(){
            context.drawImage(image2, 0, 0);
        };
    };
}