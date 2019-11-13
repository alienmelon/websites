/**
          _______  _        _______  _______  _______  _______ 
|\     /|(  ____ \( \      (  ____ \(  ___  )(       )(  ____ \
| )   ( || (    \/| (      | (    \/| (   ) || () () || (    \/
| | _ | || (__    | |      | |      | |   | || || || || (__    
| |( )| ||  __)   | |      | |      | |   | || |(_)| ||  __)   
| || || || (      | |      | |      | |   | || |   | || (      
| () () || (____/\| (____/\| (____/\| (___) || )   ( || (____/\
(_______)(_______/(_______/(_______/(_______)|/     \|(_______/
                                                               
        (To my source mess! Please enjoy your stay.)
 **/

var num_curr_screen = 0; //the current screen the user is on
var num_total_screen = 5; //the total screens

var num_width = 0;
var num_height = 0;

var num_monkeyHeight = 136;
var num_monkeyWidth = 136;

var num_mouseX = 0;
var num_mouseY = 0;

//frame interval
var int_frame = 0;

//movement
var bool_up = false;
var bool_down = false;
var bool_left = false;
var bool_right = false;

var num_x = 0;
var num_y = 0;

//movement speed
var num_speed = 10;

/*
STATES:
 IMG_MONKEY_DOWN.png
 IMG_MONKEY_IDLE.png
 IMG_MONKEY_LEFT.png
 IMG_MONKEY_RIGHT.png
 IMG_MONKEY_UP.png
* */

//create
//all is attached in init()

var div_monkey = document.createElement("div");
div_monkey.id = "div_monkey";
div_monkey.className = "monkey";
div_monkey.style.position = 'absolute';
div_monkey.style.width = num_monkeyWidth;
div_monkey.style.height = num_monkeyHeight;

//idle unmoving state
div_monkey_idle = document.createElement("div");
div_monkey_idle.id = "div_monkey_idle";
div_monkey_idle.className = "monkey";
div_monkey_idle.innerHTML = '<img src = images/IMG_MONKEY_IDLE.png>';
div_monkey_idle.style.position = 'absolute';
//movement left
div_monkey_left = document.createElement("div");
div_monkey_left.id = "div_monkey_left";
div_monkey_left.className = "monkey";
div_monkey_left.innerHTML = '<img src = images/IMG_MONKEY_LEFT.png>';
div_monkey_left.style.position = 'absolute';
//movement right
div_monkey_right = document.createElement("div");
div_monkey_right.id = "div_monkey_right";
div_monkey_right.className = "monkey";
div_monkey_right.innerHTML = '<img src = images/IMG_MONKEY_RIGHT.png>';
div_monkey_right.style.position = "absolute";
//movement up
div_monkey_up = document.createElement("div");
div_monkey_up.id = "div_monkey_up";
div_monkey_up.className = "monkey";
div_monkey_up.innerHTML = '<img src = images/IMG_MONKEY_UP.png>';
div_monkey_up.style.position = "absolute";
//movement down
div_monkey_down = document.createElement("div");
div_monkey_down.id = "div_monkey_down";
div_monkey_down.className = "monkey";
div_monkey_down.innerHTML = '<img src = images/IMG_MONKEY_DOWN.png>';
div_monkey_down.style.position = "absolute";
//talking (when you click)
div_monkey_talk = document.createElement("div");
div_monkey_talk.id = "div_monkey_talk";
div_monkey_talk.className = "monkey";
div_monkey_talk.innerHTML = '<img src = images/IMG_MONKEY_TALK.png>';
div_monkey_talk.style.position = "absolute";

//elements that are always present

//dialogue
var div_dialogue = document.createElement("div");
div_dialogue.id = "div_dialogue";
div_dialogue.className = "dialogue"
div_dialogue.innerHTML = '<img src= images/IMG_MONKEY_IDLE.png>';
div_dialogue.style.position = 'absolute';

//cursors
var div_cursor = document.createElement("div");
div_cursor.id = "div_cursor";
div_cursor.className = "cursor";
div_cursor.style.position = "absolute";

var div_cursor_default = document.createElement("div");
div_cursor_default.id = "div_cursor_default";
div_cursor_default.className = "cursor";
div_cursor_default.innerHTML = '<img src = images/CURSOR.png>';
div_cursor_default.style.position = 'absolute';

