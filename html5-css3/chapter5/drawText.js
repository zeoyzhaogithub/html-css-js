// 绘制文字
function draw0(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle = "#00f";
    context.font = 'italic 30px sans-serif';
    context.textBaseline = 'top';
    // 填充字符串
    context.fillText('hello world', 0, 0);
    context.font = 'bold 30px sans-serif';
    // 轮廓字符
    context.strokeText('hello world', 0, 50);
}


// 测量文字宽度
function draw1(id){
    let canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    let context = canvas.getContext('2d');

    context.font = 'italic 30px sans-serif';
    let txt = 'the width of string';
    let tm1 = context.measureText(txt);
    // 填充字符串
    context.fillText(txt, 10, 30);
    context.fillText(tm1.width, tm1.width + 11, 30);
    // 改变字体
    context.font = 'bold 30px sans-serif';
    // 重新获取文字宽度
    let tm2 = context.measureText(txt);
    context.fillText(txt,10, 70);
    context.fillText(tm2.width, tm2.width + 11, 70);
}

