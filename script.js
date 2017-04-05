window.addEventListener('load',function(){
	var canvas=document.getElementById("myCanvas");
	var context=canvas.getContext('2d');
	var draw=false;
	var colorChooser = document.getElementById("color");
	var color=colorChooser.value;
	var sizeSelect=document.getElementById("size");
	var size=sizeSelect.value;
	
	document.getElementById("reset").addEventListener("click",redraw);
	document.getElementById("save").addEventListener("click",save);
	canvas.addEventListener("mousedown",down);
	canvas.addEventListener("mousemove",move);
	canvas.addEventListener("mouseup",up);
	canvas.addEventListener("mouseout",up);
	colorChooser.addEventListener("change",setColor);
	sizeSelect.addEventListener("change",setSize);
	function down(e){
		draw=true;
		context.moveTo(e.clientX,e.clientY);
	}
	function move(e){
		if(draw){
			context.lineTo(e.clientX,e.clientY);
			context.strokeStyle=color;
			context.lineWidth=size;
			context.stroke();
		}
	}
	function up(e){
		draw=false;
	}
	function setColor(){
		color = colorChooser.value;
	}
	function setSize(){
		size = sizeSelect.value;
	}
	function redraw(){
		context.clearRect(0, 0, canvas.width, canvas.height);
	}
	function save(){
		var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
		window.location.href=image; 
	}
});