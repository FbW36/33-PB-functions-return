//33-PB-functions-return
//Functions Exercises

//Print your answers to the console.
//1. Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10
//Examples:
    //sumIntFrom1ToN(4) ➞ 10
    //sumIntFrom1ToN(13) ➞ 91
    //sumIntFrom1ToN(600) ➞ 180300
    function sumIntFrom1ToN(n){
        let sum = 0;
          for(i = 0; i <= n; i++){
            sum += i; 
             }
             //return (`Sum of all numbers included here => ${sum}`)
            console.log(`Sum of all numbers included here => ${sum}`)
             }
             (sumIntFrom1ToN(600));
/************************************************************************** */

//2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.

//Examples:
//sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
//sumOfCubes(2) ➞ 8
//sumOfCubes() ➞ 0
function sum_Of_Cubes(a,b,c) {
  let sumn1 = 0;
  let sumn2 = 0
  let sumn3 = 0
  let sumn4 = 0
  for (let i = 1; i <= sum_Of_Cubes.length; i++) {
    sumn1 = Math.pow(a, 3);
    sumn2 = Math.pow(b,3)
    sumn3 = Math.pow(c,3)
    sumn4 = sumn1 + sumn2 + sumn3
  }
  return sumn4;
}
console.log(sum_Of_Cubes(1,5,9));


/*********************************************************************+ */

//3. String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// Examples:
//     isStrInWord("bu", "button") ➞ true
//     isStrInWord("tri", "triplet") ➞ true
//     isStrInWord("beau", "pastry") ➞ false
function isStrInWord(word, str) {
  return str.lastIndexOf(word, 0) === 0;
}
console.log("checking if starts with => ", isStrInWord("beau", "pastry"))

//4. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
// Examples:
// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false
function isLEQZero(number) {
  return number <= 0 ? true : false;
}
console.log("Is my number less than/equal 0? => ", isLEQZero(10))

//5. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
//i.e. countOccurrences("this is a string", "i") ➞ 3
function countOccurrences(str, letter) {
  return str.split(letter).length - 1
  }

console.log("Count occurrences of => ", countOccurrences("this is a string", "s"))

//6. X To The Power of X. Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.
// Examples:
// calcBaseToExponent(5, 5) ➞ 3125
// calcBaseToExponent(10, 10) ➞ 10000000000
// calcBaseToExponent(3, 3) ➞ 27
function calcBaseToExponent(a,b) {
  XtoThePowerOfX = Math.pow(a, b);
  return XtoThePowerOfX;
}
console.log(calcBaseToExponent(3,3));

//7. Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
//i.e. dogAge(4) ➞ "Your doggo is 28 years old in human years!"
function dogAge(a) {
  howOldisYourDoggo = (a *7);
  return howOldisYourDoggo;
}
console.log("how old is your doggo => ",dogAge(4) + " human years old");

//8. A Lifetime Supply... Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for amount per day and round the result.
// i.e.
// calcLifetimeSupply(25, 2) ➞ "You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80."
// calcLifetimeSupply(40, 3) ➞ "You will need 43,800 packets of crisps (3 a day) to last you till the age of 80."

function calcLifetimeSupply(age,amount) {
  let missingYearsAlive = 80 - age
  let dailyQuantity = amount * 365
  howMuchYouneed = (missingYearsAlive * dailyQuantity);
  return howMuchYouneed;
}
console.log("You will need => ",calcLifetimeSupply(40,3) + " of your favorite snack till the age of 80" );

//9. Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.
// Examples:
// isWaldoHere("is there wal here ?") ➞ false
// isWaldoHere("I found you Waldo!") ➞ true
// isWaldoHere("is wally here?") ➞ false
// isWaldoHere("waldo is here") ➞ true
function isWaldoHere(str) {
  waldoPosition = str.indexOf("Waldo");
  
  return waldoPosition >= 0 ? "true" : "false"
  
}
console.log("checking if starts with => ", isWaldoHere("is there wal here ?"))

//10. Pie. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// Examples:
// isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// isEqualSlices(8, 3, 2) ➞ true
// isEqualSlices(8, 3, 3) ➞ false
// isEqualSlices(24, 12, 2) ➞ true
function isEqualSlices(slices, person, perPerson) {
	return slices >= person * perPerson;
}
console.log(isEqualSlices(24, 12, 2))

//11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// isEqualNumXandO("ooxx") ➞ true
// isEqualNumXandO("xooxx") ➞ false
// isEqualNumXandO("ooxXm") ➞ true (case insensitive)
// isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
// isEqualNumXandO("zzoo") ➞ false
function isEqualNumXandO(str) {
  str = str.toLowerCase();
  let arrayOfCharacters = str.split("");
  let countX = arrayOfCharacters.reduce( function( n, val ) {
      return n + (val === 'x');
    }, 0);
  let countO = arrayOfCharacters.reduce( function( n, val ) {
      return n + (val === 'o');
    }, 0);
  if ( countX == countO ) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqualNumXandO("ooxx"))
console.log(isEqualNumXandO("xooxx"))
console.log(isEqualNumXandO("ooxXm"))

//12. isPrime? Create a function that returns true if a number is prime and false if it's not. NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
// Examples:
// isPrime(7) ➞ true
// isPrime(9) ➞ false
// isPrime(10) ➞ false
function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
console.log("isPrime? => ", isPrime(10))

//13. Validate Email. Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

// The string must contain exactly one "@" character.
// The string must contain at least one "." character.
// The "." and the "@" must be in the appropriate places.
// e.g. "." cannot be the last character.
// e.g. "." cannot be directly before or after "@"
// e.g. there cannot be consecutive "." characters
// e.g. "@" must have at least one character in front of it.
// e.g. "j@example.com" is valid while "@example.com" is invalid.
// e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.
// e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid.
function validateEmail(email) {
	let emailLength = email.length;
	
	let numberOfAts = 0;
	let numberOfDots = 0;
	
	// "@" or "." cannot be either the first or the last character:
	if (email[0] === "@" || email[0] === "." || email[emailLength - 1] === "@" || email[emailLength - 1] === ".") {
		return false;
	}

	for (let i = 0; i < email.length; i++) {

		if (email[i] === "@" ) {
			
			// "@" and "." do not immadiately follow themselves or one another
			if (email[i - 1] === "." || email[i - 1] === "@" || email[i + 1] === "." || email[i + 1] === "@") {
				return false;
			}
			
			// "com" cannot follow "@":
			let comAfterAt = 0;
			for (let c = 0; c < "com".length; c++) {
				if (email[i + 1 + c] === "com"[c]) {
					comAfterAt += 1;
				}
			}
			if (comAfterAt === 3) {
				return false;
			}

			numberOfAts++;
		}

		if (email[i] === ".") {
			if (email[i - 1] === "." || email[i + 1] === ".") {
				return false;
			}
			numberOfDots++;
		}
	}
	// exactly one "@" and at least one "."
	if (numberOfAts !== 1 || numberOfDots < 1) {
		return false;
	}
	
	return true;
}
//I couldn't do it by myself :/ 