
var ip = document.getElementById('inp');
var bon = document.getElementById('log');

ip.onmouseover = function(){
	ip.style.opcity = '0%';
}

bon.onclick= function (){
	var now = getStyle(bon,'color')
	if (now == 'white') {
		bon.style.color = 'black';
	}
	alert("登录成功! 快来选择你支持的选手吧！");
}