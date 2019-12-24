
var ip = document.getElementById('inp');
var bon = document.getElementById('log');


ip.onmouseover = function(){
	ip.style.opcity = '0%';
}

login = bon.onclick= function (){
	alert("登录成功! 快来选择你支持的选手吧！");
	window.location.href = "../pick/pick.html";
}
var TurnToLogin = () => {
	document.getElementById('inLogin').style.display = "block";
	document.getElementById('inSign').style.display = "none";
}
var TurnToRegister = () => {
	document.getElementById('inSign').style.display = "block";
	document.getElementById('inLogin').style.display = "none";
}
var p = document.getElementById('inp1');

function show1(){
	p.innerHTML.value = "请输入正确的11位联系方式";
}
