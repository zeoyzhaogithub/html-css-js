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
// 创建数据库
function connectDatabase(){
    var dbname = 'indexedDBTest',   // 数据库名
        dbVersion = 20120603,       // 版本号
        idb;
    // 连接数据库，dbconnect对象为一个IDBOpenDBRequest对象,代表数据库连接的请求对象
    var dbConnect = indexedDB.open(dbname, dbVersion);
    dbConnect.onsuccess = function(e){
        // 连接成功
        // e.target.result 为一个IDBDatabase对象，代表连接成功的数据库对象
        idb = e.target.result;
        console.log('数据库连接成功');
        alert('数据库连接成功');
    }
    dbConnect.onerror = function(e){
        console.log('数据库连接失败');
        alert('数据库连接失败');
    }
}

// 更新数据库版本
function versionUpdate(){
    var dbname = 'indexedDBTest',   // 数据库名
        dbVersion = 20150304,       // 版本号
        idb;
    // 连接数据库，dbconnect对象为一个IDBOpenDBRequest对象,代表数据库连接的请求对象
    var dbConnect = indexedDB.open(dbname, dbVersion);
    dbConnect.onsuccess = function(e){
        // 连接成功
        // e.target.result 为一个IDBDatabase对象，代表连接成功的数据库对象
        idb = e.target.result;
        console.log('数据库连接成功');
        alert('数据库连接成功');
    }
    dbConnect.onerror = function(e){
        console.log('数据库连接失败');
        alert('数据库连接失败');
    }
    dbConnect.onupgradeneeded = function(e){
        // 数据库版本更新
        idb = e.target.result;
        // e.target.transaction 属性值为一个 IDBTransaction事务对象，此处代表版本更新事务
        var tx = e.target.transaction,
            oldV = e.oldVersion;
            newV = e.newVersion;
            alert(
                '数据库版本更新成功，旧的版本号：' +
                oldV +
                '新的版本号：' +
                newV
            );
    }
}

// 创建对象仓库
function CreateObjectStore(){
    var dbname = 'indexedDBTest',   // 数据库名
        dbVersion = 20150304,       // 版本号
        idb;
    // 连接数据库，dbconnect对象为一个IDBOpenDBRequest对象,代表数据库连接的请求对象
    var dbConnect = indexedDB.open(dbname, dbVersion);
    dbConnect.onsuccess = function(e){
        // 连接成功
        // e.target.result 为一个IDBDatabase对象，代表连接成功的数据库对象
        idb = e.target.result;
        console.log('数据库连接成功');
        alert('数据库连接成功');
    }
    dbConnect.onerror = function(e){
        console.log('数据库连接失败');
        alert('数据库连接失败');
    }
    dbConnect.onupgradeneeded = function(e){
        console.log(1111);
        // 数据库版本更新
        idb = e.target.result;
        // e.target.transaction 属性值为一个 IDBTransaction事务对象，此处代表版本更新事务
        var tx = e.target.transaction,
            name = 'Users';
        var optionalParameters = {
            keyPath: 'userId',
            autoIncrement: false
        };
        var store = idb.createObjectStore(name, optionalParameters);
        alert('对象仓库创建成功');
        console.log('对象仓库创建成功');
    }
}


// 创建索引
function CreateIndex(){
    var dbname = 'indexedDBTest',   // 数据库名
        dbVersion = 20150304,       // 版本号
        idb;
    // 连接数据库，dbconnect对象为一个IDBOpenDBRequest对象,代表数据库连接的请求对象
    var dbConnect = indexedDB.open(dbname, dbVersion);
    dbConnect.onsuccess = function(e){
        // 连接成功
        // e.target.result 为一个IDBDatabase对象，代表连接成功的数据库对象
        idb = e.target.result;
        console.log('数据库连接成功');
        alert('数据库连接成功');
    }
    dbConnect.onerror = function(e){
        console.log('数据库连接失败');
        alert('数据库连接失败');
    }
    dbConnect.onupgradeneeded = function(e){
        // 数据库版本更新
        idb = e.target.result;
        // e.target.transaction 属性值为一个 IDBTransaction事务对象，此处代表版本更新事务
        var tx = e.target.transaction,
            oldV = e.oldVersion;
            newV = e.newVersion;
            alert(
                '数据库版本更新成功，旧的版本号：' +
                oldV +
                '新的版本号：' +
                newV
            );
        // 创建仓库
        var name = 'newUsers';
        var optionalParameters = {
            keyPath : 'userId',
            autoIncrement : false
        };
        var store = idb.createObjectStore(name, optionalParameters);
        console.log('对象仓库创建成功');
        var name = 'userNameIndex';
        var keyPath = 'userName';
        var optionalParameters = {
            unique : false,     // 索引值是否可以相同
            multiEntry: false
        };
        // 索引名、创建索引的属性字段、
        var idx = store.createIndex(name, keyPath, optionalParameters);
        console.log('索引创建成功');
    }
}


