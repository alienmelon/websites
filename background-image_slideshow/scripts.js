/*
example of turning backgroundImage into a photo slideshow
photos are loaded at random from an array
css transitions are stopped and played when a photo loads in and out (they fade in/out)
gifs are examples of my own personal work
this was used to showcase photography...

code by @alienmelon
*/

//arrays
//slideshow of curated images from all the years
var arr_backgroundSlideshow = ["slideshow/PAGE08_WALKCYCLE.gif", "slideshow/PAGE4_SCENERY.gif", "slideshow/PAGE5_BACKGROUND1.gif", "slideshow/PAGE5_BACKGROUND2.gif", "slideshow/PAGE19_ANIM.gif", "slideshow/PAGE19_WALKING.gif", "slideshow/PAGE19.gif", "slideshow/RAINBOW_SEA.gif", "slideshow/rand12_BACKGROUND.gif", "slideshow/SEQ07_TEST.gif", "slideshow/SEQ25_MAKEFACEAT.gif", "slideshow/TWITCHYSKELETON_2.gif", "slideshow/TWITCHYSKELETON2.gif", "slideshow/WRONGGIF.gif"];

//the current slideshow array (this can change depending on the page)
//used to show a different set of photos for each page...
//to have more photos make more arrays (like above) and in each page (onload) send init_backgroundSlideshow a different array
var arr_currSlideshowArr = [];

//vars
//for the slideshow
var int_slideshow;//slideshow interval (clear and set)
var num_slideshow_speed = 100; //how long it takes to fade images (slower = higher number, faster = lower number... lower than 50 is not recommended)
var num_slideshow_countdown = num_slideshow_speed;


//return a random array element...
function return_randArr(arr){
	var _rand = arr[Math.ceil(Math.random()*arr.length)-1];
	return _rand;
}

//CALL THIS TO START THE SLIDESHOW
//usage background_slideshow("divID", ["imageurl.png", "imageurl2.png" ...])
//load images into the background div
//init a slideshow where they fade over eachother
function init_backgroundSlideshow(str_divID, arr){
	//arr = array of images
	//str_divID = the background div
	arr_currSlideshowArr = arr;//set the current slideshow arr (used when resetting the animation)
	//
	var _div = document.getElementById(str_divID);
	//
	_div.style.backgroundImage = "url(" + return_randArr(arr) +")";
	//document.body.style.backgroundImage
	//fade in
	fadeIn_backgroundSlideshow(_div.id);
	//reset
	clearInterval(int_slideshow);
	_div.removeEventListener("webkitAnimationEnd", event_backgroundSlideshow_outEnd);
	//start again
	num_slideshow_countdown = num_slideshow_speed;
	int_slideshow = setInterval(function(){countdown_backgroundSlideshow(_div.id)}, 100);
	//note: to stop the slideshow just clear the event listener...
}
//Manage slideshow (time, countdown, listeners...)
//function to handle loading and fading...
function countdown_backgroundSlideshow(str_divID){
	//
	var _div = document.getElementById(str_divID);
	//
	num_slideshow_countdown -= 1;
	if(num_slideshow_countdown<=0){
		//change
		clearInterval(int_slideshow);
		//stop, check if fadeout is done, load new if done
		fadeOut_backgroundSlideshow(_div.id);
	}
}
//in and out classes
function fadeIn_backgroundSlideshow(str_divID){
	var _div = document.getElementById(str_divID);
	//
	_div.classList.remove("_backgroundSlideshowOut");
	void _div.offsetWidth;
	_div.classList.toggle("_backgroundSlideshowIn");
	_div.style.animationName = "fadein";
	
}
function fadeOut_backgroundSlideshow(str_divID){
	var _div = document.getElementById(str_divID);
	//
	_div.classList.remove("_backgroundSlideshowIn");
	void _div.offsetWidth;
	_div.classList.toggle("_backgroundSlideshowOut");
	_div.style.animationName = "fadeout";
	//start again
	_div.addEventListener("webkitAnimationEnd", event_backgroundSlideshow_outEnd);
}
//fadeout is over, start again
function event_backgroundSlideshow_outEnd(event){
	var _div = event.currentTarget;
	init_backgroundSlideshow(_div.id, arr_currSlideshowArr)
}
