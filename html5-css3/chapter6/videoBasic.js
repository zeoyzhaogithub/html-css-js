// 读取错误状态
function videos0(id){
    var video = document.getElementById(id);
    video.addEventListener('error', function(){
        var error = video.error;
        console.log(error);
        switch(error.code){
            case 1:
                alert('the video download proces was terminated');
                break;
            case 2:
                alert('net work error, the video download proces was terminated');
                break;
            case 3:
                alert('decoding failure');
                break;
            case 4:
                alert('media resources are not avaliable or are not supported');
                break; 
        }
    }, false);
}

// 读取网络状态
function videos1(id){
    var video = document.getElementById(id);
    video.addEventListener('progress', function(e){
        var networkStateDisplay = document.getElementById('networkState');
        // 根据networkStateDisplay属性值执行处理
        if(video.networkState == 2){
            // 计算已经加载的字节数与总字节数
            networkStateDisplay.innerHTML = "loading ... [" 
                                            + e.loaded 
                                            + " / " 
                                            + e.total 
                                            + " byte]";
        }else if(video.networkState == 3){
            networkStateDisplay.innerHTML = "load failed";
        }
    }, false);
}

var video2;
function videos2(id){
    video2 = document.getElementById(id);
    // 监听视频播放结束事件
    video2.addEventListener("ended", function(){
        alert("end of the play");
    }, true);

    // 发生错误
    video2.addEventListener("error", function(){
        var error = video2.error;
        console.log(error);
        switch(error.code){
            case MediaError.MEDIA_ERR_ABORTED:
                alert('the video download proces was terminated');
                break;
            case MediaError.MEDIA_ERR_NETWORK:
                alert('net work error, the video download proces was terminated');
                break;
            case MediaError.MEDIA_ERR_DECODE:
                alert('decoding failure');
                break;
            case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                alert('media resources are not avaliable or are not supported');
                break; 
            default:
                alert("error");
        }
    }, false);
}

// play
function play(){
    video2.play();
}


// pause
function pause(){
    video2.pause();
}


// 事件捕获
function playOrPauseVideo(){
    var videoUrl = document.getElementById("videoUrl").value;
    var video = document.getElementById('videos3');
    // 使用事件监听方式捕捉事件
    video.addEventListener("timeupdate", function(){
        var timeDisplay = document.getElementById("time");
        // 用秒数显示当前进度
        timeDisplay.innerHTML = Math.floor(video.currentTime)
                                + "/"
                                Math.floor(video.duration)   
                                + "(秒)";
    }, false);
    if(video.pause){
        if(videoUrl != video.src){
            video.src = videoUrl;
            video.load();
        }else{
            video.play();
        }
        document.getElementById("playButton").value = "暂停";
    }else{
        video.pause();
        document.getElementById("playButton").value = "播放";
    }
}