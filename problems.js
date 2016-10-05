
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





