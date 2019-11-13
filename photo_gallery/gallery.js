/*
a simple js script for an image gallery...
populate divs with thumbnails and manage loading / showing images
to load a gallery call onClick="loadGallery(arr_gallery1, 'Gallery Title', '_photoSelection'); an a link or div

by @alienmelon written for the Playdate Pop Up website
*/

//IMAGE ARRAYS
//["DESCRIPTION", "PATH TO IMAGE", "PATH TO THUMBNAIL"]
var arr_gallery1 = [
	["Image description...", "images/photography/gallery1/0.gif", "images/photography/gallery1/thumbnails/0.gif"],
	["Image description...", "images/photography/gallery1/01.gif", "images/photography/gallery1/thumbnails/01.gif"],
	["Image description...", "images/photography/gallery1/02.gif", "images/photography/gallery1/thumbnails/02.gif"],
	["Image description...", "images/photography/gallery1/03.gif", "images/photography/gallery1/thumbnails/03.gif"],
	["Image description...", "images/photography/gallery1/04.gif", "images/photography/gallery1/thumbnails/04.gif"],
	["Image description...", "images/photography/gallery1/05.gif", "images/photography/gallery1/thumbnails/05.gif"],
	["Image description...", "images/photography/gallery1/06.gif", "images/photography/gallery1/thumbnails/06.gif"],
	["Image description...", "images/photography/gallery1/07.gif", "images/photography/gallery1/thumbnails/07.gif"],
	["Image description...", "images/photography/gallery1/08.gif", "images/photography/gallery1/thumbnails/08.gif"],
	["Image description...", "images/photography/gallery1/09.gif", "images/photography/gallery1/thumbnails/09.gif"],
	["Image description...", "images/photography/gallery1/10.gif", "images/photography/gallery1/thumbnails/10.gif"],
	["Image description...", "images/photography/gallery1/11.gif", "images/photography/gallery1/thumbnails/11.gif"],
	["Image description...", "images/photography/gallery1/BESTBONES3_SEXIEST_SKELETON_0.gif", "images/photography/gallery1/thumbnails/BESTBONES3_SEXIEST_SKELETON_0.gif"],
	["Image description...", "images/photography/gallery1/BESTBONES17_SEXIEST_SKELETON_0.gif", "images/photography/gallery1/thumbnails/BESTBONES17_SEXIEST_SKELETON_0.gif"],
	["Image description...", "images/photography/gallery1/BESTBONES33_HOT_STUFF_0.gif", "images/photography/gallery1/thumbnails/BESTBONES33_HOT_STUFF_0.gif"],
	["Image description...", "images/photography/gallery1/BESTBONES36_HOT_STUFF_0.gif", "images/photography/gallery1/thumbnails/BESTBONES36_HOT_STUFF_0.gif"],
	["Image description...", "images/photography/gallery1/BESTBONES40_BEST_SKELETON_0.gif", "images/photography/gallery1/thumbnails/BESTBONES40_BEST_SKELETON_0.gif"],
	["Image description...", "images/photography/gallery1/BESTBONES75_SEXIEST_SKELETON_0.gif", "images/photography/gallery1/thumbnails/BESTBONES75_SEXIEST_SKELETON_0.gif"],
	["Image description...", "images/photography/gallery1/BESTBONES83_HOT_SKELETON_0.gif", "images/photography/gallery1/thumbnails/BESTBONES83_HOT_SKELETON_0.gif"],
	["Image description...", "images/photography/gallery1/BESTBONES86_SEXY_SKELETON_0.gif", "images/photography/gallery1/thumbnails/BESTBONES86_SEXY_SKELETON_0.gif"],
	["Image description...", "images/photography/gallery1/code_01.gif", "images/photography/gallery1/thumbnails/code_01.gif"],
	["Image description...", "images/photography/gallery1/code_02.gif", "images/photography/gallery1/thumbnails/code_02.gif"],
	["Image description...", "images/photography/gallery1/code_03.gif", "images/photography/gallery1/thumbnails/code_03.gif"],
	["Image description...", "images/photography/gallery1/code_04.gif", "images/photography/gallery1/thumbnails/code_04.gif"],
	["Image description...", "images/photography/gallery1/code_05.gif", "images/photography/gallery1/thumbnails/code_05.gif"],
	["Image description...", "images/photography/gallery1/code_06.gif", "images/photography/gallery1/thumbnails/code_06.gif"],
	["Image description...", "images/photography/gallery1/code_07.gif", "images/photography/gallery1/thumbnails/code_07.gif"],
	["Image description...", "images/photography/gallery1/code_08.gif", "images/photography/gallery1/thumbnails/code_08.gif"]
];

