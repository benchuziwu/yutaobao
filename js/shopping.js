/*浏览器跳转开始*/
init();
function init(){
	if(!document.addEventListener){
    	window.open('404.html','_self');
	}


/*浏览器跳转结束*/


var address=document.getElementById('address0');
var changeAdd=address.getElementsByTagName('u');
var dizhi1=document.getElementById('dizhi1');
var change=address.getElementsByTagName('li');
for(var i=0,len=change.length;i<len;i++){
	change[i].index=i;
	change[i].onclick=function(){
		var _index=this.index;
		for(var j=0;j<change.length;j++){
			change[j].className="";
		}
		change[_index].className="active1";
		dizhi1.innerHTML=changeAdd[_index].innerHTML;
	}	
}






/*弹出框图片左右切换开始*/
var picsArr=["img/4001.jpg","img/4002.jpg","img/4003.jpg","img/4004.jpg","img/4005.jpg"];
var m=0;
var picBig=document.getElementById('pic');
var leftBtn=document.getElementById('left');
var rightBtn=document.getElementById('right');
var xxx=document.getElementById('xxx');
var aLi=xxx.getElementsByTagName('li');

rightBtn.onclick=function(){
	if(m<4){
		m++;	
	}
	for(var j=0;j<aLi.length;j++){
		aLi[j].style.border="1px solid #ccc";
	}
	picBig.src=picsArr[m];
	aLi[m].style.border="1px solid #ff4400";
	
}
leftBtn.onclick=function(){  
	if(m>0){
		m--;	
	}
	
	for(var j=0;j<aLi.length;j++){
		aLi[j].style.border="1px solid #ccc";
	}
	picBig.src=picsArr[m];
	aLi[m].style.border="1px solid #ff4400";
	
}
/*弹出框图片左右切换结束*/


/*商品型号颜色选择开始*/
var jishu=document.getElementById('jishu');
var chima=document.getElementById('chima');
var sizeArr=chima.getElementsByTagName('li');
var color=document.getElementById('color');
var colorArr=color.getElementsByTagName('li');
var box012=document.getElementById('box012');
var picArr=box012.getElementsByTagName('li');
var img=document.getElementById('img');
var dianji=document.getElementById('dianji');
var close=document.getElementById('close');
img.onclick=function(){
	dianji.style.display="block";
}
close.onclick=function(){
	dianji.style.display="none";
}
for(var i=0,len=picArr.length;i<len;i++){
	picArr[i].index=i;
	picArr[i].onclick=function(){
		var _index=this.index;
		for(var j=0;j<picArr.length;j++){
			picArr[j].style.border="1px solid #ccc";
		}
		picArr[_index].style.border="1px solid #ff4400";
		img.src=picsArr[_index];
	}	
}
for(var i=0,len=colorArr.length;i<len;i++){
	colorArr[i].index=i;
	colorArr[i].onclick=function(){
		var _index=this.index;
		for(var j=0;j<colorArr.length;j++){
			colorArr[j].style.color="#000";
			colorArr[j].style.border="1px solid #ccc";
		}
		colorArr[_index].style.color="#FF4400";
		colorArr[_index].style.border="2px solid #ff4400";	
	}	
}
for(var i=0,len=sizeArr.length;i<len;i++){
	sizeArr[i].index=i;
	sizeArr[i].onclick=function(){
		var _index=this.index;
		for(var j=0;j<sizeArr.length;j++){
			sizeArr[j].style.color="#000";
			sizeArr[j].style.border="1px solid #ccc";
		}
		sizeArr[_index].style.color="#FF4400";
		sizeArr[_index].style.border="2px solid #ff4400";	
	}	
}
/*商品型号颜色选择结束*/

/*购物数量加减开始*/
var minus=document.getElementById('minus');
var plus=document.getElementById('plus');
var title=document.getElementById('title');
var money=document.getElementById('money');
var n=1;//数字类型
var btn=document.getElementsByClassName('btn');
minus.onclick=function(){	
	if(n>0)
	{n=n-1;title.innerText=n;btn[0].style.color="#333";btn[1].style.color="#333";}
	else{
		btn[0].style.color="#f00";}
	money.innerText=title.innerText*120;
	jishu.innerText=title.innerText;
}
plus.onclick=function(){  	
	if(n<=5){n++;title.innerText=n;btn[1].style.color="#333";btn[0].style.color="#333";}
	else{
		btn[1].style.color="#f00";}
	money.innerText=title.innerText*120;
	jishu.innerText=title.innerText;
}
 /*购物数量加减结束*/


/*图片上下动开始*/
var box32=document.getElementById('box32');
var pics=box32.getElementsByTagName('img');
var numTop=0,len1=pics.length;
function timer(){
	numTop++;
		if (numTop===(len1-5)) {
			numTop=0;
		} 
	box32.style.marginTop=-170*(numTop)+ 'px';
}
setInterval(timer,3000);
/*图片上下动结束*/






}
