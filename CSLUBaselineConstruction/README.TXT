# Description

This project is used to map CSLU data into a massive JSON file so when easily map what is being said
to a .wav file in the corpus and whether it was marked as correct by the corpus:

[{"wavFileId":"wavName","intendedPhrase":"phrase","correct":false},
{"wavFileId":"kse3x4l0.wav","intendedPhrase":"silver robot toys are the best","correct":true}
...]

The file paths in this project are all absolute (do to the number of files) so changing 
this for a different set of data will require all those paths to change. ALso the mapping file 
will very likely be different for a different data set.

The work of this project is done in Startup.cs and this is intended to be open with Visual Studio (not VS Code)

This is used in the ReadingRaces project for baseline construction. 