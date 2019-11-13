//potatoes plopping (this is how potatoes sound when they hit the ground)
//these plops are good, do use:
var arr_sndtato = ["AUD_PLOP01", "AUD_PLOP02", "AUD_PLOP03", "AUD_PLOP04", "AUD_PLOP05", "AUD_PLOP06", "AUD_PLOP09", "AUD_PLOP12", "AUD_PLOP14", "AUD_PLOP15", "AUD_PLOP18"];
//these plops are bad, do not use:
//, "AUD_PLOP07", "AUD_PLOP08", "AUD_PLOP10", "AUD_PLOP11", "AUD_PLOP13", "AUD_PLOP16", "AUD_PLOP17"

//all potatoes for easy removal
var arr_alltatoes = [];

//preffered potato sound format (either .wav or .mp3 audio is provided)
var arr_soundformatato = ".mp3";

//path to images (the potatoes are here)
var str_img_pathtato = "GRAVITATOES/images/";
//potato sounds are here (the advanced potato sound folder)
var str_snd_pathtato = "GRAVITATOES/audio/";

//potato numbers
var num_totaltatoes = 10;//the preffered total of potatoes
var num_potatoWidth = 215;
var num_potatoHeight = 270;

var num_tatoFrameRate = 20;//frame rate: higher numer = old-school
var int_tatoint;//uint

//should it snow potatoes?
var bool_snowtato = false;

//get values and mathy things...

//advanced queries
function potatoquery_getDocWidth(){
	var num_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	return num_width;
}
function potatoquery_getDocHeight(){
	var num_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	return num_height;
}
//return random mathematical potato range
function potatoquery_randRange(num_min, num_max){
	return Math.ceil(num_min + (num_max - num_min) * Math.random());
}
//get x or y
function potatoquery_getX(potatovar){
	return parseInt(potatovar.style.left);
}
function potatoquery_getY(potatovar){
	return parseInt(potatovar.style.top);
}
//set x or y
function potatoquery_setX(potatovar, val){
	potatovar.style.left = String(val) + 'px';
}
function potatoquery_setY(potatovar, val){
	potatovar.style.top = String(val) + 'px';
}
//set gravity vals
function potatoquery_setVals(potatovar){
	//set up unique variables for gravity...
	window["xPos"+potatovar.id] = potatoquery_getX(potatovar);
	window["yPos"+potatovar.id] = potatoquery_getY(potatovar);
	window["xVel"+potatovar.id] = Math.ceil(Math.random() * 10) - 5;
	window["yVel"+potatovar.id] = Math.ceil(Math.random() * -10) - 10;
	window["grav"+potatovar.id] = Math.ceil(Math.random() * 2);
	window["prevY"+potatovar.id] = potatoquery_getY(potatovar);
	//countdown till reset
	window["cnt"+potatovar.id] = Math.ceil(Math.random()*10)+20;
	window["hitG"+potatovar.id] = false;
}
//clear gravity vals (for reset)
function potatoquery_resetVals(potatovar){
	window["xPos"+potatovar.id] = null;
	window["yPos"+potatovar.id] = null;
	window["xVel"+potatovar.id] = null;
	window["yVel"+potatovar.id] = null;
	window["grav"+potatovar.id] = null;
	window["prevY"+potatovar.id] = null;
	window["cnt"+potatovar.id] = null;
	window["hitG"+potatovar.id] = null;
}

//sound...

//potatosfx: advanced potato audio
function potatosfx(){
	var snd_potatofx = new Audio(str_snd_pathtato + arr_sndtato[Math.ceil(Math.random()*arr_sndtato.length)-1] + arr_soundformatato);
	snd_potatofx.play();
}

//better array management...

//remove this potato from the array
function ripPotatoOutOfArr(potatonum){
	for(var i = 0; i<arr_alltatoes.length; i++){
		if(arr_alltatoes[i] == potatonum){
			arr_alltatoes.splice(i, 1);
			break;
		}
	}
}

//createtatoes...

