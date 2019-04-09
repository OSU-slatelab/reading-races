function rrSpeechRecognizer(continuous,interimResults,lang){
	var speechRecognizer=new webkitSpeechRecognition();
	speechRecognizer.continuous = continuous;
	speechRecognizer.interimResults = interimResults;
	speechRecognizer.lang = lang;
	speechRecognizer.start();
	return speechRecognizer;
}