var arr_gallery2 = [
	["Image description...", "images/photography/gallery2/BACK_PAGE17.gif", "images/photography/gallery2/thumbnails/BACK_PAGE17.gif"],
	["Image description...", "images/photography/gallery2/BACKGROUND_ART_PAGE20.gif", "images/photography/gallery2/thumbnails/BACKGROUND_ART_PAGE20.gif"],
	["Image description...", "images/photography/gallery2/BACKGROUND_GOOD_DISTORTION.gif", "images/photography/gallery2/thumbnails/BACKGROUND_GOOD_DISTORTION.gif"],
	["Image description...", "images/photography/gallery2/BACKGROUND_WEIRD_01.gif", "images/photography/gallery2/thumbnails/BACKGROUND_WEIRD_01.gif"],
	["Image description...", "images/photography/gallery2/BACKGROUND_WEIRD_02.gif", "images/photography/gallery2/thumbnails/BACKGROUND_WEIRD_02.gif"],
	["Image description...", "images/photography/gallery2/BACKGROUND25.gif", "images/photography/gallery2/thumbnails/BACKGROUND25.gif"],
	["Image description...", "images/photography/gallery2/BACKGROUNDS_FOR_PAGE06.gif", "images/photography/gallery2/thumbnails/BACKGROUNDS_FOR_PAGE06.gif"],
	["Image description...", "images/photography/gallery2/BE_MY_FRIEND1.gif", "images/photography/gallery2/thumbnails/BE_MY_FRIEND1.gif"],
	["Image description...", "images/photography/gallery2/BESTBONES3_SEXIEST_SKELETON_0.gif", "images/photography/gallery2/thumbnails/BESTBONES3_SEXIEST_SKELETON_0.gif"],
	["Image description...", "images/photography/gallery2/BOOTUP.gif", "images/photography/gallery2/thumbnails/BOOTUP.gif"],
	["Image description...", "images/photography/gallery2/BUN02_2.gif", "images/photography/gallery2/thumbnails/BUN02_2.gif"],
	["Image description...", "images/photography/gallery2/CLOUDS_BOTH_3.gif", "images/photography/gallery2/thumbnails/CLOUDS_BOTH_3.gif"],
	["Image description...", "images/photography/gallery2/CRITICAL_AUDIENCE.gif", "images/photography/gallery2/thumbnails/CRITICAL_AUDIENCE.gif"],
	["Image description...", "images/photography/gallery2/DUCKMONKEY_TALKING.gif", "images/photography/gallery2/thumbnails/DUCKMONKEY_TALKING.gif"],
	["Image description...", "images/photography/gallery2/EGGULATOR.gif", "images/photography/gallery2/thumbnails/EGGULATOR.gif"],
	["Image description...", "images/photography/gallery2/FABRIC01.gif", "images/photography/gallery2/thumbnails/FABRIC01.gif"],
	["Image description...", "images/photography/gallery2/FULLMOON.gif", "images/photography/gallery2/thumbnails/FULLMOON.gif"],
	["Image description...", "images/photography/gallery2/GIVE_UP.gif", "images/photography/gallery2/thumbnails/GIVE_UP.gif"],
	["Image description...", "images/photography/gallery2/GROUNDS_FOR_PAGE06.gif", "images/photography/gallery2/thumbnails/GROUNDS_FOR_PAGE06.gif"],
	["Image description...", "images/photography/gallery2/H_MEAT.gif", "images/photography/gallery2/thumbnails/H_MEAT.gif"],
	["Image description...", "images/photography/gallery2/HAPPILY_FALLING.gif", "images/photography/gallery2/thumbnails/HAPPILY_FALLING.gif"],
	["Image description...", "images/photography/gallery2/HAPPYBUN.gif", "images/photography/gallery2/thumbnails/HAPPYBUN.gif"],
	["Image description...", "images/photography/gallery2/HAPPYDANCE03.gif", "images/photography/gallery2/thumbnails/HAPPYDANCE03.gif"],
	["Image description...", "images/photography/gallery2/IMG_10_WALKCYCLE.gif", "images/photography/gallery2/thumbnails/IMG_10_WALKCYCLE.gif"],
	["Image description...", "images/photography/gallery2/IMG_16_ART1.gif", "images/photography/gallery2/thumbnails/IMG_16_ART1.gif"],
	["Image description...", "images/photography/gallery2/IMG_16_ART3.gif", "images/photography/gallery2/thumbnails/IMG_16_ART3.gif"],
	["Image description...", "images/photography/gallery2/IMG_22_BACKGROUND.gif", "images/photography/gallery2/thumbnails/IMG_22_BACKGROUND.gif"],
	["Image description...", "images/photography/gallery2/IMG_22_WORMLET.gif", "images/photography/gallery2/thumbnails/IMG_22_WORMLET.gif"],
	["Image description...", "images/photography/gallery2/IMG_22_WORMLET1.gif", "images/photography/gallery2/thumbnails/IMG_22_WORMLET1.gif"],
	["Image description...", "images/photography/gallery2/IMG_BACKGROUND_RAINBOW01.gif", "images/photography/gallery2/thumbnails/IMG_BACKGROUND_RAINBOW01.gif"],
	["Image description...", "images/photography/gallery2/IMG_BADLANDSCAPE_SKULL.gif", "images/photography/gallery2/thumbnails/IMG_BADLANDSCAPE_SKULL.gif"],
	["Image description...", "images/photography/gallery2/IMG_BREAKINGFRIENDS.gif", "images/photography/gallery2/thumbnails/IMG_BREAKINGFRIENDS.gif"],
	["Image description...", "images/photography/gallery2/IMG_CHARACTER_RANDOMIZER.gif", "images/photography/gallery2/thumbnails/IMG_CHARACTER_RANDOMIZER.gif"],
	["Image description...", "images/photography/gallery2/IMG_CHARACTERS.gif", "images/photography/gallery2/thumbnails/IMG_CHARACTERS.gif"],
	["Image description...", "images/photography/gallery2/IMG_CITYSCAPE_03.gif", "images/photography/gallery2/thumbnails/IMG_CITYSCAPE_03.gif"]
];

