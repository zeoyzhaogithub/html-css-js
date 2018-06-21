window.addEventListener("popstate", function(e){
    if(e.state){
        loadPage(
            e.state.userType,
            e.state.id
        );
    }
});

function onClickBtnDetail(btn, id){
    var userType = btn.parentElement.parentElement.children[1].children[1].innerHTML;
    if(loadPage(userType, id)){
        console.log("=============");
        // 将浏览地址添加到浏览器历史记录
        var state = new Object();
        state.userType = userType;
        state.id = id;
        if(userType == "普通用户"){
            history.pushState(state, null, "edit.php?id=" + id);
        }else{
            history.pushState(state, null, "readOnly.php?id=" + id);
        }
    }  
}

function loadPage(userType, id){
    console.log(userType);
    if(userType == "普通用户"){
        console.log(2);
        var req = new XMLHttpRequest();
        // req.open("GET", "edit.php?id=" + id, false);
        // req.send(null);
        req.status = 200;
        if(req.status == 200){
            req.responseText = "一段文字";
            console.log(1);
            document.getElementById("sectionDetail").innerHTML = req.responseText;
            return true;
        }
        return true;
    }else{
        var req = new XMLHttpRequest();
        // req.open("GET", "readOnly.php?id=" + id, false);
        // req.send(null);
        req.status = 200;
        if(req.status == 200){
            document.getElementById("sectionDetail").innerHTML = req.responseText;
            return true;
        }
        return false;
    }

}



var image = document.getElementById("image");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var isDrawing = false;
var state1 = context.getImageData(0, 0, canvas.width, canvas.height);
history.pushState(state1, null);
canvas.addEventListener("pointerdown", function(e){
    e.preventManipulation()
}, false);
canvas.addEventListener("mousedown", startDrawing, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stopDrawing, false);
window.addEventListener("popstate", loadState, false);

function startDrawing(){
    isDrawing = true;
}

function draw(event){
    if(isDrawing){
        var sx = canvas.width / canvas.offsetWidth;
        var sy = canvas.height / canvas.offsetHeight;
        var x = sx * event.clientX - image.naturalWidth / 2;
        var y = sy * event.clientY - image.naturalHeight / 2;
        context.drawImage(image, x, y);
    }
}

function stopDrawing(){
    isDrawing = false;
    var state = context.getImageData(0, 0 , canvas.width, canvas.height);
    history.pushState(state, null);
}

function loadState(e){
    context.clearRect(0, 0, canvas.width, canvas.height);
    if(e.state){
        context.putImageData(e.state, 0, 0);
    }
}