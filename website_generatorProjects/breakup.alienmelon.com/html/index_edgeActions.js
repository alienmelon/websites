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
         var arr_dear = new Array("lover","lover","lover","smooth operator","stud muffin","she stud","stud muffins","beefcake","Bae","baenanna","baechelor","sex machine","sexotron" ,"hot stuff","significant other","studlyness","stud magnet","studmeister","stud poodle","stud puppy","studsband","studstress","studstress","Mr. Wrong","Mr. Right","heterosexual partner");
         
         var arr_youHave = new Array("dandruff","dandruff","too much money","too little money","nice hair","a great body, but I can't live by that alone","a borderline personality","strong opinions about things","swallowed something","no controller","eaten my lunch for the last time");
         
         var arr_truck = new Array("a truck","a truck","bread","bread","bread","Jack Black","asparagus","batman","employed","employed","a hippy","a potato","the lead singer in a band, so..","a Jedi Knight","born again","unemployed","planning to run for president, and have to sever ties", "like Jack Black movies");
         
         var airGuitar = new Array("air guitar","air guitar","air guitar","game","work","rock","rock out","flex","headbang","headbang hair dance");
         
         var arr_potato = new Array("gluten free", "gluten free", "a potato","a potato","a puppy","a puppy. I wanted a puppy","someone else","more famous than that","famous","employed","cool","batman","a Jedi","Jack Black","responsible for creating a meme","the one who created that meme","an air guitar world champion","a headbanger","hot");
         
         var arr_issues = new Array("issues","concerns","sex","drama","baggage","confuplications","mental politics","issue juice","politics","issue-ritus","finances","reasons","labor laws","my hair","your talking head","your talking head","your talking head","Valentine's Day being over");
         
         var arr_sex = new Array("sex","sex","intercourse","awkward intimacy","weird intimate body stuff","weird intimate body rubbing","heavy breathing","extended kissing","physical stuff");
         
         var arr_reason = new Array("You smell.","That is not a third nipple.","You have "+arr_youHave[Math.ceil(Math.random()*arr_youHave.length)-1]+".","Good body odor is important to me.","I like being alone.","Things change. Now I am "+arr_truck[Math.ceil(Math.random()*arr_truck.length)-1]+".","Being with you was the only time I've ever been happy. I don't like the feeling.","The Star Wars original trilogy was ever really the only true Star Wars. I can’t be with someone who doesn’t think so.","You enjoyed the remastered edited Star Wars more than the original.","You don’t "+airGuitar[Math.ceil(Math.random()*airGuitar.length)-1]+" enough.","I miss farting and can’t do that when I’m around you.","I feel that if it where meant to be I would be more comfortable about farting around you.","You know it’s meant to be when you’re comfortable about farting around someone, which is not the case here.","I thought you where "+arr_potato[Math.ceil(Math.random()*arr_potato.length)-1]+". You lied to me.","You lied to me about being "+arr_potato[Math.ceil(Math.random()*arr_potato.length)-1]+".","Happy anniversary!","We’ve been together for too long.","It’s time for a change.","Things change. Now I am "+arr_truck[Math.ceil(Math.random()*arr_truck.length)-1]+".","You are not "+arr_potato[Math.ceil(Math.random()*arr_potato.length)-1]+".","I need to make room in my life. I want a puppy.","I'm not having fun.","I would tell you why, but I don't feel like it.","I would tell you why, but I am "+arr_truck[Math.ceil(Math.random()*arr_truck.length)-1]+".","Having you in my life is too expensive.","You eat too much and leave nothing for me.","You are not gluten free.","You lied about being "+arr_potato[Math.ceil(Math.random()*arr_potato.length)-1]+".","I have a nut allergy.","I am allergic to soy.");
         
         var arr_ending = new Array("I am leaving because of "+arr_issues[Math.ceil(Math.random()*arr_issues.length)-1]+".","I am writing to inform you that I am resigning from my position as your significant other.","This letter serves as an official notice of my resignation.","I hereby resign as your significant other.","It is with deep regret that I cut this relationship short.","I can't see you anymore. That is not a pun.","We're over, bye.","I'm submitting my two week notice terminating our relationship.","I am terminating our relationship.","It's over between us.","We're over for real.","Let's break up!");
         
         var arr_sig = new Array("Please don't call. Don't make it weird.","The "+arr_sex[Math.ceil(Math.random()*arr_sex.length)-1]+" was great, thanks!","The "+arr_sex[Math.ceil(Math.random()*arr_sex.length)-1]+" was great.","I am actually "+arr_truck[Math.ceil(Math.random()*arr_truck.length)-1]+". It will never work.","I'm sure you’ll love again.","I am sad that I am doing this, but I am actually "+arr_truck[Math.ceil(Math.random()*arr_truck.length)-1]+".");
         
         str = "Type your text here!";
         
         //gore
         var txt_output = sym.$("txt_output");
         txt_output.html("");
         outputMessage = $('<textarea />').attr({'type':'textarea','rows':'10', 'cols': '25','value':'', 'id':'message'});
         outputMessage.css('font-size', 30);
         outputMessage.css('font-family', 'annie-use-your-telescope, Courier New, Courier, monospace');
         outputMessage.css('width', 593);
         outputMessage.css('height', 591);
         outputMessage.css('color', "#000000");
         outputMessage.css('background', 0);
         outputMessage.css('border', 'none', "!important");
         outputMessage.css('border-color', 'none', "!important");
         outputMessage.css('text-align', 'center');
         outputMessage.appendTo(txt_output);
         outputMessage.html(str);
         outputMessage.value = outputMessage.html();
         //
         
         sym.makeLetter = function(){
         	outputMessage.html("");
         	message.value = "";
         	//%0D%0A
         	str = ("Dear "+arr_dear[Math.ceil(Math.random()*arr_dear.length)-1]+", \r\n\r\n"+"I've been thinking about us a lot lately."+"\r\n\r\n "+arr_reason[Math.ceil(Math.random()*arr_reason.length)-1]+" \r\n"+arr_ending[Math.ceil(Math.random()*arr_ending.length)-1]+" \r\n"+arr_sig[Math.ceil(Math.random()*arr_sig.length)-1]+" \r\n\r\nSigned, \r\nYOUR NAME HERE");
         	console.log(str);
         	//
         	outputMessage.html(str);
         	message.value = outputMessage.html();
         }
         
         sym.sendLetter = function(){
         	console.log(outputMessage.html());
         	console.log(message.value);
         	//
         	window.open("mailto:"+"?subject=Breakup"+"&body="+ message.value + "", "_self");
         }
         
         sym.makeLetter();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${IMG_BTN_Send}", "click", function(sym, e) {
         sym.sendLetter();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${IMG_BTN_Another}", "click", function(sym, e) {
         sym.makeLetter();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Button_Source}", "click", function(sym, e) {
         window.open("http://nathalielawhead.com/sourcefiles/Breakup_Letter_Generator/", "_blank");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Notepaper'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         var arr_lbls = new Array("1", "2", "3");
         sym.stop(arr_lbls[Math.ceil(Math.random()*arr_lbls.length)-1]);

      });
      //Edge binding end

   })("Notepaper");
   //Edge symbol end:'Notepaper'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-322261697");