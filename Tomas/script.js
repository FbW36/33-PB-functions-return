let log = console.log;

// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function

function addUp(x) {
  const numArr = [];
  let sum = 0;
  for (i = 1; i <= x; i++) {
    numArr.push(i);
  }
  for (j = 0; j < numArr.length; j++) {
    sum = sum + numArr[j];
  }
  log("result -->", sum);
}
addUp(30);

// Create a function that takes in three numbers and returns the sum of its cubes
function sumCubed(x, y, z) {
  const numArr = [Math.pow(x, 3), Math.pow(y, 3), Math.pow(z, 3)];
  let sum = 0;
  for (i = 0; i < numArr.length; i++) {
    sum = sum + numArr[i];
  }
  log(`${x}^3 + ${y}^3 + ${z}^3 = ${sum}`);
}
sumCubed(5, 6, 11);

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string

function checkFirstSyllable(str, word) {
  log(`${word} starts with ${str}:`, str === word.slice(0, str.length));
}
checkFirstSyllable("Ex", "Exterminator");

//  Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false
function isLEQZero(x) {
  x <= 0 ? log("isLEQZero result:", true) : log("isLEQZero result:", false);
}
isLEQZero(7);

// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string
function countOccurences(str, letter) {
  const letters = [];
  const arrToCheck = str.toLowerCase().split("");
  for (i = 0; i < arrToCheck.length; i++) {
    if (letter === arrToCheck[i]) {
      letters.push(arrToCheck[i]);
    }
  }
  log(`number of occurrences of "${letter}":`, letters.length);
}
countOccurences("Your machinery is too much for me", "o");

// Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers
function powerOfSelf(x) {
  log(`${x} to the power of ${x}:`, Math.pow(x, x));
}
powerOfSelf(-2);

// Create a function which calculates how old a dog is in dog years
function convertToDoggy(humanAge) {
  log("dog age -->", humanAge * 7);
}
convertToDoggy(7);

// Create a function to calculate how much you'll actually be getting for a lifetime supply of your favorite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for amount per day and round the result
function giveBeerForLife(age, x) {
  let amountOfBeer = Math.round((80 - age) * 365 * x);
  log(`Still got ${amountOfBeer} beers to go.`);
}
giveBeerForLife(35, 1.5);

// Create a function that takes a string and returns true if Waldo is found, and false if he's not
function findWaldo(str) {
  str.includes("Waldo")
    ? log("Waldo, you here?", true)
    : log("Waldo, you here?", false);
}
findWaldo(
  "Missing dog goes under fake moniker 'Waldislav Waldymovitch Waldovsky'."
);

// Create a function that determines whether or not it's possible to split a pie fairly
function distribSlices(x, y, z) {
  y * z <= x ? log('everyone eats equally?', true) : log('everyone eats equally?', false);
}
distribSlices(12, 4, 4);

// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false
function compareXandOs(str) {
  const strToArr = str.toLowerCase().split("");
  const xes = [];
  const ohs = [];
  for (i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === "x") {
      xes.push(strToArr[i]);
    }
  }
  for (j = 0; j < strToArr.length; j++) {
    if (strToArr[j] === "o") {
      ohs.push(strToArr[j]);
    }
  }
  xes.length === ohs.length ? log("x's = o's:", true) : ("x's = o's:", false);
}
compareXandOs("Xorox");

// Create a function that returns true if a number is prime and false if it's not. NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29
function isPrime(x) {
  if (
    (x > 2 && x % 2 === 0) ||
    (x > 3 && x % 3 === 0) ||
    (x > 5 && x % 5 === 0) ||
    (x > 7 && x % 7 === 0)
  ) {
    log(`is ${x} a prime number?`, false);
  } else {
    log(`is ${x} a prime number?`, true);
  }
}
isPrime(47);

// Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly
function checkEmailAddress(str) {
  if(str.includes('@') && str.includes('.') && str.lastIndexOf('@') !== str.length - 1 && str.lastIndexOf('.') !== str.length - 1 && str.indexOf('.', str.indexOf('@')) !== str.indexOf('@') + 1 && str.lastIndexOf('.', str.indexOf('@')) !== str.indexOf('@') - 1 && str.includes('..') === false && str.indexOf('@') !== 0 && str.lastIndexOf('.') > str.indexOf('@')){
    log('valid email?', true)
  }
  else {
    log('valid email?', false)
  }

}
checkEmailAddress('john.smith@email.com')