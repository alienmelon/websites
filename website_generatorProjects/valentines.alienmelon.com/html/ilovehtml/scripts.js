function save_canvas(){
	var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); 
    $('.save').attr({
    'download':'test.png',
    'href':image
     });
}