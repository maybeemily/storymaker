var firstAdjective = prompt("________ \(adjective\)");
console.log(firstAdjective);
var secondOccupation = prompt("_______ \(occupation\)");
console.log(secondOccupation);
var thirdVerb = prompt("_______ \(verb, present tense\)");
console.log(thirdVerb);
var fourthPlace = prompt("_______\(place\)");                       
console.log(fourthPlace);
var fifthNouns = prompt("_______\(plural noun\)");   
console.log(fifthNouns);
var sixthExclamation = prompt("_______\(exclamation\)");   
console.log(sixthExclamation);
var seventhPlace = prompt("_______\(place\)");   
console.log(seventhPlace);
alert("Thanks! Here's your story!");
var story = ("<h2>Once upon a time there was a " + firstAdjective +  " " + secondOccupation + " who always liked to " + thirdVerb + " in the " + fourthPlace + ". When the " + secondOccupation + " was confronted by " + fifthNouns + " they said " + sixthExclamation + "! and ran away to " + seventhPlace + " to never be seen again. The end!</h2>");
document.write(story);