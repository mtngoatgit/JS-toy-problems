
***************SUM OF TWO LOWEST POSITIVE INTEGERS*******************

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

// For example, when an array is passed like [19,5,42,2,77], the output should be 7.

// [10,343445353,3453445,3453545353453] should return 3453455.

// Create a function that calculates the sum of the two lowest numbers given an array of positive integers.

function sumTwoSmallestNumbers(numbers) {  
  var sorted = numbers.sort((a, b) => a-b)
  return sorted[0] + sorted[1];
};

sumTwoSmallestNumbers([5, 8, 12, 19, 22])

****************UNLUCKY DAYS***********************
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year as an integer.

// Output: Number of Black Fridays in the year as an integer.

// Precondition: 1000 < |year| < 3000

function unluckyDays(year){
  var unlucky = 0;
    for (var i = 0; i < 12; i++) {
      if(new Date(year, i, 13).getDay() === 5) {
        unlucky ++
      }
    }
   return unlucky
}

unluckyDays(1850)

****************************ABBREVIATE A TWO WORD NAME***************************

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name){  
name = name.split(" ");
firstName = name.shift().split("").shift()
lastName = name.shift().split("").shift()
  return firstName + '.' + lastName
}

***********************I love you, a little , a lot, passionately ... not at all**************************

// Who remembers the time where in the schoolyard, girls take flower petals. Tears saying:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal torn comes to the word 'madness', these are cries of excitement, dreams and emotions surging in thoughts.

// Your goal in this kata is to define the result of such a game given nb_petals > 0, the number of petals torn.
  
const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]
// it operates differently in repl.it. There you have to do n%6 -1
// howMuchILoveYou is the name of the function
// n is the argument/parameter
// then you have an anonymous array, from which you return n%6
// n%6 takes the argument, does modulus and returns the remainder, which is the proper index of the array


************************Consecutive Strings********************************
// Description:

// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:

// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
  
function longestConsec(strarr, k){
  var n = strarr.length;
  if (n === 0 || k > n || k <= 0) return "";
  var finalStr = "";
  for (var i = 0; i < strarr.length; i++) {
    var longStr = strarr.slice(i, i + k).join("");
    if (longStr.length > finalStr.length) {
      finalStr = longStr;
    }
  }
  return finalStr;
}

****************************Pillow on the Fridge*************************
// Apparently "Put A Pillow On Your Fridge Day is celebrated on the 29th of May each year, in Europe and the U.S. The day is all about prosperity, good fortune, and having bit of fun along the way."

// All seems very weird to me.

// Nevertheless, you will be given an array of two strings (s). First find out if the first string contains a fridge... (i've deemed this as being 'n', as it looks like it could hold something).

// Then check that the second string has a pillow - deemed 'B' (struggled to get the obvious pillow-esque character).

// If the pillow is on top of the fridge - it must be May 29th! Or a weird house... Return true; For clarity, on top means right on top, ie in the same index position.

// If the pillow is anywhere else in the 'house', return false;

// There may be multiple fridges, and multiple pillows. But you need at least 1 pillow ON TOP of a fridge to return true. Multiple pillows on fridges should return true also.

// 100 random tests
  
function pillow(s){
  var fridge = s[0];
  var pillow = s[1];
  for(var i = 0; i < fridge.length; i++){
    if(fridge[i] === 'n' && pillow[i] === 'B'){
    return true
    }
  }
  return false
}

***************************Sorting the Odd Way******************************
// Given an array of numbers, sort them in such a manner that all the odd numbers 
// in the array are sorted in ascending order and the even numbers are sorted 
// in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] 
// produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. 
// The output must have the original numbers!

function sortItOut(array){
  var odds = [];
  var evens = [];
  var final = [];
  for(var i = 0; i < array.length; i++){
    if(Math.floor(array[i]) % 2 === 0){
      evens.push(array[i])
    }
    else {
      odds.push(array[i])
    }
  }
  final.push(odds.sort((a,b) => a - b))
  final.push(evens.sort((a,b) => b - a))
  return final.reduce((a,b) => a.concat(b))
}

*********************Training JS 6: Basic data types--Boolean and conditional statements if..else**************************

// Coding in function trueOrFalse, function accept 1 parameters:val, 
// try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), 
// should return a string "false", if not, return a string "true".

function trueOrFalse(val){
  if (val === 0 || val === -0 || val === "" || val === null || val === undefined || 
    val === NaN) return 'false';
  return (val === false) ? 'false' : 'true';
}

**************************Reversing Words in a String**********************************
// You need to write a function that reverses the words in a given string. A word can also fit an empty string.
  
function reverse(string){
  return string.split(' ').reverse().join(' ')
}

************************Basic Mathmatical Operations**********************************
// The function should take three arguments - operation(string/char), value1(number), value2(number). 
// The function should return result of numbers after applying the chosen operation.
  
function basicOp(operation, value1, value2) {
  console.log(operation, value1, value2);
  if (operation == '+') return value1 + value2;
  if (operation == '*') return value1 * value2;
  if (operation == '/') return value1 / value2;
  if (operation == '-') return value1 - value2;
}

***********************Fake Binary**********************************
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
// Return the resulting string.
  
function fakeBin(x){
  var arr = x.split('');
  var final = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 5) final.push(0);
    else final.push(1);
  }
  return final.join('');
}

//ES6 solution:
fakeBin = x = x.split('').map(n => n < 5 ? 0 : 1).join('');

*******************************Convert a string to an array****************************
// Write a function to split a string and convert it into an array of words.
  
stringToArray = x => x.split(' ');

***************************Convert boolean values to strings "Yes" or "No"***********************
// Complete the bool_to_word (Javascript: boolToWord ) method.
// Given: a boolean value
// Return: a 'Yes' string for true and a 'No' string for false
  
boolToWord = x => x == true ? "Yes" : "No";

************************Calculate Average****************************
// Write function avg which calaculates average of numbers in given list.

find_average = x => x.reduce((a, b) => a + b)/x.length

