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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         /*sym.$("UI").css({
            width : '840px',
            margin : 'auto',
            position: 'relative'
         });*/

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Button_Srouce}", "click", function(sym, e) {
         window.open("http://nathalielawhead.com/sourcefiles/Muchachofier/", "_blank");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'UI'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         str = "Type your text here!";
         
         //gore
         var txt_input = sym.$("txt_input");
         txt_input.html("");
         inputMessage = $('<textarea />').attr({'type':'textarea','rows':'10', 'cols': '25','value':'', 'id':'message'});
         inputMessage.css('font-size', 24);
         inputMessage.css('font-family', 'architects-daughter, sans-serif');
         inputMessage.css('width', 458);
         inputMessage.css('height', 219);
         inputMessage.appendTo(txt_input);
         inputMessage.html(str);
         inputMessage.value = inputMessage.html();
         //
         
         //blood
         function muchachofy(){
         	//BEGIN
         	str = message.value;//first run
         	//lower case, I want the whole ting in lower case...
         	str = str.toLowerCase();
         	var array = str.split(/\W | ' | /gi);//ignore puncutation and strip out words
         	var array_punctuation = str.split(/[^,\.\s\n\r\f¿\?¡!]+/gi);//treat punctuation seperately for added muchacho
         	//now that you have it, clear for repopulation later...
         	str = "";
         	//PUNCTUATION
         	for (var l = 0; l<array_punctuation.length; ++l){
         		//
         		function _specificPunctuation(str_find, str_replace){
         			if (array_punctuation[l] == str_find){
         				array_punctuation[l] = str_replace;
         			}
         		}
         		//lazy copy/paste for any number of cases -_-
         		_specificPunctuation("? ", "¿ ");
         		_specificPunctuation("?", "¿");
         		_specificPunctuation("! ", "¡! ");
         		_specificPunctuation("!", "¡!");
         		_specificPunctuation(". ", "! ");
         		_specificPunctuation(".", "!");
         		_specificPunctuation("...", "!¡!");
         		_specificPunctuation(" ...", " !¡! ");
         		_specificPunctuation("... ", "!¡! ");
         	}
         	//WORDS
         	for (var i =0; i<array.length; ++i)
         	{
         		//EXCLUSIONS
         		//transformed words to exclude in appending
         		var arr_exclusions = new Array("el","ella","es","no es","si","not si","yes","the","is","no","mí", "de", "para");
         		var arr_yes = new Array("yes","si","si","si");
         		var arr_is = new Array("is","es");
         		var arr_no = new Array("no","no","not si","no si");
         		var arr_i = new Array("mi","mí","mí","mí");
         		var arr_to = new Array("to","a","a","a","todo", "tooo", "to", "two", "todoa", "toda");
         		var arr_of = new Array("de", "of", "o'", "de");
         		var arr_for = new Array("for", "for", "para", "for para");
         		//
         		var arr_s = new Array("s","sos","sosasos");
         		var arr_t = new Array("t","tchachos","tachos");
         		var arr_e = new Array("e","eachos","eechos","esos");
         		var arr_m = new Array("m","muchos","muchachos","muchachos","muchos","mucho");
         		var arr_n = new Array("n","nuchos","nuchachos","nuchachos","nuchos","nucho");
         		var arr_y = new Array("y","yoso","yioso");
         		var arr_g = new Array("g","goso","gioso","gochos");
         		var arr_l = new Array("l","lo","los","lochos");
         		//get last letter and append accordingly - exclude the special 'whole words'
         		function _generalMatching(str_find, str_replace)
         		{
         			for (var j = 0; j<arr_exclusions.length; ++j)
         			{
         				if ((array[i].substr(array[i].length-1,array[i].length) == str_find) && (array[i] != arr_exclusions[j]))
         				{
         					var str_match = array[i];
         					str_match = str_match.replace(str_match.charAt(str_match.length - 1),str_replace);
         					array[i] = str_match;//replace!
         
         				}
         				break;//sosososososo lol
         			}
         		}
         		//matches specific whole words to change
         		function _specificMathcing(str_find, str_replace)
         		{
         			if (array[i] == str_find)
         			{
         				array[i] = str_replace;//replace!
         			}
         		}
         		//specific word matches and replace
         		_specificMathcing("yes", arr_yes[Math.ceil(Math.random()*arr_yes.length)-1]);
         		_specificMathcing("the", "el");
         		_specificMathcing("is", arr_is[Math.ceil(Math.random()*arr_is.length)-1]);
         		_specificMathcing("no", arr_no[Math.ceil(Math.random()*arr_no.length)-1]);
         		_specificMathcing("i", arr_i[Math.ceil(Math.random()*arr_i.length)-1]);
         		_specificMathcing("of", arr_of[Math.ceil(Math.random()*arr_of.length)-1]);
         		_specificMathcing("for", arr_for[Math.ceil(Math.random()*arr_for.length)-1]);
         		_specificMathcing("to", arr_to[Math.ceil(Math.random()*arr_to.length)-1]);
         		_specificMathcing("too", arr_to[Math.ceil(Math.random()*arr_to.length)-1]);
         		_specificMathcing("two", arr_to[Math.ceil(Math.random()*arr_to.length)-1]);
         		//appending to the end
         		_generalMatching("s", arr_s[Math.ceil(Math.random()*arr_s.length)-1]);
         		_generalMatching("t", arr_t[Math.ceil(Math.random()*arr_t.length)-1]);
         		_generalMatching("e", arr_e[Math.ceil(Math.random()*arr_e.length)-1]);
         		_generalMatching("m", arr_m[Math.ceil(Math.random()*arr_m.length)-1]);
         		_generalMatching("y", arr_y[Math.ceil(Math.random()*arr_y.length)-1]);
         		_generalMatching("g", arr_g[Math.ceil(Math.random()*arr_g.length)-1]);
         		_generalMatching("l", arr_l[Math.ceil(Math.random()*arr_l.length)-1]);
         		_generalMatching("n", arr_n[Math.ceil(Math.random()*arr_n.length)-1]);
         
         	}
         
         	//SLAP THEM TOGETHER NOW
         	for(var n = 0; n<array.length; ++n){
         		//just... seperately...
         		if(array[n] != undefined){
         			str += array[n];
         		}
         		if(array_punctuation[n] != undefined){
         			str += array_punctuation[n+1];
         		}
         	}
         
         	//FINAL TOUCH... Possibe food inquiry
         	var num_randApp = Math.ceil(Math.random() * 7);
         	//foods
         	var arr_append = new Array("tacos","burrito","steak","gourmet","tortilla","chapulines","chiapas","frijoles","chilies","guacamole","salsa","cerveza","enchiladas","huachinango","quesadillas","sauce","tamales","tostadas","chilaquiles","huevos","rancheros","motulenos");
         	//append to end
         	for(var j = 0; j<num_randApp; ++j){
         		num_randApp -=  1;
         		if (num_randApp>=0)
         		{
         			str += (" "+arr_append[Math.ceil(Math.random()*arr_append.length)-1]);
         		}
         		if(num_randApp<=1){
         			str += "?";
         		}
         	}
         	//and end
         	str += "?";
         	//I changed my mind
         	str = str.toUpperCase();
         	//
         	inputMessage.html(str);
         	message.value = str;
         }
         
         //guts
         sym.evnt_clear = function(){
         	inputMessage.html("");
         	str = "";
         	message.value = "";
         }
         
         //the muchacho
         sym.evnt_muchachofy = function(){
         	if(message.value!=""){
         		muchachofy();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_clear}", "click", function(sym, e) {
         sym.evnt_clear();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_muchachofy}", "click", function(sym, e) {
         sym.evnt_muchachofy();

      });
      //Edge binding end

   })("UI");
   //Edge symbol end:'UI'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-143933853");