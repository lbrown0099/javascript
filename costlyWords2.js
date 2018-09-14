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
	var validVowel = "AEIOU";
	var validConsonant = "BCDFGHJKLMNPQRSTVWXYZ";
	var validSymbol = "!@#$%^&*()";
	var validSpace = " ";
	var validNumber = "123456789";
	
	
	
	//used for alphabet count only
	var alphaCount = 0;
	var vowelCount = 0;
	var consonantCount = 0;
	var symbolCount = 0;
	var spaceCount = 0;
	var numberCount = 0;
	
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
			
			
			
			if(validVowel.indexOf(singleCharacter) >= 0) {
				vowelCount++;
			}
			
			if(validConsonant.indexOf(singleCharacter) >= 0) {
				consonantCount++;
		
			}
		}
		
		if(validSymbol.indexOf(singleCharacter) >= 0) {
			symbolCount++;
			
		}
	
		if(validSpace.indexOf(singleCharacter) >= 0) {
			spaceCount++;
			
		}
		
		
		if(validNumber.indexOf(singleCharacter) >= 0) {
			numberCount++;
			
		}
	
	
	
	
	
	}
	
	//calculate cost for just alphabet
	var totalAlphabetCount = alphaCount * price;
	
	//calculate cost for just vowels
	var totalVowelCount = vowelCount * price;
	
	//calculate cost for just consonants
	var totalConsonantCount = consonantCount * price;
	
	//calculate cost for just symbols
	var totalSymbolCount = symbolCount * price;
	
	//calculate cost for just numbers
	var totalNumberCount = numberCount * price;
	
	
	
	
	   // Use Anonymous function to define message
	//var totalPriceMessage = function () {
	   // return "Total price for phrase is " + totalAlphabetCout;
	//}
	
	 
	//Display welcome message and maximum calories to the page
	document.getElementById("totalCostLetters_id").innerHTML ="Total cost is for all letters is " + totalAlphabetCount;
	document.getElementById("totalCostVowels_id").innerHTML ="Total cost is for all vowels is " + totalVowelCount;
	document.getElementById("totalCostConsonants_id").innerHTML ="Total cost is for all consonants is " + totalConsonantCount;
	document.getElementById("totalCostSymbols_id").innerHTML ="Total cost is for all symbol is " + totalSymbolCount;
	document.getElementById("totalCostNumbers_id").innerHTML ="Total cost is for all numbers is " + totalNumberCount;
	
	
	
}