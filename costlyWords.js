//Leigha Brown
//9-9-18
//costly words program
//create named function
function calculateCost() {
	
	//get value for text box
	var phrase = document.getElementById("phrase_id").value;
	var price = document.getElementById("price_id").value;
	
	//calculate cost for all characters entered
	var totalCost = phrase.length * price;

	//restrict valid chars to alphabet
	var validCharacters = "ABCDEFGHIJKLMNOPQRXTUVWXYZ";
	//used for alphabet count only
	var alphaCount = 0;
	
	//convert value to string to use string functions
	var phraseString = new String(phrase);
	
	//construct loop using numbers of chars in phrase
	for (i = 0; i < phrase.length; i++)
		
		
	{	//pick single char from value entered
		var singleCharacter = phraseString[i].toUpperCase();
		
		//check to see if letter is in valid chars
		if(validCharacters.indexOf(singleCharacter) >= 0) {
			//increment counter for valid chars
			alphaCount++;
		}
	
	
	}
	
	//calculate cost for just alphabet
	var totalAlphabetCout = alphaCount * price;
	
	
	   // Use Anonymous function to define message
	var totalPriceMessage = function () {
	    return "Total price for phrase is " + totalAlphabetCout;
	}

	// Display welcome message and maximum calories to the page
    document.getElementById("totalPriceMessage_id").innerHTML = totalPriceMessage();
	
}