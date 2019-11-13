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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         
         sym.namethatbeer = function(){
         	console.log("THIS IS A TEST");
         	str = "THIS IS A TEST";
         
         	//Arrays! Where the magic happens...
         	//names of the people that made the beer
         	var arr_names = new Array("Spunk Trumpet", "Spunk", "Cudo Kwamey", "Slim Eer.", "Omo West", "Kliss Klang", "Kazuaki", "Hama", "Zarella", "Stefano", "Sata N. Hellberg", "Eddie Spaghetti", "Robrot", "Pelfrey", "Langford", "Dunsean & Cromwell", "Foss & Hoshkins", "Alcazar", "Bartholomew", "Nestor", "Nickerbocker", "Obadiah", "Smith", "Holly hufin", "Bloodies T.", "Cachuba", "Ruba", "Uldkrap", "Sir. Hughes", "Purgatory", "Gallegos", "Lamar", "Cavalier", "Gobblers", "Armstrong", "Hank", "Hans-peter", "Klein", "Bishop", "Mckay", "Mcconnell", "Mcdunken", "Mcdrunken", "Holcomb", "Mcbeerman", "Septimus", "Anibal", "Ward", "Babla", "Gilreath", "Dewitt", "Huddleson", "Cercelaru", "Spaulding", "Murdock", "Mckenna", "Indelicately", "Nibbler", "Millicent", "Sherman", "Carriger", "Conklin", "Roscoe", "Mcmahon", "Psemic", "Fuumldie", "Westbrook", "Hightower", "Proctor", "Ripley", "Goedendag", "Donald");
         	//fruits and vegies and herbs and wonderful flavours
         	var arr_flavours = new Array("Hipster Coffin", "Xanax", "Viagra", "Mutton", "Pumpkin", "Chipotle", "Chipotle", "Chipotle", "Chipotle", "Chile", "Chocolate", "Chocolate", "Chocolate", "Chocolate", "Cacao", "Cacao", "Cacao", "Vanilla", "Honey", "Honey", "Honey", "Honey Comb", "Honey Bee", "Honey Bee", "Pea", "Mushroom", "Banana", "Nut", "Honey-nut", "Honey-nut", "Spice", "Spice", "Spiced", "Herb", "Spicy", "Stew", "Meat", "Gruit", "Basil", "Lemmon", "Lime", "Fish", "People", "Chili", "Ginger", "Pepper", "Saffron", "Cinnamon", "Pumpkin", "Cider", "Allspice", "Clove", "Cardamon", "Stick", "Vegetable", "Fruit", "Sweet", "Milk", "Milk Chocolate", "Alpine", "Smoked", "Smoked", "Smoked", "Smoked", "Smoked", "Smoked", "Seed Saison", "Peanutbutter", "Sleigh", "Fuel", "Fuel", "Fuel", "Gasoline", "Butter", "Star Anise", "Pumpkin Patch", "Beer", "Beer", "Booze", "Carrot", "Winter", "Sweet", "Water", "Man", "Men", "Berry", "Cherry", "Strawberry", "Raspberry", "Potato", "Potatoe", "Hard Stuff", "Elixir", "Poison", "Sauce", "Booze", "Decoction", "Solvent", "Saucy", "Meaty", "Fleshy", "Smoked", "Single Malt", "Single Malt", "Single Malt", "Single Malt", "Single Malt", "Single Malt", "Single", "Malt", "Malt", "Malt", "Single", "Nut", "Nut", "Nut", "Nut Brown");
         	//like Imperial... further description
         	var arr_royaltie = new Array("Count", "Royal", "Imperial", "Imperial", "Imperial", "Imperial", "Lordly", "Kingship", "Magnificent", "Godlike", "Manly", "Manned Up", "Bro", "King", "Upper Management", "Excellency", "Knight", "Bishop", "Primacy", "Omnous", "Majorly", "Marjorie", "Pandemic", "Ominous", "Xtreme", "Gentlemen's", "Cleopatra", "Pharaohs", "Sovereign", "Kingly", "Lordly", "Stately", "Royal", "Domineering", "Majestic", "Majestical", "Magisterial", "Administrative", "Departmental", "Lawful", "Legitimate", "Supreme", "Canonical", "Bureaucratic", "Five-o-clock Shadow", "Fuzz", "Stubble", "Muttonchops", "Bristles", "Dignified", "Eminent", "Nifty", "Noble", "Grand", "Imperious", "Imperious", "Refined", "Fizzy", "Superior", "Magnificent", "Arrogant", "Commanding", "Imperious", "Imperious", "Imperious", "Imperious", "Imperious", "Kingly", "Mega", "Monster", "Awesome", "Badass", "Bro-ship", "Bro-manship", "Royal", "Stately", "Drinkable", "Drinkable", "Drinkable", "Drinkable", "Drinkable", "Luxurious", "Magnanimous", "Rogue", "Hip", "Most Excellent", "Most Awesome", "Most Excellent", "Most Excellent", "Most Excellent");
         	//the color and transparency
         	var arr_tint = new Array("Light", "Light", "Dark", "Dark", "Murky", "Bright", "Clear", "Cloudy", "Dark", "Dim", "Serious", "Black", "Grim", "Shady", "Caliginous", "Blackish", "Inky", "Light", "Lightless", "Shaded", "Dunkel", "Dunkel", "Dunkel", "Licht", "Licht", "Bewölkt", "Dark", "Dark", "Light", "Light", "Brown", "Brown", "Brown", "Brown", "White", "White", "White", "Smoked", "Smoked", "Smoked", "Smoked", "Smokey");
         	//where from?
         	var arr_location = new Array("English", "English", "Park", "Scotch", "Scottish", "Oktoberfest", "German", "Belgian", "Belgian-Style", "American", "Dutch", "Austrian", "Austin-Style", "Texan", "Hellish", "Heavenly", "American", "Scottish", "Belgian", "Belgian", "Belgian", "Roman", "Greek", "Martian", "Sicilian", "Portland", "New-York-Style", "New-Jersey-Style", "Germanic", "Bavarian", "Bavarian", "Bavarian", "Czech", "Frankfurter", "Ausburger", "Regensburger", "Nuremberger", "Nunberger", "Manburger", "Broburger", "Oktoberfestburger", "Scotburger", "Bavarian", "Bavarian", "Bavarian", "Bavarian", "Bavarian");
         	//and now the actual beer
         	var arr_types = new Array("Squared", "Weizen", "I.P.A.", "Pale Ale", "Dunkel Weizen", "Ale", "Helles", "Saison", "Pilsner", "Ale", "Oktoberfest", "Ale", "Weizenbock", "Stout", "Barley Wine", "I.P.A.", "Porter", "Stout", "Double Red", "Dubbel", "Blonde", "Double Pilsner", "Pilsner", "Tripel", "Keller", "Porter", "Mild", "Doppelbock");
         	var arr_types_proper = new Array("a Squared", "a Weizen", "an I.P.A.", "a Pale Ale", "a Dunkel Weizen", "an Ale", "a Helles", "a Saison", "a Pilsner", "an Ale", "an Oktoberfest", "an Ale", "a Weizenbock", "a Stout", "a Barley Wine", "an I.P.A.", "a Porter", "a Stout", "a Double Red", "a Dubbel", "a Blonde", "a Double Pilsner", "a Pilsner", "a Tripel", "a Keller", "a Porter", "a Mild", "a Doppelbock");
         	//
         	//Create the names (strings)
         	var str_name = arr_names[Math.ceil(Math.random()* arr_names.length)-1];
         	//
         	var str_flavours = arr_flavours[Math.ceil(Math.random()* arr_flavours.length)-1];
         	//
         	var str_royaltie = arr_royaltie[Math.ceil(Math.random()* arr_royaltie.length)-1];
         	//
         	var str_tint = arr_tint[Math.ceil(Math.random()* arr_tint.length)-1];
         	//
         	var str_location = arr_location[Math.ceil(Math.random()* arr_location.length)-1];
         	//
         	var num_type = Math.ceil(Math.random()* arr_types.length)-1;
         	var str_types = arr_types[num_type];
         	var str_types_proper = arr_types_proper[num_type];
         	//
         	var str_return01 = (str_location+" "+str_royaltie+" "+str_tint+" "+str_types);
         	var str_return02 = (str_name+"'s "+str_location+" "+str_royaltie+" "+str_tint+" "+str_types);
         	var str_return03 = (str_location+" Style "+str_royaltie+" "+str_flavours+" "+str_tint+" "+str_types);
         	var str_return04 = (str_name+"'s "+str_royaltie+" "+str_flavours+" "+str_types);
         	var str_return05 = (str_location+ " " + str_name + " " + str_types);
         	var str_return06 = (str_name+ "'s " + str_tint + " " + str_flavours+ " " + str_types);
         	//THIS IS THE IMPORTANT STRING, RIGHT HERE:
         	var str_return = str_return01+"\n"+str_return02+"\n"+str_return06+"\n"+str_return04+"\n"+str_return05+"\nOr...\n"+str_return03;
         	var str_intro = "I see we have "+str_types_proper+"!";
         	//What has this fine beer been rated by the community of beer drinkers?
         	//and the users have rated it...
         	if(Math.random()*100>50){
         		sym.getSymbol("STARS").stop((Math.ceil(Math.random()*5)).toString());
         	}else{
         		//typically beer from small breweries is great, so...
         		sym.getSymbol("STARS").stop("5");
         	}
         	//setup of everything - NEXTIME I'M ACTUALLY CREATING PROPER .CSS, BUT RIGHT NOW I'M IN A HURRY! WEEE!
         	//top title text
            var txt_intro = sym.$("txt_intro");
            txt_intro.html("");
            introMessage = $('<textarea />').attr({'type':'textarea','value':''});
            introMessage.css('font-size', 29);
            introMessage.css('font-family', 'port-lligat-slab, serif, Corier, Corier New, monospace');
            introMessage.css('width', 960);
            introMessage.css('height', 38);
            introMessage.css('color', "#ffffff");
            introMessage.css('background', 0);
            introMessage.css('border', "none", "!important");
            introMessage.css('border-color', "none", "!important");
            introMessage.css('text-align', 'center');
            introMessage.appendTo(txt_intro);
            introMessage.html(str_intro);
            introMessage.value = introMessage.html();
            //the actual output field
            var txt_output = sym.$("txt_output");
            txt_output.html("");
            outputMessage = $('<textarea />').attr({'type':'textarea','value':''});
            outputMessage.css('font-size', 20);
            outputMessage.css('font-family', 'port-lligat-slab, serif, Corier, Corier New, monospace');
            outputMessage.css('width', 719);
            outputMessage.css('height', 249);
            outputMessage.css('color', "#000000");
            outputMessage.css('background', 0);
            outputMessage.css('border', 'none', "!important");
            outputMessage.css('border-color', 'none', "!important");
            outputMessage.css('text-align', 'center');
            outputMessage.appendTo(txt_output);
            outputMessage.html(str_return);
            outputMessage.value = outputMessage.html();
            //
            //Ok, now...
         
         }
         
         sym.namethatbeer();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BTN_ANOTHER}", "click", function(sym, e) {
         sym.namethatbeer();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Button_Srouce}", "click", function(sym, e) {
         window.open("http://nathalielawhead.com/sourcefiles/Beer_And_Brewery_Generator/","_blank");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'STARS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("STARS");
   //Edge symbol end:'STARS'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-410387353");