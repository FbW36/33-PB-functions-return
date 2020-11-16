// # 33-PB-functions-return

// **1. Add Up.**
// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function sumIntFrom1ToN(n) {
    let sum = 0;
    for (i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(`1. Add Up ==> ${sumIntFrom1ToN(600)}`); // 180300


// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.
function sumOfCubes(a, b, c) {
    let sum = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    for (let i = 0; i <= sumOfCubes.length; i++) {
        sum = Math.pow(a, 3);
        sum2 = Math.pow(b, 3);
        sum3 = Math.pow(c, 3);
        sum4 = sum + sum2 + sum3;
    }
    return sum4;
}
console.log(`2. Cubed ==> ${sumOfCubes(1, 5, 9)}`); // 855
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855


// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
function isStrInWord(a, b) {
    if (a[0] === b[0]) return true;
    else return false;
    }
console.log(`3. String Check ==> ${isStrInWord("u", "button")}`) // false


// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function isLEQZero(number) {
    if (number <= 0) return true;
    else return false;
}
console.log(`4. Less Than or Equal to Zero? ==> ${isLEQZero(-100)}`); //true


// **5. Count Occurrences.**
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
function countOccurrences(string, letter) {
    let sum = 0;
    for (i = 0; i <= string.length; i++) {
        if (string[i] === letter) {
            sum++;
        }
    }
    return sum;
}
console.log(`5. Count Occurrences ==> ${countOccurrences("this is a string", "i")}`); // 3


// **6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.
function calcBaseToExponent(base, exponent) {
    return (base ** exponent)
}
console.log(`6. X To The Power of X ==> ${calcBaseToExponent(5, 5)}`) // 3125


// **7. Dog Years.**
// Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
function dogAge(number) {
    return number * 7
}
console.log(`7. Your doggo is ${dogAge(4)} years old in human years!`) // Your doggo is 28 years old in human years!


// **8. A Lifetime Supply...**
// Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. **Bonus** Accept floating point values for amount per day and round the result.
let snack = "apples";
let deathLine = 80;
function calcLifetimeSupply(age, amount) {
    return Math.round(((deathLine - age) * 365) * amount)
}
console.log(`8. You will need ${calcLifetimeSupply(25, 2.3)} ${snack} to last you till the age of ${deathLine}`); // You will need 46173 apples to last you till the age of 80


// **9. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.
function isWaldoHere(string) {
    return string.toLowerCase().includes("waldo") ? true : false
}
console.log(`9. ${isWaldoHere("I found you Waldo")}`); // true


// **10. Pie.**
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
function isEqualSlices(slices, people, amount) {
    // if ((people * amount) <= slices) return true
    // else return false;
    return slices >= (people * amount)
}
console.log(`10. ${isEqualSlices(8, 3, 2)}`); // true


// **11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
function isEqualNumXandO(string) {
    numOfX = 0;
    numOfO = 0;
    string = string.toLowerCase();
    for (i = 0; i < string.length; i++) {
        if (string[i] === "x") {
            numOfX++
        } if (string[i] === "o") {
            numOfO++;
        }
    }
    return numOfX === numOfO ? true : false;
}
console.log(`11. XO ==> ${isEqualNumXandO("ooxx")}`); // true
console.log(`11. XO ==> ${isEqualNumXandO("xooxx")}`); // false
console.log(`11. XO ==> ${isEqualNumXandO("ozpzpzppoxXm")}`); // true
console.log(`11. XO ==> ${isEqualNumXandO("zzoo")}`); // false


// **12. isPrime?**
// Create a function that returns true if a number is prime and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}
console.log(`12. isPrime? ==> ${isPrime(7)}`);
console.log(`12. isPrime? ==> ${isPrime(9)}`);
console.log(`12. isPrime? ==> ${isPrime(10)}`);

// function isPrime(num) {
// 	trial division — check up to square root of the number: https://en.wikipedia.org/wiki/Prime_number#Computational_methods
// 	for (let i = 2; i <= Math.sqrt(num); i++) {
// 		if (num % i === 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }


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

function emailValidator(string) {
    if (
        !string.includes("@") ||
        !string.includes(".") ||
        string.includes(".@") ||
        string.includes("@.") ||
        string.includes("..") ||
        string[string.length - 1] === "." ||
        string[0] === "@" ||
        !string.includes(".", string.indexOf("@"))
    ) return `is invalid`
    else return `is valid`
}
console.log(`13. Your email ${emailValidator("j@example.com")}`); // valid
console.log(`13. Your email ${emailValidator("@example.com")}`); // invalid

console.log(`13. Your email ${emailValidator("john.smith@com")}`);
console.log(`13. Your email ${emailValidator("john.smith@email.com")}`); // valid

console.log(`13. Your email ${emailValidator("john..smith@email.com")}`); // invalid
console.log(`13. Your email ${emailValidator("john.@email.com")}`); // invalid
console.log(`13. Your email ${emailValidator("john@.email.com")}`); // invalid

// * e.g. "j@example.com" is valid while "@example.com" is invalid.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.
// * e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid.