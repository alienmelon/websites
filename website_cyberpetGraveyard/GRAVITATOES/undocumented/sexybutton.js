/*
SEXXXY BUTTON IS UNDOCUMENTED!
DO NOT USE!!
*/

function initSexyButtons(){
	//swap
	function sexypress(sexyid){
		document.getElementById(sexyid).src = "GRAVITATOES/undocumented/sexybutton_down.png";
	}

	function sexyunpress(sexyid){
		document.getElementById(sexyid).src = "GRAVITATOES/undocumented/sexybutton_up.png";
	}
	//clicks
	document.getElementById("sexybutton1").addEventListener("click", function(){
		blowtato();
	})
	document.getElementById("sexybutton2").addEventListener("click", function(){
		snowtato();
	})
	document.getElementById("sexybutton3").addEventListener("click", function(){
		cleartatoes();
	})
	//swaps
	document.getElementById("sexybutton1").addEventListener("mousedown",function(){
		sexypress("sexybutton1");
	})
	document.getElementById("sexybutton1").addEventListener("mouseup", function(){
		sexyunpress("sexybutton1");
	})
	document.getElementById("sexybutton2").addEventListener("mousedown",function(){
		sexypress("sexybutton2");
	})
	document.getElementById("sexybutton2").addEventListener("mouseup", function(){
		sexyunpress("sexybutton2");
	})
	document.getElementById("sexybutton3").addEventListener("mousedown",function(){
		sexypress("sexybutton3");
	})
	document.getElementById("sexybutton3").addEventListener("mouseup", function(){
		sexyunpress("sexybutton3");
	})
	//
}

