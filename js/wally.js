//将速度去掉,速度靠计算得到
function move(obj,json,fn) {
    clearInterval(obj.timer);
    var cur = 0;
    obj.timer = setInterval(function () {
        var isTrue = true;
        for(var attr in json){
            //如果attr是opacity
            if(attr === "opacity"){
                cur = Math.round(getStyle(obj,attr)*100);
            }else{
                cur = parseInt(getStyle(obj,attr));
            }

            speed = (json[attr] - cur)/8;
            //对速度取整
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

            if(cur !== json[attr]){
                isTrue = false;
                if(attr === "opacity"){
                    obj.style.opacity = (cur + speed)/100
                    obj.style.filter = "alpha(opacity="+(cur+speed)+")";
                }else{
                    obj.style[attr] = cur + speed + 'px';
                }
            }
        }
        console.log(isTrue)
        //等所有属性都到达目标值  再结束动画
        if(isTrue){
            clearInterval(obj.timer);
            fn && fn.call(obj);
        }
    },30)
}

function getStyle(obj,attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
}