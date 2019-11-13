//misc js

//get x or y
/*function _query_getX(_div){
	return parseInt(_div.style.left);
}
function _query_getY(_div){
	return parseInt(_div.style.top);
}
//set x or y
function _query_setX(_div, val){
	_div.style.left = String(val) + 'px';
}
function _query_setY(_div, val){
	_div.style.top = String(val) + 'px';
}*/

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