"use strict"
//add something here so if not 1-8 is put in it will restart
// add a run game function for game
//run game with strength is going to have a variable that will be returned too
function firstStepInGame (){
var userInput = prompt ("You are a newly found superhero! Your trainer has just shown up with 8 cards to determine your future. Choose a card 1-8 to determine your future!");

console.log("OK! The card you chose says....");
	return userInput
}

function addsNumberToStrength (userInput, strengthString,strengthArray){
	var strengthNumbers = parseInt(strengthString);
	strengthArray.push(strengthNumbers);
	return strengthArray;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function rollDice (numberofsides){
	return Math.floor(Math.random() * numberofsides + 1);
}

////////////////////////////////////////////////////////////////////////////////////
function usesUserInput(userInput, fourSidedResult){
	if (userInput === "1" || userInput === "5"){
		var dice4Negative = 0 - fourSidedResult;
		return dice4Negative; 
	}	
	else{
		return fourSidedResult; // just deleted var firstpositivestrength
	}	
}

function getsDice4Output (){
	var valueOfDice4= rollDice(4);
	calculatesWeakness(valueOfDice4);
	return valueOfDice4;
}

function calculatesWeakness (valueOfDice4){

	var diceNumbers= [1,2,3,4];
	
	if (valueOfDice4 === diceNumbers[0]) {
		console.log("Your weakness is chocolate.");
	}
	else if (valueOfDice4 === diceNumbers[1]) {
		console.log("Your weakness is fire.");
	}
	else if (valueOfDice4 === diceNumbers[2]) {
		console.log("Your weakness is Kryptonite.");
	}
	else if (valueOfDice4 === diceNumbers[3]) {
		console.log("Your weakness is your ego.");
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function usesUserInput2 (userInput, sixSidedResult){

	if (userInput === "2" || userInput === "6"){
		return sixSidedResult;
	}

	else{
		var dice6Negative = 0 - sixSidedResult;
		return dice6Negative;
	}
}

function getsDice6Output(){

	var valueOfDice6= rollDice(6);
	calculatesSuperpower(valueOfDice6);
	return valueOfDice6;
}

function calculatesSuperpower(valueOfDice6){

	var diceNumbers= [1,2,3,4,5,6];
	
	if (valueOfDice6 === diceNumbers[0]) {
		console.log("Your superpower is mind-control!");
	}
	else if (valueOfDice6 === diceNumbers[1]) {
		console.log("Your superpower is your charm ;)");
	}
	else if (valueOfDice6 === diceNumbers[2]) {
		console.log("Your superpower is invisablity!");
	}
	else if (valueOfDice6 === diceNumbers[3]) {
		console.log("Your superpower is teleportation!");
	}
	else if (valueOfDice6 === diceNumbers[4]) {
		console.log("Your superpower is shape-shifting!");
	}
	else if (valueOfDice6 === diceNumbers[5]) {
		console.log("Your superpower is X-Ray vision!......don't abuse it");
	}
}

function gamePlay (){
	var firstInput = firstStepInGame();
	var userInput= firstInput;
	var fourSidedResult = getsDice4Output();
	var strengthString = usesUserInput(userInput, fourSidedResult);
	var strengthArray = [];
	strengthArray = addsNumberToStrength(userInput, strengthString, strengthArray);
	var sixSidedResult = getsDice6Output();
	var strengthString = usesUserInput2(userInput, sixSidedResult);
	strengthArray = addsNumberToStrength(userInput, strengthString, strengthArray);
}

gamePlay();
// // ///////////////////////////////////////////////////////////////////////////////////////
function usesUserInput3 (userInput, eightSidedResult){

	if (userInput === "4" || userInput === "8"){
	var dice8Negative = 0 - eightSidedResult; //make sure to change this
	return dice8Negative;
	}

	else{
	return eightSidedResult;
	}
}

function getsDice8Output (){

	var valueOfDice8= rollDice(8);
	calculatesFuelSource(valueOfDice8);
	return valueOfDice8
}

function calculatesFuelSource(valueOfDice8){

	var diceNumbers= [1,2,3,4,5,6,7,8];
	
	if (valueOfDice8 === diceNumbers[0]) {
		console.log("Your fuel source is grilled cheese!");
	}
	else if (valueOfDice8 === diceNumbers[1]) {
		console.log("Your fuel source is nuts!.... like almonds or cashews.... not the other version. That would be agressive.");
	}
	else if (valueOfDice8 === diceNumbers[2]) {
		console.log("Your fuel source is chocolate ice cream!");
	}
	else if (valueOfDice8 === diceNumbers[3]) {
		console.log("Your fuel source is Papa John's!");
	}
	else if (valueOfDice8 === diceNumbers[4]) {
		console.log("Your fuel source is sushi!");
	}
	else if (valueOfDice8 === diceNumbers[5]) {
		console.log("Your fuel source is PBJ's!");
	}
	else if (valueOfDice8 === diceNumbers[6]) {
		console.log("Your fuel source is PO-TATE-OS!");
	}
	else if (valueOfDice8 === diceNumbers[7]) {
		console.log("Your fuel source is Goldfish!... the crackers.");
	}
}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
function calculateFirstStrength (strength){

var sum1OfStrength= strength[0] + strength[1] + strength[2];
console.log("Your current strength is at:" + sum1OfStrength);
return sum1OfStrength;
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////
function secondStepInGame (){
	var userInput2= prompt("A war is coming and your current strength isn't high enough. What do you think you need to work on to win the war? speed, agility, or skill");

	var modifiedUserInput2= userInput2.toLowerCase();
	return modifiedUserInput2;
}
// /////////////////////////////////////////////////////////////////////////////////////////////////////////

function usesUserInput4 (userInput2, tenSidedResult){
	if (userInput2 === "skill"){
		return tenSidedResult;
	}

	else{
		var dice10Negative = 0 - tenSidedResult;
		return dice10Negative;
	}
}

function getsDice10Output (){

	var valueOfDice10= rollDice(10);
	calculatesTrainingTime(valueOfDice10);
	return valueOfDice10
}

function calculatesTrainingTime(valueOfDice10){

	var diceNumbers= [1,2,3,4,5,6,7,8,9,10];
	
	if (valueOfDice10 === diceNumbers[0] || valueOfDice10 === diceNumbers[1]) {
		console.log("You chose pizza and tacos over training."); 
	}
	else if (valueOfDice10 === diceNumbers[2] || valueOfDice10 === diceNumbers[3] || valueOfDice10 === diceNumbers[4]) {
		console.log("Well, you tried training out, but failed.");
	}
	else if (valueOfDice10 === diceNumbers[5] || valueOfDice10 === diceNumbers[6]) {
		console.log("You did a moderate amount of training.");
	}
	else if (valueOfDice10 === diceNumbers[7] || valueOfDice10 === diceNumbers[8] || valueOfDice10 === diceNumbers[9]) {
		console.log("Fergie best decribes your training as: My body stay vicious; I be up in the gym just working on my fitness");
	}
	else if (valueOfDice10 === diceNumbers[10]) {
		console.log("GYM. TAN. LAUNDRY..... you slayed training.");
	}	
}

function gamePlay (){
	var firstInput = firstStepInGame();
	var userInput= firstInput;
	var fourSidedResult = getsDice4Output();
	var strengthString = usesUserInput(userInput, fourSidedResult);
	var strengthArray = [];
	strengthArray = addsNumberToStrength(userInput, strengthString, strengthArray);
	var sixSidedResult = getsDice6Output();
	var strengthString = usesUserInput2(userInput, sixSidedResult);
	strengthArray = addsNumberToStrength(userInput, strengthString, strengthArray);
	var eightSidedResult = getsDice8Output();
	var strengthString = usesUserInput3(userInput, eightSidedResult);
	strengthArray = addsNumberToStrength(userInput, strengthString, strengthArray);
	var sumOfStrength1 = calculateFirstStrength(strengthArray);
	var secondInput = secondStepInGame();
	var userInput2 = secondInput;
	var tenSidedResult = getsDice10Output();
	var strengthString = usesUserInput4(userInput2, tenSidedResult);
	strengthArray = addsNumberToStrength(userInput2, strengthString, strengthArray);
}


gamePlay();
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function roll12SidedDice (){
// var dice12Roll= Math.floor(Math.random() * 12 + 1);
// return dice12Roll;
// }

// function getsDice12Strength (modifiedUserInput2){

// 	var valueOfDice12= roll12SidedDice();
// 	calculatesEndurance(valueOfDice12);

	
// 	strength.push(valueOfDice12);
// }
// function calculatesEndurance(valueOfDice12){

// 	var diceNumbers= [1,2,3,4,5,6,7,8,9,10,11,12];
	
// 	if (valueOfDice12 === diceNumbers[0] || valueOfDice12 === diceNumbers[1]) {
// 		console.log("Having the endurance of a virgin boy having sex for the first time is NOT a good thing...."); 
// 	}
// 	else if (valueOfDice12 === diceNumbers[2] || valueOfDice12 === diceNumbers[3] || valueOfDice12 === diceNumbers[4]) {
// 		console.log("Your endurance = weak");
// 	}
// 	else if (valueOfDice12 === diceNumbers[5] || valueOfDice12 === diceNumbers[6]) {
// 		console.log("Pressing the greater than button on a machine doesn't count as increasing your endurance.");
// 	}
// 	else if (valueOfDice12 === diceNumbers[7] || valueOfDice12 === diceNumbers[8] || valueOfDice12 === diceNumbers[9]) {
// 		console.log("You have endurance that of an average middle age man..... not good enough.");
// 	}
// 	else if (valueOfDice12 === diceNumbers[10] || valueOfDice12 === diceNumbers[11]) {
// 		console.log("Now, we're talkin'. Your endurance is good.");
// 	}
// 	else if (valueOfDice12 === diceNumbers[12]) {
// 		console.log("Your endurance has reached Ironman status!");
// 	}
// 	return valueOfDice12
// }
// getsDice12Strength(modifiedUserInput2);
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function roll20SidedDice (){
// var dice20Roll= Math.floor(Math.random() * 20 + 1);
// return dice20Roll;
// }

// function getsDice20Strength (modifiedUserInput2){

// 	var valueOfDice20= roll20SidedDice();
// 	determinesPrebattleWisdom(valueOfDice20);

	
// 	strength.push(valueOfDice20);
// }
// function determinesPrebattleWisdom(valueOfDice20){

// 	var diceNumbers= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	
// 	if ( valueOfDice20 === diceNumbers[0] || valueOfDice20 === diceNumbers[1] || valueOfDice20 === diceNumbers[2] ) {
// 		console.log( "Wise words before battle: It's not whether you get knocked down; it's whether you get up.-Vince Lombardi" ); 
// 	}
// 	else if ( valueOfDice20 === diceNumbers[3] || valueOfDice20 === diceNumbers[4] || valueOfDice20 === diceNumbers[5] ) {
// 		console.log( "Wise words before battle: I always felt that my greatest asset was not my physical ability, it was my mental ability.- Bruce Jenner (aka Caitlin Jenner) Take that as you please." );
// 	}
// 	else if ( valueOfDice20 === diceNumbers[6] || valueOfDice20 === diceNumbers[7] || valueOfDice20 === diceNumbers[8] ) {
// 		console.log( "Wise words before battle: Don't lose.-Yourself" );
// 	}
// 	else if ( valueOfDice20 === diceNumbers[9] || valueOfDice20 === diceNumbers[10] || valueOfDice20 === diceNumbers[11] ) {
// 		console.log( "Wise words before battle: If you can dodge a wrench, you can dodge a ball.-Dodgeball" );
// 	}
// 	else if ( valueOfDice20 === diceNumbers[12] || valueOfDice20 === diceNumbers[13] || valueOfDice20 === diceNumbers[14] ) {
// 		console.log( "Wise words before battle: Pain is temporary. -Lance Armstrong" );
// 	}
// 	else if ( valueOfDice20 === diceNumbers[15] || valueOfDice20 === diceNumbers[16] || valueOfDice20 === diceNumbers[17] ) {
// 		console.log( "Wise words before battle: Suck it up. That's what being a man is.-Coach Taylor" );
// 	}
// 	else if ( valueOfDice20 === diceNumbers[18] || valueOfDice20 === diceNumbers[19] || valueOfDice20 === diceNumbers[20] ) {
// 		console.log( "Wise words before battle: The more difficult the victory, the greater the happiness in winning.-Pele" );
// 	}
// 	return valueOfDice20
// }
// getsDice20Strength(modifiedUserInput2);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function calculateFinalStrength (strength){

// var sum1OfStrength= strength[0] + strength[1] + strength[2] + strength[3] + strength[4] + strength[5];
// console.log("Your new strength is:");
// var doesItWinWar = sum1OfStrength;
// return sum1OfStrength;
// }

// calculateFinalStrength(strength);
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var battleDecision = prompt("Are you ready for war? yes or no").toLowerCase();

// function determiningIfReadyForWar (battleDecision){
// 	if (battleDecision === "yes") {
// 		console.log("Alright, the day is here! Let's see if you win the war or not.")
// 	}
// 	else if(battleDecision === "no"){
// 		console.log("Too bad. The war is coming regardless.")
// 	}
// }
// determiningIfReadyForWar(battleDecision);
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function determiningIfWarIsWon (){

// }
