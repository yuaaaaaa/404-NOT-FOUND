window.onload = function(){
// 搜索框
    var search_box = document.getElementById('search_box');
    var oList = document.getElementById('list');
    var txt = document.getElementById('txt');
    var btn = document.getElementById('btn');
    var nameArr = ['1','2','3','4','5','6','7','8'];
    btn.addEventListener =('click', function(){//点击按钮搜索
        var keyWord = txt.value;
        var nameList = searchByRegExp(keyWord, nameArr);
        renderNames(nameList);
    },false);
    txt.addEventListener('keydown',function(e){//回车搜索
        if(e.keyCode == 8){
            var keyWord = txt.value;
            var nameList = searchByRegExp(keyWord, nameArr);
            renderNames(nameList);
        }
    },false);
    var cpLock = false;
    $('#txt').on('compositionstart', function () {
        cpLock = true;
        console.log("不搜索")
    });
    $('#txt').on('compositionend', function () {
        cpLock = false;
        console.log("汉字搜索");
        var keyWord = txt.value;
        var nameList = searchByRegExp(keyWord, nameArr);
        renderNames(nameList);
    });
    $('#txt').on('input', function () {
        if (!cpLock) {
            console.log("字母搜索")
            var keyWord = txt.value;
            var nameList = searchByRegExp(keyWord, nameArr);
            renderNames(nameList);
        }
    });
    function renderNames(list){
        if(!(list instanceof Array)){
            return ;
        }
        oList.innerHTML = " ";
        var len = list.length;
        var item = null;
        for(var i=0;i<len;i++){
            item = document.createElement('li');
            item.innerHTML = list[i];
            oList.appendChild(item);
        }
    }
     //模糊查询1:利用字符串的indexOf方法
    function searchByIndexOf(keyWord, list){
        if(!(list instanceof Array)){
            return ;
        }
        var len = list.length;
        var arr = [];
        for(var i=0;i<len;i++){
            //如果字符串中不包含目标字符会返回-1
            if(list[i].indexOf(keyWord)>=0){
                arr.push(list[i]);
            }
        }
        return arr;
    }
    //正则匹配
    function searchByRegExp(keyWord, list){
        if(!(list instanceof Array)){
            return ;
        }
        var len = list.length;
        var arr = [];
        var reg = new RegExp(keyWord);
        for(var i=0;i<len;i++){
            //如果字符串中不包含目标字符会返回-1
            if(list[i].match(reg)){
                arr.push(list[i]);
            }
        }
        return arr;
    }
    renderNames(nameArr);
}
