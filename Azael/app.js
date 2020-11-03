// **1. Add Up.**
// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:
// * sumIntFrom1ToN(4) ➞ 10
// * sumIntFrom1ToN(13) ➞ 91
// * sumIntFrom1ToN(600) ➞ 180300

let counter = 0;
function sumIntFrom1ToN(num) {
  for (let i = 1; i <= num; i++) {
    counter = counter + i;
  }

  return counter;
}

console.log("sumIntFrom1ToN(600) :>> ", sumIntFrom1ToN(600));
// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.

// Examples:
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes(2) ➞ 8
// * sumOfCubes() ➞ 0
let counter2 = 0;
function sumOfCubes(num1, num2, num3) {
  if ((counter2 = num1 ** 3 + num2 ** 3 + num3 ** 3)) {
    console.log("counter2 :>> ", counter2);
  } else if ((counter2 = num1 ** 3)) {
    console.log("counter2 :>> ", counter2);
  } else {
    console.log("counter2 :>> ", 0);
  }
  return counter2;
}

sumOfCubes(1, 5, 9);
sumOfCubes(3);
sumOfCubes();

// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// Examples:
// * isStrInWord("bu", "button") ➞ true
// * isStrInWord("tri", "triplet") ➞ true
// * isStrInWord("beau", "pastry") ➞ false

function isStrInWord(word, string) {
  if (string.includes(word)) {
    return "true";
  } else {
    return "false";
  }
}

console.log(isStrInWord("tri", "triplet"));
console.log(isStrInWord("beau", "pastry"));

// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:
// * isLEQZero(3) ➞ false
// * isLEQZero(0) ➞ true
// * isLEQZero(-4) ➞ true
// * isLEQZero(10) ➞ false
function isLEQZero(number) {
  if (typeof number == "number" && number > 0) {
    return "false";
  } else {
    return "true";
  }
}
console.log("isLEQZero(3) :>> ", isLEQZero(3));
console.log("isLEQZero(0) :>> ", isLEQZero(0));
console.log("isLEQZero(-4) :>> ", isLEQZero(-4));
// **5. Count Occurrences.**

// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// i.e.
// countOccurrences("this is a string", "i") ➞ 3

function countOccurrences(string, letter) {
  const box = [];
  const occurrences = string.split("");
  for (let i = 0; i <= string.length; i++) {
    if (letter == occurrences[i]) {
      box.push(occurrences[i]);
    }
  }
  return box.length;
}
console.log("countOccurrences :>> ", countOccurrences("this is a string", "s"));

// **6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.

// Examples:
// * calcBaseToExponent(5, 5) ➞ 3125
// * calcBaseToExponent(10, 10) ➞ 10000000000
// * calcBaseToExponent(3, 3) ➞ 27

function calcBaseToExponent(base, exponent) {
  if (typeof base !== "number" && typeof exponent !== "number") {
    return "I only can play with numbers";
  } else {
    return Math.pow(base, exponent);
  }
}
console.log("calcBaseToExponent(5,5) :>> ", calcBaseToExponent(5, 5));
// **7. Dog Years.**
// Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// i.e.
//  dogAge(4) ➞ "Your doggo is 28 years old in human years!"

function dogAge(number) {
  return `Your dog is ${number * 7} years old`;
}

console.log("dogAge(6) :>> ", dogAge(6));

// **8. A Lifetime Supply...**
// Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. **Bonus** Accept floating point values for amount per day and round the result.

// i.e.

// calcLifetimeSupply(25, 2) ➞ "You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80."

// calcLifetimeSupply(40, 3) ➞ "You will need 43,800 packets of crisps  (3 a day) to last you till the age of 80."

function calcLifetimeSupply(actualAge, snack) {
  let deadlyAge = 80;
  let days = (deadlyAge - actualAge) * 365;
  let total = days * snack;

  return `You will need ${total} uds. of your favourite snack (${snack} a day) to last you till the age of ${deadlyAge}`;
}
console.log("calcLifetimeSupply(34,3) :>> ", calcLifetimeSupply(34, 3));
// **9. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// Examples:
// * isWaldoHere("is there wal here ?") ➞ false
// * isWaldoHere("I found you Waldo!") ➞ true
// * isWaldoHere("is wally here?") ➞ false
// * isWaldoHere("waldo is here") ➞ true

function isWaldoHere(string) {
  if (string.includes("Waldo" || "waldo")) {
    return "true";
  } else {
    return "false";
  }
}

isWaldoHere("is there wal here ?");

console.log("isWaldoHere :>> ", isWaldoHere("is there wal here ?")); //false
console.log("isWaldoHere :>> ", isWaldoHere("I found you Waldo!")); //true

// **10. Pie.**
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// * Total number of slices.
// * Number of recipients.
// * How many slices each person gets.

// Examples:
// * isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices

// * isEqualSlices(8, 3, 2) ➞ true
// * isEqualSlices(8, 3, 3) ➞ false
// * isEqualSlices(24, 12, 2) ➞ true

function isEqualSlices(total, recipients, slices) {
  if (total >= recipients * slices) {
    return "true";
  } else {
    return "false";
  }
}
isEqualSlices();
console.log("isEqualSlices(8, 3, 2) :>> ", isEqualSlices(8, 3, 2));
console.log("isEqualSlices(8, 3, 3) :>> ", isEqualSlices(8, 3, 3));

// **11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:

// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.

// Examples:
// * isEqualNumXandO("ooxx") ➞ true
// * isEqualNumXandO("xooxx") ➞ false
// * isEqualNumXandO("ooxXm") ➞ true (case insensitive)
// * isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
// * isEqualNumXandO("zzoo") ➞ false

function isEqualNumXandO(string) {
  let boxX = [];
  let boxO = [];
  let splittedString = string.split("");
  for (let i = 0; i < splittedString.length; i++) {
    const element = splittedString[i].toLowerCase();
    if (element == "x") {
      boxX.push(splittedString[i]);
    } else if (splittedString[i] == "o") {
      boxO.push(splittedString[i]);
    }
  }
  return boxO.length == boxX.length;
}
isEqualNumXandO("ooxXm");
console.log('isEqualNumXandO("ooxx") :>> ', isEqualNumXandO("ooxXm"));
isEqualNumXandO("zzoo");
console.log('isEqualNumXandO("zzoo") :>> ', isEqualNumXandO("zzoo"));

// **12. isPrime?**
// Create a function that returns true if a number is prime and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:
// * isPrime(7) ➞ true
// * isPrime(9) ➞ false
// * isPrime(10) ➞ false
function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}
console.log(isPrime(121));

// **13. Validate Email.**
// Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

// * The string must contain exactly one "@" character.
// * The string must contain at least one "." character.
// * The "." and the "@" must be in the appropriate places.
// * e.g. "." cannot be the last character.
// * e.g. "." cannot be directly before or after "@"
// * e.g. there cannot be consecutive "." characters
// * e.g. "@" must have at least one character in front of it.
// * e.g. "j@example.com" is valid while "@example.com" is invalid.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.
// * e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid.

// too complex for me I would love to do in groups
