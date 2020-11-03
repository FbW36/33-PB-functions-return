/**1. Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples:
-sumIntFrom1ToN(4) ➞ 10
-sumIntFrom1ToN(13) ➞ 91
-sumIntFrom1ToN(600) ➞ 180300 */

let sum = 0;

function addUp(integer) {
  for (i = 0; i <= integer; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUp(13));

/* 2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.

Examples:

sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes(2) ➞ 8
sumOfCubes() ➞ 0*/

//let exponent = 3;

function getCubes(num1, num2, num3, exponent) {
  let sumCubes =
    Math.pow(num1, exponent) +
    Math.pow(num2, exponent) +
    Math.pow(num3, exponent);
  return sumCubes;
}

console.log(getCubes(1, 5, 9, 3));

/* 3. String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

Examples:

isStrInWord("bu", "button") ➞ true
isStrInWord("tri", "triplet") ➞ true
isStrInWord("beau", "pastry") ➞ false*/

function stringCheck(string, word) {
  //let string = "";

  for (i = 0; i < 3; i++) {
    if (string[i] == word[i]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log("StringCheck", stringCheck("pa", "button"));

/* 4. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
Examples:
-isLEQZero(3) ➞ false
-isLEQZero(0) ➞ true
-isLEQZero(-4) ➞ true
-isLEQZero(10) ➞ false */

function LessOrEqualZero(number2) {
  let result = number2 <= 0 ? true : false;
  return result;
}
console.log("LessOrEqualZero", LessOrEqualZero(-2));

/* 5. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
i.e. countOccurrences("this is a string", "i") ➞ 3*/

function getOccurrences(string2, letter) {
  let count = 0;
  for (i = 0; i < string2.length; i++) {
    if (string2[i] === letter) {
      count++;
    }
  }
  return count;
}
console.log("getOccurrences", getOccurrences("leaves are green", "q"));

/*6. X To The Power of X. Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.

Examples:
-calcBaseToExponent(5, 5) ➞ 3125
-calcBaseToExponent(10, 10) ➞ 10000000000
-calcBaseToExponent(3, 3) ➞ 27
 */

function powerOfX(base, exponentNum) {
  let calculation = Math.pow(base, exponentNum);
  return calculation;
}

console.log("powerOfX", powerOfX(5, 5));

/*7. Dog Years.Create a function which calculates how old a dog is in dog years.The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

    i.e.dogAge(4) ➞ "Your doggo is 28 years old in human years!"*/

const dogYears = (age) => {
  let dogYears = age * 7;
  return `your doggy is ${dogYears} years old in human years`;
};

console.log(dogYears(5));

/* 8. A Lifetime Supply... Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for amount per day and round the result.

i.e.
- calcLifetimeSupply(25, 2) ➞ "You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80."
- calcLifetimeSupply(40, 3) ➞ "You will need 43,800 packets of crisps (3 a day) to last you till the age of 80."*/

function supply(age2, amount) {
  let maxAge = 80;
  let supply = (maxAge - age2) * 365 * amount;
  return `You will need ${Math.round(supply)} of it.`;
}

console.log("supply:", supply(20, 0.4));

/*9. Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.
Examples:
isWaldoHere("is there wal here ?") ➞ false
isWaldoHere("I found you Waldo!") ➞ true
isWaldoHere("is wally here?") ➞ false
isWaldoHere("waldo is here") ➞ true*/

function findWaldo(string3) {
  if (string3.includes("?")) {
    return false;
  } else {
    return true;
  }
}
console.log("waldo", findWaldo("waldo is here"));

/* 10. Pie. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

Total number of slices.
Number of recipients.
How many slices each person gets.
Examples:

isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
isEqualSlices(8, 3, 2) ➞ true
isEqualSlices(8, 3, 3) ➞ false
isEqualSlices(24, 12, 2) ➞ true*/

function equalSlices(slices, people, slicesPPl) {
  if (slicesPPl * people <= slices) {
    return true;
  } else {
    return false;
  }
}
console.log("slices:", equalSlices(8, 3, 2));

/* 11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

Notes:
Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.

Examples:
isEqualNumXandO("ooxx") ➞ true
isEqualNumXandO("xooxx") ➞ false
isEqualNumXandO("ooxXm") ➞ true (case insensitive)
isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
isEqualNumXandO("zzoo") ➞ false*/

function xO(string4) {
  let x = 0;
  let o = 0;
  for (let i = 0; i < string4.length; i++) {
    if (string4[i] === "x") {
      x++;
    } else if (string4[i] === "o") {
      o++;
    } else {
      return "none of these";
    }
  }
  let equal = x === o ? true : false;
  return equal;
}

console.log("XO:", xO("xooxoxoxxox"));

/* 12. isPrime? Create a function that returns true if a number is prime and false if it's not. NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

Examples:
isPrime(7) ➞ true
isPrime(9) ➞ false
isPrime(10) ➞ false*/

function findFactors(number4) {
  res = [];
  for (i = 1; i <= number4; i++) {
    if (number4 % i === 0) {
      res[res.length] = i;
    }
  }
  return res;
}

function isPrime(number4) {
  let factors = findFactors(number4);
  if (factors.length === 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(21));

/* 13. Validate Email. Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

The string must contain exactly one "@" character.
The string must contain at least one "." character.
The "." and the "@" must be in the appropriate places.
e.g. "." cannot be the last character.
e.g. "." cannot be directly before or after "@"
e.g. there cannot be consecutive "." characters
e.g. "@" must have at least one character in front of it.
e.g. "j@example.com" is valid while "@example.com" is invalid.
e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.
e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid.*/

function isValidEmail(email) {
  if (
    email.includes(".@") ||
    email.includes("@.") ||
    email.includes("..") ||
    email.endsWith("@") ||
    email.endsWith(".") ||
    email.startsWith("@")
  ) {
    return false;
  } else if (email.includes("@") && email.includes(".")) {
    return true;
  } else {
    return false;
  }
}
console.log("valid mail", isValidEmail("@mail@gnk.com"));
