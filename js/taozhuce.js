

/*60秒倒计时开始*/
var countdown=60;
function settime(val) { 
	if (countdown == 0) { 
		val.removeAttribute("disabled");    
		val.value="免费获取验证码"; 
		countdown = 60; 
	} else { 
		val.setAttribute("disabled", true); 
		val.value="重新发送(" + countdown + ")"; 
		countdown--; 
	} 
	
	setTimeout(function(){ 
	settime(val) 
	},1000) 
} 
/*60秒倒计时结束*/


var indexTwo = document.getElementById('index-two');
var indexFour = document.getElementById('index-four');
var indexThree = document.getElementById('index-three');
var tijiao= document.getElementById('tijiao');
tijiao.onclick=function(){
	indexThree.style.display="none";
	title[3].style.cssText="border-bottom:2px solid #FF4400;"
	indexFour.style.display="block";
}



var queding= document.getElementById('queding');
queding.onclick=function(){
	indexTwo.style.display="none";
	indexThree.style.display="block";
	title[2].style.cssText="border-bottom:2px solid #FF4400;"
}

var daotime= document.getElementById('daotime');
/*60秒倒计时没有实现,出现负值
 * var timer = setInterval(getMyTime,1000);
function getMyTime() {
	var nowTime = new Date();
	var newTime = new Date(-59000);
	var deltaTime = Math.floor((nowTime -newTime)/1000);
	if(deltaTime >=59){
		clearInterval(timer)
	}
	daotime.innerHTML =toDouble(deltaTime%60)+'秒';
}
function toDouble(n) {
	return n < 10 ? "0" + n : n;
}*/


var neirong = document.getElementById('neirong');
var next = document.getElementById('next');
var indexTwo = document.getElementById('index-two');
var title = document.getElementsByClassName('title');
next.onclick=function(){
	indexTwo.style.display="block";
	neirong.style.display="none";
	title[0].style.cssText="border-bottom:2px solid #FF4400;"
	title[1].style.cssText="border-bottom:2px solid #FF4400;"
}



/*验证码随机出现开始*/
var a=Math.floor(Math.random()*7);
var yanzheng = document.getElementById('yanzheng');
var stateArr=['c6sb','bghh','sde5','bhg1','cfgf','23vd','5vhg','dsra'];
yanzheng.innerHTML=stateArr[a];
/*验证码随机出现结束*/

/*正则表达式验证邮箱开始*/
var txt = document.getElementById('txt'),
    msg1 = document.getElementById('msg1'),
    pwd = document.getElementById('pwd'),
    msg2 = document.getElementById('msg2'),
    btn = document.getElementById('btn');
        
var open1 = false,open2=false;
txt.onblur = function () {
    var req =  /^1[3|5|7|8|][0-9]{9}$/;
    if(req.test(txt.value)){//邮箱格式正确
        msg1.innerHTML = "输入正确"
        msg1.style.color = "#0f0"
        open1 = true;
    }else{
        msg1.innerHTML = "请输入正确的手机格式"
        msg1.style.color = "#f00"
        open1 = false
    }
}
pwd.onblur = function(){
    var reg = /^\w{4,6}$/;
    if(reg.test(pwd.value)){
        msg2.innerHTML = "输入正确"
        msg2.style.marginLeft ="10px";
        msg2.style.color = "#0f0"
        open2 = true;
    }else{
        msg2.innerHTML = "请输入正确验证码"
        msg2.style.color = "#f00"
        open2 = false;
    }
}

/*正则表达式验证邮箱结束*/


/*同意协议框开始*/
var agree=document.getElementById('agree');
var xieyi=document.getElementById('xieyi');
agree.onclick=function(){
	xieyi.style.display="none";
	neirong.style.display="block";
}
/*同意协议框结束*/

