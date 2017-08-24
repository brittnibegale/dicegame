"use strict"
//add something here so if not 1-8 is put in it will restart

var userInput1= prompt ("You are a newly found superhero! Your trainer has just shown up with 8 cards to determine your future. Choose a card 1-8 to determine your future!");


var strength= [];

console.log("OK! The card you chose says....");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function roll4SidedDice (){
var dice4Roll= Math.floor(Math.random() * 4 + 1);
return dice4Roll;
}

function getsDice4Strength (userInput1){

	var valueOfDice4= roll4SidedDice();
	calculatesWeakness(valueOfDice4);

	if (userInput1 === "1" || userInput1 === "5"){
	var dice4Negative = 0 - valueOfDice4;
	strength.push(dice4Negative);
	}

	else{
	strength.push(valueOfDice4);
	}
}

function calculatesWeakness(valueOfDice4){

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
	return valueOfDice4;
}

getsDice4Strength(userInput1);
///////////////////////////////////////////////////////////////////////////////////////////////////
function roll6SidedDice (){
var dice6Roll= Math.floor(Math.random() * 6 + 1);
return dice6Roll;
}

function getsDice6Strength (userInput1){

	var valueOfDice6= roll6SidedDice();
	calculatesSuperpower(valueOfDice6);

	if (userInput1 === "2" || userInput1 === "6"){
	strength.push(valueOfDice6);
	}

	else{
	var dice6Negative = 0 - valueOfDice6;
	strength.push(dice6Negative);
	}
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
	return valueOfDice6
}
getsDice6Strength(userInput1);
///////////////////////////////////////////////////////////////////////////////////////
function roll8SidedDice (){
var dice8Roll= Math.floor(Math.random() * 8 + 1);
return dice8Roll;
}

function getsDice8Strength (userInput1){

	var valueOfDice8= roll8SidedDice();
	calculatesFuelSource(valueOfDice8);

	if (userInput1 === "4" || userInput1 === "8"){
	var dice8Negative = 0 - valueOfDice8;
	strength.push(dice8Negative);
	}

	else{
	strength.push(valueOfDice8);
	}
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
	return valueOfDice8
}
getsDice8Strength(userInput1);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function calculateFirstStrength (strength){

var sum1OfStrength= strength[0] + strength[1] + strength[2];
return sum1OfStrength;
}
console.log("Your current strength is at:");
console.log(calculateFirstStrength(strength));
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var userInput2= prompt("A war is coming and your current strength isn't high enough. What do you think you need to work on to win the war? speed, agility, or skill");

var modifiedUserInput2= userInput2.toLowerCase();
/////////////////////////////////////////////////////////////////////////////////////////////////////////

function roll10SidedDice (){
var dice10Roll= Math.floor(Math.random() * 10 + 1);
return dice10Roll;
}