var div_cursor_hover = document.createElement("div");
div_cursor_hover.id = "div_cursor_hover";
div_cursor_hover.className = "cursor";
div_cursor_hover.innerHTML = '<img src = images/CURSOR_BTN.png>';
div_cursor_hover.style.position = 'absolute';

//arrows
console.log("I AM HERE ADDING THE CONTROLS FOR MOBILE AND TOUCH")
var div_controls = document.createElement("div");
div_controls.id = "div_controls";
div_controls.className = "controls";
div_controls.style.position = 'absolute';

var div_control_up = document.createElement("div");

var div_controls_up = document.createElement("div");




//scene

var div_scene = document.createElement("div");
div_scene.id = "div_scene";
div_scene.className = "background";

//colidable objects
var arr_colidables = [];
//elements to remove after every scene
var arr_currScene = [];

//make screen
function make_screen01() {

    appendBackground('images/IMG_BACKGROUND_01.gif');
    arr_colidables = [div_dialogue];
    arr_currScene = [div_background];
}

function clear_screen() {
    //arr_colidables = [];
    //arr_currScene = [];//elements to remove
    for (var i = 0; i < arr_currScene.length; ++i) {
        arr_currScene[i].remove();
    }
}

function appendBackground(imgURL) {
    div_background = document.createElement("div");
    div_background.id = "div_background";
    div_background.innerHTML = '<img src = ' + imgURL + '>';
    div_scene.appendChild(div_background);
}

/*
var div_background = document.createElement("div");
div_background.id = "div_background";
div_background.className = "background";*/


var snd_soundtrack = new Audio("audio/AUD_ZENSCAPE_01.wav");
snd_soundtrack.loop = true;


//if num_curr_screen == n then show content of that screen

//0 = WELCOME + DOWNLOAD + WALK AROUND INSTRUCTIONS
//1 = ABOUT (WALK UP TO AND TALK TO SKELETONS TO FIND OUT MORE ABOUT THE GAME, WHERE IT WAS FEATURED, ETC...)
//2 = ARTWORK (SCREENSHOTS, TRAILER, ETC...)
//3 = ABOUT THE DEV (ABOUT ME & FOLLOW THE DEVELOPER HERE)
//4 = LOUNGE (JUST TALK TO THE SKELETONS, CUTE STORIES...)

/*
 * create a mini-map and just use that instead of counting up or down
 * save value for each side of the screen to determine which goes to what
 * keep this simple
 * */

/*
 * manage backgrounds there are several div layers
 * load them in and out and over them to make it a glitch flicker
 * have arrays for the glitch flickers so you can step through these frames
 * need a 3 high and 9 wide tile
 *
 * force scale the images (default size because sizes vary)
 * */

//window size and position
function returnDocWidth() {
    var num_width = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    return num_width;
}

function returnDocHeight() {
    var num_height = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    return num_height;
}

function returnWidth(str_div) {
    return document.getElementById(str_div).offsetWidth;
}

function returnHeight(str_div) {
    return document.getElementById(str_div).offsetHeight
}

//set x and y of div (for movement)
function move_character_X(div_char, num_x) {
    div_char.style.left = String(num_x) + 'px';
}

function move_character_Y(div_char, num_y) {
    div_char.style.top = String(num_y) + 'px';
}

function getX(div_char) {
    return parseInt(div_char.style.left);
}

function getY(div_char) {
    return parseInt(div_char.style.top);
}

