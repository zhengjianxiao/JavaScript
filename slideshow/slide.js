function move(obj , name , target , speed , callback){
    clearInterval( obj.timer);
    var current = parseInt(getstyle(obj , name));
    if(current > target){
           speed = -speed; 
       };
    obj.timer = setInterval(function () {
       
        var oldvalue = parseInt(getstyle(obj , name));
        var newvalue = oldvalue +speed;
            if(newvalue > target && speed > 0 || newvalue < target && speed < 0  ) {
                newvalue = target; //当newvalue没有刚刚好取到800的时候，让他等于800，可以让他刚刚好停到指定位置
            };
            obj.style[name] = newvalue + 'px';
            if( newvalue == target){
                clearInterval( obj.timer);
                callback && callback();
            };
        }
        ,10);
           
};

function getstyle(obj , name) {
    if(window.getComputedStyle){
        return getComputedStyle(obj , null)[name];//其他浏览器
    }else{
        return currentStyle(obj , name);//IE
    };
};