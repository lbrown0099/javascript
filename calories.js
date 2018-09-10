// Define global variables

var CMessage = "Yay! You are on target or below the recommended calorie intake.";
var EMessage = "Awe! You exceeded the recommended calorie intake.";

// Define maximum calories using arrays
var maxCaloriesCodes = ['FMW', 'FLW', 'MMW', 'MLW'];
var maxCaloriesAllowed = [2000, 1500, 2500, 2000];

var genderElem = document.getElementById('gender_id');
var goalElem = document.getElementById('goal_id');


//use the immidiatly invoked function named populateGender to populate DP list
var populateGender = (function () {
	genderElem.options[0] = new Option(' ', 'No Gender'); 
	genderElem.options[1] = new Option('Male', 'M'); 
	genderElem.options[2] = new Option('Female', 'F'); 
} () ); 

//use the immidiatly invoked function named populateGoal to populate DP list
var populateGoal = (function () {
	var goalElem = document.getElementById('goal_id');
	goalElem.options[0] = new Option(' ', 'NoGoal'); 
	goalElem.options[1] = new Option('Maintain Weight', 'MW'); 
	goalElem.options[2] = new Option('Lose Weight', 'LW'); 
} () ); 


// Used Named function to perform code when button clicked
function performAssessment(){
	
	// create variables to hold information from page
	var firstName = document.getElementById('firstName_id').value;
	var lastName = document.getElementById('lastName_id').value;
	var calories = document.getElementById('calories_id').value;
	
	//var genderElem = document.getElementById('gender_id');
	var genderValue = genderElem.options[genderElem.selectedIndex].value;
	var genderText = genderElem.options[genderElem.selectedIndex].text;
	
	//var goalElem = document.getElementById('goal_id');
	var goalValue = goalElem.options[goalElem.selectedIndex].value;
	var goalText = goalElem.options[goalElem.selectedIndex].text;
	
	// Construct code for getting the maximum calories allowed
	var caloriesCode = genderValue + goalValue;
	var caloriesAllowed;
	
    // Loop through the array and locate the code to get the maximum calories
	for (codeCount = 0; codeCount < maxCaloriesCodes.length; codeCount++)
	{
		// Determine if the current code is the array
		if (maxCaloriesCodes[codeCount] == caloriesCode)
		{
			caloriesAllowed = maxCaloriesAllowed[codeCount];
		}
	}

    // Use Anonymous function to define message
	var welcomeMessage = function () {
	   return "Welcome, " + firstName + " " + lastName;
	}

    // Use Anonymous function to define message
	var maxCalMessage = function () {
	    return "Maximum calories for a " + genderText + " who is trying to " + goalText + " is " + caloriesAllowed;
	}

	// Display welcome message and maximum calories to the page
    document.getElementById("welcomeMsg_id").innerHTML = welcomeMessage();

    document.getElementById("maxCalMsg_id").innerHTML = maxCalMessage();

} 