// 添加数据
function addData(){
    var dbname = 'indexedDBTest',   // 数据库名
        dbVersion = 20150304,       // 版本号
        idb;
    // 连接数据库，dbconnect对象为一个IDBOpenDBRequest对象,代表数据库连接的请求对象
    var dbConnect = indexedDB.open(dbname, dbVersion);
    dbConnect.onsuccess = function(e){
        // 连接成功
        // e.target.result 为一个IDBDatabase对象，代表连接成功的数据库对象
        idb = e.target.result;
        console.log('数据库连接成功');
        alert('数据库连接成功');
        // 数据库版本更新
        idb = e.target.result;
        // e.target.transaction 属性值为一个 IDBTransaction事务对象，此处代表版本更新事务
        var tx = idb.transaction(['Users'], 'readwrite');
        // 获取事务作用范围的某个对象仓库
        var store = tx.objectStore('Users');
        var value = {
            userId: 1,
            userName : 'name1',
            address: 'address1'
        };
        var req = store.put(value);
        req.onsuccess = function(e){
            alert('success');
            console.log('add data success');
        }
        req.onerror = function(e){
            console.log('error');
            console.log('add data fail');
        }
    }
    dbConnect.onerror = function(e){
        console.log('数据库连接失败');
        alert('数据库连接失败');
    }
    dbConnect.onupgradeneeded = function(e){
        // 数据库版本更新
        idb = e.target.result;
        // e.target.transaction 属性值为一个 IDBTransaction事务对象，此处代表版本更新事务
        var tx = idb.transaction(['Users'], 'readwrite');
        // 获取事务作用范围的某个对象仓库
        var store = tx.objectStore('Users');
        var value = {
            userId: 1,
            userName : 'name1',
            address: 'address1'
        };
        var req = store.put(value);
        req.onsuccess = function(e){
            alert('success');
            console.log('add data success');
        }
        req.onerror = function(e){
            console.log('error');
            console.log('add data fail');
        }
    }
}


// 保存数据
function saveData(){
    var dbName = 'indexedDBTest';   // 数据库名
    var dbVersion = '20150306';     // v
    var idb;
    var dbConnect = indexedDB.open(dbName, dbVersion);
    dbConnect.onsuccess = function(e){
        idb = e.target.result;
        console.log(idb);
        // 开启事务
        var tx = idb.transaction(['Users'], "readwrite");
        var store = tx.objectStore('Users');
        var value = {
            userId: 1,
            userName: 'zhangsan',
            address: 'address1'
        };
        var req = store.put(value);
        req.onsuccess = function(e){
            console.log('save data success');
        };
        req.onerror = function(e){
            console.log('save data error');
        };
    };
    dbConnect.onerror = function(e){
        console.log('connect data error');
    }
}


// 获取数据
function getData(){
    var dbName = 'indexedDBTest';   // 数据库名
    var dbVersion = '20150306';     // v
    var idb;
    var dbConnect = indexedDB.open(dbName, dbVersion);
    dbConnect.onsuccess = function(e){
        idb = e.target.result;
        console.log(idb);
        // 开启事务
        var tx = idb.transaction(['Users'], "readonly");
        var store = tx.objectStore('Users');
        
        var req = store.put(1);
        req.onsuccess = function(e){
            console.log('save data success');
            if(this.result == undefined){
                console.log('没有符合条件的数据');
            }else{
                alert('数据获取成功:' + this.result.userName);
            }
            
        };
        req.onerror = function(e){
            console.log('get data error');
        };
    };
    dbConnect.onerror = function(e){
        console.log('connect data error');
    }
}