// 1. Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// sumIntFrom1ToN(4) ➞ 10
// sumIntFrom1ToN(13) ➞ 91
// sumIntFrom1ToN(600) ➞ 180300
function sumIntFrom1To(num) {
  let num1 = 0;
  for (let i = 1; i <= num; i++) {
    num1 += i;
  }
  return num1;
}
console.log("1. Add Up. ==>", sumIntFrom1To(4));
console.log("1. Add Up. ==>", sumIntFrom1To(13));
console.log("1. Add Up. ==>", sumIntFrom1To(600));

// 2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.
// sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
function sumOfCubes(num1, num2, num3) {
  let total = (num1 ** 3 || 0) + (num2 ** 3 || 0) + (num3 ** 3 || 0);
  return total;
}
console.log("2. Cubed.==>", sumOfCubes(1, 5, 9));
console.log("2. Cubed.==>", sumOfCubes(2));
console.log("2. Cubed.==>", sumOfCubes());

function sumOfCubes(a, b, c) {
  let arrayOfnumbers = Array.from(arguments);
  let sumOfCubes = 0;
  for (let i = 0; i < arrayOfnumbers.length; i++) {
    sumOfCubes += arrayOfnumbers[i] ** 3;
  }
  return sumOfCubes;
}
console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2));
console.log(sumOfCubes());

// 3. String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// isStrInWord("bu", "button") ➞ true
// isStrInWord("tri", "triplet") ➞ true
// isStrInWord("beau", "pastry") ➞ false
function isStrInWord(string, word) {
  let sameString = word.slice(0, string.length);
  if (string === sameString) {
    return true;
  } else {
    return false;
  }
}
console.log("3. String Check. ==>", isStrInWord("bu", "button"));
console.log("3. String Check. ==>", isStrInWord("tri", "triplet"));
console.log("3. String Check. ==>", isStrInWord("beau", "pastry"));

// 4. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false
function isLEQZero(number) {
  if (number <= 0) {
    return true;
  } else {
    return false;
  }
}
console.log("4. Less Than or Equal to Zero? ==>", isLEQZero(3));
console.log("4. Less Than or Equal to Zero? ==>", isLEQZero(0));
console.log("4. Less Than or Equal to Zero? ==>", isLEQZero(-4));
console.log("4. Less Than or Equal to Zero? ==>", isLEQZero(10));

// 5. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
// i.e. countOccurrences("this is a string", "i") ➞ 3
function countOccurrences(str, letter) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      num += 1;
    }
  }
  return num;
}
console.log(
  "5. Count Occurrences. ==>",
  countOccurrences("this is a string", "i")
);

// 6. X To The Power of X. Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.
// calcBaseToExponent(5, 5) ➞ 3125
// calcBaseToExponent(10, 10) ➞ 10000000000
// calcBaseToExponent(3, 3) ➞ 27
function calcBaseToExponent(x, y) {
  return x ** y;
}
console.log("6. X To The Power of X. ==>", calcBaseToExponent(5, 5));
console.log("6. X To The Power of X. ==>", calcBaseToExponent(10, 10));
console.log("6. X To The Power of X. ==>", calcBaseToExponent(3, 3));

// 7. Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
// i.e. dogAge(4) ➞ "Your doggo is 28 years old in human years!"
function dogAge(z) {
  return z * 7;
}
console.log(`7. Your doggo is ${dogAge(4)} years old in human years!`);

// 8. A Lifetime Supply... Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for amount per day and round the result.
let longLife = 80;
function calcLifetimeSupply(age, amount) {
  let totalSupply = (longLife - age) * 365 * amount;
  return totalSupply;
}
console.log(
  `8. You will need ${calcLifetimeSupply(
    25,
    2
  )} bars of chocolate (2 a day) to last you till the age of ${longLife}.`
);
console.log(
  `8. You will need ${calcLifetimeSupply(
    40,
    3
  )} packets of crisps  (3 a day) to last you till the age of ${longLife}.`
);