var arr_gallery3 = [
	["Image description...", "images/photography/gallery3/eat_13.gif", "images/photography/gallery3/thumbnails/eat_13.gif"],
	["Image description...", "images/photography/gallery3/eat_13 1.gif", "images/photography/gallery3/thumbnails/eat_13 1.gif"],
	["Image description...", "images/photography/gallery3/eat_11.gif", "images/photography/gallery3/thumbnails/eat_11.gif"],
	["Image description...", "images/photography/gallery3/eat_12.gif", "images/photography/gallery3/thumbnails/eat_12.gif"],
	["Image description...", "images/photography/gallery3/eat_8.gif", "images/photography/gallery3/thumbnails/eat_8.gif"],
	["Image description...", "images/photography/gallery3/eat_9.gif", "images/photography/gallery3/thumbnails/eat_9.gif"],
	["Image description...", "images/photography/gallery3/eat_10.gif", "images/photography/gallery3/thumbnails/eat_10.gif"],
	["Image description...", "images/photography/gallery3/eat_5.gif", "images/photography/gallery3/thumbnails/eat_5.gif"],
	["Image description...", "images/photography/gallery3/eat_6.gif", "images/photography/gallery3/thumbnails/eat_6.gif"],
	["Image description...", "images/photography/gallery3/eat_7.gif", "images/photography/gallery3/thumbnails/eat_7.gif"],
	["Image description...", "images/photography/gallery3/eat_3.gif", "images/photography/gallery3/thumbnails/eat_3.gif"],
	["Image description...", "images/photography/gallery3/eat_4.gif", "images/photography/gallery3/thumbnails/eat_4.gif"],
	["Image description...", "images/photography/gallery3/8.gif", "images/photography/gallery3/thumbnails/8.gif"],
	["Image description...", "images/photography/gallery3/eat_2.gif", "images/photography/gallery3/thumbnails/eat_2.gif"],
	["Image description...", "images/photography/gallery3/7.gif", "images/photography/gallery3/thumbnails/7.gif"],
	["Image description...", "images/photography/gallery3/6.gif", "images/photography/gallery3/thumbnails/6.gif"],
	["Image description...", "images/photography/gallery3/5.gif", "images/photography/gallery3/thumbnails/5.gif"],
	["Image description...", "images/photography/gallery3/4.gif", "images/photography/gallery3/thumbnails/4.gif"],
	["Image description...", "images/photography/gallery3/3.gif", "images/photography/gallery3/thumbnails/3.gif"],
	["Image description...", "images/photography/gallery3/2.gif", "images/photography/gallery3/thumbnails/2.gif"],
	["Image description...", "images/photography/gallery3/1.gif", "images/photography/gallery3/thumbnails/1.gif"]
];