//spawntatoes!
function gravitato_makepotato(potatonum){
	//make a good potato
	var potatovar;
	potatovar = document.createElement("div");
	potatovar.id = "potato_"+String(potatonum);
	potatovar.className = "gravitato";
	//style
	potatovar.style.position = 'fixed';
	potatoquery_setY(potatovar, -num_potatoHeight);
	potatoquery_setX(potatovar, potatoquery_randRange(0, potatoquery_getDocWidth() - num_potatoWidth  - 250));
	potatovar.style.pointerEvents = "none";
	//potatorotate = rotatoe!
	potatovar.style.transform = "rotate("+ String(potatoquery_randRange(0, 360)) +"deg)";
	//load the potato: loadtato = sexytato
	potatovar.innerHTML = '<img src=' + str_img_pathtato + "GERALD.gif" + '>';
	//set the potato values for realistic potato gravity
	potatoquery_setVals(potatovar);
	//
	document.getElementsByTagName("body")[0].appendChild(potatovar);
	arr_alltatoes.push(potatovar);//save these tatoes
	//id = arr_alltatoes[potatonum].id
}

//potato gravity
function gravitato_gravitate(potatonum){
	//the ground
	var num_yTato = potatoquery_getDocHeight() - num_potatoHeight - 150;
	//mathtato!
	window["yVel"+potatonum.id] +=  window["grav"+potatonum.id];
	window["xPos"+potatonum.id] +=  window["xVel"+potatonum.id];
	window["yPos"+potatonum.id] +=  window["yVel"+potatonum.id];
	//
	if (window["yPos"+potatonum.id] > num_yTato)
	{
		window["yVel"+potatonum.id] *=  -.10;
		window["xVel"+potatonum.id] *=  .7;
	}
	//update position with mathtato...
	potatoquery_setX(potatonum, window["xPos"+potatonum.id]);
	potatoquery_setY(potatonum, window["yPos"+potatonum.id]);
	//if the potato hit the ground (it's now a floortato)
	if(window["yPos"+potatonum.id] >= num_yTato){
		//countdown till reset
		window["cnt"+potatonum.id]-=1;
		//play sound
		if(!window["hitG"+potatonum.id]){
			potatosfx();//play advanced potato audio
		};
		//
		window["hitG"+potatonum.id] = true;
	}
	//reset or remove here
	if(window["cnt"+potatonum.id] <=0){
		//what type?
		if(bool_snowtato){
			//yes, these are snowtatoes, keep snowing
			//to make this perfect, and to keep the scrollbars from showing up, you'd have to probably factor in the potato's rotation in the width and height
			//but i don't feel like doing that, so this is good enough...
			potatoquery_setY(potatonum, -num_potatoHeight);
			potatoquery_setX(potatonum, potatoquery_randRange(0, potatoquery_getDocWidth() - num_potatoWidth - 250));
			//clear and reset
			potatoquery_resetVals(potatonum);
			potatoquery_setVals(potatonum);
		}else{
			//no these are not snowtatoes, killtato
			ripPotatoOutOfArr(potatonum);
			potatoquery_resetVals(potatonum);
			clearThisTato(potatonum);
		}
	}
	//set the previous y position before updating - eventually the above condition returns true...
	window["prevY"+potatonum.id] = potatoquery_getY(potatonum);
}

//the potato event timer ticker (interval)
//for applying potato gravity
function tatoticker(){
	for(var i = 0; i<arr_alltatoes.length; ++i){
		gravitato_gravitate(arr_alltatoes[i]);
	}
}

//make these potatoes and initiate timer
function spawntatoes(){
	//cleartatoes(); ??
	for(var i = 0; i<num_totaltatoes; ++i){
		gravitato_makepotato(i);
	}
	clearInterval(int_tatoint);//kill first incase of button mashers
	int_tatoint = setInterval(tatoticker, num_tatoFrameRate);
}

//clear all the potatoes
function cleartatoes(){
	//end these tatoes
	for(var i=0; i<arr_alltatoes.length; ++i){
		clearThisTato(arr_alltatoes[i]);
	}
	//clear arr and int
	arr_alltatoes = [];
	clearInterval(int_tatoint);//kill interval
	//notato :(
}
//clear just the one potato
function clearThisTato(potatonum){
	var elem = document.getElementById(potatonum.id);
	elem.parentNode.removeChild(elem);
	potatoquery_resetVals(potatonum);
	//notato ;_;
}

//call this on page load for a suitable substitute for the javascript snow effect
// <body onload="snowtato();">
function snowtato(){
	console.log("snowtato...");
	cleartatoes();//kill all first
	bool_snowtato = true;//toggle bool to set to snow
	spawntatoes();
}

//rig to blow - as an event
function blowtato(){
	console.log("blowtato!");
	if(bool_snowtato){
		bool_snowtato = false;//stop snowing if it is
	}
	//protect these precious potatoes from button mashers
	//also protect this precious browser from too many potatoes
	if(arr_alltatoes.length <= 0){
		spawntatoes();
	}
}
