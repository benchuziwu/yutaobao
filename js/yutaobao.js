/*浏览器跳转开始*/
init();
function init(){
	if(!document.addEventListener){
    	window.open('404.html','_self');
	}


/*浏览器跳转结束*/

var active= document.getElementsByClassName('active')[0];
var a= document.getElementsByClassName('a');                                   
for(var i=0;i<a.length;i++){
		a[i].index=i;//自定义index属性,存索引值
		a[i].onmouseover=function(){
			var _index=this.index;    //取索引值
			active.style.display="block";
			active.style.top=20+"px";
			active.style.left=(15+256*(_index-1))+"px";
		}
	/*	a[i].onmouseleave=function(){
			var _index=this.index;    //取索引值
			active.style.display="none";
			active.style.top=1073+"px";
			active.style.left=(180+255*(_index-1))+"px";
		}*/
}


/*右侧栏函数实现*/
var icon= document.getElementsByClassName('icon');
var dingbu= document.getElementById('dingbu');
youShow(shoucang);  youShow(remai);  youShow(dingbu); 
function youShow(obj){
	var classArr=['shoucang','remai','dingbu'];
	for(var i=0,len=icon.length;i<len;i++){
	icon[i].index=i;
	icon[i].onmouseover=function(){var _index=this.index;obj.id=classArr[_index];icon[_index].style.background="#ff4400";}
	icon[i].onmouseout=function(){var _index=this.index;obj.id=classArr[_index];icon[_index].style.background="#f5f5f5";}
	}
}

window.onscroll=function(){
	var scrollT= document.documentElement.scrollTop|| document.body.scrollTop;
 	var n=300;
	if(scrollT>300){
		dingbu.style.display="block";
		
	}else{
		dingbu.style.display="none";
	}
	dingbu.onclick=function(){
			document.documentElement.scrollTop=0;
			 document.body.scrollTop=0;
	}
	
}
var yuan= document.getElementsByClassName('yuan');
for(var i=0,len=yuan.length;i<len;i++){
	yuan[i].index=i;
	yuan[i].onmouseover=function(){
		var _index=this.index;
		yuan[_index].style.borderRadius="0px";
		yuan[_index].style.border="1px solid #333";
		yuan[_index].style.opacity="0.6";
	}
	yuan[i].onmouseout=function(){
		var _index=this.index;
		yuan[_index].style.borderRadius="50%";
		yuan[_index].style.border="0px solid #333";
		yuan[_index].style.opacity="1";
	}
}
/*左右键切换会员图片开始*/
var btnL = document.querySelector('.btn-l'),
    btnR = document.querySelector('.btn-r'),
    num=0;
var pic= document.getElementsByClassName('pic')[0];
var picArr= pic.getElementsByTagName('li');
var len=picArr.length;
btnR.onclick = function () {
        num ++;
        if(num === len){num = 0;}
        picArr[0].style.marginLeft=-50*num+ 'px';
        picArr[1].style.marginLeft=-50*num+ 'px';
        picArr[2].style.marginLeft=-50*num+ 'px';
     	picArr[3].style.marginLeft=-50*num+ 'px';
}
btnL.onclick = function () {
		num --;
	if(num<0){num=len-1;}
    	picArr[0].style.marginLeft=50*num+ 'px';
        picArr[1].style.marginLeft=50*num+ 'px';
        picArr[2].style.marginLeft=50*num+ 'px';
     	picArr[3].style.marginLeft=50*num+ 'px';
    }
/*左右键切换会员图片结束*/


/*下拉效果开始*/

var shouji= document.getElementsByClassName('shouji')[0];
var shoujixiala= document.getElementsByClassName('shoujixiala')[0];
xiala(shouji,shoujixiala)

var jinrudianpu= document.getElementsByClassName('jinrudianpu')[0];
var jinruxiala= document.getElementsByClassName('jinruxiala')[0];
xiala(jinrudianpu,jinruxiala)

var shangz= document.getElementsByClassName('shangz')[0];
var shangzxiala= document.getElementsByClassName('shangzxiala')[0];
xiala(shangz,shangzxiala)
var xiayi= document.getElementsByClassName('xiayi')[0];
var xiayixiala= document.getElementsByClassName('xiayixiala')[0];
xiala(xiayi,xiayixiala)
var qun= document.getElementsByClassName('qun')[0];
var qunxiala= document.getElementsByClassName('qunxiala')[0];
xiala(qun,qunxiala)
var allclass= document.getElementsByClassName('allclass')[0];
var allclassxiala= document.getElementsByClassName('allclassxiala')[0];
xiala(allclass,allclassxiala)

var wangzhandaohang= document.getElementsByClassName('wangzhandaohang')[0];
var wangzhandaohangxiala= document.getElementsByClassName('wangzhandaohangxiala')[0];
xiala(wangzhandaohang,wangzhandaohangxiala)
var kefu= document.getElementsByClassName('kefu')[0];
var kefuxiala= document.getElementsByClassName('kefuxiala')[0];
xiala(kefu,kefuxiala)
var maijia= document.getElementsByClassName('maijia')[0];
var maijiaxiala= document.getElementsByClassName('maijiaxiala')[0];
xiala(maijia,maijiaxiala)
var shoucangjia= document.getElementsByClassName('shoucangjia')[0];
var shoucangjiaxiala= document.getElementsByClassName('shoucangjiaxiala')[0];
xiala(shoucangjia,shoucangjiaxiala)
var gouwuche= document.getElementsByClassName('gouwuche')[0];
var gwcxiala= document.getElementsByClassName('gwcxiala')[0];
xiala(gouwuche,gwcxiala)
var nihao= document.getElementsByClassName('nihao')[0];
var huiyuan= document.getElementsByClassName('huiyuan')[0];
xiala(nihao,huiyuan)
var xiaoxi= document.getElementsByClassName('xiaoxi')[0];
var xiaoxixiala= document.getElementsByClassName('xiaoxixiala')[0];
xiala(xiaoxi,xiaoxixiala)
var wodetaobao= document.getElementsByClassName('wodetaobao')[0];
var wodetaobaoxiala= document.getElementsByClassName('wodetaobaoxiala')[0];
xiala(wodetaobao,wodetaobaoxiala)
function xiala(obj,attr){
	obj.onmouseover=function(){attr.style.display="block";}
	obj.onmouseout=function(){attr.style.display="none";}
}
/*下拉效果结束*/
}