//colision with objects (divs)
//colision detection for player and platform (ground)
function colisionCheck(object1, object2) {
    //var obj2width = returnWidth(object2);
    //amount of overlap
    var leftDist = (getX(object2) - object2.offsetWidth / 2) - (getX(object1) + object1.offsetWidth / 2);
    var rightDist = (getX(object1) - object1.offsetWidth / 2) - (getX(object2) + object2.offsetWidth / 2);
    var topDist = (getY(object2) - object2.offsetHeight / 2) - (getY(object1) + object1.offsetHeight / 2);
    var bottomDist = (getY(object1) - object1.offsetHeight / 2) - (getY(object2) + object2.offsetHeight / 2);
    //half widths and half heights of the objects
    var hWidths = (object1.offsetWidth / 2) + (object2.offsetWidth / 2);
    var hHeights = (object1.offsetHeight / 2) + (object2.offsetHeight / 2);
    //
    if (leftDist < 0 && rightDist < 0 && topDist < 0 && bottomDist < 0) {
        //left, right, top, bottom
        var direction_string;
        //distance variables
        var xDist = getX(object1) - getX(object2);
        var yDist = getY(object1) - getY(object2);
        //which side does the colision occur (get the side it occurs on)
        var oX = hWidths - Math.abs(xDist);
        var oY = hHeights - Math.abs(yDist);
        //
        if (oX >= oY) {
            if (yDist > 0) { //hit the top
                direction_string = "top";
                object1.style.top = String(getY(object1) + oY) + 'px';
                // object1.y += oY;
            }
            if (yDist < 0) { //standing on it
                direction_string = "bottom";
                object1.style.top = String(getY(object1) - oY) + 'px';
                //object1.y -= oY;
            }
        } else {
            if (xDist > 0) { //left of
                direction_string = "left";
                object1.style.left = String(getX(object1) + oX) + 'px';
                //object1.x += oX;
            }
            if (xDist < 0) { //right of
                direction_string = "right";
                object1.style.left = String(getX(object1) - oX) + 'px';
            }
        }
        console.log("direction_string: " + direction_string);
        return direction_string;
    }
}

//handle divs

function hidethis(str_elem) {
    document.getElementById(str_elem).style.visibility = "hidden";
}

function showthis(str_elem) {
    document.getElementById(str_elem).style.visibility = "visible";
}

//audio
function start_soundtrack() {
    //console.log("start soundtrack here");
    snd_soundtrack.play();
}

function stop_sound() {
    console.log("stop all sounds here");
    snd_soundtrack.pause();
}

function position_dialogue() {
    div_dialogue.style.top = String(returnDocHeight() - 200) + 'px';
    div_dialogue.style.left = String(returnDocWidth() / 2) + 'px';
}

//dialogue box
function say_dialogue(str_dialogue) {
    console.log("dialogue box should show: " + str_dialogue);
    //always place first
    position_dialogue();
}

//cursor
function frameticker() {
    //current width/height of window
    //used for wrapping and going to next screen
    var num_stageWidth = returnDocWidth();
    var num_stageHeight = returnDocHeight();
    //x val to check
    //todo: fix this
    var num_monkeyXVal = num_monkeyWidth - (num_monkeyWidth * 2);
    //current location
    //set numbers on run
    num_x = parseInt(div_monkey.style.left);
    num_y = parseInt(div_monkey.style.top);
    //
    //set to mouse position
    div_cursor.style.left = String(num_mouseX) + 'px';
    div_cursor.style.top = String(num_mouseY) + 'px';
    //always hide cursor
    //will work when there are more elements on page
    //come back to this later
    document.body.style.cursor = 'none';

    //CHECK IF HAS LEFT SCREEN AND HANDLE WRAPPING OR GOING TO NEXT PAGE 
    //ARR HOLDS EACH PAGE, IF YOU LEAVE LEFT/RIGHT GO TO NEXT PAGE 
    //WRAP FOR TOP/BOTTOM (HAVE ARROWS POINTING THAT THEY SHOULD WALK LEFT/RIGHT OFF SCREEN)
    //MAKE SURE IT'S WIDTH - SCREEN BOUNDS - EXTRA PADDING
    if (num_x >= num_stageWidth + num_monkeyXVal) {
        console.log("NEXT SCREEN HERE");
        clear_screen();
        move_character_X(div_monkey, 10);
    } else if (num_x < num_monkeyXVal) {
        console.log("NEXT SCREEN HERE");
        move_character_X(div_monkey, num_stageWidth - num_monkeyWidth * 2);
    } else if (num_y > num_stageHeight - num_monkeyHeight) {
        move_character_Y(div_monkey, 0);
    } else if (num_y < -num_monkeyHeight / 2) {
        move_character_Y(div_monkey, num_stageHeight - num_monkeyHeight - 10);
    } else {
        //MOVEMENT HERE (at very end of long if else... :( )
        //todo:
        //!!!!!!!!!!!!!!!!!!!!!!FIX THIS!!!!!!!!!!!!!!!!!!!!
        //console.log("I AM HERE!");
        if (bool_up) {
            //
            num_y = num_y - num_speed;
            move_character_Y(div_monkey, num_y);
        }
        if (bool_down) {
            num_y = num_y + num_speed;
            move_character_Y(div_monkey, num_y);
        }
        if (bool_left) {
            //
            num_x = num_x - num_speed;
            move_character_X(div_monkey, num_x);
        }
        if (bool_right) {
            //
            num_x = num_x + num_speed;
            move_character_X(div_monkey, num_x);
        }
    }

    for (var i = 0; i < arr_colidables.length; i++) {
        colisionCheck(div_monkey, arr_colidables[i]);
    }


    //COLISION DETECTION ON CURRENTLY ACTIVATED PAGE ELEMENTS VS. CHARACTER GOES HERE
    //LOOP THROUGH CURRENT ACTIVE DIV HERE
    //CHECK AGAINST COLLISION OF ARR VS. CHARACTER DIV, INSIDE LOOP
    //HANDLE APPROPRIATELY...
}

