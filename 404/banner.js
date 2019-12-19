var banner = document.getElementById('banner');
var left = document.getElementById('left');
var right = document.getElementById('right');
var slides_show = document.getElementById('slides_show');
var img = document.getElementById('img');
var i = 1;
var isMoving = false;
var timer;
//轮播
function next(){
	if(!isMoving){
		isMoving = true;
		i++;
		animate(slides_show,{left:-1200*i},function(){
			if(i > 2){
				slides_show.style.left = "-1200px";
				i = 1;
			}
			isMoving = false;
		});
	}
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	i--;
	animate(slides_show,{left:-1200*i},function(){
		if(i == 0){
			slides_show.style.left = "-2400px";
			i = 2;
		}
		isMoving = false;
	});
}
var timer = setInterval(next,3000);
//鼠标划入
banner.onmouseover = function() {
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(timer);

}
//鼠标划出
banner.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer = setInterval(next,3000);
}
right.onclick = next;
left.onclick = prev;
