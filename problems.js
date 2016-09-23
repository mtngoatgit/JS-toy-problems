
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