// 9. Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.
// isWaldoHere("is there wal here ?") ➞ false
// isWaldoHere("I found you Waldo!") ➞ true
// isWaldoHere("is wally here?") ➞ false
// isWaldoHere("waldo is here") ➞ true
function isWaldoHere(waldo) {
  if (waldo.toLowerCase().includes("waldo")) {
    return true;
  } else {
    return false;
  }
}
console.log("9. Where's Waldo? ==>", isWaldoHere("is there wal here ?"));
console.log("9. Where's Waldo? ==>", isWaldoHere("I found you Waldo!"));
console.log("9. Where's Waldo? ==>", isWaldoHere("is wally here?"));
console.log("9. Where's Waldo? ==>", isWaldoHere("waldo is here"));

// 10. Pie. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.
function isEqualSlices(total, people, slice) {
  let totalSlices = people * slice;
  if (totalSlices > total) {
    return false;
  } else {
    return true;
  }
}
console.log("10. Pie to split ==>", isEqualSlices(11, 5, 3));
console.log("10. Pie to split ==>", isEqualSlices(8, 3, 2));
console.log("10. Pie to split ==>", isEqualSlices(8, 3, 3));
console.log("10. Pie to split ==>", isEqualSlices(24, 12, 2));

// 11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
function isEqualNumXandO(string) {
  let num1 = 0;
  let num2 = 0;
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "x") {
      num1++;
    }
    if (string[i] === "o") {
      num2++;
    }
  }
  return num1 === num2 ? true : false;
}

console.log(
  "11.If it has the same number of 'x's and 'o's ==>",
  isEqualNumXandO("ooxx")
);
console.log(
  "11.If it has the same number of 'x's and 'o's ==>",
  isEqualNumXandO("xooxx")
);
console.log(
  "11.If it has the same number of 'x's and 'o's ==>",
  isEqualNumXandO("ooxXm")
);
console.log(
  "11.If it has the same number of 'x's and 'o's ==>",
  isEqualNumXandO("zpzpzpp")
);
console.log(
  "11.If it has the same number of 'x's and 'o's ==>",
  isEqualNumXandO("zzoo")
);

// isEqualNumXandO("ooxx") ➞ true
// isEqualNumXandO("xooxx") ➞ false
// isEqualNumXandO("ooxXm") ➞ true (case insensitive)
// isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
// isEqualNumXandO("zzoo") ➞ false

// 12. isPrime? Create a function that returns true if a number is prime and false if it's not. NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
function isPrime(numPrime) {
  for (let i = 2; i <= Math.sqrt(numPrime); i++) {
    if (numPrime % i == 0) {
      return false;
    }
  }
  return true;
}
console.log("12. isPrime?", isPrime(7));
console.log("12. isPrime?", isPrime(9));
console.log("12. isPrime?", isPrime(10));

// isPrime(7) ➞ true
// isPrime(9) ➞ false
// isPrime(10) ➞ false

// 13. Validate Email. Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.
function checkEmail(email) {
  if (
    !email.includes("@") ||
    !email.includes(".") ||
    email[email.length - 1] === "." ||
    email.includes(".@") ||
    email.includes("@.") ||
    email.includes("..") ||
    email[0] === "@" ||
    !email.includes(".", email.indexOf("@"))
  ) {
    return false;
  } else {
    return true;
  }
}
console.log("13. Validate Email. ==>", checkEmail("j@example.com"));
console.log("13. Validate Email. ==>", checkEmail("john.smith@com"));
console.log("13. Validate Email. ==>", checkEmail("john@.email.com"));

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

// The string must contain exactly one "@" character.
// The string must contain at least one "." character.
// The "." and the "@" must be in the appropriate places.
// e.g. "." cannot be the last character.
// e.g. "." cannot be directly before or after "@"
// e.g. there cannot be consecutive "." characters
// e.g. "@" must have at least one character in front of it.
// e.g. "j@example.com" is valid while "@example.com" is invalid.
// e.g.  "john.smith@com"is invalid while "john.smith@email.com" is valid.
// e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid.
