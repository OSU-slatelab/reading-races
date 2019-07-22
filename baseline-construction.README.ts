/* I spent most of Summer 2019 working on baselining this project. Basically we wanted to collect
data to compare this system against other systems. So basically I created ways of bulk adding/modifying data 
and then ways of running RR in mass.

This is included work in multiple projects, snippets and files:
The C# CSLU Baseline construction project (in the OSU github)
All the files in chrome-snippets
addStory.html
generateRefFile.html
studentMenu.html

Each file and project has it's documentation in it relaying the changes made for baselining

I also did general code prettying and cleanup. A lot more needs done!
*/

/* SOUNDFLOWER NOTES 
Soundflower was used often in this baseline project. Soundflower is a virtual sound card. It is for mac.
It is used to channel input and output virtually to maximize quality.

For example: in the generateRefFile, I added the ability the function createMassReferenceFiles
This takes all the stories from the cloud, iterates through, tries to find the corresponding wav file
that has a reading.
The reading is played over the speakers (from javascript) and listened to by the chrome microphone. 
That is how we do recognizing. But if we played the sounds actually over the speakers, we lose quality 
of sound through the hardware and the laptop needs to be in a quiet room for this. This is a bad idea!

So we use soundflower to route the output and input of the computer to virtual channels of soundflower.
This works well as you can still use your laptop while generating ref files, or whatever you are doing.

This technique is used in snippets and generating baseline output in studentMenu.html

This is in Mac by installing soundflower, going to sound settings and set Output to "Soundflower (2ch)" 
and set Input (2ch). That's it! All speaker sound will go through that channel and all input data will come from
that virtual channel
*/

// This is outlining what ultimately became the C# CSLU Baseline Construction project (in the OSU github) and
// the work in studentMenu.html for constructing the baseline.

// Lets define what we want into our system
// From an outside source, we need weather the wav file was correct or not, what was trying to be said and the wav file
export interface BaselineInputData {
  correctLabel: boolean; // weather it was said correctly according to the outside data source
  wavFileId: WavId;
  whatIsTryingToBeSaid: string;
}

type WavId = string;

// Our system will output this, whether we think it was correct or not
export interface BaselineOutputData {
  wavFileId: WavId; // match with the guy above
  // correctLabel: boolean generate each word label
}

// So the whole process will be

// Form the data in a way so that we can quickly extropolate from the wav file what is
// trying to be said and whether it was correct or not

// So this means, iterate through the speech/scripted, deeply and recursively, then everytime you hit a wav file,
// you can get what is trying to be said from the map, then search, deeply and recursively in the verify
// folder that finds the same name but txt file. That will give correct or incorrect
// This part I believe to be very doable

// So this can give us something like the BaselineInputData above.
// Then we need a way to programmatically feed the story into RR, select the story to play, play the corresponding wav file
// and output whether it was correct or not

// Full programmatic steps:
// Create story from BID.whatIsTryingToBeSaid with title BID.wavFileId
// Select the story, based on wavFileId
// Open the wav file, again based on wavFiledId with QuickTime
// Start the timed reading
// Play the wav file with javascript
// (confirmed that you can have the speech recognizer and a wav file playing at the same time)
// Adjust the timed reading method so it outputs something the BaselineOutputData
// record the number of words of correct / not binary

// From here we gather data about how accurate our system compared to a verified data source! Cool!

// This has probelems: our system has a more granular definition of correct for phrase: i.e. each word is
// is correct or incorrect, so we have to come up with a definition of correct.
// Also, how the hell can we play the quicktime file programmatically and do it in time while manipulating
// the browser to do the things we need to do.  There is no way to simulate microphone input on Chrome
// so we have to literally play the file on the computer