//manage the position in the array
//loop paging through it
function manageImagePage(arr_num, arr){
	if(arr_num < 0){
		arr_num = arr.length-1;
	}
	if(arr_num > arr.length-1){
		arr_num = 0;
	}
	return arr_num;
}

function openImage(str_src, str_description, arr_number, arr){
	//open image
	//arr_number = the position in the array (for next/prev)
	//arr is the array passed to this
	//build pop up area with close buttom
	//build description there too...
	var _container = document.createElement("div");
	_container.id = "_photo";
	_container.className = "photoPopup";
	document.body.appendChild(_container);
	
	//now place the image
	_container.style.backgroundImage = "url(" +str_src +")";
	
	//caption
	var _caption = document.createElement("div");
	_caption.id = "_photo_caption";
	_caption.className = "photoPopupCaption";
	_caption.innerHTML = str_description;
	_container.appendChild(_caption);
	
	//next/prev buttons
	var _nextBtn = document.createElement("div");
	var _prevBtn = document.createElement("div");
	_nextBtn.id = "_photo_nextBtn";
	_prevBtn.id = "_photo_prevBtn";
	_nextBtn.className = "photoPopupNextBtn";
	_prevBtn.className = "photoPopupPrevBtn";
	_nextBtn.innerHTML = ">";
	_prevBtn.innerHTML = "<";
	_container.appendChild(_nextBtn);
	_container.appendChild(_prevBtn);
	
	_nextBtn.addEventListener("mousedown", function(){
		arr_number += 1;
		arr_number = manageImagePage(arr_number, arr);
		openImage(arr[arr_number][1], arr[arr_number][0], arr_number, arr);
	});
	
	_prevBtn.addEventListener("mousedown", function(){
		arr_number -= 1;
		arr_number = manageImagePage(arr_number, arr);
		openImage(arr[arr_number][1], arr[arr_number][0], arr_number, arr);
	});
	
	//listener for closing
	_container.addEventListener("mousedown", function(){
		unloadImage(_container.id);
	});
}

function unloadImage(str_container){
	var _container = document.getElementById(str_container);
	if(_container != null){
		_container.parentNode.removeChild(_container);
	}
}

