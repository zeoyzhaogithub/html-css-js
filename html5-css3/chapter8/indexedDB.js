// 兼容浏览器
window.indexedDB = window.indexedDB ||
                    window.webkitIndexedDB ||
                    window.mozIndexedDB ||
                    window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction ||
                        window.msIDBTransaction ||
                        window.webkitIDBTransaction;

window.IDBKeyRange = window.IDBKeyRange ||
                        window.webkitIDBKeyRange ||
                        window.msIDBKeyRange;

window.IDBCursor = window.IDBCursor ||
                    window.webkitIDBCursor ||
                    window.msIDBCursor;

var dbName = 'MyData',
    dbVersion = 20150306,
    idb,
    datatable;
                    
// 获取数据
function init(){
    var dbConnect = indexedDB.open(dbName, dbVersion);
    dbConnect.onsuccess = function(e){
        idb = e.target.result;
        console.log(idb);
        datatable = document.getElementById('datatable');
    };
    dbConnect.onerror = function(e){
        console.log('connect data error');
    };
    dbConnect.onupgradeneeded = function(e){
        idb = e.target.result;
        if(!idb.objectStoreNames.contains('MsgData')){
            var tx = e.target.transaction;
            tx.onabort = function(e){
                console.log('对象仓库创建失败');
            };
            var name = 'MsgData';
            var optionalParameters = {
                keyPath: 'id',
                autoIncrement: true
            };
            var store = idb.createObjectStore(name, optionalParameters);
            console.log('对象仓库创建成功');
        }
    };
}


// 删除页面展示的数据
function removeAllData(){
    for(var i = datatable.childNodes.length - 1; i > 0; i --){
        datatable.removeChild(datatable.childNodes[i]);
    }
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');

    th1.innerHTML = "姓名";
    th2.innerHTML = "留言";
    th3.innerHTML = "时间";

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);

    datatable.appendChild(tr);
}

// 展示数据
function showData(dataObject){
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    td1.innerHTML = dataObject.name;
    td2.innerHTML = dataObject.memo;

    var t = new Date();
    t.setTime(dataObject.time);
    td3.innerHTML = t.toLocaleDateString();

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    datatable.appendChild(tr);
}


// 显示所有数据
function showAllData(){
    removeAllData();
    var tx = idb.transaction(['MsgData'], 'readonly');
    var store = tx.objectStore('MsgData');
    // 创建游标 
    // IDBKeyRange.bound(1,4); // 返回由一批数据的主键值组成的IDBKeyRange对象集合
    var range = IDBKeyRange.lowerBound(1);
    var directtion = 'next';
    var req = store.openCursor(range, directtion);
    req.onsuccess = function(){
        var cursor = this.result;
        console.log(cursor);
        if(cursor){
            showData(cursor.value);
            cursor.continue();   // 继续检索
        }
    };
}

function addData(name, message, time){
    var tx = idb.transaction(['MsgData'], 'readwrite');
    tx.oncomplete = function(){
        console.log('add success');
    };
    tx.onabort = function(){
        console.log('add error');
    };
    var store = tx.objectStore('MsgData');
    console.log(store);
    var value = {
        name: name,
        memo: message,
        time: time
    };
    store.put(value);
}


// 保存数据
function saveData(){
    var name = document.getElementById('name').value;
    var memo = document.getElementById('memo').value;
    var time = new Date().getTime();

    addData(name, memo, time);

    showAllData();
}

