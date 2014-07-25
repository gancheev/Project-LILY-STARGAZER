	var imageObj = new Image(); 
	var imageObj1 = new Image();
	var x = 700;
	var xa = 690;
	var y = 0;
	var update = 0.2;
	var update1 = 0.4;
	imageObj.src = 'img/cloud2_2_colored.png';
	imageObj1.src = 'img/cloud1_1colored.png';
	
	setInterval(draw,15);
	
	function draw() {
	var canvas = document.getElementById("game");
	var c = canvas.getContext("2d");    
   //linear gradient for sky
	var grd=c.createLinearGradient(0, 0, 0, 300);
	grd.addColorStop(0,"#8ED6FF");
	grd.addColorStop(1,"#FFF");	
	c.fillStyle=grd;
	c.fillRect(0, 0, canvas.width, canvas.height);
	//end linear gradient for sky
	
	// create sun radial gradient
	c.rect(0, 0, canvas.width, canvas.height);
      var grd = c.createRadialGradient(77, 85, 0, 48, 48, 150);
      // light blue
      grd.addColorStop(0, 'rgba(247, 247, 19, 1.000)');
      // dark blue
      grd.addColorStop(1, 'rgba(255, 255, 255, 0.000)');
      c.fillStyle = grd;
      c.fill();
	 //end sun radial gradient
	 
	 //draw cloud
		c.drawImage(imageObj, 250, y);//(imageObj, x, y)
		/*x -= update;
		if (x < -235){
			x = 700;
		}*/ //repeat cloud
		//end cloud
		c.drawImage(imageObj1, xa, y + 15);
		xa -= update1;
		if (xa < -235){
			xa = 700;
		}
		var img=document.getElementById("info");
		//var img.src = 'img/1406203098_Info.png';
		c.drawImage(img, 620, 430);
		
		
	 } 
	 soundEfx.play();
	 
	 
	 canvas.addEventListener( "keydown", doKeyDown, true);
		function doKeyDown(e) {

		alert( e.keyCode )

	}
	 