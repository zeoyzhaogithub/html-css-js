// // sessionStorage示例 
// function saveStorage(id){
//     var target = document.getElementById(id);
//     var str = target.value;
//     sessionStorage.setItem('message', str);
//     // sessionStorage.message = str;
// }


// function loadStorage(id){
//     var target = document.getElementById(id);
//     var msg = sessionStorage.getItem('message');
//     // var msg = sessionStorage.message;
//     target.innerHTML = msg;
// }


// localstorage 示例
function saveStorage(id){
    var target = document.getElementById(id);
    var str = target.value;
    localStorage.setItem('message', str);
    // localStorage.message = str;
}


function loadStorage(id){
    var target = document.getElementById(id);
    var msg = localStorage.getItem('message');
    // var msg = localStorage.message;
    target.innerHTML = msg;
}


function saveStorage1(id){
    var data = document.getElementById(id).value;
    var time = new Date().getTime();
    localStorage.setItem(time, data);
    alert("already save data");
    loadStorage1('msg1');
}

function loadStorage1(id){
    var result = '<table border="1">';
    for(var i = 0; i < localStorage.length; i ++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);

        var date = new Date();
        date.setTime(key);
        var datestr = date.toGMTString();
        result += '<tr><td>' + value + '</td><td>' + datestr + '</td></tr>';
    }
    result += '</table>';

    var target = document.getElementById(id);
    target.innerHTML = result;
}


function clearStorage1(id){
    loadStorage.clear();
    alert('全部数据清除');
    loadStorage('msg1');
}

// 简易数据库
function saveStorage2(){
    var data = new Object();
    data.name = document.getElementById('name').value;
    data.email = document.getElementById('email').value;
    data.tel = document.getElementById('tel').value;
    data.memo = document.getElementById('memo').value;
    
    var str = JSON.stringify(data);
    localStorage.setItem(data.name, str);
    console.log("have save data");
}

function findStorage(id){
    var find = document.getElementById('find').value;
    var str  = localStorage.getItem(find);
    var data = JSON.parse(str);

    var result = "姓名: " + data.name + '<br>';
    result += "email: " + data.email + '<br>';
    result += "电话号码: " + data.tel + '<br>';
    result += "备注: " + data.memo + '<br>';

    var target = document.getElementById(id);
    target.innerHTML = result;
}