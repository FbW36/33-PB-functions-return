// Print your answers to the console.

// 1. Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
let num1 = 600;
function sumIntFrom1ToN(num){
    result = (num * (num + 1) / 2);
    return result;
}
console.log(sumIntFrom1ToN(num1));
// Examples:

// sumIntFrom1ToN(4) ➞ 10
// sumIntFrom1ToN(13) ➞ 91
// sumIntFrom1ToN(600) ➞ 180300
// 2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.
let num2 = 1;
let num3 = 5;
let num4 = 9;
function sumOfCubes(n1, n2, n3){
    let result2 = (Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3));
    return result2;
}
console.log(sumOfCubes(num2, num3, num4));
// Examples:

// sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes(2) ➞ 8
// sumOfCubes() ➞ 0
// 3. String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
let str1 = "bread";
let word1 = "breadcrumps";
function isStrInWord(str, word){
   if ((word1.split(str1) == word1) == true){
       return `False`;
   } else {
       return `True`; 
   }
}
console.log(isStrInWord(str1, word1));
//console.log(word1.split(str1) == word1);

// Examples:

// isStrInWord("bu", "button") ➞ true
// isStrInWord("tri", "triplet") ➞ true
// isStrInWord("beau", "pastry") ➞ false
// 4. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function isLEQZero(num) {
    if (num >= 0) {
        return `true`;
    } else {
        return `false`;
    }
}
console.log(isLEQZero(0));
// Examples:

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false
// 5. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// i.e. countOccurrences("this is a string", "i") ➞ 3

// 6. X To The Power of X. Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.

function calcBaseToExponent(num, num1){
    let result = (num ** num);
    if (result < 0) {
        return Math.sign(result);
    } else {
        return result;
    }
}
console.log(calcBaseToExponent(5, -5));
// Examples:

// calcBaseToExponent(5, 5) ➞ 3125
// calcBaseToExponent(10, 10) ➞ 10000000000
// calcBaseToExponent(3, 3) ➞ 27
// 7. Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
function dogAge(num){
    resultDog = num * 7;
    return resultDog;
}
console.log(dogAge(5));

// i.e. dogAge(4) ➞ "Your doggo is 28 years old in human years!"

// 8. A Lifetime Supply... Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for amount per day and round the result.
function calcLifetimeSupply(age, num) {
    let resultSupply = (90 - age) * 365.25 * num;
    return `You will need ${resultSupply} beer if you are ${age} old and need ${num} beers per day`;
}
console.log(calcLifetimeSupply(31, 1));
// i.e.

// calcLifetimeSupply(25, 2) ➞ "You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80."

// calcLifetimeSupply(40, 3) ➞ "You will need 43,800 packets of crisps (3 a day) to last you till the age of 80."

// 9. Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.
function isWaldoThere(str){
    const waldo = "Waldo";
    if ((str.split(waldo)) == true){
        return `false (Waldo is not here)`;
    } else {
        return `true (you found Waldo)`;
    }
}

console.log(isWaldoThere("can you find Waldo?"));
// Examples:

// isWaldoHere("is there wal here ?") ➞ false
// isWaldoHere("I found you Waldo!") ➞ true
// isWaldoHere("is wally here?") ➞ false
// isWaldoHere("waldo is here") ➞ true
// 10. Pie. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// Examples:
function isEqualSlices(num, num1, num2){
    if (num / num1 < num2){
        return `false (not enought slices)`
    } else {
        return `true (there are enough slices)`
    }
}
console.log(isEqualSlices(6 , 3, 3));

// isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices

// isEqualSlices(8, 3, 2) ➞ true

// isEqualSlices(8, 3, 3) ➞ false

// isEqualSlices(24, 12, 2) ➞ true

// 11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

function isEqualNumXandO(str) {
    let countX = 0;
    let countO = 0;
    let isItEqual;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "o") {
            countO++;
        } else if (str[i] == "x") {
            countX++;
        }
    }
    isItEqual = (countO == countX);
    return isItEqual;
}
console.log(isEqualNumXandO("xena the warrior princess"));
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
// 12. isPrime? Create a function that returns true if a number is prime and false if it's not. NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
function isPrime(num) {
    let counterOfDividers = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            counterOfDividers++;
        } 
    }
    console.log("fdafa", counterOfDividers);
    result = (counterOfDividers < 2);
    return result;
}
console.log(isPrime(8));
// Examples:

// isPrime(7) ➞ true
// isPrime(9) ➞ false
// isPrime(10) ➞ false
// 13. Validate Email. Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

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

function validateEmail(str){
    let splitStr = str.split("@");
    let splitStr2 = str.split(".");
    
    if ((splitStr2 == str) || (splitStr == str) || (str.charAt(str.length - 1) == ("@" || ".")) || (splitStr.length < 3) || (splitStr[0].length < splitStr2[0].length) || (str != str.split(".@")) || (str != str.split("@."))) {
        return `invalid`;
    }


}
console.log(validateEmail("eniko@gmail.com"));


// || (splitStr[splitStr.length - 1].length != splitStr2[splitStr2.length - 1].length)
// let email = "eniko@gmail.com";
// const splitEmail = email.split("@");
// const splitEmail2 = email.split(".");
//  console.log(splitEmail[splitEmail.length - 1].length);
// console.log(splitEmail2[splitEmail2.length - 1].length);
// console.log(splitEmail[splitEmail.length - 1].length > splitEmail2[splitEmail2.length - 1].length)

//  