//get mouse position
document.onmousemove = function(event) {
    num_mouseX = event.pageX;
    num_mouseY = event.pageY;
};

div_monkey.onmouseover = function(event) {
    hidethis("div_cursor_default");
    showthis("div_cursor_hover");
};

div_monkey.onmouseout = function(event) {
    hidethis("div_cursor_hover");
    showthis("div_cursor_default");
};

/*
 * SAVE IN DOWN BOOL
 * ON UP SET DOWN BOOL TO FALSE
 * TIMER CHECKS BOOLS AND MOVES THAT WAY
 * I AM WORKING IN "MOVEMENT HERE:"*/

window.addEventListener('keydown', function(e) {
    //console.log(e.keyCode);
    if (e.keyCode == 37 || e.keyCode == 65) {
        // console.log("LEFT");
        bool_left = true;
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        //  console.log("RIGHT");
        bool_right = true;
    }
    if (e.keyCode == 38 || e.keyCode == 87) {
        //  console.log("UP");
        bool_up = true;
    }
    if (e.keyCode == 40 || e.keyCode == 83) {
        //  console.log("DOWN");
        bool_down = true;
    }
});

window.addEventListener('keyup', function(e) {
    if (e.keyCode == 37 || e.keyCode == 65) {
        //  console.log("LEFT");
        bool_left = false;
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        // console.log("RIGHT");
        bool_right = false;
    }
    if (e.keyCode == 38 || e.keyCode == 87) {
        //  console.log("UP");
        bool_up = false;
    }
    if (e.keyCode == 40 || e.keyCode == 83) {
        // console.log("DOWN");
        bool_down = false;
    }
});


function init() {
    //set vars
    num_width = returnDocWidth();
    num_height = returnDocHeight();
    //start soundtrack
    start_soundtrack();
    //place monkey div
    //monkey events (clicking makes the talking)
    //attach and init massive cursor and hand cursor div (both in one)
    //attach and hide dialogue box div
    document.getElementsByTagName("body")[0].appendChild(div_dialogue);
    position_dialogue();
    //monkey
    div_monkey.appendChild(div_monkey_idle);
    div_monkey.appendChild(div_monkey_left);
    div_monkey.appendChild(div_monkey_right);
    div_monkey.appendChild(div_monkey_up);
    div_monkey.appendChild(div_monkey_down);
    div_monkey.appendChild(div_monkey_talk);
    document.getElementsByTagName("body")[0].appendChild(div_monkey);
    //place monkey
    div_monkey.style.top = String(num_height / 2 - 200) + 'px';
    div_monkey.style.left = String(num_width / 2) + 'px';
    //controls
    div_controls.appendChild(div_controls_up);
    document.getElementsByTagName("body")[0].appendChild(div_controls);
    //place controls

    //
    hidethis("div_monkey_left");
    hidethis("div_monkey_right");
    hidethis("div_monkey_up");
    hidethis("div_monkey_down");
    hidethis("div_monkey_talk");
    //cursor (last)
    div_cursor.appendChild(div_cursor_default);
    div_cursor.appendChild(div_cursor_hover);
    document.getElementsByTagName("body")[0].appendChild(div_cursor);
    //
    document.getElementsByTagName("body")[0].appendChild(div_scene);
    //style (cursor)
    document.body.style.cursor = 'none';
    //
    hidethis("div_cursor_hover");
    make_screen01();
    //events
    //
    //movement
    int_frame = setInterval(frameticker, 10);
    //
}