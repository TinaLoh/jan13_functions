//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.



function isVowel(x) {

  var result;

  result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
  return result;
}

isVowel("B")
isVowel("O")