function getsDice10Strength (modifiedUserInput2){

	var valueOfDice10= roll10SidedDice();
	calculatesTrainingTime(valueOfDice10);

	if (modifiedUserInput2 === "skill"){
	strength.push(valueOfDice10);
	}

	else{
	var dice10Negative = valueOfDice10-(valueOfDice10-valueOfDice10);
	strength.push(dice10Negative);
	}
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
	return valueOfDice10
}
getsDice10Strength(modifiedUserInput2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function roll12SidedDice (){
var dice12Roll= Math.floor(Math.random() * 12 + 1);
return dice12Roll;
}

function getsDice12Strength (modifiedUserInput2){

	var valueOfDice12= roll12SidedDice();
	calculatesEndurance(valueOfDice12);

	
	strength.push(valueOfDice12);
}
function calculatesEndurance(valueOfDice12){

	var diceNumbers= [1,2,3,4,5,6,7,8,9,10,11,12];
	
	if (valueOfDice12 === diceNumbers[0] || valueOfDice12 === diceNumbers[1]) {
		console.log("Having the endurance of a virgin boy having sex for the first time is NOT a good thing...."); 
	}
	else if (valueOfDice12 === diceNumbers[2] || valueOfDice12 === diceNumbers[3] || valueOfDice12 === diceNumbers[4]) {
		console.log("Your endurance = weak");
	}
	else if (valueOfDice12 === diceNumbers[5] || valueOfDice12 === diceNumbers[6]) {
		console.log("Pressing the greater than button on a machine doesn't count as increasing your endurance.");
	}
	else if (valueOfDice12 === diceNumbers[7] || valueOfDice12 === diceNumbers[8] || valueOfDice12 === diceNumbers[9]) {
		console.log("You have endurance that of an average middle age man..... not good enough.");
	}
	else if (valueOfDice12 === diceNumbers[10] || valueOfDice12 === diceNumbers[11]) {
		console.log("Now, we're talkin'. Your endurance is good.");
	}
	else if (valueOfDice12 === diceNumbers[12]) {
		console.log("Your endurance has reached Ironman status!");
	}
	return valueOfDice12
}
getsDice12Strength(modifiedUserInput2);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function roll20SidedDice (){
var dice20Roll= Math.floor(Math.random() * 20 + 1);
return dice20Roll;
}

function getsDice20Strength (modifiedUserInput2){

	var valueOfDice20= roll20SidedDice();
	determinesPrebattleWisdom(valueOfDice20);

	
	strength.push(valueOfDice20);
}
function determinesPrebattleWisdom(valueOfDice20){

	var diceNumbers= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	
	if ( valueOfDice20 === diceNumbers[0] || valueOfDice20 === diceNumbers[1] || valueOfDice20 === diceNumbers[2] ) {
		console.log( "Wise words before battle: It's not whether you get knocked down; it's whether you get up.-Vince Lombardi" ); 
	}
	else if ( valueOfDice20 === diceNumbers[3] || valueOfDice20 === diceNumbers[4] || valueOfDice20 === diceNumbers[5] ) {
		console.log( "Wise words before battle: I always felt that my greatest asset was not my physical ability, it was my mental ability.- Bruce Jenner (aka Caitlin Jenner) Take that as you please." );
	}
	else if ( valueOfDice20 === diceNumbers[6] || valueOfDice20 === diceNumbers[7] || valueOfDice20 === diceNumbers[8] ) {
		console.log( "Wise words before battle: Don't lose.-Yourself" );
	}
	else if ( valueOfDice20 === diceNumbers[9] || valueOfDice20 === diceNumbers[10] || valueOfDice20 === diceNumbers[11] ) {
		console.log( "Wise words before battle: If you can dodge a wrench, you can dodge a ball.-Dodgeball" );
	}
	else if ( valueOfDice20 === diceNumbers[12] || valueOfDice20 === diceNumbers[13] || valueOfDice20 === diceNumbers[14] ) {
		console.log( "Wise words before battle: Pain is temporary. -Lance Armstrong" );
	}
	else if ( valueOfDice20 === diceNumbers[15] || valueOfDice20 === diceNumbers[16] || valueOfDice20 === diceNumbers[17] ) {
		console.log( "Wise words before battle: Suck it up. That's what being a man is.-Coach Taylor" );
	}
	else if ( valueOfDice20 === diceNumbers[18] || valueOfDice20 === diceNumbers[19] || valueOfDice20 === diceNumbers[20] ) {
		console.log( "Wise words before battle: The more difficult the victory, the greater the happiness in winning.-Pele" );
	}
	return valueOfDice20
}
getsDice20Strength(modifiedUserInput2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function calculateFinalStrength (strength){

var sum1OfStrength= strength[0] + strength[1] + strength[2] + strength[3] + strength[4] + strength[5];
return sum1OfStrength;
}
console.log("Your new strength is:");
console.log(calculateFinalStrength(strength));
/////////////////////////////////////////////////////////////////////////////////////