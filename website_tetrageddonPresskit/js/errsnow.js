//errors floating up
		function snowErrors(){
			var num_docWidth = $(document).width();
			var	num_docHeight = $(document).height();
			var	num_width = 32; //minimum width of err
			var	num_height = 32; //maximum height
			
			//
			var arr_errImg = ["images/IMG_ERR01.png", "images/IMG_ERR02.png", "images/IMG_ERR03.png", "images/IMG_ERR04.png", "images/IMG_ERR05.png", "images/IMG_ERR06.png"];
			
			var err = $('<div id="err" />').css(
				{
					'position': 'absolute', 
					'pointer-events': 'none',
					'top': String(num_docHeight - num_height - 50)+'px', 
					'width' : num_width, 
					'height': num_height, 
					'background' : 'none'
					}
				).html('<img src='+arr_errImg[Math.ceil(Math.random()*arr_errImg.length)-1]+' alt="404">');
			
		function make_err(){
				//
				var num_startLeft = Math.random()*num_docWidth - num_width;
				var num_fligthDuration = Math.random()*8000 + num_docHeight;
				//
				err
					.clone()
					.appendTo('.errsnows')
					.css(
							{
								left: Math.random()*num_docWidth - num_width
							}
						)
						.animate(
							{
								top: -num_height,
								left: (num_startLeft + Math.random()*num_width) - num_width
							},
							num_fligthDuration,
							"linear",
							function() {
								$(this).remove()
							}
						);
			};
			
			var errint = setInterval(make_err, 2500);
	};