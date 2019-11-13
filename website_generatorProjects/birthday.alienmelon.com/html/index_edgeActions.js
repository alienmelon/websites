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
         var str = "";
         
         var arr_beingBorn = new Array("being born", "being born. I have created a nativity scene of you", "being born. You may send my regards to your mother", "being born", "having been delivered", "being birthed", "being birthed", "being born. Send my regards to your parents", "being born. I am proud of you", "being born. I salute you");
         
         var arr_beingBornVariations = new Array("being born", "day of birth", "day of being birthed", "day of having been birthed", "being born");
         
         var arr_beingBornNutral = new Array("being born", "having been born", "having been birthed", "having been birthed (good job)");
         
         var arr_gettingOld = new Array("getting old", "aging generously", "maturing delightfully", "developing nicely", "aging well", "not worn out at all", "definitely in your golden years", "advanced in life", "advanced in years", "aged nicely", "aged but not ancestral", "getting a lot of mileage out of that body", "a testament to aging gracefully", "blossoming and stuff", "advancing nicely", "old", "seniority now", "fermenting nicely", "fermenting well", "becoming vintage", "distancing yourself from youth","being older","getting older","aging","being like old wine and stuff","getting old enough for nostalgia","getting old enough for youth-nostalgia","aging well... I think","distancing yourself from youth","being older","getting older","aging","being like old wine and stuff","getting old enough for nostalgia","getting old enough for youth-nostalgia","aging well... I think");
         
         var arr_newYear = new Array("year around the sun", "personal new year", "getting older day", "putting another year behind you", "New Year-- Wait! Birthday", "advancing age", "getting old", "growing older");
         
         var arr_oneLiners = new Array("It's never too late to amount to something","It's still not too late to amount to something","Just remember, I'm there for you as you age","You're getting old, and if you need any help you know where to find me","Looks like you're getting old. If you need help please don't hesitate to ask","Just remember, you're never too old","I'm glad to be there for you as you age","You are aging generously. I mean that as a compliment","I'm glad you're still with us","It's been a great many years now, and some more on the way","Wow, you've been alive long","When I look at you, it makes me GLaD","The cake is not a lie because I ate it","If you don't eat the cake you can have it then","Please don't have cake. Cake is a complicated pop-culture thing. Have a pie","The cake is not a lie", "You're never too old to get old","You're never too old to get old");
         
         var arr_observations = new Array("you're never too old to get old","you can never get too old","you're still around","it's nice that you're still around","it's nice to watch people get old","you'll be needing cake for this");
         
         var arr_achievement = new Array("your being alive another year achievement", arr_gettingOld[Math.ceil(Math.random()*arr_gettingOld.length)-1]);
         
         var arr_Congrats = new Array("Best regards to ","Highest regards to ","Congrats on ","Congratulations on ","Compliments on ","Felicitations on ","Good going on ","Good luck with ");
         
         var arr_SaluteYou = new Array("I salute you","Salute","Morituri te salutant! ...Ok. I got that off Google","It's extraordinary","It's fascinating to watch","Hats off to you");
         
         var arr_cheesy = new Array("super-duper","SUPER-A-OKAY","brobdingnagian","spiffing","splendid","fabulous","gnarly","super-duper golly-gee","uper-duper","supermegaawesomefantastic","superduperluperwuper","superduper-fantabulous","superdupergooferguberistic","golly gee willikers uncle ben dandy of a","gosh-golly, gee willikers dandy of a","flibberty jibbets of a","tippety-top","hididdily-ho of a","okily-dokily-doo of a","diddily-doodily-diddly-hobbily-hibbily-gobbily-gobbily-gobble-gabba-gabba-hey of a","pretty darn doodily-diddily good","okily-dokily-schmokily good");
         
         var arr_HAPPYBDAY = new Array("Congratulations on "+arr_beingBorn[Math.ceil(Math.random()*arr_beingBorn.length)-1]+"!","I offer the expression of my distinguished sentiments on your "+arr_beingBornVariations[Math.ceil(Math.random()*arr_beingBornVariations.length)-1]+".","You have the expression of my distinguished sentiments on your "+arr_beingBornVariations[Math.ceil(Math.random()*arr_beingBornVariations.length)-1]+".","Please receive, my sincere salutations on your "+arr_beingBornVariations[Math.ceil(Math.random()*arr_beingBornVariations.length)-1]+".","My sincere salutations on your "+arr_beingBornVariations[Math.ceil(Math.random()*arr_beingBornVariations.length)-1]+".","My sincere congratulations on your "+arr_beingBornVariations[Math.ceil(Math.random()*arr_beingBornVariations.length)-1]+".","I beg you to believe, friend, in my best sentiments on your "+arr_beingBornVariations[Math.ceil(Math.random()*arr_beingBornVariations.length)-1]+".","Allow the expression of my most distinguished consideration in regards to your "+arr_beingBornVariations[Math.ceil(Math.random()*arr_beingBornVariations.length)-1]+".","I congratulate you in regards to your "+arr_beingBornVariations[Math.ceil(Math.random()*arr_beingBornVariations.length)-1]+".","I congratulate your feat of "+arr_beingBornNutral[Math.ceil(Math.random()*arr_beingBornNutral.length)-1]+" and aging thereafter.","Congratulations on your extraordinary feat of "+arr_beingBornNutral[Math.ceil(Math.random()*arr_beingBornNutral.length)-1]+" and then getting old.","I offer my best regards to you "+arr_beingBornNutral[Math.ceil(Math.random()*arr_beingBornNutral.length)-1]+".","I offer you my warmest condolences in regards to your "+arr_beingBornNutral[Math.ceil(Math.random()*arr_beingBornNutral.length)-1]+".","I congratulate you warmly for "+arr_beingBornNutral[Math.ceil(Math.random()*arr_beingBornNutral.length)-1]+".","You have my regards for "+arr_beingBornNutral[Math.ceil(Math.random()*arr_beingBornNutral.length)-1]+".","Happy birthday! You're "+arr_gettingOld[Math.ceil(Math.random()*arr_gettingOld.length)-1]+".","Warmest regards for you "+arr_beingBorn[Math.ceil(Math.random()*arr_beingBorn.length)-1]+"!","Warm regards for you "+arr_beingBorn[Math.ceil(Math.random()*arr_beingBorn.length)-1]+".","Hats off to you "+arr_beingBorn[Math.ceil(Math.random()*arr_beingBorn.length)-1]+"!","Happy "+arr_newYear[Math.ceil(Math.random()*arr_newYear.length)-1]+" day.","Happy "+arr_newYear[Math.ceil(Math.random()*arr_newYear.length)-1]+" day!","Happy "+arr_newYear[Math.ceil(Math.random()*arr_newYear.length)-1]+" day!!","Happy birthday! "+arr_oneLiners[Math.ceil(Math.random()*arr_oneLiners.length)-1]+".","Happy birthday! "+arr_oneLiners[Math.ceil(Math.random()*arr_oneLiners.length)-1]+"!","Congratulations on another birthday! I guess "+arr_observations[Math.ceil(Math.random()*arr_observations.length)-1]+"!","Congratulations on another birthday! I guess "+arr_observations[Math.ceil(Math.random()*arr_observations.length)-1]+".",arr_Congrats[Math.ceil(Math.random()*arr_Congrats.length)-1]+arr_achievement[Math.ceil(Math.random()*arr_achievement.length)-1]+".",arr_Congrats[Math.ceil(Math.random()*arr_Congrats.length)-1]+arr_achievement[Math.ceil(Math.random()*arr_achievement.length)-1]+"!","You're "+arr_gettingOld[Math.ceil(Math.random()*arr_gettingOld.length)-1] +", "+arr_SaluteYou[Math.ceil(Math.random()*arr_SaluteYou.length)-1]+"!","You're "+arr_gettingOld[Math.ceil(Math.random()*arr_gettingOld.length)-1] +", "+arr_SaluteYou[Math.ceil(Math.random()*arr_SaluteYou.length)-1]+".","I am happy for you that you're "+arr_gettingOld[Math.ceil(Math.random()*arr_gettingOld.length)-1]+".","Best wishes for a "+arr_cheesy[Math.ceil(Math.random()*arr_cheesy.length)-1]+" birthday!","Best wishes for a "+arr_cheesy[Math.ceil(Math.random()*arr_cheesy.length)-1]+" birthday!!","Best wishes for a "+arr_cheesy[Math.ceil(Math.random()*arr_cheesy.length)-1]+" birthday!!!");
         
         str = arr_HAPPYBDAY[Math.ceil(Math.random()*arr_HAPPYBDAY.length)-1];
         console.log(str);
         
         //gore
         var txt_output = sym.$("txt_output");
         txt_output.html("");
         outputMessage = $('<textarea />').attr({'type':'textarea','rows':'10', 'cols': '25','value':'', 'id':'message'});
         outputMessage.css('font-size', 40);
         outputMessage.css('font-family', 'vt323, Lucida Console, Monaco, monospace');
         outputMessage.css('width', 941);
         outputMessage.css('height', 148);
         outputMessage.css('color', "#FFFFFF");
         outputMessage.css('background', 0);
         outputMessage.css('border', 'none', "!important");
         //outputMessage.css('border-color', 'none', "!important");
         outputMessage.css('text-align', 'center');
         outputMessage.appendTo(txt_output);
         outputMessage.html(str);
         outputMessage.value = outputMessage.html();
         //
         
         sym.another = function(){
         	outputMessage.html("");
         	message.value = "";
         	//
         	str = arr_HAPPYBDAY[Math.ceil(Math.random()*arr_HAPPYBDAY.length)-1];
         	outputMessage.html(str);
         	message.value = outputMessage.html();
         	//
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${IMG_CAKE}", "click", function(sym, e) {
         sym.another();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Button_Source}", "click", function(sym, e) {
         window.open("http://nathalielawhead.com/sourcefiles/Happy_Birthday_Generator/", "_blank");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-17787269");