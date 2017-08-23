"use strict"

var userInput1= prompt ("You are a newly found superhero! Your trainer has just shown up with 8 cards to determine your future. Choose a card 1-8 to determine your future!");

var strength1= [];

function roll4SidedDice (){
var dice4Roll= Math.floor(Math.random() * 5 + 1);
return dice4Roll;
}

function dice4Strength (userInput1){

	var valueOfDice4= roll4SidedDice();
	weakness(valueOfDice4);

	if (userInput1 === 1 || userInput1 === 5){
	var dice4Negative = valueOfDice4-(valueOfDice4-valueOfDice4);
	strength1.push(dice4Negative);
	}

	else{
	strength1.push(valueOfDice4);
	}

	function weakness(valueOfDice4){

		var diceNumbers= [1,2,3,4];
		
		if (valueOfDice4 === diceNumbers[0]) {
			console.log("Your weakness is water.");
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
		return valueOfDice4
	}
}
dice4Strength(userInput1);
///////////////////////////////////////////////////////////////////////////////////////////////////
function roll6SidedDice (){
var dice6Roll= Math.floor(Math.random() * 7 + 1);
return dice6Roll;
}

function dice6Strength (userInput1){

	var valueOfDice6= roll6SidedDice();
	superpower(valueOfDice6);

	if (userInput1 === 2 || userInput1 === 6){
	strength1.push(valueOfDice6);
	}

	else{
	var dice6Negative = valueOfDice6-(valueOfDice6-valueOfDice6);
	strength1.push(dice6Negative);
	}

	function superpower(valueOfDice6){

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
}
dice6Strength(userInput1);




