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
         //What's My Superhero Pet-Name?
         
         var arr_thes_alien = new Array("exotic", "incongruous", "unusual", "estranged", "extraneous", "extrinsic", "inappropriate", "incompatible", "heterochthonous", "exiled");
         
         var arr_thes_trans = new Array("very emotional", "transitional", "capricious", "very oscar winning", "very heart warming", "touching", "lengthy", "transcending")
         
         var arr_thes_ungainly = new Array("ungainly", "awkward", "lumbering", "greasy", "ungainly", "uncouth", "coarse", "rude", "savage", "crass", "foul", "grody", "indecent", "insensible", "lewd", "oafish", "obscene", "foul smelling");
         
         var arr_thes_secret = new Array("secret", "classified", "covert", "hush-hush", "mysterious", "obscure", "undercover", "underground", "undisclosed", "unknown", "backdoor", "backwater", "occult-like", "ambiguous", "cloak-and-dagger", "conspiratorial", "cryptic", "strange", "confidential", "restricted", "secret", "classified", "off-the-record", "clandestine", "covert", "dark", "top-secret", "top-secret");
         
         var arr_thes_topsecret = new Array("top-secret", "top secret", "classified", "supersecret", "extremely secretive", "undisclosed", "super-classified");
         
         var arr_thes_supersoldier = new Array("super crimefighters", "super-soldier", "super-commando", "super-marine", "supersoldier", "ultimate soldier", "supercommando", "elite fighter", "elite warrior", "uber-marine", "volunteer supersoldier");
         
         var arr_thes_notorious = new Array("notorious", "blatant", "flagrant", "infamous", "infamous", "notorious", "prominent", "wanted", "disreputable", "glaring", "ill-famed", "feared", "dreaded", "noted", "opprobrious", "scandalous", "shady", "wicked", "glaring", "unmitigated", "damned", "intense", "oppressive", "relentless", "severe", "unabated", "glaring", "notorious", "prominent");
         
         var arr_thes_giant = new Array("giant", "colossal", "enormous", "gargantuan", "gigantic", "hulking", "humongous", "unmitigated", "immense", "mammoth", "monstrous", "monstrous", "herculean", "mountainous", "massive", "behemothic", "immense");
         
         var arr_thes_grow = new Array("grow", "develop", "grow", "mature", "sprout", "turn", "mature");
         
         var arr_thes_mutate = new Array("mutate", "develop a physical anomaly thus mutating", "change", "suffer a physical anomaly thus mutating", "develop a mutation and transform", "transform", "gloriously mutate", "epically mutate");
         
         var arr_elements = new Array("sea", "moon", "sun", "earth", "meteorite", "lava", "volcano", "nuclear", "death", "radioactive", "volcanic", "iron", "rock", "death-defying", "prehistoric", "S.W.A.T");
         
         var arr_civilians = new Array("civilians", "commoners", "noncombatants", "citizens", "subjects of your kingdom", "private citizens", "law abiding citizens", "common dwellers", "plebs", "peasants", "populace", "public");
         
         var arr_thes_abducted = new Array("abducted", "appropriated", "kidnapped", "seized", "snatched", "physically stolen", "taken", "captured", "caught", "adultnapped", "captured", "abducted", "abducted", "carried away", "seized", "skyjacked");
         
         var arr_thes_underworld = new Array("underworld", "syndicate", "mob", "underworld of organized crime", "underworld of gangsters", "Mafia", "body of organized felons", "underworld", "afterlife");
         
         var arr_thes_save = new Array("save", "free", "defend", "emancipate", "liberate", "rescue", "set free", "save", "uphold the law of the"); 
         
         var arr_thes_underground = new Array("underground", "underground cloack-and-dagger", "underground and highly speculative", "underground", "underground and very well hidden", "under wraps");
         
         var arr_thes_elite = new Array("elite", "exclusive", "noble", "super", "select", "elite", "elite", "noblesse", "stylish");
         
         var arr_thes_fearfully = new Array("fearfully", "reverently", "fearfully");
         
         var arr_thes_admiration = new Array("admiration", "adoration", "applause", "esteem", "praise", "reverence", "approval", "honor", "high regard", "veneration", "worship", "marvel", "admiration");
         
         var arr_thes_gods = new Array("titans", "titan lords", "gods", "creators", "daemon", "lords", "makers", "masters", "numen", "spirit lords", "soul mages", "mages", "burma", "magicians", "warlords", "wargods", "primeval soul weavers");
         
         var arr_thes_morethan = new Array("more than", "beyond", "greater than", "beyond the bounds of", "surpassing","more than", "greater than", "beyond", "transcended beyond", "far surpassing");
         
         var arr_thes_fearful = new Array("fearful", "frightened", "uneasy", "fearful", "awestruck", "awed", "terrified", "astonished", "impressed", "mind-blown", "amazed", "astounded", "thunderstruck", "astounded", "awestruck");
         
         var arr_thes_innocent = new Array("innocent", "helpless", "law abiding citizens", "virtuous citizens", "upstanding citizens", "defenseless", "forlorn inhabitants", "powerless inhabitants", "unprotected", "weak");
         
         var arr_thes_darkone = new Array("dark one", "destroyer", "maimlord", "dark titan", "dark annihilator", "demonic assassin", "despoiler", "daemon executioner", "firebard", "fire pillager", "poison soul reaper", "dark wrecker", "pathos demolisher", "ransacker and dark ruiner");
         
         var arr_thes_nether = new Array("nether", "nether", "below", "under", "lower", "underworld", "earth", "lesser", "nether");
         
         var arr_thes_warriors = new Array("warriors", "crimefighters", "superheroes", "barbarians", "viking knights", "knights", "vikings", "mages", "sorcerers", "wizards", "demonic guardians", "guardians", "light bringers", "shadow goblins", "horror mages", "hell assassins", "archaic lords", "elder ghoul-masters")
         
         var arr_thes_aliendarklord = new Array("alien dark lord", "alien black mage", "alien cannibal slayer", "alien despoiler", "alien maneater", "alien beast"," alien dark beast", "alien demolisher", "alien slaughterlord");
         
         var arr_thes_blacksmith = new Array("blacksmith", "barbarian superlord", "knight of the third hell", "knight of the living realm", "viking star defender", "assassin executioner of evil", "bard", "blacksmith", "blacksmith of light", "lord blacksmith", "lord blacksmith", "king blacksmith", "wizard blacksmith", "viking blacksmith", "assassin blacksmith", "barbarian blacksmith", "magic blacksmith", "darklord magic blacksmith");
         
         var arr_thes_devil = new Array("devil", "dark one", "darklord", "hell-sauron", "hell lord", "fallen starmage", "dark shadowlord", "evil embodiment", "hell firebard", "hell firedevil", "hell lava beastlord", "darkbeast", "oblivion beastmage", "eternal dark one");
         
         var arr_thes_darkone_all = new Array("dark one", "destroyer", "maimlord", "dark titan", "dark annihilator", "demonic assassin", "despoiler", "daemon executioner", "firebard", "fire pillager", "poison soul reaper", "dark wrecker", "pathos demolisher", "ransacker and dark ruiner","alien dark lord", "alien black mage", "alien cannibal slayer", "alien despoiler", "alien maneater", "alien beast"," alien dark beast", "alien demolisher", "alien slaughterlord","devil", "dark one", "darklord", "hell-sauron", "hell lord", "fallen starmage", "dark shadowlord", "evil embodiment", "hell firebard", "hell firedevil", "hell lava beastlord", "darkbeast", "oblivion beastmage", "eternal dark one")
         
         var arr_thes_keenwits = new Array("keen wits", "supernatural skills", "supernatural wits", "wisecrack one liners", "wisecracking one liners", "sharp wits", "uncanny abilities", "quick wits", "one-liners", "witticism and cunning", "one-liners and cunning", "keen shenanigans", "cunning prowess");
         
         var arr_thes_destroyer = new Array("destroyer", "eater", "devourer", "slaughterer", "annihilator", "despoiler", "eradicator", "executioner", "exterminator", "firebrander", "pillager", "wrecker", "demolisher", "cannibal fleshlord", "fleshlord super destroyer", "defiler");
         
         
         
         //the actual sentences (scenarios)
         var arr_scenario = new Array(
         								   "You will be abducted tonight and kept as an "+ arr_thes_alien[Math.ceil(Math.random()*arr_thes_alien.length)-1] +" alien slave. Your pet-name will be", 
         								   "You are an ordinary individual and after a "+ arr_thes_trans[Math.ceil(Math.random()*arr_thes_trans.length)-1] + " coming-of-age period you will meet the love of your life. Your pet-name will be", 
         								   "You will be captured by "+ arr_thes_ungainly[Math.ceil(Math.random()*arr_thes_ungainly.length)-1] +" pirates. Their pet-name for you will be", 
         								   "You will become a spy for a "+ arr_thes_secret[Math.ceil(Math.random()*arr_thes_secret.length)-1] +" agency. Their pet-name for you will be", 
         								   "You will be a "+ arr_thes_topsecret[Math.ceil(Math.random()*arr_thes_topsecret.length)-1] +" "+ arr_thes_supersoldier[Math.ceil(Math.random()*arr_thes_supersoldier.length)-1]+" for a military elite. Their pet-name for you will be", 
         								   "You will become a "+ arr_thes_notorious[Math.ceil(Math.random()*arr_thes_notorious.length)-1]  +" mastermind with many minions. Their pet-name for you will be", 
         								   "You will "+ arr_thes_grow[Math.ceil(Math.random()*arr_thes_grow.length)-1] +" into a "+ arr_thes_giant[Math.ceil(Math.random()*arr_thes_giant.length)-1] +" city eating monster. Citizens will tremble at your pet-name,", 
         								   "You will "+ arr_thes_mutate[Math.ceil(Math.random()*arr_thes_mutate.length)-1] +" into a super-hero, and join a "+ arr_thes_topsecret[Math.ceil(Math.random()*arr_thes_topsecret.length)-1] +" team. Your pet-name will be", 
         								   "You will "+arr_thes_mutate[Math.ceil(Math.random()*arr_thes_mutate.length)-1]+" into a "+ arr_thes_giant[Math.ceil(Math.random()*arr_thes_giant.length)-1] + " "+arr_elements[Math.ceil(Math.random()*arr_elements.length)-1]+" monster, and defend the helpless. Their pet-name for you will be", 
         								   "You will develop a "+arr_thes_secret[Math.ceil(Math.random()*arr_thes_secret.length)-1]+" identity that fights for justice, and defends the innocent "+arr_civilians[Math.ceil(Math.random()*arr_civilians.length)-1]+". Their pet-name for you will be", 
         								   "You will be "+arr_thes_abducted[Math.ceil(Math.random()*arr_thes_abducted.length)-1]+" by aliens and kept as their slave. Your pet-name will be", 
         								   "Your "+arr_thes_secret[Math.ceil(Math.random()*arr_thes_secret.length)-1]+" identity will be feared by the criminal underground. The pet-name they give you will be", 
         								   "The criminal "+arr_thes_underworld[Math.ceil(Math.random()*arr_thes_underworld.length)-1]+" will tremble at the mention of your pet-name,", 
         								   "You will "+ arr_thes_save[Math.ceil(Math.random()*arr_thes_save.length)-1]+" the galaxy. In return the inhabitants will know you as,", 
         								   "You will command a starship. Your bravery will save your crew, and earn you the respect you deserve. Their pet-name for you will be", 
         								   "You will join an "+ arr_thes_underground[Math.ceil(Math.random()*arr_thes_underground.length)-1]+" movement of revolutionaries out to change the world. Your pet-name will be", 
         								   "You will become a member of an "+arr_thes_elite[Math.ceil(Math.random()*arr_thes_elite.length)-1]+" society who’s mission is to safeguard the people of the world. Your pet-name will be", 
         								   "You will join a "+arr_thes_secret[Math.ceil(Math.random()*arr_thes_secret.length)-1]+" society of supervillians who's goal is world domination. They will "+arr_thes_fearfully[Math.ceil(Math.random()*arr_thes_fearfully.length)-1]+" refer to you as,", 
         								   "You will join forces with the criminal darkside and rule the kingdom, with "+arr_thes_admiration[Math.ceil(Math.random()*arr_thes_admiration.length)-1]+" they will call you ", "You will join forces with the ancient "+ arr_thes_gods[Math.ceil(Math.random()*arr_thes_gods.length)-1] +" of another realm. Your name will be spoken with "+ arr_thes_admiration[Math.ceil(Math.random()*arr_thes_admiration.length)-1] +" across all kingdoms for you are known as", 
         								   "You will transcend both space and time to become something "+ arr_thes_morethan[Math.ceil(Math.random()*arr_thes_morethan.length)-1] +" human. After realizing your final form the "+ arr_thes_fearful[Math.ceil(Math.random()*arr_thes_fearful.length)-1] +" inhabitants will know you as", 
         								   "You will defend the "+ arr_thes_innocent[Math.ceil(Math.random()*arr_thes_innocent.length)-1] +" of your kingdom who will come to know you as", 
         								   "You will come to know your true heritage. A "+ arr_thes_darkone[Math.ceil(Math.random()*arr_thes_darkone.length)-1] +" from the "+ arr_thes_nether[Math.ceil(Math.random()*arr_thes_nether.length)-1] +" realm who's inhabitants quiver at the mention of your name,", 
         								   "Your supernatural abilities will become legendary as you join forces with the "+ arr_thes_warriors[Math.ceil(Math.random()*arr_thes_warriors.length)-1] +" of old. Their pet-name for you will be", 
         								   "You will be known as the stuff of legend after saving the galaxy and all alternate dimensions from an "+ arr_thes_aliendarklord[Math.ceil(Math.random()*arr_thes_aliendarklord.length)-1] +". The inhabitants will know you as", 
         								   "You will become a legendary "+ arr_thes_blacksmith[Math.ceil(Math.random()*arr_thes_blacksmith.length)-1] +" who forges a weapon so powerful it defeats the "+ arr_thes_devil[Math.ceil(Math.random()*arr_thes_devil.length)-1] +" himself. After freeing the world of evil, your followers will know you as", 
         								   "You will become a "+ arr_thes_darkone_all[Math.ceil(Math.random()*arr_thes_darkone_all.length)-1] +" after cheating death. Once you come to know your true origins you will defend the "+ arr_thes_innocent[Math.ceil(Math.random()*arr_thes_innocent.length)-1] +" who will know you as", 
         								   "You will come to know your true powers and armed with nothing but your "+ arr_thes_keenwits[Math.ceil(Math.random()*arr_thes_keenwits.length)-1] +" defeat the " +arr_thes_devil[Math.ceil(Math.random()*arr_thes_devil.length)-1] +"s ruling the galaxy. The liberated inhabitants will celebrate you, for your name is", 
         								   "You will serve the "+ arr_thes_darkone[Math.ceil(Math.random()*arr_thes_darkone.length)-1] +" from another time, the "+ arr_thes_destroyer[Math.ceil(Math.random()*arr_thes_destroyer.length)-1] +" of realms, his pet-name for you will be");
         
         //your actual name
         var arr_firstname = new Array("muffinelf", "keelbermunch", "munchkinstitch", "munckinchkins", "proximitybeast", "puddlepumpkin", "fated eeltater", "feeltator", "puddlepancake", "glorypain", "glorypony", "hairglory", "glorymane", "sheman", "kingchimpkins", "glorybeard", "wondermane", "shiverstout", "pupmandrake", "corgylord", "candykling", "cutiepuddle", "quiverbane", "bubblepumpkin", "pimpleboop", "buttermunchkin", "shwivlesticks", "gladobater", "meevinewinkle", "winkledough", "doughble", "doogle", "dooglebum", "bumerchumpkins", "bumofun", "cowtater", "taterglove", "boeglove", "hecramp", "fuzzlemunchkin" , "numblekibble", "peederkibble", "banelord", "friendgore", "shekibbleling", "shestud", "heguy", "dudemaster", "shekibble", "banelord", "kibbleking");
         
         //of the's
         var arr_joinname = new Array("master of the", "master of", "of the", "of", "the");
         
         //title
         var arr_titlename = new Array("elderwitches", "exterminator", "darkforce", "crystalvoid", "nevercrystals", "darkwinter", "deathwinter", "darkdeaths", "darkplane", "dreadworld", "shedragons", "grimlords", "vanehelm", "foremasters", "shekibble", "tempered oldmasters", "shebanes", "grimlords", "hueplane",  "seagriefs", "hellgraves", "coffinmonsters", "alien of old", "ancientrealm", "ancientforce", "tide-enforcers", "hellmen", "darkfear", "deathbleed", "heartbloods", "templemages");
         
         var str = arr_scenario[Math.ceil(Math.random()*arr_scenario.length)-1]+" "+arr_firstname[Math.ceil(Math.random()*arr_firstname.length)-1]+" "+arr_joinname[Math.ceil(Math.random()*arr_joinname.length)-1]+" "+arr_titlename[Math.ceil(Math.random()*arr_titlename.length)-1]+"!";
         
         console.log(str);
         
         
         //gore
         var txt_output = sym.$("txt_output");
         txt_output.html("");
         outputMessage = $('<textarea />').attr({'type':'textarea','rows':'10', 'cols': '25','value':'', 'id':'message'});
         outputMessage.css('font-size', 30);
         outputMessage.css('font-family', '"Lucida Console", Monaco, monospace');
         outputMessage.css('width', 544);
         outputMessage.css('height', 486);
         outputMessage.css('color', "#000000");
         outputMessage.css('background', 0);
         outputMessage.css('border', 'none', "!important");
         outputMessage.css('text-align', 'center');
         outputMessage.appendTo(txt_output);
         outputMessage.html(str);
         outputMessage.value = outputMessage.html();
         //
         
         sym.another = function(){
         	console.log("Called");
         	outputMessage.html("");
         	message.value = "";
         	//
         	str = arr_scenario[Math.ceil(Math.random()*arr_scenario.length)-1]+" "+arr_firstname[Math.ceil(Math.random()*arr_firstname.length)-1]+" "+arr_joinname[Math.ceil(Math.random()*arr_joinname.length)-1]+" "+arr_titlename[Math.ceil(Math.random()*arr_titlename.length)-1]+"!";
         	outputMessage.html(str);
         	message.value = outputMessage.html();
         	//
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${IMG_Hero}", "click", function(sym, e) {
         sym.another();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-28299034");