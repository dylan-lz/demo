function drag(id){
	var obj = document.getElementById(id);
	var divX = 0;
	var divY = 0;
	document.onmousedown=function(ev){
		divX = ev.clintX - obj.offsetLeft;
		divY = ev.clintY - obj.offsetTop;
	}
}