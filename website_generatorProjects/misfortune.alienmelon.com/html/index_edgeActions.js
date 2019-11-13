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
         
         //creating function with sym.
         //to change scope so keyboard events can access these
         /*sym.key_onKeyDown = function() {
         	console.log("key down");
         };
         sym.key_onKeyUp = function() {
         	console.log("key up");
         }*/
         
         sym.question = "";
         sym.label = "menu";
         
         
         var txt_input = sym.$("txt_input");
         txt_input.html("");
         inputMessage = $('<textarea />').attr({'type':'textarea','rows':'10', 'cols': '25','value':'', 'id':'message'});
         inputMessage.css('font-size', 16);
         inputMessage.css('font-family', "'Lucida Console', Monaco, monospace");
         inputMessage.css('width', 474);
         inputMessage.css('height', 19);
         inputMessage.css('color', "#0000E6");
         inputMessage.css('background', 0);
         inputMessage.css('border', 'none', "!important");
         inputMessage.css('text-align', 'center');
         inputMessage.css('resize', 'none');
         inputMessage.css('overflow', 'hidden');
         //
         inputMessage.attr("maxlength", 45)
         //
         inputMessage.appendTo(txt_input);
         inputMessage.html("");
         inputMessage.value = inputMessage.html();
         //
         
         //garble input
         sym.txt_length = inputMessage.length;
         
         sym.messKeys = function(){
         	var arr_mess = new Array("!", "@", "#", "$", "%", "^", "&", "*", "* muffled scream *","* internalized screaming *","* massive anxiety *"," AAH! "," AH! "," PROBLEM! "," NO! "," HELP! "," YIKES! "," S.O.S! ");
         	var txt_val = message.value;//"";
         	sym.txt_length+=1;
         
         	//inputMessage.html("");
         	//message.value = "";
         	//for(var i = 0; i<sym.txt_length; ++i){
         	if(message.value.length > 15){
         		txt_val += arr_mess[Math.ceil(Math.random()*arr_mess.length)-1]+"!?";
         		inputMessage.html(txt_val);
         		message.value = txt_val;
         	}
         	//}
         
         	sym.question = message.value;
         }

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         // 32 = space
         if (e.which == 32) {
         	// do something
         }
         
         // 13 = enter
         if (e.which == 13 && sym.label=="menu"){
         	sym.play("startmenu");
         }
         
         //console.log(e.which);
         

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "keyup", function(sym, e) {
         sym.messKeys();
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${BTN_OK}", "click", function(sym, e) {
         sym.play("startmenu");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4281, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2205, function(sym, e) {
         //
         var txt_question = sym.$("txt_question");
         txt_question.html(sym.question);
         //
         
         if(sym.label == "another"){
         	sym.$("IMG_UI_RE").hide();
         	sym.$("txt_question").hide();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4073, function(sym, e) {
         //fortune here!
         var arr_fortune = new Array(
         		"Don't bring a knife to a gunfight. Consider entering through the roof, and working your way down from there.",
         		"Don't eat the meat. It will turn you. Alternatively: don't trust your significant other. They are already turned.",
         		"The entire town is actually monsters disguised as humans. Consider moving before nightfall.",
         		"The killer never dies. He will be back for you.",
         		"Rule of thumb, every car is a lemon. Jump into an already moving vehicle to escape the murderous killer.",
         		"That cabin your long lost relative will leave you is not what it seems. Here be monsters.",
         		"On your way to work you will be pulled into a high-stakes heist.",
         		"You will be in the midst of a high-stakes heist.",
         		"You will be in the midst of a gunfight. Chose your friends carefully.",
         		"You will be in the midst of a car chase.",
         		"You are not the killer and will have to convince the authorities of your innocence.",
         		"The cops are on their way. Get out of there.",
         		"You will cause nuclear war. Make better choices.",
         		"You will negotiate a hostile situation. Use surnames as properly directed.",
         		"You will trigger the nuclear apocalypse. Consider a career change.",
         		"You are the cause of someone's anxiety today.",
         		"There will be a hostage situation that you will have to negotiate.",
         		"You will have to hide the AllSpark. Weigh your options wisely and listen to the robot.",
         		"Aliens are looking for you. Consider wearing a butt plug to thwart their probing attempts.",
         		"The federal government is building a case against you.",
         		"The killer will try to send a message using your body.",
         		"You have 10 minutes. Run.",
         		"You will command an army but lose. Avoid red meat.",
         		"The check will bounce.",
         		"No one will pay your ransom. Make better friends.",
         		"You must lose weight first.",
         		"You will be left for dead. Keep better company and eat your veggies.",
         		"You must embark on a mission to save the world.",
         		"They will leave you for dead. Try to be nice about it.",
         		"You will be left for dead. Don't be an ass.",
         		"You will have to escape a fortress filled with convicts. Don't be a dick.",
         		"You will save the president, but not without personal loss.",
         		"You will be trapped in a skyscraper filled with many eccentric terrorists. Wear shoes.",
         		"You will be the cause of the war. Don't be a dick.",
         		"You will have to sacrifice your friend for it. Play it cool.",
         		"You will be jailed by accident. Make friends with the quiet guy.",
         		"No one will know it was you except for the person closest to you. This will complicate things.",
         		"You will have to journey to a distant land to kill someone evil.",
         		"You will have to infiltrate a chateau full of Nazis. The time machine broke.",
         		"You will have to storm a high-rise building governed by an evil drug lord.",
         		"You will have to save the day, but not without personal loss.",
         		"You will be shipped off in a space shuttle to destroy a giant meteorite. Avoid unnecessary attachments.",
         		"You will free your people but at the loss of your personal freedom. Nobody likes a martyr.",
         		"You will defend a group of innocent bystanders from oppression. No one will credit you. Be outgoing.",
         		"You will be pitched against a group of heavily armed bad guys. Start bodybuilding now and you may stand a chance.",
         		"You will switch allegiance and fight against your own. Son of a bitch.",
         		"You will be abandoned in a disused airfield. Learn morse code.",
         		"He will be kidnapped and you will have to infiltrate the facility to save him.",
         		"You will be interrogated but know nothing. They won't believe you.",
         		"You will have to kill half the population to save her. Be nice about it.",
         		"Your fate will be over-the-top. If you start your fast now it can be less messy.",
         		"You will covertly have to take on the roll of damsel-in-distress. Pack a punch for the last word.",
         		"Your best friend will not come for you. There are too many guns. Make another friend.",
         		"You will have to singlehandedly take them on. Bring snacks.",
         		"Too much body oil. You will be unable to hold the gun, and save the day. Consider the 'dry look'.",
         		"You will be pitched against trained army commandos. It's ok to change sides.",
         		"You will have to deal with an aggressive encounter, unarmed. Try negotiation and crying to resolve this.",
         		"The situation will be filled with outrageous violence and quotable dialogue.",
         		"You will be resurrected but not without losing your identity. Always carry your ID.",
         		"It's going to get raunchy.",
         		"Things will get campy.",
         		"He spat in the soup.",
         		"The person you last thought about is actually a vampire. Take precautionary measures.",
         		"Use your friend as bait. It is the only way.",
         		"The villain will be your close best friend. You must chose a side.",
         		"There will be much gunplay. Weigh your options. Human shields get the job done.",
         		"You must get to the chopper.",
         		"You will be hunted by an alien. Help is not coming.",
         		"Rescue is not coming. Make due with what you have. Go ahead and start another life.",
         		"You will have to tenaciously stay on the trail if you want to stop the Nazi's.",
         		"It will be a six-minute pursuit on horseback. Pad your underwear.",
         		"The bomb will be diffused on time but you will lose a partner. Start networking for another one now.",
         		"You will have to swing in through the window to stop them. Prepare a one-liner.",
         		"You will have to use rope and climb a lot.",
         		"There will be an engaging roster of villains for you to confront.",
         		"It will involve a slow-motion dive off the roof.",
         		"Use the hose as an improvised bungee cord.",
         		"The situation will involve you swinging away from a huge explosion.",
         		"Shots will be fired.",
         		"Don't forget the handcuffs. On the flip-side, don't forget the handcuff key either.",
         		"There will be a shoot-out but you will have no weapon. Improvise.",
         		"The solution will involve a commandeered vehicle.",
         		"You must save them before they reach the bridge.",
         		"Whatever you do just keep things at 20 mph and everything will be fine.",
         		"You will have to leap from the bridge onto a speeding vehicle's roof.",
         		"It will be a remarkable feat of shooting and choreography. Unfortunately there are no cameras.",
         		"You must take on an army of bad guys in a claustrophobic building.",
         		"A six-minute long orgy of shotgun violence is eminent.",
         		"Think before saying that. Nobody likes a wiseguy.",
         		"Practice your two-handed pistol technique first.",
         		"You will be buried alive. Practice your one-inch-punch.",
         		"You must fight the high-kicking right-hand man to the evil villain.",
         		"There will be slow-motion segments of you being punched.",
         		"There will be slow-motion segments of you being punched in the face.",
         		"There will be slow-motion segments of you being punched in the mouth.",
         		"The solution will require slow-motion segments of people being punched.",
         		"The solution will require slow-motion segments of you being punched.",
         		"He will be enraged by your superior speed and attack you with a pair of broken bottles.",
         		"The situation will be bone-crunching before a compromise is made.",
         		"The leader of a gang will shoot you.",
         		"You will have to stop them before they get to the border.",
         		"The bad guys here are really evil. You will have to think hard before confronting them.",
         		"It will be a successful fusion of action, horror, and comedy. Unfortunately for you, you are unarmed.",
         		"You will have to stop the creature from escaping using hen's eggs.",
         		"The fight will be expertly choreographed. Unfortunately you will be tied to a poll while it happens.",
         		"You will be tied to a poll before things take a turn for the better.",
         		"It will start with an opening chase in which your car breaks down.",
         		"It will involve a high-speed chase.",
         		"It will involve a high-speed chase in a post-apocalyptic environment.",
         		"Things change for the worst when your feral nemesis introduces themselves with a primal scream.",
         		"You must fight them. Start brainstorming creative ways to start a fight.",
         		"The bus will be commandeered and you will have to chase it on foot.",
         		"There will be a shoot-out at your house. Stay with a friend.",
         		"The impersonator will be your best friend. You will have to stop them.",
         		"In this case, the henchmen will not like you.",
         		"You will be repeatedly punched by a sneering bad guy with an annoying laugh.",
         		"The solution will be a sharp heel strike to the face.",
         		"Noses will shatter and teeth knocked out before you reach a decision.",
         		"A gunfight will be triggered by your actions.",
         		"You will swell up as a balloon and explode in a shower of gore before things work out.",
         		"The solution will involve Russian accents, muscle, and guns.",
         		"The solution will involve Scottish accents, capes, and heavy artillery.",
         		"You will have to form a relationship with a hitman.",
         		"You will be accidentally blinded during a gunfight. Listen to your heart.",
         		"You will have to drive the car over a wooden bridge at top speed, while they fire at you.",
         		"The solution will involve shirtless muscle and brute force.",
         		"The solution requires brute force and witticism.",
         		"You will have to shoot, blow up, and batter an army of bad guys before you get your way.",
         		"It will end in a fight during which you shove your nemesis into a volcano.",
         		"The time traveling cyborg is your friend. Don't trust the cops.",
         		"The hunter will track you to a police station. Thankfully there will be plenty of guns around.",
         		"Although the cops will be heavily-armed, don't rely on them too much. The problem is more machine than man.",
         		"It will kill without emotion or fear of authority. Run.",
         		"It will be more about the discharging of firearms than the letter of the law. Be prepared.",
         		"You will be pitched against your best friend. The key is not to hit too hard.",
         		"You will have to keep running in order for the poison not to kill you.",
         		"You will have to shout, swear, glower, and punch to get what you want. In that order.",
         		"It will be physics-defying before an explosion removes most of the evidence.",
         		"The walls are too thin and they will hear you. Consider hiding on the window ledge.",
         		"You must use your guns to shoot your way through the floor.",
         		"To gain the upper hand you must make an improvised bomb out of a gas can, fridge, and hand grenade.",
         		"The final fight will be hard. Consider high-kicks.",
         		"You will have to hurtle through the streets of Moscow in a stolen Taxi.",
         		"To even your chances of survival you will have to be shirtless and smother the floor in engine oil.",
         		"It will be a 10 minute long episode of swordplay before the situation resolves.",
         		"Limbs will fly and heads will roll before you can resolve things peacefully.",
         		"You will be pitched against a personal army of masked henchmen. Chose your words wisely.",
         		"Shirtless muscle always provides the upper hand. Consider working out.",
         		"Ouch. That will hurt.",
         		"You will have to chase them through a Madagascar construction site, across rooftops, to prove the point.",
         		"A resolution will require you to be athletic, ruthless and daring.",
         		"You will have to climb a tower to get what you want.",
         		"Use karate chops, but responsibly.",
         		"You will have to wrestle a bear, punch a camel, and horse. In that order.",
         		"You will have to wrestle a bear.",
         		"Use the conveniently located metal pipe.",
         		"The situation will be full of absurd machismo. Use force as necessary.",
         		"First you must pursue the hitmen. They will have what you want.",
         		"You will have to knock out his teeth.",
         		"You will have to become the target of a drug lord and his hitmen.",
         		"Slide from the tail of a plane down a rope to a smaller getaway plane. Only then will things shape up for you.",
         		"The wheelchair is just a guise. Don't turn your back.",
         		"After a free-run chase, you will engage in desperate close-quarters combat. Stay clear of tile floors.",
         		"Cling onto the front of a police helicopter, and head butt the windscreen.",
         		"The robot will malfunction and shoot a young executive. Remember to duck.",
         		"Just when you think you've escaped, an angry alien queen will emerge from the landing gear of your drop ship.",
         		"Yes, it is haunted. Don't be a dumb-ass. Don't stay the night.",
         		"You will be chased through the woods. Mind the low hanging branches and you can make it."
         );
         
         var str_fortune = arr_fortune[Math.ceil(Math.random()*arr_fortune.length)-1];
         
         //
         var txt_fortune = sym.$("txt_fortune");
         txt_fortune.html(str_fortune);
         //

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${IMG_UI_ANOTHER}", "click", function(sym, e) {
         //
         sym.play("another");
         //
         sym.label = "another";

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6378, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 619, function(sym, e) {
         sym.label = "ingame";

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         //hide the response stuff here
         sym.$("IMG_UI_RE").hide();
         sym.$("txt_question").hide();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-137694492");