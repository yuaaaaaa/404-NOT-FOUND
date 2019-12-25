
var bon1 = document.getElementById('log');

login = bon1.onclick= function (){
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
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');

function show1(){
	p1.innerHTML = "请输入正确的11位联系方式";
}
function show2(){
	p2.innerHTML = "请输入5-10位用户名";
}
function show3(){
	p3.innerHTML = "请输入6-15位密码";
}
function dis1(){
	p1.innerHTML = "请输入你的正确的联系方式 ";
}
function dis2(){
	p2.innerHTML = "请输入你的用户名 ";
}
function dis3(){
	p3.innerHTML = "请输入你的密码 ";
}
var phonenumber = document.getElementById('phonenumber');
var username = document.getElementById('username');
var password = document.getElementById('passwords');

function sign(){
	if (phonenumber.value.length != 11) {
		p1.innerHTML = "联系方式未填写正确，请重新填写"
	}
	if (username.value.length < 4 || username.value.length > 10){
		p2.innerHTML="用户名位数不对，请重写填写";
	}
	if (password.value.length < 6 || password.value.length > 12) {
		p3.innerHTML="密码位数不对，请重新填写";
	}
	if ((phonenumber.value.length == 11)&&(username.value.length >= 5 && username.value.length <= 10)&&(password.value.length >= 6 && password.value.length <= 15)) {
		alert('注册成功！')
		window.location.href = "../pick/pick.html";
	}
}
