// This JS file is meant to run in a google chrome snippet on https://www.cereproc.com/en/about/history
// Cereproc has a preview tool that lets you demo their TTS engine
// We are using it to generate TTS files
// Set up the wav files to generate in the format seen below.
// This a key-value format, with the key being the map key and the value being the text actually to be said
// In Chrome: Inspect -> Sources -> Snippets -> New Snippet
// Then copy and paste this file in the google chrome snippet
// Then run snippet (Command + Enter)
// Working in Google Chrome 75.0.3770.142
// Soundflower (or equivalent) is suggested when using this script
// See baseline-construction.README.ts for notes

// DISCLAIMER: Running this script without explicit premission from cereproc is illegal
// You are downloading TTS files from cereproc and using their protected technology!
// Just because you can do something does not mean it is legal
// We received access to the Heather (Scottish English) voice and the SDK for the purposes of this project:
// Reading Races (OSU)

// I thought this would be easier to write than using the SDK but that is probably not true. Use the SDK.

var wavFilesToGenerate = JSON.parse(
  `{"00":"advantage","01":"allowing","02":"announce","03":"archrival","04":"aspire","05":"athlete","06":"average","07":"awesome","08":"background","09":"bathe","0a":"behind","0b":"beyond","0c":"bigfoot","0d":"biology","0e":"birthmark","0f":"boomerang","0g":"breath","0h":"bronco","0i":"cashflow","0j":"cautiously","0k":"chair","0l":"chalk","0m":"chewy","0n":"childhood","0o":"circumstance","0p":"civilized","0q":"cliffhanger","0r":"concept","0s":"cooperate","0t":"cowboys","0u":"crenshaw","0v":"cross","0w":"cultures","0x":"dashboard","0y":"depths","0z":"design","10":"digested","11":"direct","12":"disrupt","13":"earthquake","14":"easier","15":"eight","16":"employees","17":"endure","18":"engrave","19":"ethnic","1a":"explosion","1b":"faithful","1c":"fancy","1d":"female","1e":"five","1f":"flagpole","1g":"four","1h":"fragment","1i":"growl","1j":"gumshoe","1k":"handshake","1l":"hardship","1m":"hawthorne","1n":"herbalist","1o":"homemaking","1p":"hoof","1q":"hopeful","1r":"hourly","1s":"humor","1t":"iceberg","1u":"imagery","1v":"interrupt","1w":"join","1x":"jurors","1y":"kingpin","1z":"lawyer","20":"lengthen","21":"lethargic","22":"lifeboats","23":"logic","24":"loyal","25":"lumberyard","26":"lure","27":"mature","28":"mcdonald","29":"meaningless","2a":"microwaves","2b":"midnight","2c":"misjudged","2d":"mohawk","2e":"moisture","2f":"mouths","2g":"musician","2h":"mutual","2i":"napkin","2j":"nine","2k":"normal","2l":"nothing","2m":"novel","2n":"nuclear","3h":"push","2y":"oasis","2z":"objected","30":"obstacle","31":"obvious","32":"offshore","33":"one","34":"organizations","35":"overalls","36":"overreaction","37":"page","38":"pathetic","39":"pathfinder","3a":"payouts","3b":"pharoah","3c":"picture","3d":"playhouse","3e":"playoffs","3f":"points","3g":"punishment","3i":"ragtime","3j":"real","3k":"red","3l":"represents","3m":"rock","3n":"royal","3o":"rugby","3p":"safeway","3q":"scallywag","3r":"school","3s":"scrapbook","3t":"screwdriver","3u":"seizure","6p":"seven","6q":"shades","6r":"sheepdog","6s":"shirt","6t":"shock","6u":"shoe","6v":"shortchange","6w":"singer","6x":"six","6y":"slogan","6z":"smashed","70":"smoke","71":"smoothly","72":"snake","73":"soften","74":"sour","75":"southmost","76":"spoons","77":"springhill","78":"squeegee","79":"starve","7a":"steakhouse","7b":"steamship","7c":"stepfather","7d":"stooges","7e":"straitjacket","7f":"studio","7g":"subdue","7h":"submit","7i":"subtract","7j":"suggest","7k":"super","7l":"surround","7m":"swoop","7n":"tab","7o":"technology","7p":"temptation","7q":"ten","7r":"thanks","7s":"thatch","7t":"thousand","7u":"three","7v":"throughout","7w":"thrower","7x":"thursday","7y":"toothpaste","7z":"tourists","80":"town","81":"toyota","82":"trauma","83":"treasure","84":"truck","85":"twenty","86":"two","87":"underneath","88":"unfortunate","89":"unroll","8a":"unwilling","8b":"updated","8c":"upward","8d":"vase","8e":"vaulted","8f":"vowel","8g":"wagging","8h":"warmth","8i":"wash","8j":"wavelet","8k":"weatherproof","8l":"white","8m":"wiseguy","8n":"withdrawn","8o":"women","8p":"wonderful","8q":"woolen","8r":"yankee","8s":"yellow","8t":"yields","8u":"zucchini","8v":"abnormal","2p":"one seven eight nine one eight six","2o":"one zero zero three zero seven eight","2q":"two eight one seven three nine two","2r":"two six four zero two four six","2s":"nine nine six nine six one zero","2t":"one nine seven four three five four","2u":"four six four two nine five four","2v":"two six nine zero two two zero","2w":"two four seven six three seven four","2x":"one eight one seven six four three","3x":"wezve had a wonderful night","3y":"you didn't arrive too late","3z":"five people can fit in the elevator","40":"greet me with open arms","41":"i don't clean windows","42":"the cows' hay was not dry yet","43":"i think cats are cute","3w":"the illusion looked like a giraffe","45":"i'm good with things like that","46":"help me unroll the new rug","47":"the dog is a big, gentle puppy","48":"we've just started the egg toss","49":"try to lick the lollipop","4a":"could you pass the other jam please","44":"that pink marble cost me a dollar","4c":"charles will sell fifty almonds","4b":"every month i eat some chocolate","4d":"chasing sally can be dangerous","4e":"jason likes playing with garfield","4f":"people like to sing in cairo","4g":"unplug the toaster, if it gets hot","4h":"is that girl chewing gum","4i":"bill has purple glasses","4j":"fred didn't try the carrot juice","3v":"the young emperor could not spell","4l":"silver robot toys are the best","4m":"pay albert for the fresh water","4n":"the briefcase is open now","4o":"san diego is very green this year","4p":"the angry chef cooked his vegetables","4q":"edgar does not have a job","4r":"you can save water in your bathtub","4s":"who will the soldier vote for","4t":"turn the volume on the radio down","4u":"stewart has five friends in richmond","4k":"a feather was in the birdcage","4w":"doug thinks he will win the race","4x":"knights don't get scared of dragons","4y":"your shadow always follows you","4z":"we should try to save the whales","50":"the flood took a car down the street","51":"it can only be a good circus with elephants","52":"honey can get sticky","53":"the bird sang a sweet melody","4v":"that person eats pancakes","55":"the herd became angry and started a stampede","56":"even your ears sweat in a sauna","57":"don't make the same mistakes twice","58":"his car thundered down the road","59":"don't think about it too much","5a":"i hope the airplane will get higher","5b":"our tent can hold six people","5c":"give keith a moment to think","54":"grandmother played football last year","5e":"will you please bathe","5f":"put the key in the key hole","5g":"take off your hat, please","5h":"she'll be ready very soon","5i":"we had a birds-eye view","5j":"will you sing this song","5k":"buying the ring took all of my money","5l":"why is the earth inside the milky way","5d":"mabel grows tomatoes in the courtyard","5n":"i like my meat on a cold platter","5o":"are zebras just striped horses","5p":"pass their notes along","5q":"will beets stain my pants","5r":"her veins pop out when she is mad","5s":"are you sure this is okay","5t":"please offer them a dinner mint","5u":"could lizards ever talk","5v":"you can see bugs light up the sky","5w":"when will we go on vacation","5m":"they put my computer next to the books","5y":"he breathed a sigh of relief","5z":"don't leave so soon","60":"because my leg is sore, i can't play","61":"he was really nice to us","62":"eating blueberries gives you blue hands","63":"that was an odd decision","64":"sir, have you seen my coat","65":"i have ice cream for you","5x":"i collect stamps from vietnam","67":"the car went too fast","68":"i'll rent an apartment tomorrow","69":"i thought i heard new voices","6a":"go inside and eat your dinner","6b":"search in between the couch cushions","6c":"i'm ready to go home","6d":"the flea chased the dog","6e":"the rain chased the dirt down the drain","66":"matthew has a horse from the desert","6g":"my clothes are wet from the rain","6h":"the speaker boomed from the car","6i":"the zebra entered the brush with care","6j":"we gathered sticks for the fire","6k":"santa deemed rudolph the leader","6l":"my sleeve caught the thorny bush","6m":"the stove melted the butter","6n":"i'm sorry, the dog ate your dinner","6o":"someone bought a beautiful ring for you","6f":"we watched television during dinner"}`
);
let playButton = document.getElementById("demoSpeak");
let textBox = document.getElementById("demoInputTextDivEdit");
let buttonIcon = document.getElementById("demoPlayIcon");
var index = 0;
var mediaRecorder;
let wavFileKeys = Object.keys(wavFilesToGenerate);
let chunks = [];

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({
      audio: { deviceId: { exact: "default" } }
    })

    .then(function(stream) {
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = e => {
        setTimeout(() => {
          let currentKey = wavFileKeys[index];
          var blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" }); // I was only able to get ogg files to work. Not wav or anything else. Unsure why
          var audioURL = window.URL.createObjectURL(blob);

          var link = document.createElement("a");
          link.href = audioURL;
          link.download =
            currentKey + "-" + wavFilesToGenerate[currentKey] + ".ogg"; // use the key and string to say concatenated as file name
          link.innerHTML =
            currentKey + "-" + wavFilesToGenerate[currentKey] + "\n";
          document.body.appendChild(link);

          chunks = [];
        }, 300);
      };

      nextOne();

      setTimeout(() => {
        var observer = new MutationObserver(function(event) {
          if (
            buttonIcon.classList.contains("icon-play") &&
            mediaRecorder.state === "recording"
          ) {
            mediaRecorder.stop();

            setTimeout(() => {
              index++;

              nextOne();
            }, 3000);
          }
        });
        observer.observe(buttonIcon, {
          attributes: true,
          attributeFilter: ["class"],
          childList: false,
          characterData: false
        });
      }, 300);
    })

    .catch(function(err) {
      console.error("The following getUserMedia error occured: " + err);
    });
} else {
  console.error("getUserMedia not supported on your browser!");
}

function nextOne() {
  textBox.innerText = wavFilesToGenerate[wavFileKeys[index]];

  mediaRecorder.start(100);

  playButton.click();
}