//completely unload existing first (if one exists)
function unloadGallery(str_parent){
	var _parent = document.getElementById(str_parent);
	if(_parent != null){
		_parent.parentNode.removeChild(_parent);
		window.scrollTo(0, 0);//set page back to starting position
	}
}

function loadImage(str_parent, str_src, str_id, str_pathToImage, str_description, arr_number, arr){
	//make image element and place into parent
	var _img = document.createElement("img");
	_img.src = str_src;
	_img.id = str_id;
	//container of image
	var _container = document.createElement("div");
	_container.innerHTML = "<span>" + str_id + "</span>";
	_container.id = "div_" + str_id;
	_container.className = "photomenuThumbnailDiv";
	_container.appendChild(_img);
	//
	var _parent = document.getElementById(str_parent);
	_parent.appendChild(_container);
	
	//open image
	//str_pathToImage is the full image path
	//str_description is the description of each image (credit, etc...)
	//arr_number is the array number for next/prev arrows
	//arr is the source array passed to this (this is kind of a hack because of a later request to add this feature)
	//todo: clean up the unnecessary function parameters
	_container.addEventListener("mousedown", function(){
		openImage(str_pathToImage, str_description, arr_number, arr);
	});
}

//scroll left/right buttons
function event_ShowMore(event){
	event.preventDefault();
	var _scroll = window.pageXOffset;
	_scroll += 250;
	window.scrollTo(_scroll, 0);
}
function event_ShowLess(event){
	event.preventDefault();
	var _scroll = window.pageXOffset;
	_scroll -= 250;
	window.scrollTo(_scroll, 0);
}

//CALL THIS TO LOAD THE ACTUAL CALLERY
//usage: <div onClick="loadGallery(arr_gallery1, 'Gallery Title', '_photoSelection');">CLICK HERE</div>
//load part of the gallery
//taken from array
//description and path...
function loadGallery(arr, str_title, str_parent){
	//remove existing if one exists
	unloadGallery(str_parent);
	//make actual parent container
	var _parent = document.createElement("div");
	_parent.id = str_parent;
	_parent.className = "photomenuThumbs";//"photomenu";
	document.body.appendChild(_parent);
	
	//make title element and place into parent
	var _title = document.createElement("div");
	_title.innerHTML = str_title;
	_title.id = "div_title_" + str_parent;
	_title.className = "photomenuTitle";
	//append
	//var _parent = document.getElementById(str_parent);
	_parent.appendChild(_title);
	
	//make next/prev scroll buttons
	var _nextBtn = document.createElement("div");
	var _prevBtn = document.createElement("div");
	_nextBtn.innerHTML = "...show more >";
	_prevBtn.innerHTML = "< show less...";
	_nextBtn.id = str_parent + "_nextButton";
	_prevBtn.id = str_parent + "_prevButton";
	_nextBtn.className = "photomenuNext";
	_prevBtn.className = "photomenuPrev";
	_parent.appendChild(_nextBtn);
	_parent.appendChild(_prevBtn);
	
	_nextBtn.addEventListener("mousedown", event_ShowMore);
	_prevBtn.addEventListener("mousedown", event_ShowLess);
	
	//make "close this" button
	var _closeBtn = document.createElement("div");
	_closeBtn.innerHTML = "close this";
	_closeBtn.id = str_parent + "_closeBtn";
	_closeBtn.className = "photomenuClose";
	_parent.appendChild(_closeBtn);
	
	_closeBtn.addEventListener("mousedown", function(){
		unloadGallery(str_parent);
	});
	
	for(var i = 0; i<arr.length; ++i){
		//
		var _description = arr[i][0];
		var _pathToImage = arr[i][1];
		var _pathToThumbnail = arr[i][2];
		//String(i) is optional description
		loadImage(str_parent, _pathToThumbnail, String(i), _pathToImage, _description, i, arr);
	}
	
}