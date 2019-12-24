function search() {
    if (document.getElementById("search_input").value != "") {
        window.location.href = "https://www.baidu.com/s?wd=" + document.getElementById("search_input").value;
        document.getElementById("search_input").value = "";
    }
    return false;
}
document.onkeydown = function(e){
    var ev = document.all ? window.event : e;
    if(ev.keyCode == 13) {
        return search();
    }
}