//misc js

function fp_returnDocWidth(){
	var num_width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	//num_width = num_width + num_frogWidth;

	return num_width;
}

function fp_returnDocHeight(){
	var num_height = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

	//num_height = num_height + num_frogHeight;

	return num_height;
}