/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 173, function(sym, e) {
         sym.frame = "HTML";
         sym.loadIt();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${IMG_BTN_SOURCE}", "click", function(sym, e) {
         window.open("http://nathalielawhead.com/sourcefiles/Valentines_Generator/", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${IMG_FOOTER_BYLINE}", "click", function(sym, e) {
         window.open("http://tetrageddon.com", "_blank");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.frame = "FLASH";
         sym.loadIt();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         
         sym.url = "";
         sym.frame = "";
         
         sym.$("MAIN_NAV").css({
            width : '346px',
            margin : 'auto',
            position: 'relative'
         });
         
         sym.checkFlash = function(){
         	if(!sym.hasFlash){
         		window.alert("You need the Flash Player. Go download it, you sexy kitten, you.");
         	}
         }
         
         sym.hasFlash = swfobject.hasFlashPlayerVersion("10.3.0");
         sym.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
         
         //remove any iFrame content -- call this in slap, or any place that takes to different area
         sym.cleariFrame = function(){
         	sym.getSymbol("GAME").$('#game').detach();
         }
         
         sym.loadFlash = function(){
         	sym.cleariFrame();
         	sym.getSymbol("GAME").$("GAME").append('<iframe id="game"src="http://valentines.alienmelon.com/iloveflash/" allowtransparency="true" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>');
         
         }
         
         sym.loadHTML = function(){
         	sym.cleariFrame();
         	sym.getSymbol("GAME").$("GAME").append('<iframe id="game"src="http://valentines.alienmelon.com/ilovehtml/" allowtransparency="true" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>');
         
         }
         
         sym.loadIt = function(){
         	if(sym.hasFlash || sym.frame == "FLASH"){
         		sym.loadFlash();
         		sym.url = "http://valentines.alienmelon.com/iloveflash/";
         	}
         	if(sym.frame == "HTML"){
         		sym.loadHTML();
         		sym.url = "http://valentines.alienmelon.com/ilovehtml/";
         	}
         	if(sym.isMobile){
         		sym.loadHTML();
         	}
         }
         
         sym.set_HTML = function(){
         	sym.stop("HTML");
         }
         
         sym.set_FLASH = function(){
         	sym.checkFlash();
         	sym.stop("FLASH");
         }
         
         if(sym.hasFlash){
         	sym.set_FLASH();
         	if(sym.frame == "FLASH"){
         		sym.url = "http://valentines.alienmelon.com/iloveflash/";
         	};
         }else{
         	sym.set_HTML();
         	if(sym.frame == "HTML"){
         		sym.url = "http://valentines.alienmelon.com/ilovehtml/";
         	}
         }
         
         if(sym.isMobile){
         	sym.set_HTML();
         	sym.url = "http://valentines.alienmelon.com/ilovehtml/"
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${IMG_BTN_FLASH01}", "click", function(sym, e) {
         sym.getComposition().getStage().set_FLASH();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${IMG_BTN_HTML02}", "click", function(sym, e) {
         sym.getComposition().getStage().set_HTML();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'MAIN_NAV'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${BTN_NEW_WINDOW}", "click", function(sym, e) {
         window.open(sym.getComposition().getStage().url, "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BTN_NEW}", "click", function(sym, e) {
         sym.getComposition().getStage().loadIt();

      });
      //Edge binding end

   })("MAIN_NAV");
   //Edge symbol end:'MAIN_NAV'

   //=========================================================
   
   //Edge symbol: 'GAME'
   (function(symbolName) {   
   
   })("GAME");
   //Edge symbol end:'GAME'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-61129664");