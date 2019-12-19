// 搜索框
var search_box = document.getElementById('search_box');
var nameList = document.getElementById('nameList');
var input = document.getElementById('input');
var nameArr = [];
var body = document.getElementsByTagName('body');
body.onload = function(){//初始化nameArr数据
	var childs = nameList.childNodes;
	for(var i = 0;i < childs.length;i++){
		nameArr.push(childs[i].innerHTML);
	}
	console.log(nameArr);
}
input.onfocus = function() {
    nameList.style.display = "";
}
input.oninput = function() {
    var e = event.target || event.srcElement;
    var str = e.value;
    console.log(str);
    nameList.innerHTML = '';  //清空div下的所有P元素
    nameArr.forEach(function (item) {
        if (item.indexOf(str) != -1) {
            var p = document.createElement('p');
            var text = document.createTextNode(item);
            p.appendChild(text);
            nameList.appendChild(p);
        }
    })
    console.log("dataList.innerHTML：" + nameList.innerHTML)
    if (nameList.innerHTML == '') {
        var p = document.createElement('p');
        var text = document.createTextNode('暂无数据');
        p.style.color = '#d7d7d7';
        p.onclick = function () { 
        	event.stopImmediatePropagation(); 
        }  //阻止事件的冒泡
        p.appendChild(text);
        nameList.appendChild(p);
    }
}
nameList.onclick = function pushInput() { //利用事件委托机制,获取点击的P源
    var e = event.target || event.srcElement;
    var input = document.getElementById('input');
    input.value = e.innerText;
    nameList.style.display = 'none';
}