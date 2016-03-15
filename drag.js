function drag(id){
	var obj = document.getElementById(id);
	var divX = 0;
	var divY = 0;
	document.onmousedown=function(ev){
		divX = ev.clintX - obj.offsetLeft;
		divY = ev.clintY - obj.offsetTop;
		document.onmousemove = function(){
			obj.style.left = ev.clintX -divX;
			obj.style.top = ev.clintY -divY;
		}
	}
	document.onmouseup = function(){
		document.onmousemove = null;
		document.onmousedown = nulg;
	}
}