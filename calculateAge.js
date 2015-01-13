//Write a function called calculateAge that:
//Takes 2 arguments: birth year, current year
//Calculates the 2 possible ages based on those years
//Outputs the result to the screen like so: "You are either NN or NN"
//Call the function three times with different sets of values.
//Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthyear, currentyear) {
  var firstresult = currentyear - birthyear;
  var secondresult = firstresult - 1 ;
  console.log("You are either " + firstresult + " or " + secondresult);
}

calculateAge(1915, 2015)
